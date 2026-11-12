CASAN 2026 — Preparação PWA

Uso local: sirva esta pasta por HTTP (ex.: python -m http.server 8080) e abra http://localhost:8080.

Publicação: Vercel como site estático ou Render Static Site.

Inclui dashboard, cronograma, tópicos, banco inicial de questões, caderno de erros, progresso em localStorage e modo PWA/offline.

Próxima evolução recomendada: Supabase Auth + banco de questões + sincronização do progresso entre dispositivos.


VERSÃO 2
- Área Provas Anteriores
- CASAN 2016 Desenvolvimento — AOCP
- CASAN 2008 Desenvolvimento — FEPESE
- CASAN 2011 DBA — FEPESE
- Links para fonte, cronômetro e registro de resultado


VERSÃO 3 — PROVAS REAIS INTERATIVAS
- CASAN 2016 — Analista de Sistema / Desenvolvimento de Sistemas — AOCP — 50 questões
- CASAN 2008 — Analista de Sistema / Desenvolvimento de Sistemas — FEPESE — 40 questões
- CASAN 2011 — Analista de Sistemas / DBA — FEPESE — 50 questões
- PDFs incluídos no próprio app
- Cartão-resposta digital A-E
- Navegação questão a questão
- Cronômetro
- Correção automática
- Questões anuladas tratadas separadamente
- Histórico do último resultado salvo no navegador
- Funciona offline após cache do PWA


VERSÃO 4 — QUESTÃO POR QUESTÃO (CELULAR)
- PDF não é mais necessário para resolver a prova.
- Cada questão foi recortada do caderno original e aparece ampliada na tela.
- Preserva códigos, gráficos, tabelas e formatação da banca.
- Botões A–E imediatamente abaixo.
- Próxima/anterior, limpar resposta e navegador recolhível.
- Correção automática e histórico continuam funcionando.
- PDFs permanecem no pacote apenas como fonte de conferência.

VERSÃO 6 — CORREÇÃO DE CACHE/DEPLOY
- Identificação visual V6 no cabeçalho.
- Tela de prova SEM PDF embutido.
- Uma questão por vez com imagem recortada.
- Service worker atualizado com network-first para HTML/CSS/JS.
- skipWaiting + clients.claim para substituir versões antigas.
- CSS e JS com ?v=6 para evitar cache do navegador.
