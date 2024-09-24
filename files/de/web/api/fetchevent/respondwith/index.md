---
title: "FetchEvent: respondWith()-Methode"
short-title: respondWith()
slug: Web/API/FetchEvent/respondWith
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`respondWith()`**-Methode von {{domxref("FetchEvent")}} verhindert die standardmäßige Abrufbearbeitung des Browsers und ermöglicht es Ihnen, selbst ein Versprechen für eine {{domxref("Response")}} bereitzustellen.

In den meisten Fällen können Sie jede Antwort bereitstellen, die der Empfänger versteht. Wenn beispielsweise ein {{HTMLElement('img')}} die Anfrage initiiert, muss der Antwortinhalt Bilddaten enthalten. Aus Sicherheitsgründen gibt es einige globale Regeln:

- Sie können nur {{domxref("Response")}}-Objekte mit {{domxref("Response.type", "type")}} "`opaque`" zurückgeben, wenn das {{domxref("fetchEvent.request")}}-Objekt den {{domxref("request.mode", "mode")}} "`no-cors`" hat. Dies verhindert das Lecken von privaten Daten.
- Sie können nur {{domxref("Response")}}-Objekte mit {{domxref("Response.type", "type")}} "`opaqueredirect`" zurückgeben, wenn das {{domxref("fetchEvent.request")}}-Objekt den {{domxref("request.mode", "mode")}} "`manual`" hat.
- Sie können keine {{domxref("Response")}}-Objekte mit {{domxref("Response.type", "type")}} "`cors`" zurückgeben, wenn das {{domxref("fetchEvent.request")}}-Objekt den {{domxref("request.mode", "mode")}} "`same-origin`" hat.

### Festlegen der endgültigen URL einer Ressource

Seit Firefox 59 wird, wenn ein Service Worker eine {{domxref("Response")}} an `FetchEvent.respondWith()` bereitstellt, der Wert {{domxref("Response.url")}} als die endgültige aufgelöste URL der abgefangenen Netzwerkanforderung propagiert. Wenn der Wert {{domxref("Response.url")}} eine leere Zeichenkette ist, wird die {{domxref("Request.url","FetchEvent.request.url")}} als die endgültige URL verwendet.

In der Vergangenheit wurde die {{domxref("Request.url","FetchEvent.request.url")}} immer als endgültige URL verwendet. Der bereitgestellte {{domxref("Response.url")}} wurde effektiv ignoriert.

Das bedeutet zum Beispiel, dass wenn ein Service Worker ein Stylesheet oder Worker-Skript abfängt, die bereitgestellte {{domxref("Response.url")}} verwendet wird, um alle relativen {{cssxref("@import")}} oder {{domxref("WorkerGlobalScope.importScripts()","importScripts()")}}-Subressourceladungen zu lösen ([Firefox bug 1222008](https://bugzil.la/1222008)).

Für die meisten Arten von Netzwerkanforderungen hat diese Änderung keinen Einfluss, da Sie die endgültige URL nicht beobachten können. Es gibt jedoch einige Fälle, in denen es wichtig ist:

- Wenn ein {{domxref("Window/fetch", "fetch()")}} abgefangen wird, können Sie die endgültige URL im Ergebnis auf der {{domxref("Response.url")}} beobachten.
- Wenn ein [worker](/de/docs/Web/API/Web_Workers_API)-Skript abgefangen wird, wird die endgültige URL verwendet, um [`self.location`](/de/docs/Web/API/WorkerGlobalScope/location) zu setzen und als Basis-URL für relative URLs im Worker-Skript verwendet.
- Wenn ein Stylesheet abgefangen wird, wird die endgültige URL als Basis-URL für das Lösen relativer {{cssxref("@import")}}-Ladungen verwendet.

Beachten Sie, dass Navigationsanfragen für {{domxref("Window","Windows")}} und {{domxref("HTMLIFrameElement","iframes")}} die endgültige URL NICHT verwenden. Die Art und Weise, wie die HTML-Spezifikation Umleitungen für Navigationen behandelt, endet mit der Verwendung der Anforderungs-URL für die resultierende {{domxref("Window.location")}}. Dies bedeutet, dass Websites dennoch eine "alternative" Ansicht einer Webseite bereitstellen können, wenn sie offline sind, ohne die für den Benutzer sichtbare URL zu ändern.

## Syntax

```js-nolint
respondWith(response)
```

### Parameter

- `response`
  - : Eine {{domxref("Response")}} oder ein {{jsxref("Promise")}}, das in eine `Response` aufgelöst wird. Andernfalls wird ein Netzwerkfehler an Fetch zurückgegeben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NetworkError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn ein Netzwerkfehler bei bestimmten Kombinationen von {{domxref("Request.mode","FetchEvent.request.mode")}} und {{domxref("Response.type")}}-Werten ausgelöst wird, wie in den oben aufgeführten "globalen Regeln" angedeutet.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird zurückgegeben, wenn das Ereignis nicht ausgelöst wurde oder `respondWith()` bereits aufgerufen wurde.

## Beispiele

Dieses Fetch-Event versucht, eine Antwort aus der Cache-API zurückzugeben und fällt andernfalls auf das Netzwerk zurück.

```js
addEventListener("fetch", (event) => {
  // Verhindern Sie die Standardeinstellung und bearbeiten Sie die Anfrage selbst.
  event.respondWith(
    (async () => {
      // Versuchen Sie, die Antwort aus einem Cache zu erhalten.
      const cachedResponse = await caches.match(event.request);
      // Geben Sie sie zurück, wenn wir eine gefunden haben.
      if (cachedResponse) return cachedResponse;
      // Wenn wir keine Übereinstimmung im Cache gefunden haben, verwenden Sie das Netzwerk.
      return fetch(event.request);
    })(),
  );
});
```

> **Note:** {{domxref("CacheStorage.match()", "caches.match()")}} ist eine praktische Methode. Gleichwertige Funktionalität besteht darin, {{domxref("cache.match()")}} auf jeden Cache aufzurufen (in der Reihenfolge, die durch {{domxref("CacheStorage.keys()", "caches.keys()")}} zurückgegeben wird), bis eine {{domxref("Response")}} zurückgegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Fetch API](/de/docs/Web/API/Fetch_API)
