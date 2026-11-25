import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "soal/sd/kelas-1");
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>{const p=path.join(d,e.name);return e.isDirectory()?walk(p):e.name.endsWith("-final.js")?[p]:[];});}
const files = walk(dir);
if(files.length!==10){console.error("GAGAL: paket final",files.length);process.exit(1);}
let errs = 0;
for (const f of files) {
  const raw = fs.readFileSync(f, "utf8");
  if (raw.includes("\uFFFD")) { console.log("❌",f,"Ada character encoding rusak"); errs++; }
  const ctx={window:{}}; vm.createContext(ctx); vm.runInContext(raw,ctx);
  for (const k of ctx.window.KUIS) {
    const must={id:1,judul:1,kategori:1,mapel:1,kelas:1,tingkat:1,jadwal:1,bab:1,ikon:1,deskripsi:1,versi:1};
    for (const key of Object.keys(must)) if(!k[key]) {console.log("❌",k.id,"field kosong:",key);errs++;}
    if(k.kategori!=="Sumatif Final"){console.log("❌",k.id,"kategori");errs++;}
    if(k.kelas!=="Kelas 1 SD"||k.tingkat!=="sd"){console.log("❌",k.id,"kelas/tingkat");errs++;}
    const ko=k.versi.map(v=>v.kode).join("");
    if(ko!=="ABCDEFGH"){console.log("❌",k.id,"kode versi",ko);errs++;}
    // typo heuristics on all string fields
    const scan=(s,where)=>{
      if(typeof s!=="string") return;
      if(/\s{2,}/.test(s)) {console.log("⚠️",k.id,where,"spasi ganda:",JSON.stringify(s));errs++;}
      if(s!==s.trim()){console.log("⚠️",k.id,where,"spasi tepi:",JSON.stringify(s));errs++;}
      if(/[a-z][A-Z]/.test(s) && !/^[A-Za-z0-9 .,'"()!?:\-]+$/.test(s)) {}
    };
    scan(k.judul,"judul");scan(k.bab,"bab");scan(k.deskripsi,"deskripsi");scan(k.jadwal,"jadwal");
    const allText=[];
    for(const v of k.versi){
      scan(v.nama,v.kode+".nama");
      for(const [i,s] of v.soal.entries()){
        const at=`${k.id} ${v.kode}#${i+1}`;
        scan(s.t,at+".t");scan(s.e,at+".e");
        const isEsai = ["essay_pendek","essay_kalimat","essay_daftar","essay_cerita"].includes(s.tipe);
        if(isEsai){
          if(!s.e || !s.e.trim()){console.log("❌",at,"jawaban contoh essay kosong");errs++;}
        } else {
          if(s.e.length<12){console.log("❌",at,"pembahasan terlalu pendek");errs++;}
          if((s.p||[]).some(x=>typeof x!=="string"||!x.trim())){console.log("❌",at,"opsi kosong");errs++;}
          if(s.tipe!=="cocok" && typeof s.j!=="number"){console.log("❌",at,"j bukan angka");errs++;}
        }
        if(s.tipe==="cocok"){
          (s.pasangan||[]).forEach((p,pi)=>p.forEach((x,xi)=>scan(x,at+`.pasangan[${pi}][${xi}]`)));
          (s.urutKanan||[]).forEach((x,xi)=>scan(x,at+`.urutKanan[${xi}]`));
        }
        allText.push(s.t);
      }
    }
    // duplikat lintas versi dalam satu paket
    const seen=new Map();
    allText.forEach((t,i)=>{const v=Math.floor(i/15),n=i%15+1;seen.set(t,[...(seen.get(t)||[]),`${"ABCD"[v]}#${n}`]);});
    for(const [t,at] of seen) if(at.length>1) console.log("ℹ️",k.id,"teks sama lintas versi:",at.join(","),"→",t);
  }
}
console.log(errs? `SELESAI: ${errs} temuan`:"SELESAI: tidak ada temuan struktural/typo mekanis");
