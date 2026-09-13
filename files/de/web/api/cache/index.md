---
title: Cache
slug: Web/API/Cache
l10n:
  sourceCommit: 5415d3f4ce7dde04c2b7d26b93298ffb5f259d64
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`Cache`**-Schnittstelle stellt einen persistenten Speichermechanismus für Paare aus [`Request`](/de/docs/Web/API/Request)- und [`Response`](/de/docs/Web/API/Response)-Objekten bereit, die im langlebigen Speicher zwischengespeichert werden. Wie lange ein `Cache`-Objekt besteht, hängt vom Browser ab, aber die Skripte einer einzelnen Origin können sich typischerweise auf das Vorhandensein eines zuvor gefüllten `Cache`-Objekts verlassen. Beachten Sie, dass die `Cache`-Schnittstelle sowohl für Window-Kontexte als auch für Worker verfügbar ist. Sie müssen sie nicht in Verbindung mit Service Workers verwenden, obwohl sie in der Service-Worker-Spezifikation definiert ist.

Eine Origin kann mehrere benannte `Cache`-Objekte haben. Sie sind dafür verantwortlich, zu implementieren, wie Ihr Skript (z. B. in einem [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)) `Cache`-Aktualisierungen verarbeitet. Elemente in einem `Cache` werden nicht aktualisiert, sofern dies nicht ausdrücklich angefordert wird; sie laufen nicht ab, sofern sie nicht gelöscht werden. Verwenden Sie [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein bestimmtes benanntes `Cache`-Objekt zu öffnen, und rufen Sie anschließend eine der `Cache`-Methoden auf, um den `Cache` zu verwalten.

Sie sind außerdem dafür verantwortlich, Cache-Einträge regelmäßig zu bereinigen. Jeder Browser hat ein festes Limit für die Menge an Cache-Speicher, die eine bestimmte Origin verwenden kann. Schätzungen zur `Cache`-Quota-Nutzung sind über die Methode [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate) verfügbar. Der Browser bemüht sich nach besten Kräften, den Speicherplatz zu verwalten, kann jedoch den `Cache`-Speicher einer Origin löschen. Der Browser löscht im Allgemeinen entweder alle Daten einer Origin oder keine Daten einer Origin. Stellen Sie sicher, dass Sie Caches anhand ihres Namens versionieren und die Caches nur von der Skriptversion aus verwenden, die sie sicher verarbeiten kann. Weitere Informationen finden Sie unter [Alte Caches löschen](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#deleting_old_caches).

> [!NOTE]
> Der Algorithmus zum Abgleichen von Schlüsseln hängt vom [VARY-Header](https://www.fastly.com/blog/best-practices-using-vary-header) im Wert ab. Das Abgleichen eines neuen Schlüssels erfordert daher, sowohl Schlüssel als auch Wert der Einträge im `Cache`-Objekt zu betrachten.

> [!NOTE]
> Die Caching-API berücksichtigt keine HTTP-Caching-Header.

## Instanzmethoden

- [`Cache.match()`](/de/docs/Web/API/Cache/match)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der Antwort aufgelöst wird, die der ersten übereinstimmenden Anfrage im `Cache`-Objekt zugeordnet ist.
- [`Cache.matchAll()`](/de/docs/Web/API/Cache/matchAll)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array aller übereinstimmenden Antworten im `Cache`-Objekt aufgelöst wird.
- [`Cache.add()`](/de/docs/Web/API/Cache/add)
  - : Übernimmt eine URL, ruft sie ab und fügt das resultierende Antwortobjekt dem angegebenen Cache hinzu. Funktional entspricht dies dem Aufruf von `fetch()` und der anschließenden Verwendung von `put()`, um die Ergebnisse zum Cache hinzuzufügen.
- [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll)
  - : Übernimmt ein Array von URLs, ruft sie ab und fügt die resultierenden Antwortobjekte dem angegebenen Cache hinzu.
- [`Cache.put()`](/de/docs/Web/API/Cache/put)
  - : Übernimmt sowohl eine Anfrage als auch ihre Antwort und fügt sie dem angegebenen Cache hinzu.
- [`Cache.delete()`](/de/docs/Web/API/Cache/delete)
  - : Sucht den `Cache`-Eintrag, dessen Schlüssel die Anfrage ist, und gibt ein {{jsxref("Promise")}} zurück, das mit `true` aufgelöst wird, wenn ein übereinstimmender `Cache`-Eintrag gefunden und gelöscht wird. Wird kein `Cache`-Eintrag gefunden, wird das Promise mit `false` aufgelöst.
- [`Cache.keys()`](/de/docs/Web/API/Cache/keys)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von `Cache`-Schlüsseln aufgelöst wird.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Beispiel für selektives Caching mit Service Workers](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js). (Siehe [selektives Caching in Aktion](https://googlechrome.github.io/samples/service-worker/selective-caching/).) Der Code verwendet [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um alle `Cache`-Objekte mit einem `Content-Type`-Header zu öffnen, der mit `font/` beginnt.

Der Code verwendet anschließend [`Cache.match()`](/de/docs/Web/API/Cache/match), um zu prüfen, ob sich bereits eine übereinstimmende Schriftart im Cache befindet, und gibt diese gegebenenfalls zurück. Wenn keine übereinstimmende Schriftart vorhanden ist, ruft der Code die Schriftart aus dem Netzwerk ab und verwendet [`Cache.put()`](/de/docs/Web/API/Cache/put), um die abgerufene Ressource zwischenzuspeichern.

Der Code verarbeitet Ausnahmen, die von der Operation [`fetch()`](/de/docs/Web/API/Window/fetch) ausgelöst werden. Beachten Sie, dass eine HTTP-Fehlerantwort (z. B. 404) keine Ausnahme auslöst. Sie gibt ein normales Antwortobjekt mit dem entsprechenden Fehlercode zurück.

Der Codeausschnitt zeigt außerdem eine bewährte Methode zur Versionierung von Caches, die vom Service Worker verwendet werden. Obwohl es in diesem Beispiel nur einen Cache gibt, kann derselbe Ansatz für mehrere Caches verwendet werden. Er ordnet einen Kurzbezeichner für einen Cache einem bestimmten versionierten Cache-Namen zu. Der Code löscht außerdem alle Caches, die nicht in `CURRENT_CACHES` benannt sind.

Im Codebeispiel ist `caches` eine Eigenschaft von [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope). Sie enthält das `CacheStorage`-Objekt, über das auf die [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Schnittstelle zugegriffen werden kann.

> [!NOTE]
> Rufen Sie in Chrome `chrome://inspect/#service-workers` auf und klicken Sie unter dem registrierten Service Worker auf den Link „inspect“, um Protokollmeldungen für die verschiedenen Aktionen anzuzeigen, die das Skript [`service-worker.js`](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) ausführt.

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
    (async () => {
      try {
        const cache = await caches.open(CURRENT_CACHES.font);
        let response = await cache.match(event.request);

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
        response = await fetch(event.request.clone());
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
      } catch (error) {
        // This catch block will handle exceptions that arise from the match()
        // or fetch() operations.
        // Note that a HTTP error response (e.g. 404) will NOT trigger
        // an exception.
        // It will return a normal response object that has the appropriate
        // error code set.
        console.error("  Error in fetch handler:", error);

        throw error;
      }
    })(),
  );
});
```

### Cookies und `Cache`-Objekte

Die [Fetch API](/de/docs/Web/API/Fetch_API) erfordert, dass {{httpheader("Set-Cookie")}}-Header entfernt werden, bevor ein [`Response`](/de/docs/Web/API/Response)-Objekt von [`fetch()`](/de/docs/Web/API/Window/fetch) zurückgegeben wird. Daher enthält eine in einem `Cache` gespeicherte `Response` keine `Set-Cookie`-Header und führt folglich nicht dazu, dass Cookies gespeichert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Workers verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
