let staticCacheName = 'restaurant-review-v1.0';
//TODO: cache requests to all of the site’s assets
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(staticCacheName).then(function(cache) {
			return cache.addAll([
				'./',
				'./index.html',
                './restaurant.html',
				'./css/styles.css',
				'./data/restaurants.json',
				'./js/dbhelper.js',
				'./js/main.js',
				'./js/restaurant_info.js',
				'./img/1.jpg',
				'./img/2.jpg',
				'./img/3.jpg',
				'./img/4.jpg',
				'./img/5.jpg',
				'./img/6.jpg',
				'./img/7.jpg',
				'./img/8.jpg',
				'./img/9.jpg',
				'./img/10.jpg',
				'./img/icon.jpg'
			]);
		})
	);
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(thisCacheName => {
                if(thisCacheName !== staticCacheName) {
                    console.log('ServiceWorker Removing cache files from ', thisCacheName);
                    return caches.delete(thisCacheName);
                }
            }));
		})
	);
        return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
	//TODO:  handle all the restaurant pages and responde in offline mode
	const requestUrl = new URL(event.request.url);
	if(requestUrl.origin === location.origin){
		if (requestUrl.pathname.startsWith('/restaurant.html')) {
			event.respondWith(caches.match('/restaurant.html'));
			return; 
		}
	}
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			return response || fetch(event.request);
		})
	);
});
