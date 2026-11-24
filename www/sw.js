const CACHE='cycle-buddy-v9';
const FILES=['./','./index.html','./styles.css','./master-layout.css','./app.js','./manifest.webmanifest','./assets/teddy.svg','./assets/master-screen.webp','./assets/master-hero.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
