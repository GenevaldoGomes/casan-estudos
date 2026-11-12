const EXAM=new Date("2026-11-22T13:00:00-04:00");const base={total:447,correct:401,wrong:46,reviewed:{},errors:["Product Backlog × Sprint Backlog","Princípio de Liskov","HTTP 401 × 403","git cherry-pick × fetch","Docker build × RUN × portas","PMBOK scope creep × tailoring","PMBOK mitigar × transferir","Delphi try/except × try/finally","Big-O O(n²)"]};let s=JSON.parse(localStorage.getItem("casan26"))||base;const topics=[
["eng","Engenharia de Software","Revisar","Ciclo de vida, requisitos, UML, testes, Scrum, Kanban e XP. <b>Atenção:</b> Product Backlog = necessidades ordenadas do produto; Sprint Backlog = itens selecionados + plano do Sprint."],
["db","Banco de Dados e SQL","Forte","PK/FK, normalização, JOINs, GROUP BY/HAVING, subqueries, índices, views, ACID, concorrência e deadlock."],
["web","Web, APIs e Segurança","Revisar","HTTP, REST, JSON, JWT, OAuth2/OIDC, CORS e HTTPS. <b>401</b> = autenticação ausente/inválida. <b>403</b> = autenticado, sem autorização."],
["arch","Arquitetura e Microsserviços","Forte","Monólito, SOA, microsserviços, RabbitMQ, Kafka, API Gateway, circuit breaker, Saga e consistência eventual."],
["git","Git","Revisar","merge, rebase, revert, reset, stash, reflog. <b>fetch</b> baixa referências; <b>cherry-pick</b> aplica um commit específico."],
["sec","Segurança / OWASP","Forte","CIA, autenticação/autorização, criptografia, hash, assinatura, PKI, TLS, SQLi, XSS, SAST/DAST e DevSecOps."],
["cloud","SO, Cloud, Docker e Kubernetes","Revisar","VMs, cloud, HA/RPO/RTO, imagens/containers, Pods, Deployment e Services. Docker: <b>build</b> cria imagem; <b>RUN</b> executa no build; <b>-p host:container</b>."],
["gov","ITIL, COBIT e PMBOK","Revisar","ITIL 4, COBIT EDM/APO/BAI/DSS/MEA e PMBOK. Scope creep = expansão não controlada; tailoring = adaptação deliberada."],
["bpm","BPM, BPMN e GED","Forte","AS-IS/TO-BE, eventos, tarefas, XOR/AND/OR, sequence/message flow, OCR, metadados e versionamento."],
["delphi","Delphi / Object Pascal","Revisar","Classes, VCL, datasets, SQL e exceções. <b>try/except</b> trata exceção; <b>try/finally</b> garante limpeza."],
["law","Legislação e Governança CASAN","Muito forte","Resultado atual: <b>89/90 = 98,9%</b>. ANA, saneamento, Regimento, Conduta, Integridade, LGPD, riscos e controles."]];
const bank=[
["Scrum","No Scrum, o conjunto ordenado de necessidades do produto é:",["Sprint Backlog","Product Backlog","Increment","Burndown","DoD"],1,"Product Backlog contém as necessidades ordenadas do produto."],
["Scrum","O Sprint Backlog contém:",["Todo histórico","Itens selecionados e plano do Sprint","Só riscos","Só bugs","Só aceite"],1,"Sprint Backlog = trabalho do Sprint + plano."],
["POO","Liskov determina que:",["Subtipos substituam tipos-base sem quebrar comportamento","Uma classe tenha uma responsabilidade","Dependa de concretos","Interfaces sejam grandes","Herança seja proibida"],0,"LSP preserva o comportamento esperado na substituição."],
["HTTP","HTTP 401 indica:",["Não encontrado","Falha de autenticação","Autenticado mas proibido","Erro interno","Conflito"],1,"401: autenticação ausente/inválida."],
["HTTP","HTTP 403 indica:",["Autenticado, sem autorização","Sem credencial","Redirect","Sintaxe","Timeout"],0,"403: acesso proibido apesar da autenticação."],
["Git","git fetch serve para:",["Aplicar commit","Baixar refs/objetos sem integrar automaticamente","Reverter","Excluir branch","Criar tag"],1,"fetch atualiza referências remotas."],
["Git","git cherry-pick serve para:",["Aplicar commit específico em outra branch","Baixar refs","Apagar histórico","Resolver DNS","Stash automático"],0,"cherry-pick aplica um commit específico."],
["Docker","docker build:",["Cria imagem","Executa container","Para containers","Abre porta","Lista volumes"],0,"docker build cria imagem."],
["Docker","RUN no Dockerfile:",["Executa durante o build","Publica porta","Nomeia container","Inicia swarm","Exclui imagem"],0,"RUN executa no processo de build."],
["Docker","-p 8080:80 significa:",["Host 80→container 8080","Host 8080→container 80","Duas portas internas","UDP apenas","Sem redirecionamento"],1,"Formato host:container."],
["PMBOK","Scope creep é:",["Expansão não controlada do escopo","Adaptação consciente","Transferência","Encerramento","Estimativa"],0,"Scope creep = expansão não controlada."],
["PMBOK","Tailoring é:",["Falha de escopo","Adaptação deliberada ao contexto","Eliminar risco","Seguro","Atraso"],1,"Tailoring adapta a abordagem ao contexto."],
["PMBOK","Transferir risco significa:",["Eliminar causa","Passar a terceiro parte do ônus","Ignorar","Reduzir só probabilidade","Aceitar"],1,"Transferência desloca parte do impacto/responsabilidade."],
["Delphi","try/finally é apropriado para:",["Garantir limpeza/liberação","Tratar só EConvertError","Criar form","Declarar classe","SELECT"],0,"finally é ideal para limpeza."],
["Delphi","try/except é usado para:",["Tratar exceções","Criar índice","Liberar sempre","Declarar array","Criar evento"],0,"except captura/trata exceções."],
["Algoritmos","Dois loops n aninhados têm complexidade típica:",["O(1)","O(log n)","O(n)","O(n²)","O(2^n)"],3,"n × n = n²."],
["SQL","HAVING serve para:",["Filtrar grupos após GROUP BY","Ordenar","Criar índice","Excluir tabela","Abrir transação"],0,"HAVING filtra grupos/agregações."],
["SQL","ACID inclui atomicidade, consistência, isolamento e:",["Disponibilidade","Durabilidade","Distribuição","Duplicação","Desnormalização"],1,"D = Durabilidade."],
["Segurança","Na tríade CIA, I é:",["Identidade","Integridade","Interoperabilidade","Inspeção","Internet"],1,"CIA = Confidencialidade, Integridade, Disponibilidade."],
["Segurança","Defesa principal contra SQL Injection:",["Queries parametrizadas","CSS","HTTPS apenas","Base64","Cookies"],0,"Prepared statements evitam interpretação da entrada como SQL."],
["Kubernetes","Recurso que gerencia réplicas e rollout de Pods:",["Deployment","ConfigMap","Secret","Service","Namespace"],0,"Deployment gerencia ReplicaSets e rollout."],
["Kubernetes","Readiness probe indica se:",["Está pronto para receber tráfego","Deve reiniciar","Tem volume","Usa TLS","Tem IP público"],0,"Readiness controla recebimento de tráfego."],
["ITIL","Incident Management busca:",["Restaurar serviço rapidamente","Eliminar causa raiz sempre","Aprovar orçamento","Criar software","Auditar contrato"],0,"Incidente foca restauração do serviço."],
["COBIT","EDM pertence ao domínio de:",["Governança","Desenvolvimento","Suporte","Banco","Segurança física"],0,"EDM = Evaluate, Direct and Monitor."],
["BPMN","Gateway XOR representa:",["Decisão exclusiva","Paralelismo obrigatório","Evento mensagem","Pool","Subprocesso"],0,"XOR escolhe caminho exclusivo."],
["CASAN","A GTI está vinculada à:",["Diretoria Administrativa","Comercial","Financeira","Conselho Fiscal","Ouvidoria"],0,"No Regimento estudado, GTI está na Diretoria Administrativa."],
["LGPD","Na política estudada, o Controlador é:",["CASAN","Ouvidor","ANPD","GTI","Conselho Fiscal"],0,"A CASAN é Controladora."],
["LGPD","Na política estudada, o Encarregado é:",["Diretor-Presidente","Ouvidor","Gerente TI","Procurador-Geral","Presidente CA"],1,"O Ouvidor exerce a função de Encarregado."],
["Riscos","Apetite a risco é:",["Quanto a Companhia aceita","Máximo suportável","Risco materializado","Contingência","Probabilidade"],0,"Apetite = quanto se está disposto a aceitar."],
["Controles","Segregação de funções busca:",["Separar papéis conflitantes","Concentrar aprovações","Eliminar auditoria","Remover logs","Dispensar controles"],0,"Segregação reduz fraude/erro."]];
const schedule={"2026-11-10":"Fechamento da legislação CASAN","2026-11-11":"Legislação CASAN + questões mistas","2026-11-12":"Engenharia de Software, Scrum, requisitos, UML e testes","2026-11-13":"Banco de Dados + SQL + APIs/Web","2026-11-14":"Arquitetura, microsserviços, integração e Git","2026-11-15":"Segurança + OWASP + LGPD","2026-11-16":"SO, Cloud, Docker, Kubernetes e servidores","2026-11-17":"ITIL, COBIT, PMBOK, BPM/BPMN/GED","2026-11-18":"Delphi + caderno de erros","2026-11-19":"Simulado completo 1","2026-11-20":"Correção + reforço","2026-11-21":"Simulado completo 2 + revisão leve","2026-11-22":"PROVA"};
function save(){localStorage.setItem("casan26",JSON.stringify(s));stats()}function stats(){let p=(s.correct/s.total*100).toFixed(1);document.getElementById("tq").textContent=s.total;document.getElementById("cq").textContent=s.correct;document.getElementById("wq").textContent=s.wrong;document.getElementById("pct").textContent=p+"%"}function show(id){document.querySelectorAll(".view").forEach(x=>x.classList.remove("active"));document.getElementById(id).classList.add("active");if(id==="study")renderTopics();if(id==="errors")renderErrors();if(id==="previous")renderPrevious();scrollTo(0,0)}document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>b.dataset.go==="quiz"?startQuiz():show(b.dataset.go));function renderTopics(){document.getElementById("topics").innerHTML=topics.map(t=>`<div class="card topic" data-id="${t[0]}"><div><h3>${t[1]}</h3><p>${s.reviewed[t[0]]?"Revisado":"Disponível"}</p></div><span class="badge">${t[2]}</span></div>`).join("");document.querySelectorAll("[data-id]").forEach(x=>x.onclick=()=>openTopic(x.dataset.id))}let cur=null;function openTopic(id){cur=topics.find(t=>t[0]===id);document.getElementById("topicName").textContent=cur[1];document.getElementById("summary").innerHTML=cur[3];show("detail")}document.getElementById("reviewed").onclick=()=>{s.reviewed[cur[0]]=true;save();renderTopics()};document.getElementById("topicQuiz").onclick=()=>startQuiz();function shuffle(a){return [...a].sort(()=>Math.random()-.5)}let quiz=[],qi=0,qs=0,ans=false;function startQuiz(n=10){quiz=shuffle(bank).slice(0,Math.min(n,bank.length));qi=0;qs=0;show("quiz");renderQ()}function renderQ(){ans=false;let q=quiz[qi];document.getElementById("counter").textContent=`${qi+1}/${quiz.length}`;document.getElementById("score").textContent=`${qs} acertos`;document.getElementById("question").textContent=q[1];document.getElementById("feedback").innerHTML="";document.getElementById("next").hidden=true;document.getElementById("options").innerHTML=q[2].map((o,i)=>`<button class="opt" data-i="${i}">${String.fromCharCode(65+i)}) ${o}</button>`).join("");document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>answer(+b.dataset.i))}function answer(i){if(ans)return;ans=true;let q=quiz[qi],ok=i===q[3];s.total++;if(ok){s.correct++;qs++}else{s.wrong++;if(!s.errors.includes(q[0]))s.errors.push(q[0])}save();document.querySelectorAll(".opt").forEach((b,j)=>{b.disabled=true;if(j===q[3])b.classList.add("correct");if(j===i&&!ok)b.classList.add("wrong")});document.getElementById("feedback").innerHTML=`<b>${ok?"Correto":"Incorreto"}.</b> ${q[4]}`;document.getElementById("next").hidden=false;document.getElementById("score").textContent=`${qs} acertos`}document.getElementById("next").onclick=()=>{qi++;qi>=quiz.length?finish():renderQ()};function finish(){let p=Math.round(qs/quiz.length*100);document.getElementById("resultTitle").textContent=`${qs}/${quiz.length} — ${p}%`;document.getElementById("resultText").textContent=p>=80?"Aprovado no critério de avanço.":"Abaixo de 80%. Faça reforço pelo caderno de erros.";show("result")}function renderErrors(){document.getElementById("errorList").innerHTML=s.errors.map(e=>`<div class="card topic"><div><h3>${e}</h3><p>Reaparecerá nas revisões.</p></div><span class="badge">Revisar</span></div>`).join("")}document.getElementById("reinforce").onclick=()=>startQuiz();document.getElementById("startSim").onclick=()=>startQuiz(Math.min(50,bank.length));function tick(){let d=Math.max(0,Math.ceil((EXAM-new Date())/86400000));document.getElementById("countdown").textContent=d?`${d} dias para a prova`:"Dia da prova";let k=new Intl.DateTimeFormat("en-CA",{timeZone:"America/Manaus",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());document.getElementById("today").textContent=schedule[k]||"Revisão cumulativa dos conhecimentos específicos"}let dp;addEventListener("beforeinstallprompt",e=>{e.preventDefault();dp=e;document.getElementById("install").hidden=false});document.getElementById("install").onclick=async()=>{if(dp){dp.prompt();dp=null}};if("serviceWorker" in navigator)addEventListener("load",()=>navigator.serviceWorker.register("sw.js"));stats();tick();renderTopics();renderErrors();

const priorExams = [{"id": "casan2016", "title": "CASAN 2016 — Analista de Sistema / Desenvolvimento de Sistemas", "board": "AOCP", "year": "2016", "questions": 50, "pdf": "casan-2016-desenvolvimento.pdf", "note": "Mais aderente ao cargo atual • 30 questões específicas (21–50)", "key": {"1": "B", "2": "C", "3": "A", "4": "C", "5": "D", "6": "C", "7": "E", "8": "C", "9": "B", "10": "A", "11": "C", "12": "E", "13": "D", "14": "A", "15": "B", "16": "B", "17": "E", "18": "C", "19": "E", "20": "A", "21": "D", "22": "C", "23": "E", "24": "A", "25": "A", "26": "B", "27": "B", "28": "A", "29": "D", "30": "C", "31": "A", "32": "D", "33": "B", "34": "E", "35": "A", "36": "C", "37": "A", "38": "D", "39": "E", "40": "A", "41": "B", "42": "B", "43": "A", "44": "A", "45": "C", "46": "B", "47": "D", "48": "B", "49": "C", "50": "A"}}, {"id": "casan2008", "title": "CASAN 2008 — Analista de Sistema / Desenvolvimento de Sistemas", "board": "FEPESE", "year": "2008", "questions": 40, "pdf": "casan-2008-desenvolvimento.pdf", "note": "Prova do mesmo cargo • 40 questões", "key": {"1": "A", "2": "E", "3": "D", "4": "E", "5": "B", "6": "A", "7": "B", "8": "D", "9": "C", "10": "D", "11": "B", "12": "C", "13": "B", "14": "A", "15": "C", "16": "E", "17": "B", "18": "D", "19": "A", "20": "C", "21": "D", "22": "A", "23": "B", "24": "B", "25": "C", "26": "D", "27": "A", "28": "E", "29": "C", "30": "E", "31": "A", "32": "C", "33": "E", "34": "B", "35": "D", "36": "C", "37": "A", "38": "A", "39": "B", "40": "B"}}, {"id": "casan2011", "title": "CASAN 2011 — Analista de Sistemas / DBA", "board": "FEPESE", "year": "2011", "questions": 50, "pdf": "casan-2011-dba.pdf", "note": "Complementar para Banco de Dados/TI • questões 22 e 50 anuladas", "key": {"1": "E", "2": "D", "3": "C", "4": "A", "5": "D", "6": "A", "7": "B", "8": "E", "9": "D", "10": "B", "11": "E", "12": "C", "13": "B", "14": "A", "15": "C", "16": "C", "17": "B", "18": "D", "19": "E", "20": "A", "21": "B", "22": "X", "23": "C", "24": "B", "25": "A", "26": "B", "27": "E", "28": "D", "29": "A", "30": "C", "31": "E", "32": "D", "33": "A", "34": "C", "35": "E", "36": "A", "37": "B", "38": "D", "39": "C", "40": "A", "41": "E", "42": "B", "43": "C", "44": "E", "45": "D", "46": "A", "47": "D", "48": "B", "49": "E", "50": "X"}}];
if(!s.priorResults) s.priorResults={};
function renderPrevious(){
  const box=document.getElementById("previousList"); if(!box)return;
  box.innerHTML=priorExams.map(ex=>{
    const r=s.priorResults[ex.id];
    const last=r?`<div class="last"><b>Último resultado:</b> ${r.score}/${r.valid} (${Math.round(r.score/r.valid*100)}%) • ${r.date}</div>`:`<div class="last">Ainda não realizada neste aparelho.</div>`;
    return `<div class="card exam-card"><small>PROVA REAL</small><h3>${ex.title}</h3><div class="tags"><span>${ex.board}</span><span>${ex.questions} questões</span><span>${ex.note}</span></div>${last}<button class="primary" onclick="startPriorExam('${ex.id}')">Resolver no app</button> <a class="button-link" href="${ex.pdf}" target="_blank">Ver PDF</a></div>`;
  }).join("");
}
let activeExam=null, examQ=1, examAnswers={}, examSeconds=0, examClock=null;
function startPriorExam(id){
  activeExam=priorExams.find(x=>x.id===id); if(!activeExam)return; wrongRetryMode=false; wrongRetryQuestions=[];
  examQ=1; examAnswers={}; examSeconds=0; clearInterval(examClock); examClock=null;
  document.getElementById("examTitle").textContent=activeExam.title;
  document.getElementById("examTimer").textContent="00:00:00";
  document.getElementById("timerToggle").textContent="Iniciar cronômetro";
  show("exam"); renderExamQuestion(); renderExamGrid(); updateExamProgress();
}
function fmtTime(sec){const h=String(Math.floor(sec/3600)).padStart(2,"0"),m=String(Math.floor((sec%3600)/60)).padStart(2,"0"),ss=String(sec%60).padStart(2,"0");return `${h}:${m}:${ss}`;}
document.getElementById("timerToggle").onclick=()=>{
 if(!activeExam)return;
 if(examClock){clearInterval(examClock);examClock=null;document.getElementById("timerToggle").textContent="Continuar cronômetro";}
 else{examClock=setInterval(()=>{examSeconds++;document.getElementById("examTimer").textContent=fmtTime(examSeconds)},1000);document.getElementById("timerToggle").textContent="Pausar";}
};

function subjectFor2016(q){
  if(q>=1 && q<=10) return "Língua Portuguesa";
  if(q>=11 && q<=15) return "Raciocínio Lógico-Matemático";
  if(q>=16 && q<=20) return "Língua Inglesa";
  if(q>=21 && q<=50) return "Conhecimentos Específicos";
  return "Outros";
}
let wrongRetryMode=false;
let wrongRetryQuestions=[];

function renderExamQuestion(){
 if(!activeExam)return;
 document.getElementById("examQLabel").textContent=`Questão ${examQ}`;
 const img=document.getElementById("questionImage");
 const imgWrap=document.getElementById("questionImageWrap");
 const textCard=document.getElementById("questionTextCard");
 const supportBox=document.getElementById("supportBox");
 const supportText=document.getElementById("supportText");
 const textExam=(window.EXAM_TEXT_DATA||{})[activeExam.id];
 const tq=textExam && textExam.questions ? textExam.questions[examQ] : null;
 if(tq && textCard){
   textCard.hidden=false;
   if(imgWrap) imgWrap.hidden=true;
   textCard.innerHTML=`<div class="q-stem">${tq.stem}</div>`+
     ["A","B","C","D","E"].map(l=>`<div class="q-option-text"><b>(${l})</b><span>${tq.options[l]||""}</span></div>`).join("");
   let support="";
   if(activeExam.id==="casan2016" && examQ>=1 && examQ<=10) support=textExam.support.portuguese||"";
   if(activeExam.id==="casan2016" && examQ>=16 && examQ<=20) support=textExam.support.english||"";
   if(supportBox && supportText){
     supportBox.hidden=!support;
     supportText.textContent=support;
   }
 } else {
   if(textCard) textCard.hidden=true;
   if(supportBox) supportBox.hidden=true;
   if(imgWrap) imgWrap.hidden=false;
   if(img){img.src=(window.QUESTION_IMAGES||{})[`${activeExam.id}-q${String(examQ).padStart(2,"0")}`]||"";img.alt=`${activeExam.title} — questão ${examQ}`;}
 }
 document.getElementById("examChoices").innerHTML=["A","B","C","D","E"].map(l=>`<button class="exam-choice ${examAnswers[examQ]===l?"selected":""}" onclick="setExamAnswer('${l}')">${l}</button>`).join("");
 document.querySelectorAll("#examGrid button").forEach(b=>b.classList.toggle("current",+b.dataset.q===examQ));
}
function setExamAnswer(letter){
  examAnswers[examQ]=letter;
  renderExamQuestion();
  renderExamGrid();
  updateExamProgress();

  // brief visual confirmation, then advance automatically
  const chosen=document.querySelector(`.exam-choice:nth-child(${["A","B","C","D","E"].indexOf(letter)+1})`);
  if(chosen) chosen.classList.add("flash-selected");

  const current=examQ;
  setTimeout(()=>{
    if(examQ!==current) return;
    if(wrongRetryMode){
      const idx=wrongRetryQuestions.indexOf(examQ);
      if(idx>=0 && idx<wrongRetryQuestions.length-1){
        goExamQ(wrongRetryQuestions[idx+1]);
      }
    } else if(examQ<activeExam.questions){
      goExamQ(examQ+1);
    }
  }, 420);
}
function goExamQ(n){examQ=Math.max(1,Math.min(activeExam.questions,n));renderExamQuestion();}
document.getElementById("prevExamQ").onclick=()=>goExamQ(examQ-1);
document.getElementById("nextExamQ").onclick=()=>goExamQ(examQ+1);
function renderExamGrid(){
 if(!activeExam)return;
 document.getElementById("examGrid").innerHTML=Array.from({length:activeExam.questions},(_,i)=>i+1).map(n=>`<button data-q="${n}" class="${examAnswers[n]?"done":""} ${n===examQ?"current":""}" onclick="goExamQ(${n})">${n}</button>`).join("");
}
function updateExamProgress(){
 if(!activeExam)return;
 const answered=Object.keys(examAnswers).length;
 if(wrongRetryMode){
    const answeredWrong=wrongRetryQuestions.filter(n=>examAnswers[n]).length;
    document.getElementById("examProgress").textContent=`${answeredWrong}/${wrongRetryQuestions.length} erradas respondidas`;
  } else {
    document.getElementById("examProgress").textContent=`${answered}/${activeExam.questions} respondidas`;
  }
}

const clearBtn=document.getElementById("clearAnswer");
if(clearBtn) clearBtn.onclick=()=>{delete examAnswers[examQ];renderExamQuestion();renderExamGrid();updateExamProgress();};
const nextAns=document.getElementById("nextAfterAnswer");
if(nextAns) nextAns.onclick=()=>goExamQ(examQ<activeExam.questions?examQ+1:examQ);

document.getElementById("finishExam").onclick=()=>{
 if(!activeExam)return;
 const unanswered=activeExam.questions-Object.keys(examAnswers).length;
 if(unanswered>0 && !confirm(`Há ${unanswered} questão(ões) sem resposta. Finalizar mesmo assim?`))return;
 if(examClock){clearInterval(examClock);examClock=null;}
 let score=0,valid=0,cancel=0,wrongs=[];
 for(let n=1;n<=activeExam.questions;n++){
   const key=String(activeExam.key[n]);
   if(key==="X"){cancel++;continue;}
   valid++;
   if(examAnswers[n]===key) score++; else wrongs.push({n,ans:examAnswers[n]||"-",key});
 }
 const pct=Math.round(score/valid*100);
 s.priorResults[activeExam.id]={score,valid,cancel,seconds:examSeconds,date:new Date().toLocaleDateString("pt-BR")};save();
 document.getElementById("examResultTitle").textContent=`${score}/${valid} — ${pct}%`;
 document.getElementById("examResultText").textContent=`${activeExam.title} • Tempo ${fmtTime(examSeconds)}${cancel?` • ${cancel} anulada(s)`:``}`;

 const errorCount=valid-score;
 const metrics=document.getElementById("resultMetrics");
 if(metrics){
   metrics.innerHTML=`
     <div class="metric-card"><span>Acertos</span><b>${score}</b></div>
     <div class="metric-card"><span>Erros</span><b>${errorCount}</b></div>
     <div class="metric-card"><span>Aproveitamento</span><b>${pct}%</b></div>
     <div class="metric-card"><span>Tempo</span><b>${fmtTime(examSeconds)}</b></div>`;
 }

 document.getElementById("examWrongList").innerHTML=wrongs.length
   ? wrongs.map(x=>{
       const subject=activeExam.id==="casan2016"?subjectFor2016(x.n):"Questão de prova anterior";
       return `<div class="wrong-item">
         <div><b>Questão ${x.n}</b><span class="subject-pill">${subject}</span></div>
         <div>Sua resposta: <b>${x.ans}</b> • Gabarito: <b>${x.key}</b></div>
       </div>`;
     }).join("")
   : `<div class="wrong-item cancelled"><b>Nenhum erro nas questões válidas.</b></div>`;

 wrongRetryQuestions=wrongs.map(x=>x.n);
 const retryBtn=document.getElementById("retryWrongBtn");
 if(retryBtn){
   retryBtn.hidden=wrongRetryQuestions.length===0;
 }

 show("examResult");
};
renderPrevious();


const retryWrongBtn=document.getElementById("retryWrongBtn");
if(retryWrongBtn){
  retryWrongBtn.onclick=()=>{
    if(!activeExam || !wrongRetryQuestions.length) return;
    wrongRetryMode=true;
    const prior={...examAnswers};
    examAnswers={};
    examQ=wrongRetryQuestions[0];
    show("exam");
    renderExamQuestion();
    renderExamGrid();
    updateExamProgress();
    document.getElementById("examProgress").textContent=`0/${wrongRetryQuestions.length} erradas respondidas`;
    document.getElementById("timerToggle").textContent="Cronômetro opcional";
  };
}
