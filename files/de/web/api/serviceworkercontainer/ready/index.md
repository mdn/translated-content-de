---
title: "ServiceWorkerContainer: bereit Eigenschaft"
short-title: bereit
slug: Web/API/ServiceWorkerContainer/ready
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`ready`**-Eigenschaft des {{domxref("ServiceWorkerContainer")}}-Interfaces bietet eine Möglichkeit, die Ausführung von Code zu verzögern, bis ein Service Worker aktiv ist. Sie gibt ein {{jsxref("Promise")}} zurück, das niemals ablehnt und das unbegrenzt wartet, bis der mit der aktuellen Seite verbundene {{domxref("ServiceWorkerRegistration")}} einen {{domxref("ServiceWorkerRegistration.active","aktiven")}} Worker hat. Sobald diese Bedingung erfüllt ist, wird das Promise mit dem {{domxref("ServiceWorkerRegistration")}} aufgelöst.

## Wert

Ein {{jsxref("Promise")}}, das niemals ablehnt und das möglicherweise schließlich mit einem {{domxref("ServiceWorkerRegistration")}} aufgelöst wird.

## Beispiele

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.ready.then((registration) => {
    console.log(`Ein Service Worker ist aktiv: ${registration.active}`);

    // An diesem Punkt können Sie Methoden aufrufen, die einen aktiven
    // Service Worker erfordern, wie registration.pushManager.subscribe()
  });
} else {
  console.error("Service Workers werden nicht unterstützt.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
