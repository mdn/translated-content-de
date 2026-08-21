---
title: "FetchEvent: isReload Eigenschaft"
short-title: isReload
slug: Web/API/FetchEvent/isReload
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Service Workers API")}}{{Non-standard_header}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`isReload`**-Eigenschaft des [`FetchEvent`](/de/docs/Web/API/FetchEvent)-Interfaces gibt `true` zurück, wenn das Ereignis durch den Versuch des Nutzers, die Seite neu zu laden, ausgelöst wurde, und `false` in anderen Fällen. Das Drücken der Aktualisieren-Schaltfläche ist ein Neuladen, während das Klicken auf einen Link und das Drücken der Zurück-Schaltfläche kein Neuladen sind.

## Wert

Ein boolean-Wert.

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

- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker: Einfaches Codebeispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
