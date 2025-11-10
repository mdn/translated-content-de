---
title: "ServiceWorkerContainer: ready-Eigenschaft"
short-title: ready
slug: Web/API/ServiceWorkerContainer/ready
l10n:
  sourceCommit: 981e2d17e897c6280fd27364746a34d8560d30d1
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`ready`**-Eigenschaft der [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Schnittstelle bietet eine Möglichkeit, die Ausführung von Code zu verzögern, bis ein Service Worker aktiv ist.

Die Eigenschaft gibt ein {{jsxref("Promise")}} zurück, das niemals zurückgewiesen wird und unbegrenzt wartet, bis die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration), die mit der aktuellen Seite assoziiert ist, über einen [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker verfügt.
Sobald diese Bedingung erfüllt ist, wird sie mit der entsprechenden [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst.

## Wert

Ein {{jsxref("Promise")}}, das niemals zurückgewiesen wird und eventuell mit einer [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst wird, wenn ein aktiver Service Worker vorhanden ist.

## Beispiele

### Code verzögern, bis ein aktiver Service Worker vorhanden ist

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.ready.then((registration) => {
    console.log(`A service worker is active: ${registration.active}`);

    // At this point, you can call methods that require an active
    // service worker, like registration.pushManager.subscribe()
  });
} else {
  console.error("Service workers are not supported.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
