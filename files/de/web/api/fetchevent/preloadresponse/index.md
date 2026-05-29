---
title: "FetchEvent: preloadResponse-Eigenschaft"
short-title: preloadResponse
slug: Web/API/FetchEvent/preloadResponse
l10n:
  sourceCommit: d81234a2ce0cc4ceb06622e3cd5d8cb5e447cb6f
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`preloadResponse`** schreibgeschützte Eigenschaft der [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das zu der Navigation preload [`Response`](/de/docs/Web/API/Response) aufgelöst wird, falls ein [Navigation preload](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde, oder andernfalls `undefined`.

Ein Navigation preload wird ausgelöst, wenn [Navigation preload aktiviert ist](/de/docs/Web/API/NavigationPreloadManager/enable), die Anfrage eine `GET`-Anfrage ist und die Anfrage eine Navigationsanfrage ist (vom Browser generiert beim Laden von Seiten und iframes).

Ein Service Worker kann im Fetch-Event-Handler auf dieses Promise warten, um die Fertigstellung einer Fetch-Anfrage zu verfolgen, die während des Starts des Service Workers durchgeführt wurde.

## Wert

Ein {{jsxref("Promise")}}, das zu einer [`Response`](/de/docs/Web/API/Response) aufgelöst wird oder andernfalls `undefined`.

## Beispiele

Dieser Code-Ausschnitt stammt aus [Beschleunigen Sie Service Workers mit Navigation Preloads](https://web.dev/blog/navigation-preload).

Der [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Event-Handler hört auf das `fetch`-Ereignis.
Wenn es ausgelöst wird, ruft der Handler [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) auf, um ein Promise an die kontrollierte Seite zurückzugeben.
Dieses Promise wird mit der angeforderten Ressource aufgelöst.

Wenn es eine Übereinstimmung mit einer URL-Anfrage im [`Cache`](/de/docs/Web/API/Cache)-Objekt gibt, gibt der Code ein Promise für das Abrufen der Antwort aus dem Cache zurück.
Wenn keine Übereinstimmung im Cache gefunden wird, gibt der Code das Promise in `preloadResponse` zurück.
Wenn weder eine passende Cache- noch eine vorgeladene Antwort vorhanden ist, holt der Code die Antwort aus dem Netzwerk und gibt das zugehörige Promise zurück.

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const preloadResponsePromise = event.preloadResponse;

      // Respond from the cache if we can
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) {
        // Keep the navigation preload request alive even if we do not use its response.
        event.waitUntil(preloadResponsePromise.catch(() => undefined));
        return cachedResponse;
      }

      // Else, use the preloaded response, if it's there
      const response = await preloadResponsePromise;
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

- [Beschleunigen Sie Service Workers mit Navigation Preloads](https://web.dev/blog/navigation-preload)
- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
