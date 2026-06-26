const CACHE = 'bbm-v1';
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.add('/Bunu-biliyor-muydun/index.html')));
  self.skipWaiting();
});
self.addEventListener('activate', e => { self.clients.claim(); });
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
