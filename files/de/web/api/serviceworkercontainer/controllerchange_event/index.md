---
title: "ServiceWorkerContainer: controllerchange-Ereignis"
short-title: controllerchange
slug: Web/API/ServiceWorkerContainer/controllerchange_event
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`controllerchange`**-Ereignis der {{domxref("ServiceWorkerContainer")}}-Schnittstelle wird ausgelöst, wenn die dem Dokument zugeordnete {{domxref("ServiceWorkerRegistration")}} einen neuen {{domxref("ServiceWorkerRegistration.active","aktiven")}} Worker erhält.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
addEventListener("controllerchange", (event) => {});

oncontrollerchange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiel

```js
navigator.serviceWorker.addEventListener("controllerchange", () => {
  console.log("The controller of current browsing context has changed.");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
