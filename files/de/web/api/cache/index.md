---
title: Cache
slug: Web/API/Cache
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`Cache`**-Schnittstelle bietet einen persistenten Speichermechanismus für {{domxref("Request")}} / {{domxref("Response")}}-Objektpaare, die im langfristigen Speicher zwischengespeichert werden. Wie lange ein `Cache`-Objekt bestehen bleibt, hängt vom Browser ab, aber die Skripte eines einzelnen Ursprungs können in der Regel auf das Vorhandensein eines zuvor gefüllten `Cache`-Objekts zählen. Beachten Sie, dass die `Cache`-Schnittstelle sowohl für Fensterumgebungen als auch für Worker verfügbar ist. Sie müssen sie nicht in Verbindung mit Service Workern verwenden, obwohl sie in der Service-Worker-Spezifikation definiert ist.

Ein Ursprung kann mehrere benannte `Cache`-Objekte haben. Sie sind dafür verantwortlich, wie Ihr Skript (z.B. in einem {{domxref("ServiceWorker")}}) `Cache`-Aktualisierungen verarbeitet. Elemente in einem `Cache` werden nicht aktualisiert, es sei denn, dies wird ausdrücklich angefordert; sie verfallen nicht, es sei denn, sie werden gelöscht. Verwenden Sie {{domxref("CacheStorage.open", "CacheStorage.open()")}}, um ein spezifisches benanntes `Cache`-Objekt zu öffnen, und rufen Sie dann eine der `Cache`-Methoden auf, um den `Cache` zu verwalten.

Sie sind auch dafür verantwortlich, regelmäßig Cache-Einträge zu bereinigen. Jeder Browser hat ein festes Limit für die Menge an Cache-Speicher, die ein gegebener Ursprung verwenden kann. Schätzungen der `Cache`-Speicherkapazitätsnutzung sind über die {{domxref("StorageManager.estimate()")}}-Methode verfügbar. Der Browser tut sein Bestes, um den Plattenplatz zu verwalten, kann jedoch den `Cache`-Speicher für einen Ursprung löschen. Der Browser wird im Allgemeinen alle Daten für einen Ursprung oder keine Daten für einen Ursprung löschen. Stellen Sie sicher, dass Sie Caches nach Namen versionieren und die Caches nur von der Version des Skripts verwenden, mit der sie sicher arbeiten können. Weitere Informationen finden Sie unter [Löschen alter Caches](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#deleting_old_caches).

> [!NOTE]
> Der Schlüsselfindungsalgorithmus hängt vom [VARY-Header](https://www.fastly.com/blog/best-practices-using-vary-header) im Wert ab. Daher erfordert das Finden eines neuen Schlüssels die Betrachtung sowohl von Schlüssel als auch von Wert für Einträge im `Cache`-Objekt.

> [!NOTE]
> Die Caching-API berücksichtigt keine HTTP-Caching-Header.

## Instanzmethoden

- {{domxref("Cache.match()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich in die Antwort auflöst, die mit der ersten übereinstimmenden Anfrage im `Cache`-Objekt verbunden ist.
- {{domxref("Cache.matchAll()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich in ein Array aller übereinstimmenden Antworten im `Cache`-Objekt auflöst.
- {{domxref("Cache.add()")}}
  - : Nimmt eine URL, ruft diese ab und fügt das resultierende Antwortobjekt dem angegebenen Cache hinzu. Dies entspricht funktional dem Aufruf von `fetch()` und dem anschließenden Verwenden von `put()`, um die Ergebnisse dem Cache hinzuzufügen.
- {{domxref("Cache.addAll()")}}
  - : Nimmt ein Array von URLs, ruft diese ab und fügt die resultierenden Antwortobjekte dem angegebenen Cache hinzu.
- {{domxref("Cache.put()")}}
  - : Nimmt eine Anfrage und deren Antwort und fügt sie dem angegebenen Cache hinzu.
- {{domxref("Cache.delete()")}}
  - : Findet den `Cache`-Eintrag, dessen Schlüssel die Anfrage ist, und gibt ein {{jsxref("Promise")}} zurück, das sich zu `true` auflöst, wenn ein übereinstimmender `Cache`-Eintrag gefunden und gelöscht wird. Wenn kein `Cache`-Eintrag gefunden wird, wird das Versprechen auf `false` aufgelöst.
- {{domxref("Cache.keys()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich in ein Array von `Cache`-Schlüsseln auflöst.

## Beispiele

Dieses Codebeispiel stammt aus dem [Beispiel für selektives Caching des Service Workers](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js). (siehe [Selektives Caching live](https://googlechrome.github.io/samples/service-worker/selective-caching/)) Der Code verwendet {{domxref("CacheStorage.open()")}}, um alle `Cache`-Objekte mit einem `Content-Type`-Header zu öffnen, der mit `font/` beginnt.

Der Code verwendet dann {{domxref("Cache.match()")}}, um zu prüfen, ob bereits eine passende Schriftart im Cache vorhanden ist, und falls ja, gibt er diese zurück. Wenn keine passende Schriftart vorhanden ist, ruft der Code die Schriftart aus dem Netzwerk ab und verwendet {{domxref("Cache.put()")}}, um die abgerufene Ressource im Cache zu speichern.

Der Code behandelt Ausnahmen, die beim {{domxref("Window/fetch", "fetch()")}}-Vorgang ausgelöst werden. Beachten Sie, dass eine HTTP-Fehlerantwort (z.B. 404) keine Ausnahme auslöst. Es wird ein normales Antwortobjekt zurückgegeben, das den entsprechenden Fehlercode enthält.

Das Codebeispiel zeigt auch eine bewährte Methode zur Versionierung von Caches, die vom Service Worker verwendet werden. Obwohl in diesem Beispiel nur ein Cache verwendet wird, kann derselbe Ansatz für mehrere Caches verwendet werden. Es ordnet einen Kurznamensbezeichner für einen Cache einem bestimmten, versionierten Cache-Namen zu. Der Code löscht auch alle Caches, die nicht in `CURRENT_CACHES` benannt sind.

Im Codebeispiel ist `caches` eine Eigenschaft des {{domxref("ServiceWorkerGlobalScope")}}. Es hält das `CacheStorage`-Objekt, über das es auf die {{domxref("CacheStorage")}}-Schnittstelle zugreifen kann.

> [!NOTE]
> In Chrome besuchen Sie `chrome://inspect/#service-workers` und klicken Sie auf den „inspect“-Link unter dem registrierten Service-Worker, um Protokollierungsanweisungen für die verschiedenen Aktionen des [`service-worker.js`](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) Skripts anzuzeigen.

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
          // (see https://developer.mozilla.org/de/docs/Web/API/Request/clone)
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
              // https://developer.mozilla.org/de/docs/Web/API/Request/clone
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

Die [Fetch-API](/de/docs/Web/API/Fetch_API) fordert, dass {{httpheader("Set-Cookie")}}-Header entfernt werden, bevor ein {{domxref("Response")}}-Objekt von {{domxref("Window/fetch", "fetch()")}} zurückgegeben wird. Somit enthält eine im `Cache` gespeicherte `Response` keine `Set-Cookie`-Header und speichert daher keine Cookies.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
