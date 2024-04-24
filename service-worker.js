const CACHE_NAME = 'my-site-cache-v1';
const urlsToCache = [
  '/',
  '/styles.css',
  '/script.js',
  '/icon.png'
];

self.addEventListener('install', function(event) {
  // Perform installation steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
