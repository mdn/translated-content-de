---
title: "Anforderung: isHistoryNavigation-Eigenschaft"
short-title: isHistoryNavigation
slug: Web/API/Request/isHistoryNavigation
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`isHistoryNavigation`** des [`Request`](/de/docs/Web/API/Request)-Interfaces ist ein boolean, der angibt, ob die Anfrage eine Verlauf-Navigation ist.

Eine Verlauf-Navigation ist eine Navigation innerhalb des Browser-Verlaufs, die durch Aufrufe von [`History.go()`](/de/docs/Web/API/History/go), [`History.back()`](/de/docs/Web/API/History/back), [`History.forward()`](/de/docs/Web/API/History/forward), [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo), [`Navigation.back()`](/de/docs/Web/API/Navigation/back), [`Navigation.forward()`](/de/docs/Web/API/Navigation/forward) oder direkt durch Klicken auf die Vorwärts- oder Rückwärts-Navigationstaste des Browsers erfolgt.

## Wert

Ein boolean-Wert.

## Beispiele

Dieses Beispiel wird in einem Service Worker ausgeführt. Es hört auf das [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis. Im Ereignishandler überprüft der Service Worker die `isHistoryNavigation`-Eigenschaft, um festzustellen, ob die Anfrage aufgrund einer Verlauf-Navigation erfolgte. Falls dies der Fall ist, versucht es, mit einer im Cache gespeicherten Antwort zu antworten. Falls der Cache keine Antwort für diese Anfrage enthält, holt der Service Worker eine Antwort vom Netzwerk, speichert eine Kopie davon im Cache und antwortet mit der Netzwerkantwort.

```js
self.addEventListener("request", (event) => {
  // …

  if (event.request.isHistoryNavigation) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response !== undefined) {
          return response;
        }
        return fetch(event.request).then((response) => {
          const responseClone = response.clone();

          caches
            .open("v1")
            .then((cache) => cache.put(event.request, responseClone));

          return response;
        });
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

- [Verlauf API](/de/docs/Web/API/History_API)
- [Navigations-API](/de/docs/Web/API/Navigation_API)
- [Service Worker API](/de/docs/Web/API/Service_Worker_API)
