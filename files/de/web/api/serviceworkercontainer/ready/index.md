---
title: "ServiceWorkerContainer: ready Eigenschaft"
short-title: ready
slug: Web/API/ServiceWorkerContainer/ready
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`ready`** Eigenschaft des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Interfaces bietet eine Möglichkeit, die Codeausführung zu verzögern, bis ein Service Worker aktiv ist. Sie gibt ein {{jsxref("Promise")}} zurück, das niemals abgelehnt wird und unbegrenzt wartet, bis die mit der aktuellen Seite assoziierte [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker hat. Sobald diese Bedingung erfüllt ist, wird das `Promise` mit der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst.

## Wert

Ein {{jsxref("Promise")}}, das niemals abgelehnt wird und möglicherweise letztlich mit einer [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst wird.

## Beispiele

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
