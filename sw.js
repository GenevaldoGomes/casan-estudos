const CACHE='casan-study-v12';
const STATIC=['./','index.html','styles.css?v=12','questions-data.js?v=12','exam-text-data.js?v=12','app.js?v=12','manifest.json','icon.svg'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(STATIC)));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(u.pathname.endsWith('index.html')||u.pathname==='/'||u.pathname.endsWith('styles.css')||u.pathname.endsWith('app.js')||u.pathname.endsWith('questions-data.js')||u.pathname.endsWith('exam-text-data.js')){
    e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const copy=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return r;}).catch(()=>caches.match(e.request)));
  } else {
    e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
  }
});
