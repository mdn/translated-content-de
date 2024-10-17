---
title: WebHID API
slug: Web/API/WebHID_API
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{DefaultAPISidebar("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Ein Human Interface Device (HID) ist ein Gerätetyp, der Eingaben von oder Ausgaben an Menschen liefert. Es bezieht sich auch auf das HID-Protokoll, einen Standard für die bidirektionale Kommunikation zwischen einem Host und einem Gerät, das entwickelt wurde, um das Installationsverfahren zu vereinfachen. Das HID-Protokoll wurde ursprünglich für USB-Geräte entwickelt, aber es wurde seitdem über viele andere Protokolle hinaus implementiert, einschließlich Bluetooth.

## Schnittstellen

- [`HID`](/de/docs/Web/API/HID)
  - : Bietet Methoden zum Verbinden mit HID-Geräten, zum Auflisten angehängter HID-Geräte und Ereignishandlern für verbundene HID-Geräte.
- [`HIDDevice`](/de/docs/Web/API/HIDDevice)
  - : Repräsentiert ein HID-Gerät. Es ist möglich, dass ein physisches Gerät durch mehrere `HIDDevice`-Objekte repräsentiert wird.
- [`HIDInputReportEvent`](/de/docs/Web/API/HIDInputReportEvent)
  - : Wird an das `HIDDevice`- [`inputreport`](/de/docs/Web/API/HIDDevice/inputreport_event) Ereignis übergeben, wenn ein Eingabebericht von einem zugeordneten HID-Gerät empfangen wird.
- [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent)
  - : Wird an `HID`- [`connect`](/de/docs/Web/API/HID/connect_event) und [`disconnect`](/de/docs/Web/API/HID/disconnect_event) Ereignisse übergeben, wenn ein Gerät verbunden oder getrennt wird.

## Beispiele

Sie können mit der Methode [`requestDevice()`](/de/docs/Web/API/HID/requestDevice) eine Verbindung zu einem Gerät herstellen. In diesem Fall wählen wir aus allen verfügbaren Geräten aus.

```js
const device = await navigator.hid.requestDevice({ filters: [] });
// A popup titled `... wants to connect to a HID Device` with `Cancel` and `Connect` buttons will show up with a device list to select from.
// Select one and click on `Connect` button. Then the device will be an array with the selected device in it.
```

Wir können alle Geräte abrufen, für die der Website zuvor Zugriff gewährt wurde, und die Gerätenamen in der Konsole protokollieren.

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
