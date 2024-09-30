---
title: "USB: getDevices()-Methode"
short-title: getDevices()
slug: Web/API/USB/getDevices
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`getDevices`**-Methode der [`USB`](/de/docs/Web/API/USB)-Schnittstelle
gibt ein {{JSxRef("Promise")}} zurück, das mit einem Array von [`USBDevice`](/de/docs/Web/API/USBDevice)-
Objekten für gepaarte angeschlossene Geräte aufgelöst wird. Informationen über das Koppeln von Geräten finden Sie unter
[`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice).

## Syntax

```js-nolint
getDevices()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von [`USBDevice`](/de/docs/Web/API/USBDevice)-
Objekten aufgelöst wird.

## Beispiele

Das folgende Beispiel protokolliert den Produktnamen und die Seriennummer gepaarter Geräte in der
Konsole. Informationen über das Koppeln von Geräten finden Sie unter
[`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice).

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
