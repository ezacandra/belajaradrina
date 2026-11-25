import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "soal/sd/kelas-1/sumatif-final");
const stop = new Set("yang adalah di ke dari dan dengan ini itu pada untuk sebuah serta juga kita dia ia nya ada akan agar bisa the a an is are on in at my your she he it".split(" "));
const norm = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim();
const toks = s => new Set(norm(s).split(" ").filter(w=>w.length>2&&!stop.has(w)));
const jac=(a,b)=>{const u=new Set([...a,...b]);return u.size?[...a].filter(x=>b.has(x)).length/u.size:0};
const esai=new Set(["essay_pendek","essay_kalimat","essay_daftar","essay_cerita"]);
const items=[];
for(const f of fs.readdirSync(dir).filter(f=>f.endsWith(".js")).sort()){
  const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(dir,f),"utf8"),ctx);
  const k=ctx.window.KUIS[0];
  for(const v of k.versi)for(const [i,s] of v.soal.entries())items.push({file:f,id:`${k.mapel}/${v.kode}${i+1}`,s});
}
let err=0;
for(let a=0;a<items.length;a++)for(let b=a+1;b<items.length;b++){
  const A=items[a],B=items[b],why=[];
  if(norm(A.s.t)===norm(B.s.t))why.push("teks sama");
  if(norm(A.s.e)===norm(B.s.e))why.push("e sama");
  const ta=A.s.tipe||"pg",tb=B.s.tipe||"pg";
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
  if(why.length){err++;if(err<=40)console.log(`${A.id} vs ${B.id} [${why.join(", ")}] :: ${A.s.t} / ${B.s.t}`);}
}
console.log(`TOTAL soal: ${items.length}, pasangan ganda: ${err}`);
process.exit(err?1:0);
