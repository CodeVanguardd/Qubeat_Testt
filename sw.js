// QuBeat service worker
// Tip: palitan ang version (v1 -> v2) tuwing nag-update kayo ng code.
const CACHE = "qubeat-v1";

// Mga page at CSS lang. Hindi isinama ang mp3 at GIF para hindi bumigat.
const CORE = [
  "/",
  "/index.html",
  "/Qubeat.html",
  "/HowToPlay.html",
  "/Credits.html",
  "/QuebeatMain.css",
  "/logo.png",
  "/manifest.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      // Isa-isang i-cache para hindi mabigo ang buong install
      // kapag may isang file na mali ang pangalan.
      Promise.all(CORE.map((url) => cache.add(url).catch(() => null)))
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // Huwag galawin ang ibang site (Supabase, AI API, Google Fonts, atbp.)
  if (url.origin !== self.location.origin) return;

  // Network-first: laging pinakabagong bersyon kapag online,
  // cache lang ang gagamitin kapag offline.
  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        const cacheable = /\.(html|css|js|png|json)$/.test(url.pathname) || url.pathname === "/";
        if (res.ok && cacheable) {
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req))
  );
});
