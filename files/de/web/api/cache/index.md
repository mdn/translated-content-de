---
title: Cache
slug: Web/API/Cache
l10n:
  sourceCommit: 4a0413ef319179b7d0d833c42a156629544c8248
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`Cache`**-Interface bietet einen persistenten Speichermechanismus für [`Request`](/de/docs/Web/API/Request) / [`Response`](/de/docs/Web/API/Response)-Objektpaare, die im Langzeitspeicher zwischengespeichert sind. Wie lange ein `Cache`-Objekt erhalten bleibt, hängt vom Browser ab, aber die Skripte eines einzelnen Ursprungs können typischerweise auf die Anwesenheit eines zuvor gefüllten `Cache`-Objekts vertrauen. Beachten Sie, dass das `Cache`-Interface sowohl in fensterorientierten Kontexten als auch in Workern verfügbar ist. Sie müssen es nicht in Verbindung mit Service Workern verwenden, obwohl es in der Service Worker-Spezifikation definiert ist.

Ein Ursprung kann mehrere, benannte `Cache`-Objekte haben. Sie sind dafür verantwortlich, wie Ihr Skript (z. B. in einem [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)) die `Cache`-Aktualisierungen behandelt. Elemente in einem `Cache` werden nicht aktualisiert, es sei denn, es wird ausdrücklich angefordert; sie verfallen nicht, es sei denn, sie werden gelöscht. Verwenden Sie [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um ein spezifisches benanntes `Cache`-Objekt zu öffnen und dann eine der `Cache`-Methoden zu verwenden, um den `Cache` zu verwalten.

Sie sind auch dafür verantwortlich, die Cache-Einträge regelmäßig zu bereinigen. Jeder Browser hat ein striktes Limit für die Menge an Cache-Speicher, die ein gegebener Ursprung verwenden kann. Schätzungen zur Verwendung des `Cache`-Quotas sind über die Methode [`StorageManager.estimate()`](/de/docs/Web/API/StorageManager/estimate) verfügbar. Der Browser verwaltet den Speicherplatz nach bestem Vermögen, kann jedoch den `Cache`-Speicher für einen Ursprung löschen. Der Browser wird in der Regel alle Daten für einen Ursprung oder keine Daten für einen Ursprung löschen. Stellen Sie sicher, dass Sie Caches nach Namen versionieren und verwenden Sie die Caches nur von der Version des Skripts, auf der sie sicher betrieben werden können. Siehe [Löschen alter Caches](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers#deleting_old_caches) für weitere Informationen.

> [!NOTE]
> Der Schlüsselvergleichsalgorithmus hängt vom [VARY-Header](https://www.fastly.com/blog/best-practices-using-vary-header) im Wert ab. Das Matching eines neuen Schlüssels erfordert also das Betrachten sowohl des Schlüssels als auch des Wertes für Einträge im `Cache`-Objekt.

> [!NOTE]
> Die Caching-API beachtet keine HTTP-Caching-Header.

## Instanzmethoden

- [`Cache.match()`](/de/docs/Web/API/Cache/match)
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf die Antwort auf einen übereinstimmenden ersten Request im `Cache`-Objekt auflöst.
- [`Cache.matchAll()`](/de/docs/Web/API/Cache/matchAll)
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf ein Array aller übereinstimmenden Antworten im `Cache`-Objekt auflöst.
- [`Cache.add()`](/de/docs/Web/API/Cache/add)
  - : Nimmt eine URL, ruft sie ab und fügt das resultierende Response-Objekt dem angegebenen Cache hinzu. Dies ist funktional äquivalent dazu, `fetch()` aufzurufen und dann `put()` zu verwenden, um die Ergebnisse dem Cache hinzuzufügen.
- [`Cache.addAll()`](/de/docs/Web/API/Cache/addAll)
  - : Nimmt ein Array von URLs, ruft sie ab und fügt die resultierenden Response-Objekte dem angegebenen Cache hinzu.
- [`Cache.put()`](/de/docs/Web/API/Cache/put)
  - : Nimmt sowohl eine Anfrage als auch die zugehörige Antwort und fügt sie dem angegebenen Cache hinzu.
- [`Cache.delete()`](/de/docs/Web/API/Cache/delete)
  - : Findet den `Cache`-Eintrag, dessen Schlüssel die Anfrage ist, und gibt ein {{jsxref("Promise")}} zurück, das auf `true` auflöst, wenn ein übereinstimmender `Cache`-Eintrag gefunden und gelöscht wird. Wenn kein `Cache`-Eintrag gefunden wird, löst sich das Promise auf `false` auf.
- [`Cache.keys()`](/de/docs/Web/API/Cache/keys)
  - : Gibt ein {{jsxref("Promise")}} zurück, das auf ein Array von `Cache`-Schlüsseln auflöst.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Service Worker selective caching sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js). (siehe [selective caching live](https://googlechrome.github.io/samples/service-worker/selective-caching/)) Der Code verwendet [`CacheStorage.open()`](/de/docs/Web/API/CacheStorage/open), um alle `Cache`-Objekte mit einem `Content-Type`-Header zu öffnen, der mit `font/` beginnt.

Der Code verwendet dann [`Cache.match()`](/de/docs/Web/API/Cache/match), um zu sehen, ob bereits eine passende Schriftart im Cache vorhanden ist, und falls ja, wird sie zurückgegeben. Wenn keine passende Schriftart vorhanden ist, lädt der Code die Schriftart aus dem Netzwerk und verwendet [`Cache.put()`](/de/docs/Web/API/Cache/put), um die geladene Ressource im Cache zu speichern.

Der Code behandelt Ausnahmen, die durch die [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation auftreten. Beachten Sie, dass eine HTTP-Fehlerantwort (z. B. 404) keine Ausnahme auslöst. Sie wird ein normales Antwortobjekt zurückgeben, das den entsprechenden Fehlercode enthält.

Der Codeausschnitt zeigt auch eine bewährte Methode für die Versionierung von Caches, die vom Service Worker verwendet werden. Obwohl es in diesem Beispiel nur einen Cache gibt, kann derselbe Ansatz für mehrere Caches verwendet werden. Es weist einem Cache einen Kurzbezeichner zu, der einem spezifischen, versionierten Cachenamen entspricht. Der Code löscht auch alle Caches, die nicht in `CURRENT_CACHES` benannt sind.

Im Codebeispiel ist `caches` eine Eigenschaft des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope). Sie enthält das `CacheStorage`-Objekt, über das das [`CacheStorage`](/de/docs/Web/API/CacheStorage)-Interface aufgerufen werden kann.

> [!NOTE]
> In Chrome können Sie `chrome://inspect/#service-workers` besuchen und auf den "inspektieren"-Link unter dem registrierten Service Worker klicken, um die Protokollierungsaussagen für die verschiedenen Aktionen des [`service-worker.js`](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/selective-caching/service-worker.js)-Skripts zu sehen.

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
    caches
      .open(CURRENT_CACHES.font)
      .then((cache) => cache.match(event.request))
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
      }),
  );
});
```

### Cookies und Cache-Objekte

Die [Fetch API](/de/docs/Web/API/Fetch_API) erfordert, dass {{httpheader("Set-Cookie")}}-Header entfernt werden, bevor ein [`Response`](/de/docs/Web/API/Response)-Objekt von [`fetch()`](/de/docs/Web/API/Window/fetch) zurückgegeben wird. Daher wird eine `Response`, die in einem `Cache` gespeichert ist, keine `Set-Cookie`-Header enthalten und folglich werden keine Cookies gespeichert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Webworkern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
