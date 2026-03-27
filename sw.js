const CACHE_NAME = 'rhythm-game-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './main.js',
  './songs.js',
  './ranking.js',
  './manifest.json',
  './bg.jpg',
  './title1.png',
  './jacket_SStar.png',
  './jacket_Tlabyrinth.png',
  './jacket_betrayal.png',
  './KIRAKIRA.mp3',
  './shining_star.mp3',
  './tokimeki_labyrinth.mp3',
  './betrayal.mp3',
  './tap.wav',
  './notesChart.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
