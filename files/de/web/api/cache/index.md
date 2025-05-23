---
title: Cache
slug: Web/API/Cache
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`Cache`**-Interface bietet einen persistenten Speichermechanismus für [`Request`](/de/docs/Web/API/Request) / [`Response`](/de/docs/Web/API/Response)-Objektpaare, die im langlebigen Speicher zwischengespeichert sind. Wie lange ein `Cache`-Objekt lebt, hängt vom Browser ab, aber Skripte eines einzelnen Ursprungs können typischerweise auf das Vorhandensein eines zuvor gefüllten `Cache`-Objekts vertrauen. Beachten Sie, dass das `Cache`-Interface sowohl für Fensterkontexte als auch für Worker zugänglich ist. Es muss nicht in Verbindung mit Service Workern verwendet werden, obwohl es in der Service Worker Spezifikation definiert ist.

Ein Ursprung kann mehrere, benannte `Cache`-Objekte haben. Sie sind dafür verantwortlich, wie Ihr Skript (z.B. in einem [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)) `Cache`-Updates behandelt. Elemente in einem `Cache` werden nicht aktualisiert, es sei denn, dies wird explizit angefordert; sie laufen nicht ab, es sei denn, sie werden gelöscht. Verwenden Sie [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein bestimmtes benanntes `Cache`-Objekt zu öffnen und rufen Sie dann eine der `Cache`-Methoden auf, um den `Cache` zu verwalten.

Sie sind auch dafür verantwortlich, regelmäßig Cache-Einträge zu bereinigen. Jeder Browser hat ein festes Limit für die Menge des Cachespeichers, den ein bestimmter Ursprung verwenden kann. Schätzungen zur `Cache`-Quotennutzung sind über die [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate)-Methode verfügbar. Der Browser tut sein Bestes, um Speicherplatz zu verwalten, es kann jedoch passieren, dass der Cache-Speicher eines Ursprungs gelöscht wird. Der Browser wird in der Regel entweder alle Daten eines Ursprungs oder keine löschen. Stellen Sie sicher, dass Sie Caches nach Namen versionieren und nutzen Sie die Caches nur aus der Version des Skripts, mit dem sie sicher arbeiten können. Siehe [Löschen alter Caches](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#deleting_old_caches) für weitere Informationen.

> [!NOTE]
> Der Schlüsselerkennungsalgorithmus hängt von der [VARY-Header](https://www.fastly.com/blog/best-practices-using-vary-header) im Wert ab. Das Matching eines neuen Schlüssels erfordert daher, dass sowohl Schlüssel als auch Wert für Einträge im `Cache`-Objekt betrachtet werden.

> [!NOTE]
> Die Caching-API hält sich nicht an HTTP-Caching-Header.

## Instanzmethoden

- [`Cache.match()`](/de/docs/Web/API/Cache/match)
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf die Antwort für die erste übereinstimmende Anfrage im `Cache`-Objekt auflöst.
- [`Cache.matchAll()`](/de/docs/Web/API/Cache/matchAll)
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf ein Array aller übereinstimmenden Antworten im `Cache`-Objekt auflöst.
- [`Cache.add()`](/de/docs/Web/API/Cache/add)
  - : Nimmt eine URL, ruft sie ab und fügt das resultierende Antwortobjekt dem angegebenen Cache hinzu. Dies ist funktional äquivalent zum Aufruf von `fetch()`, gefolgt von `put()`, um die Ergebnisse dem Cache hinzuzufügen.
- [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll)
  - : Nimmt ein Array von URLs, ruft sie ab und fügt die resultierenden Antwortobjekte dem angegebenen Cache hinzu.
- [`Cache.put()`](/de/docs/Web/API/Cache/put)
  - : Nimmt sowohl eine Anfrage als auch ihre Antwort und fügt sie dem angegebenen Cache hinzu.
- [`Cache.delete()`](/de/docs/Web/API/Cache/delete)
  - : Findet den `Cache`-Eintrag, dessen Schlüssel die Anfrage ist, und gibt ein {{jsxref("Promise")}} zurück, das auf `true` auflöst, wenn ein übereinstimmender `Cache`-Eintrag gefunden und gelöscht wird. Wenn kein `Cache`-Eintrag gefunden wird, löst das Promise auf `false` auf.
- [`Cache.keys()`](/de/docs/Web/API/Cache/keys)
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf ein Array von `Cache`-Schlüsseln auflöst.

## Beispiele

Dieses Codebeispiel stammt aus dem [Service Worker selektives Caching-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js). (siehe [selektives Caching live](https://googlechrome.github.io/samples/service-worker/selective-caching/)) Der Code verwendet [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um alle `Cache`-Objekte zu öffnen, die mit einem `Content-Type`-Header, der mit `font/` beginnt, ausgestattet sind.

Der Code verwendet dann [`Cache.match()`](/de/docs/Web/API/Cache/match), um zu prüfen, ob es bereits eine übereinstimmende Schriftart im Cache gibt, und wenn ja, gibt er diese zurück. Wenn es keine übereinstimmende Schriftart gibt, ruft der Code die Schriftart aus dem Netzwerk ab und verwendet [`Cache.put()`](/de/docs/Web/API/Cache/put), um die abgerufene Ressource im Cache zu speichern.

Der Code behandelt Ausnahmen, die bei der [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation auftreten. Beachten Sie, dass eine HTTP-Fehlerantwort (z.B. 404) keine Ausnahme auslösen wird. Sie wird ein normales Antwortobjekt zurückgeben, das den entsprechenden Fehlercode enthält.

Das Codebeispiel zeigt auch eine bewährte Praxis zur Versionierung von Caches, die vom Service Worker verwendet werden. Obwohl es in diesem Beispiel nur einen Cache gibt, kann derselbe Ansatz für mehrere Caches verwendet werden. Er ordnet einen Kurzidentifikator für einen Cache einem spezifischen, versionierten Cachennamen zu. Der Code löscht außerdem alle Caches, die nicht in `CURRENT_CACHES` benannt sind.

Im Codebeispiel ist `caches` eine Eigenschaft des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope). Es hält das `CacheStorage`-Objekt, über das es auf das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Interface zugreifen kann.

> [!NOTE]
> In Chrome können Sie `chrome://inspect/#service-workers` besuchen und auf den "inspect"-Link unter dem registrierten Service Worker klicken, um Protokollaussagen für die verschiedenen Aktionen anzuzeigen, die das Skript [`service-worker.js`](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) ausführt.

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
          return undefined;
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

Die [Fetch API](/de/docs/Web/API/Fetch_API) verlangt, dass {{httpheader("Set-Cookie")}}-Header entfernt werden, bevor ein [`Response`](/de/docs/Web/API/Response)-Objekt von [`fetch()`](/de/docs/Web/API/Window/fetch) zurückgegeben wird. Daher wird eine `Response`, die in einem `Cache` gespeichert ist, keine `Set-Cookie`-Header enthalten und daher keine Cookies speichern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel zu Service Workern](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Arbeiten mit Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
