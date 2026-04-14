/**
 * validate.js — TOEFL exam-data validator (v2)
 * Supports both schemas:
 *   • Legacy:  r1 / r2 / r3  (custom practice tests)
 *   • New:     m1 / m2        (ETS-style two-module tests)
 *
 * Usage: node validate.js <path-to-exam-data.js>
 */

const fs   = require('fs');
const path = require('path');

const filePath = process.argv[2];
if (!filePath) { console.error('Usage: node validate.js <path>'); process.exit(1); }

let D;
try {
  const code = fs.readFileSync(path.resolve(filePath), 'utf8');
  eval(code.replace('window.EXAM_DATA', 'global.__D__'));
  D = global.__D__;
  if (!D) throw new Error('EXAM_DATA not found');
} catch (e) { console.error('Could not load file:', e.message); process.exit(1); }

let passed = 0, failed = 0;
function ok(l)           { console.log(`  ✅  ${l}`); passed++; }
function fail(l, d)      { console.log(`  ❌  ${l}${d?' — '+d:''}`); failed++; }
function check(c,pl,fl,d){ c ? ok(pl) : fail(fl,d); }
function section(t)      { console.log(`\n── ${t} ${'─'.repeat(Math.max(0,50-t.length))}`); }

// ── R1 block ─────────────────────────────────────────────────────────────────
function validateR1(r1, label, ets) {
  section(label + ' — Complete the Words');
  const segs=r1?.segs??[], bl=r1?.blanks??[];
  check(segs.length===12,'segs: 12 elements','segs: wrong count',`got ${segs.length}`);
  check(bl.length===10,'blanks: 10 elements','blanks: wrong count',`got ${bl.length}`);
  bl.forEach((b,i)=>{
    const lbl=`blank[${i+1}] "${b.ans}"`;
    check(b.prefix+b.suffix===b.ans,`${lbl}: prefix+suffix=ans`,`${lbl}: mismatch`,`"${b.prefix}"+"${b.suffix}"="${b.prefix+b.suffix}"`);
    if(!ets) check(b.prefix?.length===b.suffix?.length,`${lbl}: equal halves`,`${lbl}: unequal halves`,`${b.prefix?.length}+${b.suffix?.length}`);
  });
  if(segs.length===12&&bl.length===10){
    let p=segs[0]; bl.forEach((b,i)=>{p+=b.ans+segs[i+1];}); p+=segs[11];
    const wc=p.trim().split(/\s+/).length;
    if(!ets) check(wc>=100&&wc<=120,`paragraph: ${wc} words (100-120)`,`paragraph: ${wc} words out of range`);
    else ok(`paragraph reconstructs OK (${wc} words)`);
  }
  if(!ets){
    const lens=bl.map(b=>b.ans?.length??0);
    check(new Set(lens).size>=2,`blank lengths varied: [${lens}]`,'blank lengths: no variety');
  }
}

// ── Reading block (ETS: 3 texts, 10 Qs) ──────────────────────────────────────
function validateReading(reading, label) {
  section(label + ' — Reading');
  const texts=reading?.texts??[], qs=reading?.qs??[];
  check(texts.length===3,'texts: 3 items','texts: wrong count',`got ${texts.length}`);
  check(qs.length===10,'qs: 10 items','qs: wrong count',`got ${qs.length}`);
  const allQi=[...texts.flatMap(t=>t.qi??[])].sort((a,b)=>a-b);
  check(JSON.stringify(allQi)===JSON.stringify([0,1,2,3,4,5,6,7,8,9]),'qi: 0-9 covered exactly once','qi: missing or duplicate',`got [${allQi}]`);
  const exp=[2,3,5];
  texts.forEach((t,i)=>{
    check(t.qi?.length===exp[i],`text[${i}] "${t.title}": qi has ${exp[i]} items`,`text[${i}]: qi wrong count`,`got ${t.qi?.length}`);
    check(typeof t.content==='string'&&t.content.length>10,`text[${i}]: content present`,`text[${i}]: content missing`);
  });
  qs.forEach((q,i)=>{
    check(q.opts?.length===4,`q[${i}]: 4 options`,`q[${i}]: wrong option count`,`got ${q.opts?.length}`);
    check(typeof q.ans==='number'&&q.ans>=0&&q.ans<=3,`q[${i}]: ans in range (${q.ans})`,`q[${i}]: ans out of range`,`got ${q.ans}`);
  });
}

// ── Legacy R2 (5 texts, 15 Qs) ───────────────────────────────────────────────
function validateR2(r2) {
  section('R2  Daily Reading');
  const texts=r2?.texts??[], qs=r2?.qs??[];
  check(texts.length===5,'texts: 5 items','texts: wrong count',`got ${texts.length}`);
  check(qs.length===15,'qs: 15 items','qs: wrong count',`got ${qs.length}`);
  const allQi=[...texts.flatMap(t=>t.qi??[])].sort((a,b)=>a-b);
  check(JSON.stringify(allQi)===JSON.stringify([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),'qi: 0-14 covered exactly once','qi: missing or duplicate',`got [${allQi}]`);
  texts.forEach((t,i)=>check(t.qi?.length===3,`text[${i}] qi=3`,`text[${i}]: qi wrong`,`got ${t.qi?.length}`));
  qs.forEach((q,i)=>{
    check(q.opts?.length===4,`q[${i}]: 4 options`,`q[${i}]: wrong count`,`got ${q.opts?.length}`);
    check(typeof q.ans==='number'&&q.ans>=0&&q.ans<=3,`q[${i}]: ans in range`,`q[${i}]: ans out of range`,`got ${q.ans}`);
  });
}

// ── Legacy R3 (3 passages, 15 Qs) ────────────────────────────────────────────
function validateR3(r3) {
  section('R3  Academic Reading');
  const passages=r3?.passages??[], qs=r3?.qs??[];
  check(passages.length===3,'passages: 3 items','passages: wrong count',`got ${passages.length}`);
  check(qs.length===15,'qs: 15 items','qs: wrong count',`got ${qs.length}`);
  const allQi=[...passages.flatMap(p=>p.qi??[])].sort((a,b)=>a-b);
  check(JSON.stringify(allQi)===JSON.stringify([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),'qi: 0-14 covered exactly once','qi: missing or duplicate',`got [${allQi}]`);
  passages.forEach((p,i)=>{
    check(p.qi?.length===5,`passage[${i}] qi=5`,`passage[${i}]: qi wrong`,`got ${p.qi?.length}`);
    check(typeof p.content==='string'&&p.content.length>100,`passage[${i}]: content present`,`passage[${i}]: too short`);
  });
  qs.forEach((q,i)=>{
    check(q.opts?.length===4,`q[${i}]: 4 options`,`q[${i}]: wrong count`,`got ${q.opts?.length}`);
    check(typeof q.ans==='number'&&q.ans>=0&&q.ans<=3,`q[${i}]: ans in range`,`q[${i}]: ans out of range`,`got ${q.ans}`);
  });
}

// ── W1 ───────────────────────────────────────────────────────────────────────
function validateW1(w1) {
  section('W1  Build a Sentence');
  check(w1?.length===10,'w1: 10 items','w1: wrong count',`got ${w1?.length}`);
  (w1??[]).forEach((item,i)=>{
    const lbl=`w1[${i+1}]`;
    // prefix/suffix must be strings if present
    if('prefix' in item) check(typeof item.prefix==='string',`${lbl}: prefix is string`,`${lbl}: prefix wrong type`);
    if('suffix' in item) check(typeof item.suffix==='string',`${lbl}: suffix is string`,`${lbl}: suffix wrong type`);
    // ans must not end with period
    check(!item.ans?.trim().endsWith('.'),`${lbl}: no trailing period`,`${lbl}: has period`,`"${item.ans}"`);
    // all ans words must be present in words (distractors allowed)
    if(item.words&&item.ans){
      const wLow=item.words.map(w=>w.toLowerCase());
      const aWords=item.ans.toLowerCase().trim().split(/\s+/);
      const wCnt={},aCnt={};
      wLow.forEach(w=>{wCnt[w]=(wCnt[w]||0)+1;});
      aWords.forEach(w=>{aCnt[w]=(aCnt[w]||0)+1;});
      const ok2=Object.keys(aCnt).every(w=>(wCnt[w]||0)>=aCnt[w]);
      check(ok2,`${lbl}: all ans words in words array`,`${lbl}: ans words missing`,`ans=[${aWords}]`);
    }
    // if prefix+suffix present, show full sentence reconstruction
    if(item.prefix!==undefined&&item.suffix!==undefined&&item.ans){
      const sep=(item.prefix&&item.ans)?' ':'';
      const full=(item.prefix+sep+item.ans+item.suffix).trim();
      ok(`${lbl}: full → "${full}"`);
    }
  });
}

// ── W2 ───────────────────────────────────────────────────────────────────────
function validateW2(w2) {
  section('W2  Email Writing');
  check(typeof w2?.situation==='string'&&w2.situation.length>20,'situation: present','situation: missing');
  check(Array.isArray(w2?.tasks)&&w2.tasks.length===3,'tasks: 3 items','tasks: wrong count',`got ${w2?.tasks?.length}`);
  check(typeof w2?.toLine==='string'&&w2.toLine.length>0,'toLine: present','toLine: missing');
  check(typeof w2?.subLine==='string'&&w2.subLine.length>0,'subLine: present','subLine: missing');
  check(Array.isArray(w2?.range)&&w2.range.length===2&&w2.range[0]<w2.range[1],`range: [${w2?.range}]`,'range: invalid',`got ${JSON.stringify(w2?.range)}`);
}

// ── W3 ───────────────────────────────────────────────────────────────────────
function validateW3(w3) {
  section('W3  Academic Discussion');
  ['course','inst'].forEach(k=>check(typeof w3?.[k]==='string',`${k}: present`,`${k}: missing`));
  ['prof','sa','sb'].forEach(obj=>{
    check(typeof w3?.[obj]?.name==='string',`${obj}.name: present`,`${obj}.name: missing`);
    check(typeof w3?.[obj]?.[obj==='prof'?'msg':'txt']==='string',`${obj}.msg/txt: present`,`${obj}.msg/txt: missing`);
  });
  check(Array.isArray(w3?.range)&&w3.range.length===2&&w3.range[0]<w3.range[1],`range: [${w3?.range}]`,'range: invalid',`got ${JSON.stringify(w3?.range)}`);
}

// ── Dispatch ─────────────────────────────────────────────────────────────────
const isETS = !!(D.m1 && D.m2);
const isLeg = !!(D.r1 && D.r2 && D.r3);

if (isETS) {
  console.log('\n  Schema: ETS two-module (m1/m2)');
  validateR1(D.m1.r1, 'M1 R1', true);
  validateReading(D.m1.reading, 'M1');
  validateR1(D.m2.r1, 'M2 R1', true);
  validateReading(D.m2.reading, 'M2');
} else if (isLeg) {
  console.log('\n  Schema: Legacy (r1/r2/r3)');
  validateR1(D.r1, 'R1', false);
  validateR2(D.r2);
  validateR3(D.r3);
} else {
  console.error('Unrecognised schema — expected m1/m2 or r1/r2/r3'); process.exit(1);
}

validateW1(D.w1);
validateW2(D.w2);
validateW3(D.w3);

const total = passed + failed;
console.log(`\n${'─'.repeat(52)}`);
console.log(`  ${filePath}\n  ${passed}/${total} passed   |   ${failed} failed`);
if (failed === 0) { console.log('\n  🎉  All good — safe to deploy.\n'); }
else { console.log('\n  ⚠️   Fix the items above.\n'); process.exit(1); }
