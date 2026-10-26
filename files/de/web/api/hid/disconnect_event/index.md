---
title: "HID: disconnect-Ereignis"
short-title: disconnect
slug: Web/API/HID/disconnect_event
l10n:
  sourceCommit: 9a0e5c1cfa8d5079e22c410de757707706f1cc75
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Das **`disconnect`**-Ereignis der [`HID`](/de/docs/Web/API/HID)-Schnittstelle wird ausgelöst, wenn der User Agent die Verbindung zu einem HID-Gerät trennt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("disconnect", (event) => { })
```

Alternativ können Sie ihn der [Ereignishandler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ondisconnect = (event) => { }
```

## Ereignistyp

Ein [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("HIDConnectionEvent")}}

## Beispiele

Im folgenden Beispiel wird ein Event-Listener registriert, der auf die Trennung der Verbindung zu einem Gerät wartet. Anschließend wird der Name des Geräts mithilfe von [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) in der Konsole ausgegeben.

```js
navigator.hid.addEventListener("disconnect", ({ device }) => {
  console.log(`HID disconnected: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
