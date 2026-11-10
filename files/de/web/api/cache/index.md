---
title: Cache
slug: Web/API/Cache
l10n:
  sourceCommit: edc9ab5479d1253d9edd93bfe90dd1d100605c26
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`Cache`**-Schnittstelle bietet einen dauerhaften Speichermechanismus für Paare aus [`Request`](/de/docs/Web/API/Request)- und [`Response`](/de/docs/Web/API/Response)-Objekten, die langfristig zwischengespeichert werden. Wie lange ein `Cache`-Objekt bestehen bleibt, hängt vom Browser ab. Skripte desselben Ursprungs können sich in der Regel jedoch darauf verlassen, dass ein zuvor befülltes `Cache`-Objekt noch vorhanden ist. Die `Cache`-Schnittstelle ist sowohl in Fensterkontexten als auch in Workern verfügbar. Sie müssen sie nicht zusammen mit Service Workern verwenden, obwohl sie in der Service-Worker-Spezifikation definiert ist.

Ein Ursprung kann mehrere benannte `Cache`-Objekte haben. Sie sind dafür verantwortlich, festzulegen, wie Ihr Skript (z. B. in einem [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)) Aktualisierungen des `Cache` handhabt. Einträge in einem `Cache` werden nur auf ausdrückliche Anforderung aktualisiert und laufen nicht ab, sofern sie nicht gelöscht werden. Verwenden Sie [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein bestimmtes benanntes `Cache`-Objekt zu öffnen, und rufen Sie anschließend die Methoden von `Cache` auf, um es zu verwalten.

Sie sind außerdem dafür verantwortlich, Cache-Einträge regelmäßig zu entfernen. Jeder Browser begrenzt die Menge an Cache-Speicher, die ein bestimmter Ursprung verwenden kann. Schätzungen zur Speichernutzung durch `Cache` sind über die Methode [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate) verfügbar. Der Browser versucht, den Speicherplatz zu verwalten, kann aber den `Cache`-Speicher eines Ursprungs löschen. In der Regel löscht er entweder alle Daten eines Ursprungs oder keine. Vergeben Sie für Caches daher versionsbezogene Namen und verwenden Sie sie nur mit der Version des Skripts, mit der sie sicher funktionieren. Weitere Informationen finden Sie unter [Alte Caches löschen](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#deleting_old_caches).

> [!NOTE]
> Der Algorithmus für den Schlüsselabgleich hängt vom [VARY-Header](https://www.fastly.com/blog/best-practices-using-vary-header) im Wert ab. Um einen neuen Schlüssel abzugleichen, müssen daher sowohl der Schlüssel als auch der Wert der Einträge im `Cache`-Objekt betrachtet werden.

> [!NOTE]
> Die Caching-API berücksichtigt keine HTTP-Caching-Header.

## Instanzmethoden

- [`Cache.match()`](/de/docs/Web/API/Cache/match)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit der Antwort zur ersten übereinstimmenden Anfrage im `Cache`-Objekt erfüllt wird.
- [`Cache.matchAll()`](/de/docs/Web/API/Cache/matchAll)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array aller übereinstimmenden Antworten im `Cache`-Objekt erfüllt wird.
- [`Cache.add()`](/de/docs/Web/API/Cache/add)
  - : Nimmt eine URL entgegen, ruft sie ab und fügt das resultierende Antwortobjekt dem angegebenen Cache hinzu. Dies entspricht funktional einem Aufruf von `fetch()`, gefolgt von `put()`, um das Ergebnis dem Cache hinzuzufügen.
- [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll)
  - : Nimmt ein Array von URLs entgegen, ruft sie ab und fügt die resultierenden Antwortobjekte dem angegebenen Cache hinzu.
- [`Cache.put()`](/de/docs/Web/API/Cache/put)
  - : Nimmt eine Anfrage und die zugehörige Antwort entgegen und fügt sie dem angegebenen Cache hinzu.
- [`Cache.delete()`](/de/docs/Web/API/Cache/delete)
  - : Sucht den `Cache`-Eintrag, dessen Schlüssel der Anfrage entspricht, und gibt ein {{jsxref("Promise")}} zurück, das mit `true` erfüllt wird, wenn ein übereinstimmender `Cache`-Eintrag gefunden und gelöscht wurde. Wird kein `Cache`-Eintrag gefunden, wird das Promise mit `false` erfüllt.
- [`Cache.keys()`](/de/docs/Web/API/Cache/keys)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Array von `Cache`-Schlüsseln erfüllt wird.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Beispiel für selektives Caching mit einem Service Worker](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) (siehe [Live-Demo für selektives Caching](https://googlechrome.github.io/samples/service-worker/selective-caching/)). Der Code verwendet [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein `Cache`-Objekt zu öffnen, und verarbeitet Anfragen mit einem `Content-Type`-Header, der mit `font/` beginnt.

Anschließend verwendet der Code [`Cache.match()`](/de/docs/Web/API/Cache/match), um zu prüfen, ob bereits eine passende Schriftart im Cache vorhanden ist. Falls ja, gibt er sie zurück. Andernfalls ruft der Code die Schriftart aus dem Netzwerk ab und speichert die abgerufene Ressource mit [`Cache.put()`](/de/docs/Web/API/Cache/put) im Cache.

Der Code behandelt Ausnahmen, die beim Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) ausgelöst werden. Beachten Sie, dass eine HTTP-Fehlerantwort (z. B. 404) keine Ausnahme auslöst. Stattdessen wird ein normales Antwortobjekt mit dem entsprechenden Fehlercode zurückgegeben.

Der Codeausschnitt zeigt außerdem eine bewährte Vorgehensweise zur Versionierung der vom Service Worker verwendeten Caches. Obwohl es in diesem Beispiel nur einen Cache gibt, lässt sich derselbe Ansatz für mehrere Caches verwenden. Dabei wird eine Kurzbezeichnung für einen Cache einem bestimmten, mit einer Versionsangabe versehenen Cache-Namen zugeordnet. Der Code löscht außerdem alle Caches, die nicht in `CURRENT_CACHES` aufgeführt sind.

Im Codebeispiel ist `caches` eine Eigenschaft von [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope). Sie enthält das `CacheStorage`-Objekt, über das auf die [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Schnittstelle zugegriffen werden kann.

> [!NOTE]
> Rufen Sie in Chrome `chrome://inspect/#service-workers` auf und klicken Sie unter dem registrierten Service Worker auf den Link „inspect“, um die Protokollmeldungen zu den verschiedenen Aktionen des Skripts [`service-worker.js`](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js) anzusehen.

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
        // Note that an HTTP error response (e.g. 404) will NOT trigger
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

### Cookies und Cache-Objekte

Die [Fetch API](/de/docs/Web/API/Fetch_API) verlangt, dass {{httpheader("Set-Cookie")}}-Header entfernt werden, bevor [`fetch()`](/de/docs/Web/API/Window/fetch) ein [`Response`](/de/docs/Web/API/Response)-Objekt zurückgibt. Eine in einem `Cache` gespeicherte `Response` enthält daher keine `Set-Cookie`-Header und bewirkt somit nicht, dass Cookies gespeichert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
