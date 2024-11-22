---
title: CacheStorage
slug: Web/API/CacheStorage
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`CacheStorage`**-Interface repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache)-Objekte.

Das Interface:

- Bietet ein Hauptverzeichnis aller benannten Caches, auf das von einem [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) oder anderen Arbeitern oder dem [`window`](/de/docs/Web/API/Window)-Bereich zugegriffen werden kann (Sie sind nicht darauf beschränkt, es nur mit Service Workern zu verwenden).
- Verwaltet eine Zuordnung von Zeichenkettennamen zu den entsprechenden [`Cache`](/de/docs/Web/API/Cache)-Objekten.

Verwenden Sie [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um eine [`Cache`](/de/docs/Web/API/Cache)-Instanz zu erhalten.

Verwenden Sie [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match), um zu prüfen, ob eine gegebene [`Request`](/de/docs/Web/API/Request) ein Schlüssel in einem der von dem `CacheStorage`-Objekt verfolgten [`Cache`](/de/docs/Web/API/Cache)-Objekte ist.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches)-Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft in Arbeitern zugreifen.

> **Note:** `CacheStorage` lehnt immer mit einem `SecurityError` bei unzuverlässigen Ursprüngen ab (z.B. solchen, die nicht HTTPS verwenden, obwohl diese Definition in Zukunft wahrscheinlich komplexer werden wird). Beim Testen in Firefox können Sie dies umgehen, indem Sie die Option **Service Workers über HTTP aktivieren (wenn das Tool-Fenster geöffnet ist)** im Optionen-/Zahnrad-Menü der Firefox-Entwicklertools aktivieren. Darüber hinaus kann `CacheStorage` aufgrund der erforderlichen Dateisystemzugriffe im privaten Modus in Firefox nicht verfügbar sein.

> **Note:** [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match) ist eine praktische Methode. Gleichwertige Funktionalität zum Abgleichen eines Cache-Eintrags kann implementiert werden, indem ein Array von Cache-Namen aus [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegeben, jeder Cache mit [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) geöffnet und der gewünschte mit [`Cache.match()`](/de/docs/Web/API/Cache/match) abgeglichen wird.

## Instanzmethoden

- [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match)
  - : Prüft, ob eine gegebene [`Request`](/de/docs/Web/API/Request) ein Schlüssel in einem der von dem `CacheStorage`-Objekt verfolgten [`Cache`](/de/docs/Web/API/Cache)-Objekte ist, und gibt ein {{jsxref("Promise")}} zurück, das mit diesem Treffer auflöst.
- [`CacheStorage.has()`](/de/docs/Web/API/CacheStorage/has)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird, wenn ein [`Cache`](/de/docs/Web/API/Cache)-Objekt existiert, das dem `cacheName` entspricht.
- [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu dem [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird, das dem `cacheName` entspricht (ein neuer Cache wird erstellt, falls dieser noch nicht existiert).
- [`CacheStorage.delete()`](/de/docs/Web/API/CacheStorage/delete)
  - : Findet das [`Cache`](/de/docs/Web/API/Cache)-Objekt, das dem `cacheName` entspricht, und falls gefunden, löscht das [`Cache`](/de/docs/Web/API/Cache)-Objekt und gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird. Falls kein [`Cache`](/de/docs/Web/API/Cache)-Objekt gefunden wird, wird es zu `false` aufgelöst.
- [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von Zeichenfolgen auflöst, die allen von dem `CacheStorage` verfolgten benannten [`Cache`](/de/docs/Web/API/Cache)-Objekten entsprechen. Verwenden Sie diese Methode, um über eine Liste aller [`Cache`](/de/docs/Web/API/Cache)-Objekte zu iterieren.

## Beispiele

Dieses Code-Snippet stammt aus dem MDN [einfaches Service Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfacher Service Worker live betrieben](https://bncb2v.csb.app/).)
Dieses Service Worker-Skript wartet darauf, dass ein [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis ausgelöst wird, und führt dann [`waitUntil`](/de/docs/Web/API/ExtendableEvent/waitUntil) aus, um den Installationsprozess für die App zu verwalten. Dies besteht darin, [`CacheStorage.open`](/de/docs/Web/API/CacheStorage/open) aufzurufen, um einen neuen Cache zu erstellen, und dann [`Cache.addAll`](/de/docs/Web/API/Cache/addAll) zu verwenden, um eine Reihe von Ressourcen hinzuzufügen.

Im zweiten Codeblock warten wir darauf, dass ein [`FetchEvent`](/de/docs/Web/API/FetchEvent) ausgelöst wird. Wir konstruieren eine benutzerdefinierte Antwort wie folgt:

1. Prüfen, ob ein Treffer für die Anfrage im CacheStorage gefunden wird. Falls ja, diesen bereitstellen.
2. Falls nicht, die Anfrage aus dem Netzwerk abrufen, dann auch den Cache öffnen, der im ersten Block erstellt wurde, und ein Duplikat der Anfrage hinzufügen, indem [`Cache.put`](/de/docs/Web/API/Cache/put) verwendet wird (`cache.put(event.request, response.clone())`).
3. Falls dies fehlschlägt (z.B. weil das Netzwerk ausgefallen ist), eine Ersatzantwort zurückgeben.

Schließlich zurückgeben, was auch immer die benutzerdefinierte Antwort zu sein scheint, unter Verwendung von [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith).

```js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "/",
          "/index.html",
          "/style.css",
          "/app.js",
          "/image-list.js",
          "/star-wars-logo.jpg",
          "/gallery/bountyHunters.jpg",
          "/gallery/myLittleVader.jpg",
          "/gallery/snowTroopers.jpg",
        ]),
      ),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // caches.match() always resolves
      // but in case of success response will have value
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then((response) => {
            // response may be used only once
            // we need to save clone to put one copy in cache
            // and serve second one
            let responseClone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, responseClone);
            });
            return response;
          })
          .catch(() => caches.match("/gallery/myLittleVader.jpg"));
      }
    }),
  );
});
```

Dieses Snippet zeigt, wie die API außerhalb eines Service Worker-Kontextes verwendet werden kann und verwendet den `await`-Operator, um den Code wesentlich lesbarer zu gestalten.

```js
// Try to get data from the cache, but fall back to fetching it live.
async function getData() {
  const cacheVersion = 1;
  const cacheName = `myapp-${cacheVersion}`;
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  let cachedData = await getCachedData(cacheName, url);

  if (cachedData) {
    console.log("Retrieved cached data");
    return cachedData;
  }

  console.log("Fetching fresh data");

  const cacheStorage = await caches.open(cacheName);
  await cacheStorage.add(url);
  cachedData = await getCachedData(cacheName, url);
  await deleteOldCaches(cacheName);

  return cachedData;
}

// Get data from the cache.
async function getCachedData(cacheName, url) {
  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(url);

  if (!cachedResponse || !cachedResponse.ok) {
    return false;
  }

  return await cachedResponse.json();
}

// Delete any old caches to respect user's disk space.
async function deleteOldCaches(currentCache) {
  const keys = await caches.keys();

  for (const key of keys) {
    const isOurCache = key.startsWith("myapp-");
    if (currentCache === key || !isOurCache) {
      continue;
    }
    caches.delete(key);
  }
}

try {
  const data = await getData();
  console.log({ data });
} catch (error) {
  console.error({ error });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [`Cache`](/de/docs/Web/API/Cache)
- [`Window.caches`](/de/docs/Web/API/Window/caches) und [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)
- [Privates Surfen / Inkognito-Modus](/de/docs/Web/API/Web_Storage_API#private_browsing_incognito_modes)
