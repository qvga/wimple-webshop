

workbox.routing.registerRoute('https://fonts.googleapis.com/(.*)',
    workbox.strategies.cacheFirst({
        cacheName: 'googlefonts-cache',
        cacheExpiration: {
            maxEntries: 30
        },
        cacheableResponse: {statuses: [0, 200]}
    })
);

workbox.routing.registerRoute(/\.(?:png|gif|jpg|svg)$/,
    workbox.strategies.cacheFirst({
        cacheName: 'images-cache'
    })
);

workbox.routing.registerRoute('/',
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'index-cache',
    })
);