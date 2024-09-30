---
title: "FetchEvent: request-Eigenschaft"
short-title: request
slug: Web/API/FetchEvent/request
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

Die **`request`**-Schreibgeschützte Eigenschaft des [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Interfaces gibt das [`Request`](/de/docs/Web/API/Request) zurück, das den Event-Handler ausgelöst hat.

Diese Eigenschaft ist nicht-nullbar (seit Version 46, im Fall von Firefox.) Wenn eine Anfrage nicht auf andere Weise bereitgestellt wird, muss das `options`-Objekt des Konstruktors eine Anfrage enthalten (siehe [`FetchEvent()`](/de/docs/Web/API/FetchEvent/FetchEvent).)

## Wert

Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

## Beispiele

Dieses Code-Snippet stammt aus dem [Service Worker Fetch-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) ([führen Sie das Fetch-Beispiel live aus](https://googlechrome.github.io/samples/service-worker/prefetch/)). Der [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler lauscht auf das `fetch`-Ereignis. Wenn es ausgelöst wird, übergibt er ein Promise zurück zur kontrollierten Seite an [`FetchEvent.respondWith()`](/de/docs/Web/API/FetchEvent/respondWith). Dieses Promise wird auf die erste übereinstimmende URL-Anfrage im [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst. Wenn keine Übereinstimmung gefunden wird, ruft der Code eine Antwort aus dem Netzwerk ab.

Der Code behandelt auch Ausnahmen, die von der [`fetch()`](/de/docs/Web/API/Window/fetch)-Operation ausgelöst werden. Beachten Sie, dass eine HTTP-Fehlerantwort (z. B. 404) keine Ausnahme auslösen wird. Es wird ein normales Antwortobjekt zurückgegeben, das den entsprechenden Fehlercode gesetzt hat.

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
