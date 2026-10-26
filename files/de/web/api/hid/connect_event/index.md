---
title: "HID: connect-Ereignis"
short-title: connect
slug: Web/API/HID/connect_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Das **`connect`**-Ereignis der [`HID`](/de/docs/Web/API/HID)-Schnittstelle wird ausgelöst, wenn der User Agent eine Verbindung zu einem HID-Gerät herstellt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("connect", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
onconnect = (event) => { }
```

## Ereignistyp

Ein [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HIDConnectionEvent")}}

## Beispiele

Im folgenden Beispiel wird ein Event-Listener registriert, der auf die Verbindung eines Geräts wartet. Anschließend wird der Name des Geräts mithilfe von [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) in der Konsole ausgegeben.

```js
navigator.hid.addEventListener("connect", ({ device }) => {
  console.log(`HID connected: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
