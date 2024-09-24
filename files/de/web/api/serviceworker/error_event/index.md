---
title: "ServiceWorker: Fehlerereignis"
short-title: Fehler
slug: Web/API/ServiceWorker/error_event
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das `error`-Ereignis wird ausgelöst, wenn ein Fehler im Service Worker auftritt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("error", (event) => {});

onerror = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

Das folgende Codebeispiel erhält einen Verweis auf das {{domxref("ServiceWorker")}}-Objekt über {{domxref("ServiceWorkerRegistration.active")}} und richtet einen `onerror`-Handler auf dem resultierenden Objekt ein:

```js
// auf der Seite, die kontrolliert wird
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
