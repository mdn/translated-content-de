---
title: CacheStorage
slug: Web/API/CacheStorage
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`CacheStorage`**-Schnittstelle repräsentiert den Speicher für {{domxref("Cache")}}-Objekte.

Die Schnittstelle:

- Bietet ein Hauptverzeichnis aller benannten Caches, die von einem {{domxref("ServiceWorker")}} oder einem anderen Workertyp oder {{domxref("window")}} Bereich aufgerufen werden können (es ist nicht auf die Verwendung mit Service-Workern beschränkt).
- Verwaltet eine Zuordnung von Zeichenfolgenamen zu entsprechenden {{domxref("Cache")}}-Objekten.

Verwenden Sie {{domxref("CacheStorage.open()")}}, um eine {{domxref("Cache")}}-Instanz zu erhalten.

Verwenden Sie {{domxref("CacheStorage.match()")}}, um zu überprüfen, ob eine gegebene {{domxref("Request")}} ein Schlüssel in einem der vom `CacheStorage`-Objekt verwalteten {{domxref("Cache")}}-Objekte ist.

Sie können auf `CacheStorage` über die {{domxref("Window.caches")}}-Eigenschaft in Fenstern oder über die {{domxref("WorkerGlobalScope.caches")}}-Eigenschaft in Workern zugreifen.

> **Hinweis:** `CacheStorage` lehnt immer mit einem `SecurityError` bei nicht vertrauenswürdigen Ursprüngen ab (d.h. solchen, die kein HTTPS verwenden, obwohl diese Definition in Zukunft wahrscheinlich komplizierter wird). Beim Testen in Firefox können Sie dies umgehen, indem Sie die Option **Enable Service Workers over HTTP (when toolbox is open)** in den Firefox Devtools-Optionen/Getriebemenü aktivieren. Da `CacheStorage` Dateisystemzugriff erfordert, kann es zudem im privaten Modus in Firefox nicht verfügbar sein.

> **Hinweis:** {{domxref("CacheStorage.match()")}} ist eine praktische Methode. Äquivalente Funktionalität, um einen Cache-Eintrag abzugleichen, kann implementiert werden, indem ein Array von Cache-Namen von {{domxref("CacheStorage.keys()")}} zurückgegeben, jeder Cache mit {{domxref("CacheStorage.open()")}} geöffnet wird und der gewünschte mit {{domxref("Cache.match()")}} abgeglichen wird.

## Instanzmethoden

- {{domxref("CacheStorage.match()")}}
  - : Überprüft, ob eine gegebene {{domxref("Request")}} ein Schlüssel in irgendeinem der vom `CacheStorage`-Objekt verwalteten {{domxref("Cache")}}-Objekte ist, und gibt ein {{jsxref("Promise")}} zurück, das auf diesen Treffer auflöst.
- {{domxref("CacheStorage.has()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf `true` auflöst, wenn ein {{domxref("Cache")}}-Objekt mit dem `cacheName` existiert.
- {{domxref("CacheStorage.open()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf das {{domxref("Cache")}}-Objekt mit dem `cacheName` auflöst (ein neuer Cache wird erstellt, wenn er noch nicht existiert).
- {{domxref("CacheStorage.delete()")}}
  - : Findet das {{domxref("Cache")}}-Objekt, das dem `cacheName` entspricht, und wenn gefunden, löscht es das {{domxref("Cache")}}-Objekt und gibt ein {{jsxref("Promise")}} zurück, das auf `true` auflöst. Wenn kein {{domxref("Cache")}}-Objekt gefunden wird, löst es auf `false` auf.
- {{domxref("CacheStorage.keys()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von Zeichenfolgen auflöst, die allen benannten, vom `CacheStorage` verwalteten {{domxref("Cache")}}-Objekten entsprechen. Verwenden Sie diese Methode, um über eine Liste aller {{domxref("Cache")}}-Objekte zu iterieren.

## Beispiele

Dieses Codebeispiel stammt aus dem MDN [einfache Service Worker Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker) (siehe [einfache Service Worker live laufen](https://bncb2v.csb.app/).)
Dieses Service Worker-Skript wartet darauf, dass ein {{domxref("ServiceWorkerGlobalScope/install_event", "install")}}-Ereignis ausgelöst wird, und führt dann {{domxref("ExtendableEvent.waitUntil","waitUntil")}} aus, um den Installationsprozess der App zu verwalten. Dies besteht darin, {{domxref("CacheStorage.open")}} aufzurufen, um einen neuen Cache zu erstellen, und dann {{domxref("Cache.addAll")}} zu verwenden, um eine Reihe von Ressourcen hinzuzufügen.

Im zweiten Codeblock warten wir auf das Auslösen eines {{domxref("FetchEvent")}}. Wir erstellen eine benutzerdefinierte Antwort, indem wir:

1. Überprüfen, ob ein Treffer für die Anfrage in der CacheStorage gefunden wird. Wenn ja, wird dieser serviert.
2. Wenn nicht, die Anfrage aus dem Netzwerk abrufen und dann auch den im ersten Block erstellten Cache öffnen und eine Kopie der Anfrage mit {{domxref("Cache.put")}} hinzufügen (`cache.put(event.request, response.clone())`).
3. Wenn dies fehlschlägt (z.B. weil das Netzwerk ausgefallen ist), eine Fallback-Antwort zurückgeben.

Schließlich geben Sie zurück, was auch immer die benutzerdefinierte Antwort am Ende war, unter Verwendung von {{domxref("FetchEvent.respondWith")}}.

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
      // caches.match() resolves immer
      // aber im Erfolgsfall wird response einen Wert haben
      if (response !== undefined) {
        return response;
      } else {
        return fetch(event.request)
          .then((response) => {
            // response kann nur einmal verwendet werden
            // wir müssen Klon speichern, um eine Kopie in den Cache zu legen
            // und eine zweite zu servieren
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

Dieses Snippet zeigt, wie die API außerhalb eines Service Worker-Kontexts verwendet werden kann, und verwendet den `await`-Operator für deutlich lesbareren Code.

```js
// Versuchen Sie, Daten aus dem Cache zu erhalten, aber greifen Sie auf das Live-Abrufen zurück.
async function getData() {
  const cacheVersion = 1;
  const cacheName = `myapp-${cacheVersion}`;
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  let cachedData = await getCachedData(cacheName, url);

  if (cachedData) {
    console.log("Zwischengespeicherte Daten abgerufen");
    return cachedData;
  }

  console.log("Frische Daten abrufen");

  const cacheStorage = await caches.open(cacheName);
  await cacheStorage.add(url);
  cachedData = await getCachedData(cacheName, url);
  await deleteOldCaches(cacheName);

  return cachedData;
}

// Daten aus dem Cache abrufen.
async function getCachedData(cacheName, url) {
  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(url);

  if (!cachedResponse || !cachedResponse.ok) {
    return false;
  }

  return await cachedResponse.json();
}

// Löschen Sie alte Caches, um den Speicherplatz des Benutzers zu respektieren.
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- {{domxref("Cache")}}
- {{domxref("Window.caches")}} und {{domxref("WorkerGlobalScope.caches")}}
- [Privates Surfen/Inkognito-Modus](/de/docs/Web/API/Web_Storage_API#private_browsing_incognito_modes)
