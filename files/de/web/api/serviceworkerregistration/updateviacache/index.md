---
title: "ServiceWorkerRegistration: updateViaCache-Eigenschaft"
short-title: updateViaCache
slug: Web/API/ServiceWorkerRegistration/updateViaCache
l10n:
  sourceCommit: e9b95b3735a9e928fbdf3fe0a9f69c420b44cd79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die schreibgeschützte **`updateViaCache`**-Eigenschaft der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt den Wert der Einstellung zurück, die bestimmt, unter welchen Umständen der Browser den HTTP-Cache konsultiert, wenn er versucht, den Service Worker oder Skripte, die über [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden, zu aktualisieren.

## Wert

Gibt einen der folgenden Werte zurück:

- `imports`, was bedeutet, dass der HTTP-Cache für Aktualisierungen des Service-Worker-Skripts nicht konsultiert wird, aber für Skripte, die mit [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden, konsultiert wird. Dies ist der Standardwert.
- `all`, was bedeutet, dass der HTTP-Cache sowohl für Aktualisierungen des Service-Worker-Skripts als auch für Skripte konsultiert wird, die mit [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden.
- `none`, was bedeutet, dass der HTTP-Cache niemals konsultiert wird.

## Beispiele

Das folgende Beispiel zeigt die Verwendung von `updateViaCache`.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js", {
      updateViaCache: "none",
    })
    .then((registration) => {
      registration.addEventListener("updatefound", () => {
        // If updatefound is fired, it means that there's
        // a new service worker being installed.
        console.log(`Value of updateViaCache: ${registration.updateViaCache}`);
      });
    })
    .catch((error) => {
      console.error(`Service worker registration failed: ${error}`);
    });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
