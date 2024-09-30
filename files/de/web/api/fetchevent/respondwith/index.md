---
title: "FetchEvent: respondWith() Methode"
short-title: respondWith()
slug: Web/API/FetchEvent/respondWith
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`respondWith()`**-Methode von
[`FetchEvent`](/de/docs/Web/API/FetchEvent) verhindert die standardmäßige Verarbeitung von Fetch-Anfragen durch den Browser und ermöglicht es Ihnen, selbst ein Versprechen für eine [`Response`](/de/docs/Web/API/Response) bereitzustellen.

In den meisten Fällen können Sie jede Antwort bereitstellen, die der Empfänger versteht. Zum Beispiel,
wenn ein {{HTMLElement('img')}} die Anfrage initiiert, muss der Antwortinhalt Bilddaten enthalten. Aus Sicherheitsgründen gibt es einige allgemeine Regeln:

- Sie können nur [`Response`](/de/docs/Web/API/Response)-Objekte vom [`type`](/de/docs/Web/API/Response/type)
  `"opaque"` zurückgeben, wenn das [`fetchEvent.request`](/de/docs/Web/API/FetchEvent/request) Objekt
  [`mode`](/de/docs/Web/API/Request/mode) auf `"no-cors"` gesetzt ist. Dies verhindert das
  Auslaufen privater Daten.
- Sie können nur [`Response`](/de/docs/Web/API/Response)-Objekte vom [`type`](/de/docs/Web/API/Response/type)
  `"opaqueredirect"` zurückgeben, wenn das [`fetchEvent.request`](/de/docs/Web/API/FetchEvent/request)
  Objekt [`mode`](/de/docs/Web/API/Request/mode) auf `"manual"` gesetzt ist.
- Sie können keine [`Response`](/de/docs/Web/API/Response)-Objekte vom [`type`](/de/docs/Web/API/Response/type)
  `"cors"` zurückgeben, wenn das [`fetchEvent.request`](/de/docs/Web/API/FetchEvent/request) Objekt
  [`mode`](/de/docs/Web/API/Request/mode) auf `"same-origin"` gesetzt ist.

### Festlegen der finalen URL einer Ressource

Ab Firefox 59 wird, wenn ein Service Worker eine [`Response`](/de/docs/Web/API/Response) an
`FetchEvent.respondWith()` bereitstellt, der Wert von [`Response.url`](/de/docs/Web/API/Response/url)
an die abgefangene Netzwerk-Anfrage als endgültige aufgelöste URL weitergegeben. Wenn der
[`Response.url`](/de/docs/Web/API/Response/url)-Wert ein leerer String ist, dann wird die
[`FetchEvent.request.url`](/de/docs/Web/API/Request/url) als finale URL verwendet.

In der Vergangenheit wurde in allen Fällen die [`FetchEvent.request.url`](/de/docs/Web/API/Request/url)
als finale URL verwendet. Die bereitgestellte [`Response.url`](/de/docs/Web/API/Response/url) wurde effektiv
ignoriert.

Das bedeutet zum Beispiel, wenn ein Service Worker ein Stylesheet oder ein Worker-Skript abfängt,
dann wird die bereitgestellte [`Response.url`](/de/docs/Web/API/Response/url) verwendet, um alle relativen
{{cssxref("@import")}} oder
[`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) Subresource-Loads aufzulösen
([Firefox-Fehler 1222008](https://bugzil.la/1222008)).

Für die meisten Arten von Netzwerk-Anfragen hat diese Änderung keine Auswirkungen, da Sie die
finale URL nicht beobachten können. Es gibt jedoch einige, bei denen es eine Rolle spielt:

- Wenn ein [`fetch()`](/de/docs/Web/API/Window/fetch) abgefangen wird,
  dann können Sie die finale URL im [`Response.url`](/de/docs/Web/API/Response/url) des Ergebnisses beobachten.
- Wenn ein [worker](/de/docs/Web/API/Web_Workers_API)-Skript
  abgefangen wird, dann wird die finale URL verwendet, um
  [`self.location`](/de/docs/Web/API/WorkerGlobalScope/location) zu setzen
  und als Basis-URL für relative URLs im Worker-Skript verwendet.
- Wenn ein Stylesheet abgefangen wird, dann wird die finale URL als Basis-URL für
  die Auflösung relativer {{cssxref("@import")}}-Loads verwendet.

Beachten Sie, dass Navigationsanfragen für [`Windows`](/de/docs/Web/API/Window) und
[`iframes`](/de/docs/Web/API/HTMLIFrameElement) NICHT die finale URL verwenden. Die Art und Weise, wie die HTML-Spezifikation Umleitungen für Navigationsanfragen behandelt, führt dazu, dass die Anfrage-URL für das resultierende [`Window.location`](/de/docs/Web/API/Window/location) verwendet wird. Dies bedeutet, dass Seiten weiterhin eine "alternative" Ansicht einer Webseite anzeigen können, wenn sie offline sind, ohne die für den Benutzer sichtbare URL zu ändern.

## Syntax

```js-nolint
respondWith(response)
```

### Parameter

- `response`
  - : Eine [`Response`](/de/docs/Web/API/Response) oder ein {{jsxref("Promise")}}, das zu einer `Response` aufgelöst wird. Andernfalls wird ein Netzwerkfehler an Fetch zurückgegeben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NetworkError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn ein Netzwerkfehler bei bestimmten Kombinationen von
    [`FetchEvent.request.mode`](/de/docs/Web/API/Request/mode) und
    [`Response.type`](/de/docs/Web/API/Response/type)-Werten ausgelöst wird, wie in den oben aufgeführten "globalen Regeln" angedeutet.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn das Ereignis nicht versendet wurde oder `respondWith()` bereits aufgerufen wurde.

## Beispiele

Dieses Fetch-Ereignis versucht, eine Antwort aus der Cache-API zurückzugeben und greift andernfalls auf das Netzwerk zurück.

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

> **Hinweis:** [`caches.match()`](/de/docs/Web/API/CacheStorage/match) ist eine
> Komfortmethode. Eine gleichwertige Funktionalität besteht darin,
> [`cache.match()`](/de/docs/Web/API/Cache/match) auf jedem Cache aufzurufen (in der Reihenfolge, in der sie von
> [`caches.keys()`](/de/docs/Web/API/CacheStorage/keys) zurückgegeben werden), bis eine
> [`Response`](/de/docs/Web/API/Response) zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Fetch API](/de/docs/Web/API/Fetch_API)
