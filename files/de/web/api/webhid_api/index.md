---
title: WebHID API
slug: Web/API/WebHID_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("WebHID API")}}{{SeeCompatTable}}

Ein Human Interface Device (HID) ist eine Art von Gerät, das Eingaben von Menschen entgegennimmt oder Ausgaben an Menschen liefert. Es bezieht sich auch auf das HID-Protokoll, einen Standard für die bidirektionale Kommunikation zwischen einem Host und einem Gerät, der das Installationsverfahren vereinfachen soll. Das HID-Protokoll wurde ursprünglich für USB-Geräte entwickelt, aber seitdem über viele andere Protokolle, einschließlich Bluetooth, implementiert.

## Schnittstellen

- [`HID`](/de/docs/Web/API/HID)
  - : Bietet Methoden zum Verbinden mit HID-Geräten, Listung der angeschlossenen HID-Geräte und Ereignishandler für angeschlossene HID-Geräte.
- [`HIDDevice`](/de/docs/Web/API/HIDDevice)
  - : Repräsentiert ein HID-Gerät. Es ist möglich, dass ein einzelnes physisches Gerät durch mehrere `HIDDevice`-Objekte dargestellt wird.
- [`HIDInputReportEvent`](/de/docs/Web/API/HIDInputReportEvent)
  - : Wird an das `HIDDevice`-[`inputreport`](/de/docs/Web/API/HIDDevice/inputreport_event)-Ereignis übergeben, wenn ein Eingabebereich von einem zugehörigen HID-Gerät empfangen wird.
- [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent)
  - : Wird an `HID`-[`connect`](/de/docs/Web/API/HID/connect_event)- und [`disconnect`](/de/docs/Web/API/HID/disconnect_event)-Ereignisse übergeben, wenn ein Gerät verbunden oder getrennt wird.

## Beispiele

Sie können mit der [`requestDevice()`](/de/docs/Web/API/HID/requestDevice)-Methode eine Verbindung zu einem Gerät herstellen. In diesem Fall wählen wir aus allen verfügbaren Geräten aus.

```js
const device = await navigator.hid.requestDevice({ filters: [] });
// A popup titled `... wants to connect to a HID Device` with `Cancel` and `Connect` buttons will show up with a device list to select from.
// Select one and click on `Connect` button. Then the device will be an array with the selected device in it.
```

Wir können alle Geräte abrufen, für die die Website zuvor Zugriffsberechtigungen erhalten hat, und die Gerätenamen in die Konsole protokollieren.

```js
let devices = await navigator.hid.getDevices();
devices.forEach((device) => {
  console.log(`HID: ${device.productName}`);
});
```

Wir können Ereignislistener für die Trennung von HID-Geräten registrieren.

```js
navigator.hid.addEventListener("disconnect", (event) => {
  console.log(`HID disconnected: ${event.device.productName}`);
  console.dir(event);
});
// For example, when my connected keyboard gets disconnected, the log in the console will show:
// HID disconnected: USB Keyboard
// {
//    bubbles: false
//    cancelBubble: false
//    cancelable: false
//    composed: false
//    currentTarget: HID {onconnect: null, ondisconnect: null}
//    defaultPrevented: false
//    device: HIDDevice {oninputreport: null, opened: false, vendorId: 6700, productId: 11555, productName: "USB Keyboard", …}
//    eventPhase: 0
//    isTrusted: true
//    path: []
//    returnValue: true
//    srcElement: HID {onconnect: null, ondisconnect: null}
//    target: HID {onconnect: null, ondisconnect: null}
//    timeStamp: 18176.600000023842
//    type: "disconnect"
// }

// The event above is an instance of the HIDConnectionEvent interface.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
