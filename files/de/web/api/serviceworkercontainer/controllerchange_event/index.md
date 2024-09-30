---
title: "ServiceWorkerContainer: controllerchange Ereignis"
short-title: controllerchange
slug: Web/API/ServiceWorkerContainer/controllerchange_event
l10n:
  sourceCommit: bc0237f139ee3a9db67a669ae1b6bf45ebba7f94
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`controllerchange`** Ereignis des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer) Interface wird ausgelöst, wenn die dem Dokument zugeordnete [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erhält.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("controllerchange", (event) => {});

oncontrollerchange = (event) => {};
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
