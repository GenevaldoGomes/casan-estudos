const CACHE='casan-study-v3';
const ASSETS=['./','index.html','styles.css','app.js','manifest.json','icon.svg',
'casan-2008-desenvolvimento.pdf','casan-2011-dba.pdf','casan-2016-desenvolvimento.pdf'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
