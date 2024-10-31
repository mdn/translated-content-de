---
title: "Anforderung: isHistoryNavigation-Eigenschaft"
short-title: isHistoryNavigation
slug: Web/API/Request/isHistoryNavigation
l10n:
  sourceCommit: 22526bdf0076aec093ba0a1ba32a6bb0d4ffd853
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`isHistoryNavigation`**-Eigenschaft des [`Request`](/de/docs/Web/API/Request)-Interfaces ist ein boolescher Wert, der angibt, ob die Anforderung eine Verlauf-Navigation ist.

Eine Verlauf-Navigation ist eine Navigation innerhalb des Browser-Verlaufs, die durch Aufrufen von [`History.go()`](/de/docs/Web/API/History/go), [`History.back()`](/de/docs/Web/API/History/back), [`History.forward()`](/de/docs/Web/API/History/forward), [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo), [`Navigation.back()`](/de/docs/Web/API/Navigation/back), [`Navigation.forward()`](/de/docs/Web/API/Navigation/forward) oder direkt durch Klicken auf die Vorwärts- oder Rückwärts-Navigationstaste des Browsers erfolgt.

## Wert

Ein boolescher Wert.

## Beispiele

Dieses Beispiel wird in einem Service Worker ausgeführt. Es hört auf das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis. Im Ereignishandler überprüft der Service Worker die `isHistoryNavigation`-Eigenschaft, um festzustellen, ob die Anforderung aufgrund einer Verlauf-Navigation erfolgt ist. Falls ja, versucht er mit einer zwischengespeicherten Antwort zu antworten. Falls der Cache keine Antwort für diese Anforderung enthält, holt der Service Worker eine Antwort aus dem Netzwerk, speichert eine Kopie davon im Cache und antwortet mit der Netzwerkantwort.

```js
self.addEventListener("request", (event) => {
  // ...

  if (event.request.isHistoryNavigation) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response !== undefined) {
          return response;
        } else {
          return fetch(event.request).then((response) => {
            let responseClone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, responseClone);
            });

            return response;
          });
        }
      }),
    );
  }

  // ...
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("History API", "", "", 1)}}
- {{domxref("Navigation API", "", "", 1)}}
- {{domxref("Service Worker API", "", "", 1)}}
