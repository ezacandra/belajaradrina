import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "soal");
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>{const p=path.join(d,e.name);return e.isDirectory()?walk(p):e.name.endsWith(".js")?[p]:[];});}
let n=0;
for(const f of walk(base)){
  const ctx={window:{}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(f,"utf8"),ctx);
  for(const k of ctx.window.KUIS)for(const v of k.versi)for(const [i,s] of v.soal.entries()){
    if((s.tipe||"")!=="bs") continue;
    const e=s.e.toLowerCase().replace(/tidak benar/g,"salah"), ans=s.p[s.j];
    const mBenar=/\bbenar\b/.test(e), mSalah=/\bsalah\b/.test(e);
    if(ans==="Benar" && mSalah && !mBenar || ans==="Salah" && mBenar && !mSalah){
      n++;console.log(`${path.basename(f)} ${v.kode}${i+1} j=${ans} e=${s.e}`);
    }
  }
}
console.log("inkonsistensi bs:",n);
