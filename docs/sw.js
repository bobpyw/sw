var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    './',
    './inline.bundle.js',
    './main.bundle.js',
    './polyfills.bundle.js',
    './styles.bundle.js',
    './vendor.bundle.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache)
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
            registration.showNotification("New email", {
                body: "Hit Caches",
                tag: "new-email"
            });
          return response;
        }

        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
            function (response) {
                if (!response || response.status != 200 || response.type != 'basic'){
                    return response;
                }

                var responseToCache = response.clone();
                caches.open(CACHE_NAME)
                    .then(function (cache){
                        cache.put(event.request, responseToCache);
                    })
                return response;
            }
        ).then(function () {

            registration.showNotification("New email", {
                body: "Cached all files",
                tag: "new-email"
            });
        })

        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('notificationclick', function(event) {
  if (event.notification.tag == 'new-email') {
    // Assume that all of the resources needed to render
    // /inbox/ have previously been cached, e.g. as part
    // of the install handler.
    new WindowClient('/');
  }
});