import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
const dir=path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "soal/sd/kelas-1/sumatif-final");
const pola=["pg","bs","pg","isian","cocok","pg","bs","isian","pg","cocok","bs","pg","isian","bs","cocok"];
const esai=[...Array(4).fill("essay_pendek"),...Array(4).fill("essay_kalimat"),...Array(4).fill("essay_daftar"),...Array(3).fill("essay_cerita")];
const files=fs.readdirSync(dir).filter(f=>f.endsWith("-final.js"));
let err=0;
for(const f of files){
  const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(dir,f),"utf8"),ctx);
  for(const k of ctx.window.KUIS){
    const problems=[];
    if(k.kategori!=="Sumatif Final")problems.push("kategori salah");
    if(k.versi.length!==8||k.versi.map(v=>v.kode).join("")!=="ABCDEFGH")problems.push("versi bukan A-H");
    for(const v of k.versi){
      const isEsai=["E","F","G","H"].includes(v.kode);
      if(v.soal.length!==15)problems.push(`${v.kode}: jumlah ${v.soal.length}`);
      const pat=v.soal.map(s=>s.tipe).join(",");
      if(pat!==(isEsai?esai:pola).join(","))problems.push(`${v.kode}: pola ${pat}`);
      const teks=v.soal.map(s=>s.t);
      if(new Set(teks).size!==teks.length)problems.push(`${v.kode}: teks kembar`);
      for(const [i,s] of v.soal.entries()){
        if(!s.e)problems.push(`${v.kode}#${i+1}: e kosong`);
        if(s.tipe==="cocok"){
          const right=s.pasangan.map(p=>p[1]);
          if(new Set(right).size!==right.length)problems.push(`${v.kode}#${i+1}: kanan tidak unik`);
          if(s.urutKanan.length!==right.length||[...s.urutKanan].sort().join("|")!==[...right].sort().join("|"))problems.push(`${v.kode}#${i+1}: urutKanan bukan permutasi`);
          if(s.urutKanan.join("|")===right.join("|"))problems.push(`${v.kode}#${i+1}: urutKanan sama urutan baris`);
        }
      }
      if(!isEsai){
        const js=v.soal.filter(s=>s.tipe==="pg"||s.tipe==="isian").map(s=>s.j);
        const hist=[0,1,2].map(n=>js.filter(x=>x===n).length);
        if(Math.min(...hist)===0)problems.push(`${v.kode}: sebaran kunci timpang ${hist}`);
      }
    }
    if(problems.length){err++;console.log("❌",k.id,problems.join("; "));}
    else console.log("✅",k.id,"8x15, A-D pilihan + E-H essay OK");
  }
}
console.log(err?`GAGAL: ${err} paket`:"SEMUA OK");
