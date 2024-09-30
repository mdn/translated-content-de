---
title: "ServiceWorker: error Ereignis"
short-title: error
slug: Web/API/ServiceWorker/error_event
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `error`-Ereignis wird ausgelöst, wenn ein Fehler im Service Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt erhält eine Referenz auf das [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt über [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) und richtet einen `onerror`-Handler auf dem resultierenden Objekt ein:

```js
// in the page being controlled
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("service-worker.js");

  navigator.serviceWorker.ready.then((registration) => {
    registration.active.onerror = (event) => {
      console.log("An error occurred in the service worker!");
    };
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
