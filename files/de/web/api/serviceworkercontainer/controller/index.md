---
title: "ServiceWorkerContainer: controller-Eigenschaft"
short-title: controller
slug: Web/API/ServiceWorkerContainer/controller
l10n:
  sourceCommit: 981e2d17e897c6280fd27364746a34d8560d30d1
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`controller`**-Eigenschaft des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces repräsentiert den aktiven [Service Worker](/de/docs/Web/API/ServiceWorker), der die aktuelle Seite (assoziiert mit diesem `ServiceWorkerContainer`) steuert, oder `null`, wenn die Seite keinen aktiven oder aktivierenden Service Worker hat.

Dies ist dasselbe Objekt, das von [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) zurückgegeben wird.

## Wert

Ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt, wenn sein Zustand `activating` oder `activated` ist, oder `null`, wenn es keinen aktiven Worker gibt.

Die Eigenschaft gibt auch `null` zurück, wenn die Anfrage ein erzwungenes Neuladen ist (<kbd>Shift</kbd> + Neuladen).

## Beispiele

### Prüfen, ob eine Seite von einem Service Worker gesteuert wird

```js
if ("serviceWorker" in navigator) {
  // Do a one-off check to see if a service worker's in control.
  if (navigator.serviceWorker.controller) {
    console.log(
      `This page is currently controlled by: ${navigator.serviceWorker.controller}`,
    );
  } else {
    console.log("This page is not currently controlled by a service worker.");
  }
} else {
  console.log("Service workers are not supported.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
