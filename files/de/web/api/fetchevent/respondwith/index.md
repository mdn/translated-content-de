---
title: "FetchEvent: respondWith() Methode"
short-title: respondWith()
slug: Web/API/FetchEvent/respondWith
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`respondWith()`**-Methode von [`FetchEvent`](/de/docs/Web/API/FetchEvent) verhindert die standardmäßige Behandlung von Fetch-Anfragen durch den Browser und ermöglicht es Ihnen, ein eigenes Versprechen für eine [`Response`](/de/docs/Web/API/Response) bereitzustellen.

In den meisten Fällen können Sie jede Antwort bereitstellen, die der Empfänger versteht. Wenn zum Beispiel ein {{HTMLElement('img')}} die Anfrage initiiert, muss der Antwortkörper Bilddaten enthalten. Aus Sicherheitsgründen gibt es einige allgemeine Regeln:

- Sie können nur [`Response`](/de/docs/Web/API/Response)-Objekte des [`type`](/de/docs/Web/API/Response/type) `"opaque"` zurückgeben, wenn das [`fetchEvent.request`](/de/docs/Web/API/FetchEvent/request)-Objekt den [`mode`](/de/docs/Web/API/Request/mode) `"no-cors"` hat. Dies verhindert, dass private Daten offengelegt werden.
- Sie können nur [`Response`](/de/docs/Web/API/Response)-Objekte des [`type`](/de/docs/Web/API/Response/type) `"opaqueredirect"` zurückgeben, wenn das [`fetchEvent.request`](/de/docs/Web/API/FetchEvent/request)-Objekt den [`mode`](/de/docs/Web/API/Request/mode) `"manual"` hat.
- Sie können keine [`Response`](/de/docs/Web/API/Response)-Objekte des [`type`](/de/docs/Web/API/Response/type) `"cors"` zurückgeben, wenn das [`fetchEvent.request`](/de/docs/Web/API/FetchEvent/request)-Objekt den [`mode`](/de/docs/Web/API/Request/mode) `"same-origin"` hat.

### Festlegen der finalen URL einer Ressource

Ab Firefox 59 wird, wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) an `FetchEvent.respondWith()` liefert, der Wert [`Response.url`](/de/docs/Web/API/Response/url) an die abgefangene Netzwerkanforderung als endgültige aufgelöste URL weitergegeben. Wenn der Wert [`Response.url`](/de/docs/Web/API/Response/url) der leere String ist, wird die [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) als finale URL verwendet.

In der Vergangenheit wurde die [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) in allen Fällen als finale URL verwendet. Die bereitgestellte [`Response.url`](/de/docs/Web/API/Response/url) wurde effektiv ignoriert.

Das bedeutet beispielsweise, dass wenn ein Service Worker ein Stylesheet oder ein Worker-Skript abfängt, die bereitgestellte [`Response.url`](/de/docs/Web/API/Response/url) zur Auflösung aller relativen {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)-Subresource-Ladevorgänge verwendet wird ([Firefox bug 1222008](https://bugzil.la/1222008)).

Für die meisten Arten von Netzwerkanfragen hat diese Änderung keine Auswirkungen, da die finale URL nicht sichtbar ist. Es gibt jedoch einige Fälle, in denen es von Bedeutung ist:

- Wenn ein [`fetch()`](/de/docs/Web/API/Window/fetch) abgefangen wird, können Sie die finale URL im Resultat der [`Response.url`](/de/docs/Web/API/Response/url) beobachten.
- Wenn ein [worker](/de/docs/Web/API/Web_Workers_API)-Skript abgefangen wird, wird die finale URL verwendet, um [`self.location`](/de/docs/Web/API/WorkerGlobalScope/location) zu setzen und als Basis-URL für relative URLs im Worker-Skript zu fungieren.
- Wenn ein Stylesheet abgefangen wird, wird die finale URL als Basis-URL für die Auflösung relativer {{cssxref("@import")}}-Ladevorgänge verwendet.

Beachten Sie, dass Navigationsanfragen für [`Windows`](/de/docs/Web/API/Window) und [`iframes`](/de/docs/Web/API/HTMLIFrameElement) die finale URL NICHT verwenden. Die Art und Weise, wie die HTML-Spezifikation Umleitungen für Navigationen behandelt, führt dazu, dass die Anforderungs-URL für die resultierende [`Window.location`](/de/docs/Web/API/Window/location) verwendet wird. Dies bedeutet, dass Websites immer noch eine "alternative" Ansicht einer Webseite bereitstellen können, wenn im Offline-Modus keine Änderung der benutzersichtbaren URL erfolgt.

## Syntax

```js-nolint
respondWith(response)
```

### Parameter

- `response`
  - : Eine [`Response`](/de/docs/Web/API/Response) oder ein {{jsxref("Promise")}}, das sich zu einer `Response` auflöst. Andernfalls wird ein Netzwerkfehler an Fetch zurückgemeldet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Netzwerkfehler bei bestimmten Kombinationen von [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) und [`Response.type`](/de/docs/Web/API/Response/type)-Werten ausgelöst wird, wie in den oben aufgeführten "allgemeinen Regeln" angedeutet.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Ereignis nicht gesendet wurde oder `respondWith()` bereits aufgerufen wurde.

## Beispiele

Dieses Fetch-Ereignis versucht, eine Antwort von der Cache-API zurückzugeben, andernfalls wird auf das Netzwerk zurückgegriffen.

```js
addEventListener("fetch", (event) => {
  // Prevent the default, and handle the request ourselves.
  event.respondWith(
    (async () => {
      // Try to get the response from a cache.
      const cachedResponse = await caches.match(event.request);
      // Return it if we found one.
      if (cachedResponse) return cachedResponse;
      // If we didn't find a match in the cache, use the network.
      return fetch(event.request);
    })(),
  );
});
```

> [!NOTE] > [`caches.match()`](/de/docs/Web/API/CacheStorage/match) ist eine Komfortmethode. Eine gleichwertige Funktionalität besteht darin, [`cache.match()`](/de/docs/Web/API/Cache/match) auf jedem Cache aufzurufen (in der Reihenfolge, in der diese von [`caches.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegeben werden), bis eine [`Response`](/de/docs/Web/API/Response) zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Fetch API](/de/docs/Web/API/Fetch_API)
