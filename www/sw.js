const CACHE='cycle-buddy-v22';
const ICONS=['symptom-belly','symptom-head','symptom-fatigue','symptom-acne','symptom-sleep','mood-great','mood-good','mood-normal','mood-stress','mood-sad'].map(name=>`./assets/icons/${name}.svg`);
const MASTERS=['today','calendar','notes','stats'].map(name=>`./assets/masters/${name}.svg`);
const NAVS=['today','calendar','notes','stats'].map(name=>`./assets/masters/${name}-nav.jpg`);
const FILES=['./','./index.html','./styles.css','./master-layout.css','./local-notifications.bundle.js','./app.js','./manifest.webmanifest','./assets/teddy.svg','./assets/master-screen.svg',...MASTERS,...NAVS,...ICONS];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
