---
title: WebHID-API
slug: Web/API/WebHID_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("WebHID API")}}{{SeeCompatTable}}

Ein Human Interface Device (HID) ist eine Art von Gerät, das Eingaben von oder Ausgaben an Menschen verarbeitet. Es bezieht sich auch auf das HID-Protokoll, einen Standard für die bidirektionale Kommunikation zwischen einem Host und einem Gerät, der die Installationsprozedur vereinfachen soll. Das HID-Protokoll wurde ursprünglich für USB-Geräte entwickelt, ist aber seither in vielen anderen Protokollen, einschließlich Bluetooth, implementiert worden.

## Schnittstellen

- {{domxref("HID")}}
  - : Bietet Methoden zum Verbinden mit HID-Geräten, Auflisten von angeschlossenen HID-Geräten und Event-Handler für verbundene HID-Geräte.
- {{domxref("HIDDevice")}}
  - : Stellt ein HID-Gerät dar. Es ist möglich, dass ein einzelnes physisches Gerät durch mehrere `HIDDevice`-Objekte repräsentiert wird.
- {{domxref("HIDInputReportEvent")}}
  - : Wird an das `HIDDevice`-{{domxref("HIDDevice.inputreport_event", "inputreport")}}-Ereignis übergeben, wenn ein Eingabereport von einem verbundenen HID-Gerät empfangen wird.
- {{domxref("HIDConnectionEvent")}}
  - : Wird an die `HID`-{{domxref("HID.connect_event", "connect")}}- und {{domxref("HID.disconnect_event", "disconnect")}}-Ereignisse übergeben, wenn ein Gerät verbunden oder getrennt wird.

## Beispiele

Sie können sich mit der {{domxref("HID.requestDevice","requestDevice()")}}-Methode mit einem Gerät verbinden. In diesem Fall wählen wir aus allen verfügbaren Geräten aus.

```js
const device = await navigator.hid.requestDevice({ filters: [] });
// Ein Popup mit dem Titel `... möchte eine Verbindung zu einem HID-Gerät herstellen` mit den Schaltflächen `Abbrechen` und `Verbinden` wird angezeigt, mit einer Geräteliste zum Auswählen.
// Wählen Sie eines aus und klicken Sie auf die Schaltfläche `Verbinden`. Dann wird das Gerät ein Array mit dem ausgewählten Gerät darin sein.
```

Wir können alle Geräte abrufen, auf die der Website zuvor Zugriff gewährt wurde, und die Gerätenamen in die Konsole protokollieren.

```js
let devices = await navigator.hid.getDevices();
devices.forEach((device) => {
  console.log(`HID: ${device.productName}`);
});
```

Wir können Ereignis-Listener für die Trennung von HID-Geräten registrieren.

```js
navigator.hid.addEventListener("disconnect", (event) => {
  console.log(`HID disconnected: ${event.device.productName}`);
  console.dir(event);
});
// Zum Beispiel, wenn meine verbundene Tastatur getrennt wird, zeigt das Protokoll in der Konsole:
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

// Das oben genannte Ereignis ist eine Instanz der Schnittstelle HIDConnectionEvent.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
