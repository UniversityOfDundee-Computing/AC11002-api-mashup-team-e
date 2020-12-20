var CACHE_NAME = 'simple-PWA-localStorage';
var urlsToCache = [
  './',
  'https://universityofdundee-computing.github.io/AC11002-api-mashup-team-e/index.html',
  'https://universityofdundee-computing.github.io/AC11002-api-mashup-team-e/AboutUs.html',
  'https://universityofdundee-computing.github.io/AC11002-api-mashup-team-e/API-Page.html',
  'https://universityofdundee-computing.github.io/AC11002-api-mashup-team-e/LastPage.html',
  'https://universityofdundee-computing.github.io/AC11002-api-mashup-team-e/manifest.json',
  'https://universityofdundee-computing.github.io/AC11002-api-mashup-team-e/home.css',
  'https://universityofdundee-computing.github.io/AC11002-api-mashup-team-e/Main_Style.css',
  'https://universityofdundee-computing.github.io/AC11002-api-mashup-team-e/about-us.jpg',
  'https://universityofdundee-computing.github.io/AC11002-api-mashup-team-e/map.jpg',
  'https://universityofdundee-computing.github.io/AC11002-api-mashup-team-e/javascript.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });
            return response;
          }
        );
      })
    );
});
