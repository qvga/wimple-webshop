


workbox.precaching.precacheAndRoute([
    {url: '/index.html', revision: 'k49fjwdl'},
].concat(self.__precacheManifest));

workbox.routing.registerNavigationRoute('/index.html');

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