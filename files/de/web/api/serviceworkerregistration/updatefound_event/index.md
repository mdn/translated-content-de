---
title: "ServiceWorkerRegistration: updatefound-Ereignis"
short-title: updatefound
slug: Web/API/ServiceWorkerRegistration/updatefound_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`updatefound`**-Ereignis der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Schnittstelle wird jedes Mal ausgelöst, wenn die Eigenschaft [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) einen neuen Service Worker erhält.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("updatefound", (event) => { })

onupdatefound = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
const registration = await navigator.serviceWorker.getRegistration();
if (registration) {
  registration.addEventListener("updatefound", () => {
    console.log("Service Worker update found!");
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
