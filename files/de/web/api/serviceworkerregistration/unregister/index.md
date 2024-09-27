---
title: "ServiceWorkerRegistration: unregister()-Methode"
short-title: unregister()
slug: Web/API/ServiceWorkerRegistration/unregister
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`unregister()`**-Methode des [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Interfaces meldet die Registrierung des Service Workers ab und gibt ein {{jsxref("Promise")}} zurück. Das Promise wird mit `false` aufgelöst, wenn keine Registrierung gefunden wurde, ansonsten wird es mit `true` aufgelöst, unabhängig davon, ob die Abmeldung erfolgt ist oder nicht (es könnte nicht abmelden, wenn jemand gerade [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) mit demselben Scope aufgerufen hat). Der Service Worker wird alle laufenden Operationen abschließen, bevor er abgemeldet wird.

## Syntax

```js-nolint
unregister()
```

### Parameter

Keine.

### Rückgabewert

{{jsxref("Promise")}} wird mit einem Boolean-Wert aufgelöst, der anzeigt, ob der Service Worker abgemeldet wurde oder nicht.

## Beispiele

Das folgende einfache Beispiel registriert einen Service Worker, meldet ihn jedoch sofort wieder ab:

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

- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Workers verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
