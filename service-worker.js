var CACHE_NAME = 'static-cache';
var urlsToCache = [
  '/index.html',
  '/creatine.html',
  '/dietpage.html',
  '/gainer.html',
  '/glutamine.html',
  '/Nutrition_needed.html',
  '/protein.html',
  '/secpage.html',
  '/thirdpage.html',
];


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});


self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
      .then(function(response) {
        return response || fetchAndCache(event.request);
      })
    );
  });
  
  