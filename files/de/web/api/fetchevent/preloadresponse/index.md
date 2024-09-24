---
title: "FetchEvent: preloadResponse-Eigenschaft"
short-title: preloadResponse
slug: Web/API/FetchEvent/preloadResponse
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`preloadResponse`**-Eigenschaft des {{domxref("FetchEvent")}}-Interfaces gibt ein {{jsxref("Promise")}} zurück, das auf die Navigation preload {{domxref("Response")}} auflöst, wenn [Navigation Preload](/de/docs/Web/API/NavigationPreloadManager) ausgelöst wurde, oder `undefined` andernfalls.

Navigation preload wird ausgelöst, wenn [Navigation Preload aktiviert ist](/de/docs/Web/API/NavigationPreloadManager/enable), die Anfrage eine `GET`-Anfrage ist und die Anfrage eine Navigationsanfrage ist (vom Browser erzeugt beim Laden von Seiten und iframes).

Ein Service Worker kann auf dieses Promise in seinem Fetch-Event-Handler warten, um das Abschließen einer Fetch-Anfrage zu verfolgen, die während des Startens des Service Workers gemacht wurde.

## Wert

Ein {{jsxref("Promise")}}, das auf eine {{domxref("Response")}} oder andernfalls auf `undefined` auflöst.

## Beispiele

Dieses Code-Snippet ist aus [Beschleunigung des Service Workers mit Navigation Preloads](https://web.dev/blog/navigation-preload).

Der {{domxref("ServiceWorkerGlobalScope.fetch_event", "onfetch")}}-Event-Handler hört auf das `fetch`-Event.
Wenn dieses ausgelöst wird, ruft der Handler {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} auf, um ein Promise an die kontrollierte Seite zurückzugeben.
Dieses Promise wird sich mit der angeforderten Ressource auflösen.

Wenn es eine übereinstimmende URL-Anfrage im {{domxref("Cache")}}-Objekt gibt, gibt der Code ein Promise für das Abrufen der Antwort aus dem Cache zurück.
Wenn keine Übereinstimmung im Cache gefunden wird, gibt der Code das Promise in `preloadResponse` zurück.
Wenn es keine übereinstimmende Cache- oder vorgeladene Antwort gibt, holt der Code die Antwort aus dem Netzwerk und gibt das zugehörige Promise zurück.

```js
addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      // Antwort aus dem Cache, wenn möglich
      const cachedResponse = await caches.match(event.request);
      if (cachedResponse) return cachedResponse;

      // Andernfalls die vorgeladene Antwort, falls vorhanden, nutzen
      const response = await event.preloadResponse;
      if (response) return response;

      // Andernfalls das Netzwerk ausprobieren.
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

- [Beschleunigung des Service Workers mit Navigation Preloads](https://web.dev/blog/navigation-preload)
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
