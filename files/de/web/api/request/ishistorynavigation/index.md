---
title: "Request: Eigenschaft isHistoryNavigation"
short-title: isHistoryNavigation
slug: Web/API/Request/isHistoryNavigation
l10n:
  sourceCommit: 5415d3f4ce7dde04c2b7d26b93298ffb5f259d64
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`isHistoryNavigation`** des Interfaces [`Request`](/de/docs/Web/API/Request) ist ein boolescher Wert, der angibt, ob die Anfrage eine Verlauf-Navigation ist.

Eine Verlauf-Navigation ist eine Navigation innerhalb des Browserverlaufs, die durch den Aufruf von [`History.go()`](/de/docs/Web/API/History/go), [`History.back()`](/de/docs/Web/API/History/back), [`History.forward()`](/de/docs/Web/API/History/forward), [`Navigation.traverseTo()`](/de/docs/Web/API/Navigation/traverseTo), [`Navigation.back()`](/de/docs/Web/API/Navigation/back), [`Navigation.forward()`](/de/docs/Web/API/Navigation/forward) oder direkt durch Klicken auf die Zurück- oder Vorwärts-Navigationsschaltfläche des Browsers erfolgt.

## Wert

Ein boolescher Wert.

## Beispiele

Dieses Beispiel wird in einem Service Worker ausgeführt. Es lauscht auf das Ereignis [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event). Im Event-Handler prüft der Service Worker die Eigenschaft `isHistoryNavigation`, um festzustellen, ob die Anfrage aufgrund einer Verlauf-Navigation erfolgte. Wenn dies der Fall ist, versucht er, mit einer Antwort aus dem Cache zu antworten. Falls der Cache keine Antwort für diese Anfrage enthält, ruft der Service Worker eine Antwort aus dem Netzwerk ab, speichert eine Kopie davon im Cache und antwortet mit der Netzwerkantwort.

```js
self.addEventListener("fetch", (event) => {
  // …

  if (event.request.isHistoryNavigation) {
    event.respondWith(
      (async () => {
        let response = await caches.match(event.request);
        if (response !== undefined) {
          return response;
        }
        response = await fetch(event.request);
        const responseClone = response.clone();

        event.waitUntil(
          caches
            .open("v1")
            .then((cache) => cache.put(event.request, responseClone)),
        );

        return response;
      })(),
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
