---
title: "Anfrage: isHistoryNavigation-Eigenschaft"
short-title: isHistoryNavigation
slug: Web/API/Request/isHistoryNavigation
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`isHistoryNavigation`** der [`Request`](/de/docs/Web/API/Request)-Schnittstelle ist ein Boolean, der angibt, ob die Anfrage eine Verlaufsnavigation ist.

Eine Verlaufsnavigation ist eine Navigation innerhalb des Browser-Verlaufs, die durch Aufrufen von [`History.go()`](/de/docs/Web/API/History/go), [`History.back()`](/de/docs/Web/API/History/back), [`History.forward()`](/de/docs/Web/API/History/forward), [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo), [`Navigation.back()`](/de/docs/Web/API/Navigation/back), [`Navigation.forward()`](/de/docs/Web/API/Navigation/forward) oder direkt durch Klicken auf die Vor- oder Zurück-Schaltfläche des Browsers erfolgt.

## Wert

Ein Boolean-Wert.

## Beispiele

Dieses Beispiel wird in einem Service Worker ausgeführt. Es lauscht auf das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis. Im Ereignis-Handler überprüft der Service Worker die `isHistoryNavigation`-Eigenschaft, um zu wissen, ob die Anfrage aufgrund einer Verlaufsnavigation erfolgt ist. Falls ja, versucht er mit einer im Cache gespeicherten Antwort zu antworten. Wenn der Cache keine Antwort für diese Anfrage enthält, holt der Service Worker eine Antwort aus dem Netzwerk, speichert einen Klon davon im Cache und antwortet mit der Netzwerkantwort.

```js
self.addEventListener("request", (event) => {
  // …

  if (event.request.isHistoryNavigation) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response !== undefined) {
          return response;
        } else {
          return fetch(event.request).then((response) => {
            const responseClone = response.clone();

            caches.open("v1").then((cache) => {
              cache.put(event.request, responseClone);
            });

            return response;
          });
        }
      }),
    );
  }

  // …
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [History API](/de/docs/Web/API/History_API)
- [Navigation API](/de/docs/Web/API/Navigation_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
