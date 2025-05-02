---
title: "ServiceWorkerContainer: controllerchange-Ereignis"
short-title: controllerchange
slug: Web/API/ServiceWorkerContainer/controllerchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`controllerchange`**-Ereignis des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces tritt auf, wenn der mit dem Dokument verbundene [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erhält.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignisbehandlungs-Eigenschaft.

```js-nolint
addEventListener("controllerchange", (event) => { })

oncontrollerchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

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
