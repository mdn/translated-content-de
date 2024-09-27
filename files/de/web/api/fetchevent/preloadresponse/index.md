---
title: "FetchEvent: preloadResponse-Eigenschaft"
short-title: preloadResponse
slug: Web/API/FetchEvent/preloadResponse
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte Eigenschaft **`preloadResponse`** des [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das auf die Navigation-Preload-[`Response`](/de/docs/Web/API/Response) auflöst, wenn das [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde, oder andernfalls auf `undefined`.

Das Navigation Preload wird ausgelöst, wenn [Navigation Preload aktiviert ist](/de/docs/Web/API/NavigationPreloadManager/enable), die Anfrage eine `GET`-Anfrage ist und es sich um eine Navigationsanfrage handelt (generiert durch den Browser beim Laden von Seiten und iframes).

Ein Service Worker kann auf dieses Promise in seinem Fetch-Event-Handler warten, um den Abschluss einer während des Service-Worker-Starts durchgeführten Abrufanfrage zu verfolgen.

## Wert

Ein {{jsxref("Promise")}}, das entweder auf eine [`Response`](/de/docs/Web/API/Response) oder auf `undefined` auflöst.

## Beispiele

Dieser Code-Schnipsel stammt aus [Service Worker mit Navigation Preloads beschleunigen](https://web.dev/blog/navigation-preload).

Der [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler hört auf das `fetch`-Event.
Bei Auslösung ruft der Handler [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) auf, um ein Promise an die gesteuerte Seite zurückzugeben.
Dieses Promise wird mit der angeforderten Ressource aufgelöst.

Wenn es eine übereinstimmende URL-Anfrage im [`Cache`](/de/docs/Web/API/Cache)-Objekt gibt, gibt der Code ein Promise für das Abrufen der Antwort aus dem Cache zurück.
Falls im Cache keine Übereinstimmung gefunden wird, gibt der Code das `preloadResponse`-Promise zurück.
Falls keine übereinstimmende Cache- oder Preloaded-Antwort gefunden wird, holt der Code die Antwort aus dem Netzwerk und gibt das zugehörige Promise zurück.

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

- [Service Worker mit Navigation Preloads beschleunigen](https://web.dev/blog/navigation-preload)
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
