'use strict';
const L=window.TicketTriageLogic;
const HISTORY_KEY='ubuildos-ticket-triage-v1.1.0-history';
const SAMPLES=[
['Billing','I was charged twice for my subscription.'],
['Outage','The service is down for all users.'],
['Security','We suspect unauthorized access to an account.'],
['Feature request','Feature request: I would like a dark mode.'],
['Ambiguous','I was charged twice and the service is down for all users.'],
['Unmatched','Hello, I have a question about my workspace.']
];
const $=s=>document.querySelector(s);
function loadHistory(){try{return JSON.parse(localStorage.getItem(HISTORY_KEY)||'[]')}catch(_){return[]}}
function saveHistory(h){localStorage.setItem(HISTORY_KEY,JSON.stringify(h.slice(0,20)));}
let history=loadHistory();
function renderRules(){const body=$('#rule-body');body.innerHTML='';for(const r of L.RULES){const tr=document.createElement('tr');for(const v of [r.id,r.category,r.severity,r.signals.join(' · '),r.reason]){const td=document.createElement('td');td.textContent=v;tr.append(td)}body.append(tr)}}
function renderSamples(){const c=$('#samples');for(const [label,text] of SAMPLES){const b=document.createElement('button');b.type='button';b.className='sample';b.textContent=label;b.addEventListener('click',()=>{$('#ticket').value=text;$('#ticket').focus()});c.append(b)}}
function renderHistory(){const c=$('#history');c.innerHTML='';if(!history.length){c.textContent='No decisions yet.';return}for(const x of history){const a=document.createElement('article');a.className='history-item';const strong=document.createElement('strong');strong.textContent=`${x.decision.state} · ${x.decision.ruleId}`;const p=document.createElement('p');p.textContent=x.ticket;a.append(strong,p);c.append(a)}}
function show(text,r){for(const [id,v] of [['state',r.state],['category',r.category],['severity',r.severity],['rule-id',r.ruleId],['signals',r.matchedSignals.length?r.matchedSignals.join(' · '):'—'],['reason',r.reason]])$('#'+id).textContent=v;const card=$('#result');card.dataset.state=r.state;card.hidden=false;history=[L.exportRecord(text,r),...history].slice(0,20);saveHistory(history);renderHistory()}
function run(){const text=$('#ticket').value;show(text,L.triage(text));}
function reset(){ $('#ticket').value='';$('#result').hidden=true; }
function exportHistory(){const blob=new Blob([JSON.stringify(history,null,2)+'\n'],{type:'application/json'});const u=URL.createObjectURL(blob);const a=document.createElement('a');a.href=u;a.download='ticket-triage-history.json';document.body.append(a);a.click();a.remove();URL.revokeObjectURL(u);}
function clearHistory(){history=[];saveHistory(history);renderHistory()}
function selfTest(){try{const cases=[['charged twice','TT-002'],['service down for all users','TT-003'],['account compromised','TT-004'],['error message','TT-005'],['feature request','TT-006'],['locked out','TT-001'],['','REVIEW-EMPTY'],['hello there','REVIEW-NOMATCH'],['charged twice and service down for all users','REVIEW-CONFLICT']];for(const [i,id] of cases){const a=L.triage(i),b=L.triage(i);if(a.ruleId!==id||JSON.stringify(a)!==JSON.stringify(b))throw new Error(i)}if(!L.assertRuleIdsUnique())throw new Error('rule ids');$('#selftest').textContent='SELFTEST:PASS'}catch(e){$('#selftest').textContent='SELFTEST:FAIL '+e.message}}
$('#triage').addEventListener('click',run);$('#reset').addEventListener('click',reset);$('#export').addEventListener('click',exportHistory);$('#clear-history').addEventListener('click',clearHistory);renderRules();renderSamples();renderHistory();if(new URLSearchParams(location.search).get('selftest')==='1')selfTest();
