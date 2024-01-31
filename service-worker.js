let installPromptEvent;

self.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPromptEvent = event;
});

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('myPWA-cache').then((cache) => {
      return cache.addAll([
        'index.html',
        'logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
