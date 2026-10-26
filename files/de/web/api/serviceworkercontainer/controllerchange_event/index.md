---
title: "ServiceWorkerContainer: controllerchange-Ereignis"
short-title: controllerchange
slug: Web/API/ServiceWorkerContainer/controllerchange_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`controllerchange`**-Ereignis der [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Schnittstelle wird ausgelöst, wenn die dem Dokument zugeordnete [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erhält.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("controllerchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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
