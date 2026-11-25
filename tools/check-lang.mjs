import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "soal/sd/kelas-1/sumatif-final");
const englishIds = new Set(["matematika-position-statistics-time-sd-final","science-materials-in-my-world-sd-final","english-unit4-clothes-colors-shapes-sd-final"]);
const indo = "yang adalah dari untuk dengan pada ini itu kita disebut berarti banyak sedikit sama benar salah pilih pilihan pasangkan cocokkan hubungkan tentukan jawaban pembahasan karena jika ketika setelah sebelum tidak bisa harus biasanya terbuat bersifat memiliki menggunakan digunakan merupakan berada terletak dibuat dikatakan dinamakan menghasilkan menyebut disebutkan artinya jumlah benda sifat bahan meja jendela pintu botol sendok penghapus cermin panci kawat pasir tanah getah domba manusia pohon rapuh lentur keras lunak halus kasar tahan menyerap tembus pandang panas listrik isolator konduktor dan atau ke di".split(" ");
const eng = "the and with from for this that is are which what how why true false you your we our they it its made use used can has have of in on at to be do does not but or if when after before there here these those their she he his her".split(" ");
const words = s => String(s).toLowerCase().replace(/[^a-z0-9']+/g," ").split(" ").filter(Boolean);
let err = 0;
for (const f of fs.readdirSync(dir).filter(f=>f.endsWith(".js")).sort()) {
  const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(dir,f),"utf8"),ctx);
  const k=ctx.window.KUIS[0], isEng=englishIds.has(k.id), ban=isEng?new Set(indo):new Set(eng);
  const bad=new Map();
  for(const v of k.versi)for(const [i,s] of v.soal.entries()){
    const parts=[s.t, ...(s.p||[]), ...(s.pasangan||[]).flat(), ...(s.pasangan||[]).map(p=>p[1]), s.e];
    for(const part of parts)for(const w of words(part))if(ban.has(w))bad.set(w,(bad.get(w)||0)+1);
    if(isEng && (s.tipe||"pg")==="bs" && (s.p[0]!=="True"||s.p[1]!=="False"))bad.set("opsi bs bukan True/False",(bad.get("opsi bs bukan True/False")||0)+1);
  }
  if(bad.size){err++;console.log(`${isEng?"ENG":"ID "} ${k.mapel}: ${[...bad].map(([w,n])=>w+"("+n+")").join(" ")}`);}
  else console.log(`${isEng?"ENG":"ID "} ${k.mapel}: bersih`);
}
console.log(err?`GAGAL ${err} paket`:"SEMUA BERSIH");
process.exit(err?1:0);
