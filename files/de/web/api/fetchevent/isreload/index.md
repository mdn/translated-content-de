---
title: "FetchEvent: isReload-Eigenschaft"
short-title: isReload
slug: Web/API/FetchEvent/isReload
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Service Workers API")}}{{deprecated_header}}{{Non-standard_header}}{{AvailableInWorkers("service")}}

Die **`isReload`** schreibgeschützte Eigenschaft des
[`FetchEvent`](/de/docs/Web/API/FetchEvent)-Interfaces gibt `true` zurück, wenn das Ereignis dadurch ausgelöst wurde, dass der Benutzer versucht hat, die Seite neu zu laden, und `false` in allen anderen Fällen.
Das Drücken der Aktualisierungstaste ist ein Neuladen, während das Klicken auf einen Link und das Drücken der Zurück-Taste kein Neuladen ist.

## Wert

Ein boolescher Wert.

## Beispiele

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(async () => {
    if (event.isReload) {
      // Return something
    } else {
      // Return something else
    }
  })();
});
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Servicearbeitern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Servicearbeiter](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Arbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
