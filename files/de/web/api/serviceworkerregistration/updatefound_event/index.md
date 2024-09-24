---
title: "ServiceWorkerRegistration: updatefound-Ereignis"
short-title: updatefound
slug: Web/API/ServiceWorkerRegistration/updatefound_event
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`updatefound`**-Ereignis der
{{domxref("ServiceWorkerRegistration")}}-Schnittstelle wird jedes Mal ausgelöst, wenn die {{domxref("ServiceWorkerRegistration.installing")}}-Eigenschaft einen neuen Service-Worker erhält.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("updatefound", (event) => {});

onupdatefound = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

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

- [Verwendung von Service-Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
