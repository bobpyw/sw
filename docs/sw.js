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
                "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
                "icon": "images/ccard.png",
                "vibrate": [200, 100, 200, 100, 200, 100, 400],
                "tag": "request",
                "actions": [
                    { "action": "yes", "title": "Yes", "icon": "images/yes.png" },
                    { "action": "no", "title": "No", "icon": "images/no.png" }
                ]
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
  
    event.notification.close();
    if (event.notification.tag == 'new-email') {
    
        event.waitUntil(clients.matchAll({
            type: "window"
        }).then(function(clientList) {
            for (var i = 0; i < clientList.length; i++) {
            var client = clientList[i];
            if (client.url == '/' && 'focus' in client)
                return client.focus();
            }
            if (clients.openWindow)
            return clients.openWindow('/sw/');
        }));
    
        // Assume that all of the resources needed to render
    // /inbox/ have previously been cached, e.g. as part
    // of the install handler.
    //new WindowClient('/');
  }
});