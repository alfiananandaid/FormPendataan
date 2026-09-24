const CACHE_NAME = 'pengadaan-v1';
const urlsToCache = [ './index.html', './manifest.json' ];

self.addEventListener('fetch', function(event) {
    // JANGAN CACHE REQUEST POST ATAU API GOOGLE
    if (event.request.method !== 'GET' || event.request.url.includes('script.google.com')) {
        return; // Biarkan browser yang menangani tanpa service worker
    }
    
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
