---
title: "ServiceWorkerRegistration: updateViaCache-Eigenschaft"
short-title: updateViaCache
slug: Web/API/ServiceWorkerRegistration/updateViaCache
l10n:
  sourceCommit: e9b95b3735a9e928fbdf3fe0a9f69c420b44cd79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`updateViaCache`** schreibgeschützte Eigenschaft der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle gibt den Wert der Einstellung zurück, die bestimmt, unter welchen Umständen der Browser den HTTP-Cache konsultiert, wenn er versucht, den Service Worker oder importierte Skripte über [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) zu aktualisieren.

## Wert

Gibt einen der folgenden Werte zurück:

- `imports`, bedeutet, dass der HTTP-Cache nicht für Updates des Service-Worker-Skripts konsultiert wird, aber für Skripte, die mit [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden. Dies ist der Standardwert.
- `all`, bedeutet, dass der HTTP-Cache für Updates des Service-Worker-Skripts und für Skripte, die mit [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden, konsultiert wird.
- `none`, bedeutet, dass der HTTP-Cache niemals konsultiert wird.

## Beispiele

Das folgende Beispiel zeigt die Verwendung von updateViaCache.

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Basisbeispiel für Service Worker Code](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
