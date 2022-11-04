//service worker variables
const cacheName = 'whatWatchCache';

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('activate', (e) => {
    console.log(("service worker has been activated"))
});

self.addEventListener('fetch', (e) => {
    console.log(`[Service Worker] Fetched resource ${e.request.url}`);
});