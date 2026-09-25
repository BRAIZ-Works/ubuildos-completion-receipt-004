(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.TicketTriageLogic=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const RULES=[
{id:'TT-001',category:'ACCESS',severity:'HIGH',signals:['locked out','cannot login','can\u2019t login','password reset'],reason:'Access failure prevents normal work.'},
{id:'TT-002',category:'BILLING',severity:'HIGH',signals:['charged twice','duplicate charge','double charged'],reason:'Duplicate billing may create immediate financial impact.'},
{id:'TT-003',category:'OUTAGE',severity:'CRITICAL',signals:['service down','outage','all users','everyone cannot'],reason:'Broad service interruption indicates critical operational impact.'},
{id:'TT-004',category:'SECURITY',severity:'CRITICAL',signals:['account compromised','unauthorized access','stolen credentials','security incident'],reason:'Explicit security-compromise evidence requires critical handling.'},
{id:'TT-005',category:'BUG',severity:'MEDIUM',signals:['error message','bug','broken','fails every time'],reason:'A reproducible product failure requires investigation.'},
{id:'TT-006',category:'REQUEST',severity:'LOW',signals:['feature request','would like','suggestion','nice to have'],reason:'Feature requests are non-incident product input.'}
];
function normalize(v){return String(v==null?'':v).toLowerCase().replace(/[\u2018\u2019]/g,"'").replace(/\s+/g,' ').trim();}
function matchRule(text,rule){const t=normalize(text);return rule.signals.filter(s=>t.includes(normalize(s)));}
function triage(text){const normalized=normalize(text);if(!normalized)return{state:'REVIEW',category:'REVIEW',severity:'REVIEW',ruleId:'REVIEW-EMPTY',matchedSignals:[],reason:'Insufficient evidence: enter a ticket description.'};const hits=RULES.map(rule=>({rule,signals:matchRule(normalized,rule)})).filter(x=>x.signals.length);if(hits.length===0)return{state:'REVIEW',category:'REVIEW',severity:'REVIEW',ruleId:'REVIEW-NOMATCH',matchedSignals:[],reason:'No rule has enough evidence. Human review is required.'};if(hits.length>1)return{state:'REVIEW',category:'REVIEW',severity:'REVIEW',ruleId:'REVIEW-CONFLICT',matchedSignals:hits.flatMap(x=>x.signals),reason:'Conflicting category rules matched. Human review is required.',conflictingRules:hits.map(x=>x.rule.id)};const hit=hits[0];return{state:'RESOLVED',category:hit.rule.category,severity:hit.rule.severity,ruleId:hit.rule.id,matchedSignals:hit.signals,reason:hit.rule.reason};}
function exportRecord(text,result,at){return{ticket:String(text||''),decision:{...result},decidedAt:at||new Date().toISOString(),rulesVersion:'1.1.0'};}
function assertRuleIdsUnique(){return new Set(RULES.map(r=>r.id)).size===RULES.length;}
return{RULES,normalize,matchRule,triage,exportRecord,assertRuleIdsUnique};
});
