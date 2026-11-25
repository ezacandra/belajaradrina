import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "soal");
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>{const p=path.join(d,e.name);return e.isDirectory()?walk(p):e.name.endsWith(".js")?[p]:[];});}
const norm=s=>String(s).toLowerCase().replace(/tidak benar/g,"salah").replace(/[^a-z0-9]+/g," ").replace(/\s+/g," ").trim();
let n=0;
for(const f of walk(base)){
  const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(f,"utf8"),ctx);
  for(const k of ctx.window.KUIS)for(const v of k.versi)for(const [i,s] of v.soal.entries()){
    const t=s.tipe||"pg", e=norm(s.e), out=[];
    if(t==="pg"||t==="isian"){
      const ans=s.p[s.j], lain=s.p.filter((_,x)=>x!==s.j).filter(o=>e.includes(norm(o)));
      if(!e.includes(norm(ans)) && lain.length){n++;console.log(`\n${path.basename(f)} ${v.kode}${i+1} [${t}]`);console.log(`  T: ${s.t}`);console.log(`  p: ${s.p.join(" | ")}  j=${s.j} => ${ans}`);console.log(`  lain di e: ${lain.join(" | ")}`);console.log(`  e: ${s.e}`);}
    }
    if(t==="bs"){
      const ans=s.p[s.j], awal=e.slice(0,20);
      if(ans==="Benar" && awal.includes("salah") || ans==="Salah" && awal.includes("benar")){n++;console.log(`\n${path.basename(f)} ${v.kode}${i+1} [bs]`);console.log(`  T: ${s.t}`);console.log(`  j=${s.j} => ${ans}`);console.log(`  e: ${s.e}`);}
    }
  }
}
console.log(`\nTOTAL mencurigakan: ${n}`);
