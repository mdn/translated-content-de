---
title: "ServiceWorkerRegistration: update()-Methode"
short-title: update()
slug: Web/API/ServiceWorkerRegistration/update
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`update()`**-Methode der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle versucht, den Service Worker zu aktualisieren. Sie ruft die Skript-URL des Workers ab, und wenn der neue Worker nicht byteweise mit dem aktuellen Worker identisch ist, wird der neue Worker installiert. Das Abrufen des Workers umgeht alle Browser-Caches, wenn das vorherige Abrufen vor mehr als 24 Stunden erfolgt ist.

## Syntax

```js-nolint
update()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit einem [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt aufgelöst wird.

## Beispiele

Das folgende einfache Beispiel registriert einen Service Worker und fügt dann einen Ereignishandler zu einem Button hinzu, sodass Sie den Service Worker bei Bedarf explizit aktualisieren können:

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/" })
    .then((registration) => {
      // registration worked
      console.log("Registration succeeded.");
      button.onclick = () => {
        registration.update();
      };
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
