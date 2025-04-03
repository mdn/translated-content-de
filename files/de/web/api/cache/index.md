---
title: Cache
slug: Web/API/Cache
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`Cache`**-Interface bietet einen persistenten Speichermechanismus für [`Request`](/de/docs/Web/API/Request)- / [`Response`](/de/docs/Web/API/Response)-Objektpaare, die im Langzeitspeicher zwischengespeichert werden. Wie lange ein `Cache`-Objekt lebt, hängt vom Browser ab, aber die Skripte eines einzelnen Ursprungs können typischerweise auf die Präsenz eines zuvor gefüllten `Cache`-Objekts zählen. Beachten Sie, dass das `Cache`-Interface sowohl in Fensterbereichen als auch in Workern verfügbar ist. Es muss nicht unbedingt in Verbindung mit Service Workern verwendet werden, obwohl es in der Service-Worker-Spezifikation definiert ist.

Ein Ursprung kann mehrere, benannte `Cache`-Objekte haben. Sie sind dafür verantwortlich, wie Ihr Skript (z.B. in einem [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)) `Cache`-Aktualisierungen handhabt. Einträge in einem `Cache` werden nicht aktualisiert, es sei denn, dies wird explizit angefordert; sie verfallen nicht, es sei denn, sie werden gelöscht. Verwenden Sie [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein spezifisches benanntes `Cache`-Objekt zu öffnen, und rufen Sie dann eine der `Cache`-Methoden auf, um den Cache zu verwalten.

Sie sind ebenfalls dafür verantwortlich, zwischengespeicherte Einträge regelmäßig zu bereinigen. Jeder Browser hat ein festes Limit für den Cache-Speicher, den ein gegebener Ursprung verwenden kann. Schätzungen für die `Cache`-Quotennutzung sind über die Methode [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate) verfügbar. Der Browser tut sein Bestes, um den Speicherplatz zu verwalten, aber er könnte den `Cache`-Speicher für einen Ursprung löschen. Der Browser wird im Allgemeinen alle Daten eines Ursprungs oder keine Daten eines Ursprungs löschen. Stellen Sie sicher, dass Sie Caches nach Namen versionieren und verwenden Sie die Caches nur von der Version des Skripts, das sie sicher bedienen kann. Weitere Informationen finden Sie unter [Löschen alter Caches](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#deleting_old_caches).

> [!NOTE]
> Der Schlüsselauswahlalgorithmus hängt vom [VARY-Header](https://www.fastly.com/blog/best-practices-using-vary-header) im Wert ab. Um einen neuen Schlüssel abzugleichen, muss sowohl der Schlüssel als auch der Wert für Einträge im `Cache`-Objekt berücksichtigt werden.

> [!NOTE]
> Die Caching-API berücksichtigt keine HTTP-Caching-Header.

## Instanzmethoden

- [`Cache.match()`](/de/docs/Web/API/Cache/match)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zur Antwort des ersten übereinstimmenden Anforderungseintrags im `Cache`-Objekt auflöst.
- [`Cache.matchAll()`](/de/docs/Web/API/Cache/matchAll)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einem Array aller übereinstimmenden Antworten im `Cache`-Objekt auflöst.
- [`Cache.add()`](/de/docs/Web/API/Cache/add)
  - : Nimmt eine URL und ruft sie ab und fügt das resultierende Antwortobjekt dem gegebenen Cache hinzu. Dies ist funktional gleichbedeutend mit dem Aufruf von `fetch()` und anschließendem Verwenden von `put()`, um die Ergebnisse zum Cache hinzuzufügen.
- [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll)
  - : Nimmt ein Array von URLs, ruft sie ab und fügt die resultierenden Antwortobjekte dem gegebenen Cache hinzu.
- [`Cache.put()`](/de/docs/Web/API/Cache/put)
  - : Nimmt sowohl eine Anforderung als auch deren Antwort und fügt sie dem gegebenen Cache hinzu.
- [`Cache.delete()`](/de/docs/Web/API/Cache/delete)
  - : Findet den Cache-Eintrag, dessen Schlüssel die Anforderung ist, und gibt ein {{jsxref("Promise")}} zurück, das auf `true` auflöst, wenn ein übereinstimmender Cache-Eintrag gefunden und gelöscht wird. Wenn kein Cache-Eintrag gefunden wird, löst das Versprechen sich auf `false` auf.
- [`Cache.keys()`](/de/docs/Web/API/Cache/keys)
  - : Gibt ein {{jsxref("Promise")}} zurück, das zu einem Array von `Cache`-Schlüsseln auflöst.

## Beispiele

Dieses Code-Beispiel stammt aus dem [Service-Worker-Auswahlcaching-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js). (siehe [Auswahlcaching live](https://googlechrome.github.io/samples/service-worker/selective-caching/)) Der Code verwendet [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um beliebige `Cache`-Objekte mit einem `Content-Type`-Header zu öffnen, der mit `font/` beginnt.

Der Code verwendet dann [`Cache.match()`](/de/docs/Web/API/Cache/match), um zu prüfen, ob es bereits eine passende Schriftart im Cache gibt, und gibt sie zurück, falls vorhanden. Wenn keine passende Schriftart vorhanden ist, ruft der Code die Schriftart aus dem Netzwerk ab und verwendet [`Cache.put()`](/de/docs/Web/API/Cache/put), um die abgerufene Ressource zwischenzuspeichern.

Der Code behandelt Ausnahmen, die aus der [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation geworfen werden. Beachten Sie, dass eine HTTP-Fehlerantwort (z.B. 404) keine Ausnahme auslöst. Es wird ein normales Antwortobjekt zurückgegeben, das den entsprechenden Fehlercode enthält.

Das Code-Beispiel zeigt auch eine bewährte Praxis zur Versionsverwaltung von Caches, die vom Service Worker verwendet werden. Obwohl in diesem Beispiel nur ein Cache vorhanden ist, kann derselbe Ansatz für mehrere Caches verwendet werden. Es weist einem Kurznamen für einen Cache einen bestimmten, versionierten Cache-Namen zu. Der Code löscht auch alle Caches, die nicht in `CURRENT_CACHES` benannt sind.

Im Code-Beispiel ist `caches` eine Eigenschaft des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope). Sie enthält das `CacheStorage`-Objekt, über das es auf das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Interface zugreifen kann.

> [!NOTE]
> In Chrome besuchen Sie `chrome://inspect/#service-workers` und klicken Sie auf den „inspect“-Link unterhalb des registrierten Service Workers, um die Protokollierungsaussagen für die verschiedenen Aktionen zu sehen, die das Skript [`service-worker.js`](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) ausführt.

```js
const CACHE_VERSION = 1;
const CURRENT_CACHES = {
  font: `font-cache-v${CACHE_VERSION}`,
};

self.addEventListener("activate", (event) => {
  // Delete all caches that aren't named in CURRENT_CACHES.
  // While there is only one cache in this example, the same logic
  // will handle the case where there are multiple versioned caches.
  const expectedCacheNamesSet = new Set(Object.values(CURRENT_CACHES));
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!expectedCacheNamesSet.has(cacheName)) {
            // If this cache name isn't present in the set of
            // "expected" cache names, then delete it.
            console.log("Deleting out of date cache:", cacheName);
            return caches.delete(cacheName);
          }
        }),
      ),
    ),
  );
});

self.addEventListener("fetch", (event) => {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    caches.open(CURRENT_CACHES.font).then((cache) => {
      return cache
        .match(event.request)
        .then((response) => {
          if (response) {
            // If there is an entry in the cache for event.request,
            // then response will be defined and we can just return it.
            // Note that in this example, only font resources are cached.
            console.log(" Found response in cache:", response);

            return response;
          }

          // Otherwise, if there is no entry in the cache for event.request,
          // response will be undefined, and we need to fetch() the resource.
          console.log(
            " No response for %s found in cache. About to fetch " +
              "from network…",
            event.request.url,
          );

          // We call .clone() on the request since we might use it
          // in a call to cache.put() later on.
          // Both fetch() and cache.put() "consume" the request,
          // so we need to make a copy.
          // (see https://developer.mozilla.org/en-US/docs/Web/API/Request/clone)
          return fetch(event.request.clone()).then((response) => {
            console.log(
              "  Response for %s from network is: %O",
              event.request.url,
              response,
            );

            if (
              response.status < 400 &&
              response.headers.has("content-type") &&
              response.headers.get("content-type").match(/^font\//i)
            ) {
              // This avoids caching responses that we know are errors
              // (i.e. HTTP status code of 4xx or 5xx).
              // We also only want to cache responses that correspond
              // to fonts, i.e. have a Content-Type response header that
              // starts with "font/".
              // Note that for opaque filtered responses
              // https://fetch.spec.whatwg.org/#concept-filtered-response-opaque
              // we can't access to the response headers, so this check will
              // always fail and the font won't be cached.
              // All of the Google Web Fonts are served from a domain that
              // supports CORS, so that isn't an issue here.
              // It is something to keep in mind if you're attempting
              // to cache other resources from a cross-origin
              // domain that doesn't support CORS, though!
              console.log("  Caching the response to", event.request.url);
              // We call .clone() on the response to save a copy of it
              // to the cache. By doing so, we get to keep the original
              // response object which we will return back to the controlled
              // page.
              // https://developer.mozilla.org/en-US/docs/Web/API/Request/clone
              cache.put(event.request, response.clone());
            } else {
              console.log("  Not caching the response to", event.request.url);
            }

            // Return the original response object, which will be used to
            // fulfill the resource request.
            return response;
          });
        })
        .catch((error) => {
          // This catch() will handle exceptions that arise from the match()
          // or fetch() operations.
          // Note that a HTTP error response (e.g. 404) will NOT trigger
          // an exception.
          // It will return a normal response object that has the appropriate
          // error code set.
          console.error("  Error in fetch handler:", error);

          throw error;
        });
    }),
  );
});
```

### Cookies und Cache-Objekte

Die [Fetch API](/de/docs/Web/API/Fetch_API) erfordert, dass {{httpheader("Set-Cookie")}}-Header entfernt werden, bevor ein [`Response`](/de/docs/Web/API/Response)-Objekt von [`fetch()`](/de/docs/Web/API/Window/fetch) zurückgegeben wird. Ein im `Cache` gespeicherter `Response` wird also keine `Set-Cookie`-Header enthalten und daher keine Cookies speichern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
