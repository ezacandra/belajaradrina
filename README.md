# 📚 Belajar Adrina

**Bank soal & latihan online untuk siswa SD** — kategori → mata pelajaran → kelas, penilaian otomatis 0–100, kunci jawaban + pembahasan per soal, siap cetak/PDF.

🌐 **Live:** https://ezacandra.github.io/belajaradrina/

---

## ✨ Fitur

### Untuk Siswa
- **Navigasi hierarki**: Kategori (Sumatif 2) → Mata Pelajaran → Kelas, dengan filter & chips.
- **4 tipe soal** — semuanya tinggal pilih (tanpa mengetik):
  | Tipe | Label | Bentuk |
  |---|---|---|
  | `pg` | Pilihan Ganda | pertanyaan + 3–4 opsi |
  | `bs` | Benar / Salah | 2 opsi |
  | `isian` | Isian Singkat | pilih angka/kata yang tepat dari 3 opsi |
  | `cocok` | Pasangkan | 3 pasang kiri–kanan (urutan jawaban diacak) |
- **15 soal per versi**, tombol **📤 Kirim Jawaban hanya muncul di soal terakhir (15)** — jawaban tersimpan sambil jalan (navigasi maju/mundur).
- **Nilai 0–100 + predikat**: 🌟🌟🌟 A (≥90) · 🌟🌟 B (≥75) · 🌟 C (≥60) · ✨ D (<60, belum tuntas).
- **Kunci Jawaban & Pembahasan** terbuka setelah mengirim — tiap soal ada penjelasan ramah anak berbahasa Indonesia.
- **📤 Bagikan Hasil** (teks siap salin) dan **🖨 Cetak / PDF** untuk lembar hasil.
- Soal bergambar/emoji dirender **besar** dan mudah dibaca anak kelas 1.

### untuk Guru
- **🔑 Kunci Jawaban (Guru)** — modal kunci semua soal tanpa mengerjakan kuis.
- Tiap paket punya **4 versi A–D** (soal berbeda, tingkat kesamaan seimbang) → anti saling contekan.
- Cetak langsung dari browser (Ctrl+P → Save as PDF).

---

## 📦 Daftar Paket Soal (Sumatif 2 — Kelas 1 SD)

**10 mata pelajaran × 4 versi × 15 soal = 600 soal.**

| # | Mata Pelajaran | Judul | Jadwal | Ikon | File sumber |
|---|---|---|---|---|---|
| 1 | English | Unit 2 — Family Time | 30 Sep 2026 | 🔤 | `english-unit2-family-time-sd.js` |
| 2 | Seni Rupa | Garis, Bentuk dan Warna | 1 Okt 2026 | 🎨 | `seni-rupa-garis-bentuk-warna-sd.js` |
| 3 | Pendidikan Pancasila | Aku dan Temanku | 2 Okt 2026 | 🤝 | `pancasila-aku-dan-temanku-sd.js` |
| 4 | Aqidah-Ibadah | Syahadat dan Sholat | 5 Okt 2026 | 🤲 | `aqidah-ibadah-syahadat-sholat-sd.js` |
| 5 | Al-Qur'an | Surat Al Fatihah dan An Naas | 6 Okt 2026 | 📕 | `quran-surat-al-fatihah-an-naas-sd.js` |
| 6 | Bahasa Indonesia | Bermain dan Tanda Baca | 7 Okt 2026 | ✍️ | `bahasa-indonesia-bermain-tanda-baca-sd.js` |
| 7 | Science | Sound | 8 Okt 2026 | 🔊 | `science-unit2-sound-sd.js` |
| 8 | Mathematics | Geometry & Fractions | 9 Okt 2026 | 📐 | `matematika-geometri-pecahan-sd.js` |
| 9 | B Jawa | Kasenenganku | 28 Sep 2026 | 💬 | `basa-jawa-kasenenganku-sd.js` |
| 10 | PJOK | Gerak Dasar & Kesehatan | 29 Sep 2026 | 🏃 | `pjok-gerak-dasar-keselamatan-sd.js` |

> English/Science/Math dicampur bahasa (istilah & soal Inggris, instruksi + pembahasan Indonesia). B Jawa pakai basa Jawa sederhana, penjelasan bahasa Indonesia.

---

## 🗂 Struktur Repository

```
belajaradrina/
├── index.html          # Hub: filter kategori/kelas/mapel, kartu paket
├── kuis.html           # Mesin kuis: pengerjaan, nilai, kunci, cetak
├── data.js             # ⚠️ HASIL BUILD (jangan diedit manual!)
├── soal/
│   └── sd/
│       └── kelas-1/    # 1 file per paket (edit di sini)
│           ├── english-unit2-family-time-sd.js
│           ├── seni-rupa-garis-bentuk-warna-sd.js
│           ├── pancasila-aku-dan-temanku-sd.js
│           ├── aqidah-ibadah-syahadat-sholat-sd.js
│           ├── quran-surat-al-fatihah-an-naas-sd.js
│           ├── bahasa-indonesia-bermain-tanda-baca-sd.js
│           ├── science-unit2-sound-sd.js
│           ├── matematika-geometri-pecahan-sd.js
│           ├── basa-jawa-kasenenganku-sd.js
│           └── pjok-gerak-dasar-keselamatan-sd.js
└── README.md

../tools/
├── build-belajaradrina.mjs   # Build + validasi data.js
└── serve.mjs                 # Server lokal untuk tes

../materi-sumatif-2/          # ⚠️ Materi sekolah (DI LUAR repo, tidak ikut git)
```

---

## 🧩 Skema Data Paket

Satu file = satu paket (push ke `window.KUIS`):

```js
window.KUIS = window.KUIS || [];
window.KUIS.push({
  id: "quran-surat-al-fatihah-an-naas-sd",  // unik, dipakai di URL
  urut: 5,                                   // urutan tampil di hub
  judul: "Surat Al Fatihah dan An Naas",
  kategori: "Sumatif 2",
  mapel: "Al-Qur'an",
  kelas: "Kelas 1 SD",
  tingkat: "sd",
  jadwal: "6 Oktober 2026",
  bab: "Surat Al Fatihah, Ummul Kitab, dan Surat An Naas",
  ikon: "📕",
  deskripsi: "…",
  versi: [
    { kode: "A", nama: "Variasi A", soal: [ /* 15 soal */ ] },
    { kode: "B", nama: "Variasi B", soal: [ … ] },
    { kode: "C", nama: "Variasi C", soal: [ … ] },
    { kode: "D", nama: "Variasi D", soal: [ … ] },
  ]
});
```

### Format tiap tipe soal

```jsonc
// Pilihan Ganda — j = index jawaban benar (0-based)
{ "tipe": "pg", "t": "Surat yang pertama … adalah ....",
  "p": ["Al Ikhlas", "An Naas", "Al Fatihah"],
  "j": 2,
  "e": "Pembahasan untuk siswa." }

// Benar / Salah — p WAJIB ["Benar","Salah"], j = 0 (Benar) atau 1 (Salah)
{ "tipe": "bs", "t": "Dalam Al Qur'an terdapat 114 surat.",
  "p": ["Benar", "Salah"], "j": 0, "e": "…" }

// Isian Singkat — p = 3 pilihan angka/kata, j = index jawaban
{ "tipe": "isian", "t": "Surat Al Fatihah terdiri dari .... ayat",
  "p": ["6", "5", "7"], "j": 2, "e": "…" }

// Cocokkan — 3 pasang; urutKanan = urutan opsi kanan yang ditampilkan (diacak)
{ "tipe": "cocok", "t": "Pasangkan istilah dengan artinya!",
  "pasangan": [["An Naas", "manusia"], ["Ummul Kitab", "induk"], ["Makkiyah", "dari Makkah"]],
  "urutKanan": ["induk", "dari Makkah", "manusia"],
  "e": "…" }
```

### Aturan wajib (dicegah validator build)

- **POLA 15 soal tetap**: `pg, bs, pg, isian, cocok, pg, bs, isian, pg, cocok, bs, pg, isian, bs, cocok`
- Tiap soal punya **label tipe** di UI.
- `pg`/`isian`: minimal 3 opsi; `bs`: tepat `["Benar","Salah"]`.
- `cocok`: 3 pasang, jawaban kanan unik; `urutKanan` = permutasi dari kanan `pasangan` dan **tidak sama** dengan urutan baris.
- Semua `e` (pembahasan) wajib terisi; kunci `j` disebar merata antar indeks.
- Tidak ada teks soal kembar dalam satu versi.

---

## 🔧 Alur Kerja: Edit / Tambah Soal

```powershell
# 1. Edit SATU file paket saja (soal/sd/kelas-1/<paket>.js)
# 2. Build + validasi (jangan edit data.js langsung!)
node tools/build-belajaradrina.mjs

# 3. Tes lokal (opsional)
node tools/serve.mjs belajaradrina 8787
#   → http://localhost:8787/

# 4. Commit & push DARI folder belajaradrina/
git -C belajaradrina add soal data.js
git -C belajaradrina commit -m "pesan"
git -C belajaradrina push origin master

# 5. Tunggu ±80 detik, cek build GitHub Pages
gh api repos/ezacandra/belajaradrina/pages/builds/latest --jq "{status: .status, commit: .commit[0:7]}"

# 6. Verifikasi live (data.js bisa stale ±10 menit → pakai cache-buster)
#    https://ezacandra.github.io/belajaradrina/data.js?cb=<timestamp>
```

Validator build memastikan: jumlah versi & soal, POLA tipe, sebaran kunci, keunikan soal, dan aturan `cocok` — build gagal kalau ada yang melanggar.

---

## 🖥 Cara Pakai

| Akses | URL |
|---|---|
| Hub (pilih paket) | `index.html` — bisa difilter: `?kelas=Kelas 1 SD&mapel=English&kat=Sumatif 2` |
| Kerjakan kuis | `kuis.html?id=<id-paket>` — lalu pilih versi A/B/C/D |

**Alur siswa:** pilih paket → pilih versi → jawab 15 soal (navigasi bebas) → **Kirim di soal 15** → lihat nilai, predikat, pembahasan → Bagikan / Cetak.

---

## 📊 Statistik

- **10 paket** · **40 versi** · **600 soal**
- **4 tipe soal** tercampur di tiap versi
- Bundle: `data.js` ±190 KB (1 request, tanpa server/API)
- Stack: HTML + CSS + JS murni → di-serve gratis oleh **GitHub Pages**

---

## 📅 Jadwal Sumatif 2 Kelas 1 (2026)

```
28 Sep  B Jawa          2 Okt   Pancasila
29 Sep  PJOK            5 Okt   Aqidah-Ibadah
30 Sep  English         6 Okt   Al-Qur'an
 1 Okt  Seni Rupa       7 Okt   Bahasa Indonesia
                          8 Okt   Science
                          9 Okt   Mathematics
```

---

## 📝 Catatan

- **Materi sekolah** (`materi-sumatif-2/`) disimpan **di luar repo** — tidak ikut ter-commit (privasi data sekolah).
- **`data.js` adalah file hasil build** — edit file di `soal/` lalu jalankan build.
- Bahasa soal ramah anak kelas 1: kalimat pendek, emoji sebagai penanda, tanpa jebakan teknis.
- Nama mata pelajaran ditampilkan sebagai teks polos; logo/ikon hanya sebagai tile dekoratif kartu.
