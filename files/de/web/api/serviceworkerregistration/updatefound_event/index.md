---
title: "ServiceWorkerRegistration: updatefound-Ereignis"
short-title: updatefound
slug: Web/API/ServiceWorkerRegistration/updatefound_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`updatefound`**-Ereignis der Schnittstelle [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) wird jedes Mal ausgelöst, wenn der Eigenschaft [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) ein neuer Service Worker zugewiesen wird.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("updatefound", (event) => { })
```

Alternativ können Sie einen Wert der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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

- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
