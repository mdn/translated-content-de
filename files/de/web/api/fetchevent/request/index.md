---
title: "FetchEvent: request-Eigenschaft"
short-title: request
slug: Web/API/FetchEvent/request
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`request`** schreibgeschützte Eigenschaft des {{domxref("FetchEvent")}}-Interfaces gibt das {{domxref("Request")}} zurück, das den Ereignishandler ausgelöst hat.

Diese Eigenschaft kann nicht null sein (seit Version 46, im Fall von Firefox). Wenn eine Anfrage nicht auf anderem Wege bereitgestellt wird, muss das Konstruktor-`options`-Objekt eine Anfrage enthalten (siehe {{domxref("FetchEvent.FetchEvent", "FetchEvent()")}}).

## Wert

Ein {{domxref("Request")}}-Objekt.

## Beispiele

Dieses Codesnippet stammt aus dem [Service Worker Fetch-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) ([führen Sie das Fetch-Beispiel live aus](https://googlechrome.github.io/samples/service-worker/prefetch/)). Der {{domxref("ServiceWorkerGlobalScope.fetch_event", "onfetch")}}-Ereignishandler hört auf das `fetch`-Ereignis. Wenn es ausgelöst wird, geben Sie ein Versprechen an die kontrollierte Seite zurück, um {{domxref("FetchEvent.respondWith", "FetchEvent.respondWith()")}} aufzurufen.
Dieses Versprechen wird auf die erste übereinstimmende URL-Anfrage im {{domxref("Cache")}}-Objekt aufgelöst. Wenn keine Übereinstimmung gefunden wird, ruft der Code eine Antwort aus dem Netzwerk ab.

Der Code behandelt auch Ausnahmen, die bei der {{domxref("Window/fetch", "fetch()")}}-Operation ausgelöst werden. Beachten Sie, dass eine HTTP-Fehlerantwort (z.B. 404) keine Ausnahme auslöst. Sie wird ein normales Antwortobjekt zurückgeben, das den entsprechenden Fehlercode gesetzt hat.

```js
self.addEventListener("fetch", (event) => {
  console.log("Fetch-Ereignis wird behandelt für", event.request.url);

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Antwort im Cache gefunden:", response);

        return response;
      }
      console.log("Keine Antwort im Cache gefunden. Hole aus dem Netzwerk...");

      return fetch(event.request)
        .then((response) => {
          console.log("Antwort aus dem Netzwerk ist:", response);

          return response;
        })
        .catch((error) => {
          console.error("Fetch fehlgeschlagen:", error);

          throw error;
        });
    }),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Workers einfaches Codebeispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workers](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
