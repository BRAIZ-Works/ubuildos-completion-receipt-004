'use strict';
const fs=require('fs');const L=require('./logic.js');
const cases=[
['locked out','RESOLVED','ACCESS','HIGH','TT-001'],
['charged twice','RESOLVED','BILLING','HIGH','TT-002'],
['service down for all users','RESOLVED','OUTAGE','CRITICAL','TT-003'],
['account compromised','RESOLVED','SECURITY','CRITICAL','TT-004'],
['error message','RESOLVED','BUG','MEDIUM','TT-005'],
['feature request','RESOLVED','REQUEST','LOW','TT-006'],
['','REVIEW','REVIEW','REVIEW','REVIEW-EMPTY'],
['hello there','REVIEW','REVIEW','REVIEW','REVIEW-NOMATCH'],
['charged twice and service down for all users','REVIEW','REVIEW','REVIEW','REVIEW-CONFLICT']
];
const fail=[];for(const [input,state,category,severity,id] of cases){const a=L.triage(input),b=L.triage(input);if(a.state!==state||a.category!==category||a.severity!==severity||a.ruleId!==id)fail.push({input,a,expected:{state,category,severity,id}});if(JSON.stringify(a)!==JSON.stringify(b))fail.push({input,determinism:false});}
if(!L.assertRuleIdsUnique())fail.push({ruleIds:'duplicate'});
const rec=L.exportRecord('charged twice',L.triage('charged twice'),'2026-09-24T00:00:00Z');if(rec.rulesVersion!=='1.1.0'||rec.decision.ruleId!=='TT-002')fail.push({exportRecord:rec});
const source=fs.readFileSync('./app.js','utf8')+fs.readFileSync('./logic.js','utf8');if(/\bfetch\s*\(|XMLHttpRequest|WebSocket|EventSource/.test(source))fail.push({networkMechanism:true});
if(fail.length){console.error(JSON.stringify(fail,null,2));process.exit(1)}console.log('PASS',cases.length,'decision cases + determinism + identity + export + no-network');
