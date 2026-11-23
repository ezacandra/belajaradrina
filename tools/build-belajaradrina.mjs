/* Build data.js untuk situs belajaradrina.
   Sumber: soal/<tingkat>/<kelas>/<kategori>/*.js. Semua file .js discan otomatis,
   tidak ada entri hardcode. Paket baru tinggal tambah file, jalankan script ini. */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const out = path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".."); // folder repo
const root = out;
const soalDir = path.join(out, "soal");

/* --- kumpulkan semua file paket --- */
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : e.name.endsWith(".js") ? [p] : [];
  });
}
const files = walk(soalDir).sort();

const KUIS = [];
const masalah = [];

for (const file of files) {
  const rel = path.relative(root, file);
  const src = fs.readFileSync(file, "utf8");
  const ctx = { window: {} };
  try {
    vm.createContext(ctx);
    vm.runInContext(src, ctx, { filename: rel });
  } catch (err) {
    masalah.push(`${rel}: gagal dieksekusi — ${err.message}`);
    continue;
  }
  const packs = ctx.window.KUIS || [];
  if (!packs.length) { masalah.push(`${rel}: tidak memanggil window.KUIS.push`); continue; }
  for (const k of packs) KUIS.push({ file: rel, paket: k });
}

/* --- validasi --- */
const wajib = ["id", "judul", "kategori", "mapel", "kelas", "tingkat", "ikon", "deskripsi", "versi"];
const seen = new Map();
const validasi = KUIS.map(({ file, paket: k }) => {
  const label = k.id || file;
  wajib.forEach(f => { if (k[f] === undefined) masalah.push(`${label}: field "${f}" hilang`); });
  if (k.id) {
    if (seen.has(k.id)) masalah.push(`${label}: id duplikat (dipakai ${seen.get(k.id)})`);
    else seen.set(k.id, file);
  }
  let total = 0;
  const buruk = [];
  (k.versi || []).forEach(v => (v.soal || []).forEach((s, i) => {
    total++;
    const t = s.tipe || "pg";
    if (t === "cocok") {
      if (!Array.isArray(s.pasangan) || s.pasangan.length < 2) buruk.push(`${v.kode}#${i + 1}: pasangan cocok < 2`);
      else if (s.pasangan.some(p => !Array.isArray(p) || p.length !== 2 || !p[0] || !p[1]))
        buruk.push(`${v.kode}#${i + 1}: format pasangan salah (harus [kiri, kanan])`);
      if (!Array.isArray(s.urutKanan) || s.urutKanan.length !== (s.pasangan || []).length)
        buruk.push(`${v.kode}#${i + 1}: urutKanan tidak cocok dengan jumlah pasangan`);
    } else {
      const minOpsi = t === "bs" ? 2 : 3;
      if (!Array.isArray(s.p) || s.p.length < minOpsi) buruk.push(`${v.kode}#${i + 1}: pilihan kurang (min ${minOpsi})`);
      else if (typeof s.j !== "number" || s.j < 0 || s.j >= s.p.length) buruk.push(`${v.kode}#${i + 1}: index jawaban salah`);
    }
    if (!s.e) buruk.push(`${v.kode}#${i + 1}: pembahasan kosong`);
  }));
  if (!total) buruk.push("tidak ada soal");
  return { id: label, versi: (k.versi || []).length, total, buruk };
});

if (masalah.length) {
  console.log("=== MASALAH ===");
  masalah.forEach(m => console.log("❌", m));
  process.exit(1);
}

/* --- urutkan sesuai field "urut" (default: urutan file) --- */
KUIS.sort((a, b) => (a.paket.urut ?? 999) - (b.paket.urut ?? 999));
const bersih = KUIS.map(({ paket }) => paket);

const js =
  "/* Dibuat otomatis oleh tools/build-belajaradrina.mjs — jangan diedit manual */\n" +
  'window.SITE = { nama: "Belajar Adrina", tagline: "Latihan & bank soal sesuai kelas, kategori, dan mata pelajaran" };\n' +
  "window.KUIS = " + JSON.stringify(bersih, null, 1) + ";\n";

fs.writeFileSync(path.join(out, "data.js"), js, "utf8");

console.log("=== HASIL BUILD ===");
console.log("File paket:", files.length, "→", files.map(f => path.relative(soalDir, f)).join(", "));
validasi.forEach(v => console.log(`${v.id}: ${v.versi} versi, ${v.total} soal ${v.buruk.length ? "❌ " + v.buruk.join("; ") : "✅"}`));
console.log("Total soal:", validasi.reduce((a, b) => a + b.total, 0));
console.log("File:", path.join(out, "data.js"), fs.statSync(path.join(out, "data.js")).size, "bytes");
