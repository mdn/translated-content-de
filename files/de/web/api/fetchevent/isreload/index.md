---
title: "FetchEvent: isReload-Eigenschaft"
short-title: isReload
slug: Web/API/FetchEvent/isReload
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{deprecated_header}}{{Non-standard_header}}{{AvailableInWorkers("service")}}

Die schreibgeschützte **`isReload`**-Eigenschaft der {{domxref("FetchEvent")}}-Schnittstelle gibt `true` zurück, wenn das Ereignis vom Benutzer ausgelöst wurde, um die Seite neu zu laden, und `false` in allen anderen Fällen. Das Drücken der Aktualisieren-Schaltfläche ist ein Neuladen, während das Klicken auf einen Link und das Drücken der Zurück-Schaltfläche kein Neuladen ist.

## Wert

Ein boolescher Wert.

## Beispiele

```js
self.addEventListener("fetch", (event) => {
  event.respondWith(async () => {
    if (event.isReload) {
      //Return something
    } else {
      //Return something else
    }
  })();
});
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
