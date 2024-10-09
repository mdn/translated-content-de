---
title: "USB: getDevices()-Methode"
short-title: getDevices()
slug: Web/API/USB/getDevices
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getDevices`**-Methode des [`USB`](/de/docs/Web/API/USB)-Interfaces
gibt ein {{JSxRef("Promise")}} zurück, das mit einem Array von [`USBDevice`](/de/docs/Web/API/USBDevice)-Objekten für gepaarte, angeschlossene Geräte auflöst. Für Informationen über das Koppeln von Geräten siehe [`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice).

## Syntax

```js-nolint
getDevices()
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das mit einem Array von [`USBDevice`](/de/docs/Web/API/USBDevice)-Objekten auflöst.

## Beispiele

Das folgende Beispiel protokolliert den Produktnamen und die Seriennummer der gepaarten Geräte in der Konsole. Für Informationen über das Koppeln von Geräten siehe [`USB.requestDevice()`](/de/docs/Web/API/USB/requestDevice).

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
