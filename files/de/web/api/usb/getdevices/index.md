---
title: "USB: getDevices()-Methode"
short-title: getDevices()
slug: Web/API/USB/getDevices
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getDevices`**-Methode der {{DOMxRef("USB")}}-Schnittstelle
gibt ein {{JSxRef("Promise")}} zurück, das mit einem Array von {{DOMxRef("USBDevice")}}
Objekten für verbundene Geräte aufgelöst wird. Für Informationen zum Koppeln von Geräten siehe
{{DOMxRef("USB.requestDevice()")}}.

## Syntax

```js-nolint
getDevices()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von {{DOMxRef("USBDevice")}}
Objekten aufgelöst wird.

## Beispiele

Das folgende Beispiel protokolliert den Produktnamen und die Seriennummer der gekoppelten Geräte in der Konsole. Für Informationen zum Koppeln von Geräten siehe
{{DOMxRef("USB.requestDevice","USB.requestDevice()")}}.

```js
navigator.usb.getDevices().then((devices) => {
  console.log(`Total devices: ${devices.length}`);
  devices.forEach((device) => {
    console.log(
      `Product name: ${device.productName}, serial number ${device.serialNumber}`,
    );
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
