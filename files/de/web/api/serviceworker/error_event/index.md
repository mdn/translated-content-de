---
title: "ServiceWorker: error-Ereignis"
short-title: error
slug: Web/API/ServiceWorker/error_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `error`-Ereignis wird ausgelöst, sobald im Service Worker ein Fehler auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("error", (event) => { })
```

Alternativ können Sie einen Handler über die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onerror = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt ruft über [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt ab und richtet für das zurückgegebene Objekt einen `onerror`-Handler ein:

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
