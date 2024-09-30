---
title: "ServiceWorkerContainer: controller-Eigenschaft"
short-title: controller
slug: Web/API/ServiceWorkerContainer/controller
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`controller`**-Eigenschaft des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces gibt ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt zurück, wenn dessen Status `activating` oder `activated` ist (dasselbe Objekt wird von [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) zurückgegeben). Diese Eigenschaft gibt `null` zurück, wenn die Anfrage ein erzwungener Refresh (_Shift_ + Refresh) ist oder wenn es keinen aktiven Worker gibt.

## Wert

Ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt.

## Beispiele

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
