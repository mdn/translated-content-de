---
title: "FetchEvent: request-Eigenschaft"
short-title: request
slug: Web/API/FetchEvent/request
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`request`** schreibgeschützte Eigenschaft des
[`FetchEvent`](/de/docs/Web/API/FetchEvent)-Interfaces gibt das [`Request`](/de/docs/Web/API/Request) zurück, das den Ereignishandler ausgelöst hat.

Diese Eigenschaft ist nicht nullfähig (seit Version 46, im Fall von Firefox). Wenn eine Anfrage nicht auf andere Weise bereitgestellt wird, muss das `options`-Objekt des Konstruktors eine Anfrage enthalten (siehe [`FetchEvent()`](/de/docs/Web/API/FetchEvent/FetchEvent)).

## Wert

Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Service Worker Fetch-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) ([führen Sie das Fetch-Beispiel live aus](https://googlechrome.github.io/samples/service-worker/prefetch/)). Der [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler
lauscht auf das `fetch`-Ereignis. Bei Auslösung wird ein Promise an die
kontrollierte Seite an [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith) zurückgegeben.
Dieses Promise wird auf die erste übereinstimmende URL-Anfrage im [`Cache`](/de/docs/Web/API/Cache)
Objekt aufgelöst. Wenn keine Übereinstimmung gefunden wird, ruft der Code eine Antwort aus dem Netzwerk ab.

Der Code behandelt auch Ausnahmen, die beim
[`fetch()`](/de/docs/Web/API/Window/fetch)-Vorgang geworfen werden. Beachten Sie, dass eine HTTP-Fehlerantwort (z. B. 404) keine Ausnahme auslöst. Sie wird ein normales Antwortobjekt zurückgeben, das den entsprechenden Fehlercode gesetzt hat.

```js
self.addEventListener("fetch", (event) => {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Found response in cache:", response);

        return response;
      }
      console.log("No response found in cache. About to fetch from network…");

      return fetch(event.request)
        .then((response) => {
          console.log("Response from network is:", response);

          return response;
        })
        .catch((error) => {
          console.error("Fetching failed:", error);

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

- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Basis-Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Workers verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
