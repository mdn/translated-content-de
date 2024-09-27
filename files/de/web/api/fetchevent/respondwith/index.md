---
title: "FetchEvent: respondWith()-Methode"
short-title: respondWith()
slug: Web/API/FetchEvent/respondWith
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`respondWith()`**-Methode des
[`FetchEvent`](/de/docs/Web/API/FetchEvent) verhindert die standardmäßige Fetch-Verarbeitung des Browsers und ermöglicht es Ihnen, selbst ein `Promise` für eine [`Response`](/de/docs/Web/API/Response) bereitzustellen.

In den meisten Fällen können Sie jede Antwort bereitstellen, die der Empfänger versteht. Wenn zum Beispiel ein {{HTMLElement('img')}} die Anfrage initiiert, muss der Antwortinhalt Bilddaten umfassen. Aus Sicherheitsgründen gibt es einige globale Regeln:

- Sie können nur [`Response`](/de/docs/Web/API/Response)-Objekte des Typs [`type`](/de/docs/Web/API/Response/type) `"opaque"` zurückgeben, wenn das [`fetchEvent.request`](/de/docs/Web/API/FetchEvent/request)-Objekt den [`mode`](/de/docs/Web/API/Request/mode) `"no-cors"` hat. Dies verhindert das Lecken privater Daten.
- Sie können nur [`Response`](/de/docs/Web/API/Response)-Objekte des Typs [`type`](/de/docs/Web/API/Response/type) `"opaqueredirect"` zurückgeben, wenn das [`fetchEvent.request`](/de/docs/Web/API/FetchEvent/request)-Objekt den [`mode`](/de/docs/Web/API/Request/mode) `"manual"` hat.
- Sie können keine [`Response`](/de/docs/Web/API/Response)-Objekte des Typs [`type`](/de/docs/Web/API/Response/type) `"cors"` zurückgeben, wenn das [`fetchEvent.request`](/de/docs/Web/API/FetchEvent/request)-Objekt den [`mode`](/de/docs/Web/API/Request/mode) `"same-origin"` hat.

### Festlegen der endgültigen URL einer Ressource

Ab Firefox 59 propagiert die von einem Service Worker bereitgestellte [`Response`](/de/docs/Web/API/Response) zu `FetchEvent.respondWith()` den [`Response.url`](/de/docs/Web/API/Response/url)-Wert als die endgültige aufgelöste URL zur abgefangenen Netzwerkabfrage. Wenn der [`Response.url`](/de/docs/Web/API/Response/url)-Wert der leere String ist, wird die [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) als endgültige URL verwendet.

In der Vergangenheit wurde stets die [`FetchEvent.request.url`](/de/docs/Web/API/Request/url) als endgültige URL verwendet. Der bereitgestellte [`Response.url`](/de/docs/Web/API/Response/url) wurde effektiv ignoriert.

Das bedeutet beispielsweise, dass bei Abfang eines Stylesheets oder Worker-Skripts durch einen Service Worker die bereitgestellte [`Response.url`](/de/docs/Web/API/Response/url) zur Auflösung etwaiger relativer {{cssxref("@import")}} oder [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts)-Subressourcen verwendet wird ([Firefox-Bug 1222008](https://bugzil.la/1222008)).

Für die meisten Arten von Netzwerkabfragen hat diese Änderung keine Auswirkungen, da Sie die endgültige URL nicht beobachten können. Es gibt jedoch einige Fälle, in denen es wichtig ist:

- Wenn ein [`fetch()`](/de/docs/Web/API/Window/fetch) abgefangen wird, können Sie die endgültige URL am [`Response.url`](/de/docs/Web/API/Response/url) des Ergebnisses beobachten.
- Wenn ein [Worker](/de/docs/Web/API/Web_Workers_API)-Skript abgefangen wird, wird die endgültige URL verwendet, um [`self.location`](/de/docs/Web/API/WorkerGlobalScope/location) festzulegen und als Basis-URL für relative URLs im Worker-Skript verwendet.
- Wenn ein Stylesheet abgefangen wird, wird die endgültige URL als Basis-URL für die Auflösung relativer {{cssxref("@import")}}-Ladungen verwendet.

Bitte beachten Sie, dass Navigationsanfragen für [`Windows`](/de/docs/Web/API/Window) und [`iframes`](/de/docs/Web/API/HTMLIFrameElement) NICHT die endgültige URL verwenden. Die Art und Weise, wie die HTML-Spezifikation Weiterleitungen für Navigationsanfragen behandelt, führt dazu, dass die Anforderungs-URL für das resultierende [`Window.location`](/de/docs/Web/API/Window/location) verwendet wird. Dies bedeutet, dass Websites immer noch eine "alternative" Ansicht einer Webseite bereitstellen können, wenn sie offline sind, ohne die für den Benutzer sichtbare URL zu ändern.

## Syntax

```js-nolint
respondWith(response)
```

### Parameter

- `response`
  - : Eine [`Response`](/de/docs/Web/API/Response) oder ein {{jsxref("Promise")}}, das zu einer `Response` aufgelöst wird. Andernfalls wird ein Netzwerkfehler zum Fetch zurückgegeben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Netzwerkfehler bei bestimmten Kombinationen von [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) und [`Response.type`](/de/docs/Web/API/Response/type)-Werten auftritt, wie in den oben aufgeführten "globalen Regeln" angedeutet.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Ereignis nicht ausgelöst wurde oder `respondWith()` bereits aufgerufen wurde.

## Beispiele

Dieses Fetch-Ereignis versucht, eine Antwort aus der Cache-API zurückzugeben und fällt andernfalls auf das Netzwerk zurück.

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

> **Hinweis:** [`caches.match()`](/de/docs/Web/API/CacheStorage/match) ist eine praktische Methode. Entsprechende Funktionalität besteht darin, [`cache.match()`](/de/docs/Web/API/Cache/match) auf jedem Cache (in der von [`caches.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegebenen Reihenfolge) aufzurufen, bis eine [`Response`](/de/docs/Web/API/Response) zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Fetch API](/de/docs/Web/API/Fetch_API)
