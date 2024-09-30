---
title: "FetchEvent: preloadResponse-Eigenschaft"
short-title: preloadResponse
slug: Web/API/FetchEvent/preloadResponse
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`preloadResponse`**-Eigenschaft des [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das auf die Navigation Preload [`Response`](/de/docs/Web/API/Response) aufgelöst wird, wenn das [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde, oder andernfalls `undefined`.

Das Navigation Preload wird ausgelöst, wenn [Navigation Preload aktiviert ist](/de/docs/Web/API/NavigationPreloadManager/enable), die Anfrage eine `GET`-Anfrage ist und die Anfrage eine Navigationsanfrage ist (vom Browser beim Laden von Seiten und iframes erzeugt).

Ein Service Worker kann in seinem Fetch-Event-Handler auf dieses Promise warten, um den Abschluss einer während des Service-Worker-Starts gestellten Fetch-Anfrage zu verfolgen.

## Wert

Ein {{jsxref("Promise")}}, das auf eine [`Response`](/de/docs/Web/API/Response) oder andernfalls auf `undefined` aufgelöst wird.

## Beispiele

Dieses Codebeispiel stammt aus [Beschleunigen Sie Service Worker mit Navigation Preloads](https://web.dev/blog/navigation-preload).

Der [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler lauscht auf das `fetch`-Event.
Wenn es ausgelöst wird, ruft der Handler [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) auf, um ein Promise an die kontrollierte Seite zurückzugeben.
Dieses Promise wird mit der angeforderten Ressource aufgelöst.

Wenn es eine passende URL-Anfrage im [`Cache`](/de/docs/Web/API/Cache)-Objekt gibt, gibt der Code ein Promise zurück, um die Antwort aus dem Cache zu holen.
Wenn kein Treffer im Cache gefunden wird, gibt der Code das Promise in `preloadResponse` zurück.
Wenn es keinen passenden Cache oder vorab geladenen Antwort gibt, holt der Code die Antwort aus dem Netzwerk und gibt das zugehörige Promise zurück.

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // Respond from the cache if we can
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;

      // Else, use the preloaded response, if it's there
      const response = await event.preloadResponse;
      if (response) return response;

      // Else try the network.
      return fetch(event.request);
    })(),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Beschleunigen Sie Service Worker mit Navigation Preloads](https://web.dev/blog/navigation-preload)
- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
