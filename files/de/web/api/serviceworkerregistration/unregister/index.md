---
title: "ServiceWorkerRegistration: unregister() Methode"
short-title: unregister()
slug: Web/API/ServiceWorkerRegistration/unregister
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`unregister()`** Methode des
[`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Interfaces hebt die Registrierung des Service Workers auf
und gibt ein {{jsxref("Promise")}} zurück. Das Promise wird auf `false` aufgelöst, wenn keine Registrierung gefunden wurde, ansonsten auf `true`, unabhängig davon, ob die Aufhebung der Registrierung stattgefunden hat oder nicht (möglicherweise wird nicht aufgehoben, wenn gerade jemand anderes [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register)
mit demselben Scope aufgerufen hat.) Der Service Worker wird laufende Operationen abschließen, bevor er abgemeldet wird.

## Syntax

```js-nolint
unregister()
```

### Parameter

Keine.

### Rückgabewert

{{jsxref("Promise")}} löst sich mit einem booleschen Wert auf, der angibt, ob der Service Worker abgemeldet wurde oder nicht.

## Beispiele

Das folgende einfache Beispiel registriert ein Service Worker-Beispiel, hebt es dann aber sofort wieder auf:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/" })
    .then((registration) => {
      // registration worked
      console.log("Registration succeeded.");
      registration.unregister().then((boolean) => {
        // if boolean = true, unregister is successful
      });
    })
    .catch((error) => {
      // registration failed
      console.error(`Registration failed with ${error}`);
    });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Servicearbeitern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispiel für Service Worker-Code](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
