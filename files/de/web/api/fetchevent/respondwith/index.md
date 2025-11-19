---
title: "FetchEvent: respondWith() Methode"
short-title: respondWith()
slug: Web/API/FetchEvent/respondWith
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`respondWith()`** Methode von [`FetchEvent`](/de/docs/Web/API/FetchEvent) verhindert die standardmäßige Fetch-Verarbeitung des Browsers und ermöglicht es Ihnen, selbst ein Versprechen für eine [`Response`](/de/docs/Web/API/Response) bereitzustellen.

In den meisten Fällen können Sie jede Antwort bereitstellen, die der Empfänger versteht. Wenn beispielsweise ein {{HTMLElement('img')}} die Anfrage initiiert, muss der Antwortinhalt Bilddaten sein. Aus Sicherheitsgründen gibt es einige globale Regeln:

- Sie können nur [`Response`](/de/docs/Web/API/Response) Objekte vom [`type`](/de/docs/Web/API/Response/type) `"opaque"` zurückgeben, wenn das Objekt [`fetchEvent.request`](/de/docs/Web/API/FetchEvent/request) den [`mode`](/de/docs/Web/API/Request/mode) `"no-cors"` hat. Dies verhindert das Auffinden privater Daten.
- Sie können nur [`Response`](/de/docs/Web/API/Response) Objekte vom [`type`](/de/docs/Web/API/Response/type) `"opaqueredirect"` zurückgeben, wenn das Objekt [`fetchEvent.request`](/de/docs/Web/API/FetchEvent/request) den [`mode`](/de/docs/Web/API/Request/mode) `"manual"` hat.
- Sie können keine [`Response`](/de/docs/Web/API/Response) Objekte vom [`type`](/de/docs/Web/API/Response/type) `"cors"` zurückgeben, wenn das Objekt [`fetchEvent.request`](/de/docs/Web/API/FetchEvent/request) den [`mode`](/de/docs/Web/API/Request/mode) `"same-origin"` hat.

## Syntax

```js-nolint
respondWith(response)
```

### Parameter

- `response`
  - : Eine [`Response`](/de/docs/Web/API/Response) oder ein {{jsxref("Promise")}}, das sich zu einer `Response` auflöst. Andernfalls wird ein Netzwerkfehler an Fetch zurückgegeben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Netzwerkfehler bei bestimmten Kombinationen von
    [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) und
    [`Response.type`](/de/docs/Web/API/Response/type) Werten ausgelöst wird, wie in den oben angeführten "globalen Regeln" angedeutet.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Ereignis noch nicht gesendet wurde oder `respondWith()` bereits aufgerufen wurde.

## Beschreibung

### Festlegen der endgültigen URL einer Ressource

Seit Firefox 59 wird, wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) an `FetchEvent.respondWith()` liefert, der Wert [`Response.url`](/de/docs/Web/API/Response/url) an die abgefangene Netzwerk-Anfrage als endgültige aufgelöste URL weitergegeben. Wenn der Wert [`Response.url`](/de/docs/Web/API/Response/url) der leere String ist, wird die [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) als endgültige URL verwendet.

In der Vergangenheit wurde die [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) in allen Fällen als endgültige URL verwendet. Die bereitgestellte [`Response.url`](/de/docs/Web/API/Response/url) wurde effektiv ignoriert.

Dies bedeutet beispielsweise, wenn ein Service Worker ein Stylesheet oder ein Worker-Skript abfängt, dann wird die bereitgestellte [`Response.url`](/de/docs/Web/API/Response/url) verwendet, um alle relativen {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Subressource-Ladevorgänge zu lösen ([Firefox Bug 1222008](https://bugzil.la/1222008)).

Für die meisten Arten von Netzwerk-Anfragen hat diese Änderung keine Auswirkungen, da Sie die endgültige URL nicht beobachten können. Es gibt jedoch einige, bei denen das wichtig ist:

- Wenn ein [`fetch()`](/de/docs/Web/API/Window/fetch) abgefangen wird, können Sie die endgültige URL im Ergebnis der [`Response.url`](/de/docs/Web/API/Response/url) beobachten.
- Wenn ein [Worker](/de/docs/Web/API/Web_Workers_API) Skript abgefangen wird, wird die endgültige URL verwendet, um
  [`self.location`](/de/docs/Web/API/WorkerGlobalScope/location) und als Basis-URL für relative URLs im Worker-Skript festzulegen.
- Wenn ein Stylesheet abgefangen wird, wird die endgültige URL als Basis-URL verwendet, um relative {{cssxref("@import")}} Ladevorgänge zu lösen.

Beachten Sie, dass Navigationsanfragen für [`Windows`](/de/docs/Web/API/Window) und [`iframes`](/de/docs/Web/API/HTMLIFrameElement) die endgültige URL NICHT verwenden. Die Art und Weise, wie die HTML-Spezifikation Umleitungen für Navigationen behandelt, verwendet letztendlich die Anforderungs-URL für das resultierende [`Window.location`](/de/docs/Web/API/Window/location). Dies bedeutet, dass Websites weiterhin eine "alternative" Ansicht einer Webseite bereitstellen können, wenn sie offline ist, ohne die für den Benutzer sichtbare URL zu ändern.

## Beispiele

Dieses Fetch-Ereignis versucht, eine Antwort von der Cache API zurückzugeben und fällt andernfalls auf das Netzwerk zurück.

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

> [!NOTE]
> [`caches.match()`](/de/docs/Web/API/CacheStorage/match) ist eine
> Komfortmethode. Die gleichwertige Funktionalität besteht darin,
> [`cache.match()`](/de/docs/Web/API/Cache/match) für jeden Cache (in der von
> [`caches.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegebenen Reihenfolge) aufzurufen, bis eine
> [`Response`](/de/docs/Web/API/Response) zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Fetch API](/de/docs/Web/API/Fetch_API)
