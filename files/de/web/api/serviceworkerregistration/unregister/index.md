---
title: "ServiceWorkerRegistration: Methode unregister()"
short-title: unregister()
slug: Web/API/ServiceWorkerRegistration/unregister
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`unregister()`**-Methode der
{{domxref("ServiceWorkerRegistration")}}-Schnittstelle hebt die Registrierung des Service Workers auf und gibt ein {{jsxref("Promise")}} zurück. Das Promise löst sich zu `false` auf, falls keine Registrierung gefunden wurde, andernfalls löst es sich zu `true` auf, unabhängig davon, ob die Abmeldung erfolgt ist oder nicht (es kann sein, dass die Abmeldung nicht durchgeführt wird, wenn jemand anderes gerade {{domxref("ServiceWorkerContainer.register()")}} mit demselben Scope aufgerufen hat). Der Service Worker wird alle laufenden Vorgänge abschließen, bevor er abgemeldet wird.

## Syntax

```js-nolint
unregister()
```

### Parameter

Keine.

### Rückgabewert

{{jsxref("Promise")}} löst sich mit einem boolean auf, der anzeigt, ob der Service Worker abgemeldet wurde oder nicht.

## Beispiele

Das folgende einfache Beispiel registriert einen Service Worker und meldet ihn dann sofort wieder ab:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/" })
    .then((registration) => {
      // Registrierung erfolgreich
      console.log("Registration succeeded.");
      registration.unregister().then((boolean) => {
        // Wenn boolean = true, dann war die Abmeldung erfolgreich
      });
    })
    .catch((error) => {
      // Registrierung fehlgeschlagen
      console.error(`Registration failed with ${error}`);
    });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Basisbeispiel für Code von Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
