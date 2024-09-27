---
title: CacheStorage
slug: Web/API/CacheStorage
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`CacheStorage`**-Schnittstelle repräsentiert den Speicher für [`Cache`](/de/docs/Web/API/Cache)-Objekte.

Die Schnittstelle:

- Bietet ein Hauptverzeichnis aller benannten Caches, die von einem [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) oder einem anderen Typ von Worker oder [`window`](/de/docs/Web/API/Window)-Umgebung geöffnet werden können (Sie sind nicht nur auf die Verwendung mit Service Workern beschränkt).
- Pflegt eine Zuordnung von String-Namen zu den entsprechenden [`Cache`](/de/docs/Web/API/Cache)-Objekten.

Verwenden Sie [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um eine Instanz von [`Cache`](/de/docs/Web/API/Cache) zu erhalten.

Verwenden Sie [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match), um zu überprüfen, ob eine gegebene [`Request`](/de/docs/Web/API/Request) ein Schlüssel in einem der von dem `CacheStorage`-Objekt verwalteten [`Cache`](/de/docs/Web/API/Cache)-Objekte ist.

Sie können auf `CacheStorage` über die [`Window.caches`](/de/docs/Web/API/Window/caches)-Eigenschaft in Fenstern oder über die [`WorkerGlobalScope.caches`](/de/docs/Web/API/WorkerGlobalScope/caches)-Eigenschaft in Workern zugreifen.

> **Note:** `CacheStorage` lehnt immer mit einem `SecurityError` auf nicht vertrauenswürdigen Ursprüngen ab (d.h. solche, die kein HTTPS verwenden, obwohl diese Definition in Zukunft wahrscheinlich komplexer wird). Beim Testen in Firefox können Sie dies umgehen, indem Sie die Option **Enable Service Workers over HTTP (when toolbox is open)** im Optionen/Gear-Menü der Firefox-Entwicklertools überprüfen. Außerdem kann `CacheStorage`, da es Datei-Systemzugriff erfordert, im privaten Modus in Firefox nicht verfügbar sein.

> **Note:** [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match) ist eine bequeme Methode. Eine gleichwertige Funktionalität, um einen Cache-Eintrag zu finden, kann implementiert werden, indem ein Array von Cache-Namen aus [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegeben wird, jeder Cache mit [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open) geöffnet wird und der gewünschte mit [`Cache.match()`](/de/docs/Web/API/Cache/match) abgeglichen wird.

## Instanzmethoden

- [`CacheStorage.match()`](/de/docs/Web/API/CacheStorage/match)
  - : Überprüft, ob eine gegebene [`Request`](/de/docs/Web/API/Request) ein Schlüssel in einem der von dem `CacheStorage`-Objekt verwalteten [`Cache`](/de/docs/Web/API/Cache)-Objekte ist, und gibt ein {{jsxref("Promise")}} zurück, das zu diesem Treffer aufgelöst wird.
- [`CacheStorage.has()`](/de/docs/Web/API/CacheStorage/has)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird, wenn ein [`Cache`](/de/docs/Web/API/Cache)-Objekt, das dem `cacheName` entspricht, existiert.
- [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu dem [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird, das dem `cacheName` entspricht (ein neuer Cache wird erstellt, wenn er noch nicht existiert).
- [`CacheStorage.delete()`](/de/docs/Web/API/CacheStorage/delete)
  - : Sucht nach dem [`Cache`](/de/docs/Web/API/Cache)-Objekt, das dem `cacheName` entspricht, und wenn es gefunden wird, löscht es das [`Cache`](/de/docs/Web/API/Cache)-Objekt und gibt ein {{jsxref("Promise")}} zurück, das zu `true` aufgelöst wird. Wenn kein [`Cache`](/de/docs/Web/API/Cache)-Objekt gefunden wird, wird es zu `false` aufgelöst.
- [`CacheStorage.keys()`](/de/docs/Web/API/CacheStorage/keys)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einem Array aufgelöst wird, das Strings enthält, die allen von dem `CacheStorage` verfolgten, benannten [`Cache`](/de/docs/Web/API/Cache)-Objekten entsprechen. Verwenden Sie diese Methode, um über eine Liste aller [`Cache`](/de/docs/Web/API/Cache)-Objekte zu iterieren.

## Beispiele

Dieses Code-Snippet stammt aus dem [einfachen Service Worker-Beispiel von MDN](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfacher Service Worker live](https://bncb2v.csb.app/).)
Dieses Service-Worker-Skript wartet darauf, dass ein [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)-Ereignis ausgelöst wird und führt dann [`waitUntil`](/de/docs/Web/API/ExtendableEvent/waitUntil) aus, um den Installationsprozess der App zu handhaben. Dies besteht aus dem Aufruf von [`CacheStorage.open`](/de/docs/Web/API/CacheStorage/open), um einen neuen Cache zu erstellen, und dann [`Cache.addAll`](/de/docs/Web/API/Cache/addAll) zu verwenden, um eine Reihe von Assets hinzuzufügen.

Im zweiten Codeblock warten wir darauf, dass ein [`FetchEvent`](/de/docs/Web/API/FetchEvent) ausgelöst wird. Wir konstruieren eine benutzerdefinierte Antwort wie folgt:

1. Überprüfen Sie, ob eine Übereinstimmung für die Anfrage im CacheStorage gefunden wird. Wenn ja, liefern Sie diese.
2. Wenn nicht, holen Sie die Anfrage aus dem Netzwerk, öffnen Sie dann auch den Cache, der im ersten Block erstellt wurde, und fügen Sie eine Kopie der Anfrage mit [`Cache.put`](/de/docs/Web/API/Cache/put) ( `cache.put(event.request, response.clone())` ) hinzu.
3. Wenn dies fehlschlägt (z.B. weil das Netzwerk ausgefallen ist), geben Sie eine Fallback-Antwort zurück.

Schließlich geben Sie zurück, was auch immer die benutzerdefinierte Antwort letztendlich ist, mithilfe von [`FetchEvent.respondWith`](/de/docs/Web/API/FetchEvent/respondWith).

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

Dieses Snippet zeigt, wie die API außerhalb eines Service Worker-Kontexts verwendet werden kann und verwendet den `await`-Operator für einen viel lesbareren Code.

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
- [Privates Surfen / Inkognito-Modi](/de/docs/Web/API/Web_Storage_API#private_browsing_incognito_modes)
