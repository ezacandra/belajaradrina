import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
const file = process.argv[2];
if (!file) { console.error("pakai: node check-one.mjs <nama-file.js>"); process.exit(2); }
const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "soal/sd/kelas-1/sumatif-final");
const ctx = { window: {} }; vm.createContext(ctx); vm.runInContext(fs.readFileSync(path.join(dir,file),"utf8"),ctx);
const k = ctx.window.KUIS[0];
const pola = ["pg","bs","pg","isian","cocok","pg","bs","isian","pg","cocok","bs","pg","isian","bs","cocok"];
const polaEsai = [...Array(4).fill("essay_pendek"),...Array(4).fill("essay_kalimat"),...Array(4).fill("essay_daftar"),...Array(3).fill("essay_cerita")];
const stop = new Set("yang adalah di ke dari dan dengan ini itu pada untuk sebuah serta juga kita dia ia nya ada akan agar bisa".split(" "));
const norm = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim();
const toks = s => new Set(norm(s).split(" ").filter(w=>w.length>2 && !stop.has(w)));
const jac=(a,b)=>{const u=new Set([...a,...b]);return u.size?[...a].filter(x=>b.has(x)).length/u.size:0};
const esai = new Set(["essay_pendek","essay_kalimat","essay_daftar","essay_cerita"]);
const kode = k.versi.map(v=>v.kode).join("");
let err=0;
if(kode!=="ABCDEFGH"){console.log(`❌ kode versi ${kode}`);err++;}
for(const v of k.versi){
  const isEsaiVersi = ["E","F","G","H"].includes(v.kode);
  const pat = isEsaiVersi ? polaEsai : pola;
  if(v.soal.length!==15){console.log(`❌ ${v.kode}: jumlah ${v.soal.length}`);err++;}
  const actual=v.soal.map(s=>s.tipe).join(",");
  if(actual!==pat.join(",")){console.log(`❌ ${v.kode}: pola ${actual}`);err++;}
  if(!isEsaiVersi){
    const js=v.soal.filter(s=>s.tipe==="pg"||s.tipe==="isian").map(s=>s.j);
    const hist=[0,1,2].map(n=>js.filter(x=>x===n).length);
    if(Math.min(...hist)===0){console.log(`❌ ${v.kode}: sebaran kunci ${hist}`);err++;}
  }
  v.soal.forEach((s,i)=>{
    if(!s.e){console.log(`❌ ${v.kode}${i+1}: e kosong`);err++;}
    if(esai.has(s.tipe)){
      if(!s.t){console.log(`❌ ${v.kode}${i+1}: teks essay kosong`);err++;}
      return;
    }
    if(s.tipe==="pg"||s.tipe==="isian"){
      if(!s.p||!s.p[s.j])console.log(`❌ ${v.kode}${i+1}: j di luar opsi`),err++;
      else if(!norm(s.e).includes(norm(s.p[s.j])))console.log(`⚠️ ${v.kode}${i+1}: kunci "${s.p[s.j]}" tidak di e`),err++;
    }
    if(s.tipe==="cocok"){
      const right=s.pasangan.map(x=>x[1]);
      if(new Set(right).size!==3||s.urutKanan.length!==3||s.urutKanan.join("|")===right.join("|"))console.log(`❌ ${v.kode}${i+1}: aturan cocok`),err++;
    }
  });
}
const items=k.versi.flatMap(v=>v.soal.map((s,i)=>({id:`${v.kode}${i+1}`,s})));
for(let a=0;a<items.length;a++)for(let b=a+1;b<items.length;b++){
  const A=items[a],B=items[b],why=[];
  if(norm(A.s.t)===norm(B.s.t))why.push("teks sama");
  if(norm(A.s.e)===norm(B.s.e))why.push("e sama");
  const ta=A.s.tipe,tb=B.s.tipe;
  if(!esai.has(ta)&&!esai.has(tb)&&(ta==="pg"||ta==="isian")&&(tb==="pg"||tb==="isian")){
    const oa=A.s.p.map(norm).sort().join(";"),ob=B.s.p.map(norm).sort().join(";");
    if(oa===ob)why.push(A.s.j===B.s.j?"opsi+index sama":"opsi sama");
  }
  if(ta==="cocok"&&tb==="cocok"){
    if(A.s.pasangan.map(x=>norm(x.join("|"))).sort().join(";")===B.s.pasangan.map(x=>norm(x.join("|"))).sort().join(";"))why.push("pasangan sama");
    if(norm(A.s.t)===norm(B.s.t))why.push("instruksi sama");
  }
  const j=jac(toks(A.s.t),toks(B.s.t));
  if(j>=0.6)why.push(`mirip ${j.toFixed(2)}`);
  if(why.length){console.log(`❌ ${A.id} vs ${B.id} [${why.join(", ")}]`);err++;}
}
console.log(err?`${file}: GAGAL ${err}`:`${file}: LULUS, 120 soal unik (A-D pilihan, E-H essay)`);
process.exit(err?1:0);
