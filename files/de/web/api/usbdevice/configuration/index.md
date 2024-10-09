---
title: "USBDevice: configuration-Eigenschaft"
short-title: configuration
slug: Web/API/USBDevice/configuration
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`configuration`**-Nur-Leseeigenschaft des
[`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)-Objekt für das derzeit ausgewählte Interface eines verbundenen USB-Geräts zurück.

## Wert

Ein [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)-Objekt.

## Beispiele

Das folgende Beispiel nutzt diese Eigenschaft, um das Vorhandensein einer
USBConfiguration-Eigenschaft zu prüfen, um vor dem Beanspruchen eines Interfaces eine Konfiguration auszuwählen.

```js
async function connectDevice(usbDevice) {
  await usbDevice.open();
  if (usbDevice.configuration === null) await usbDevice.selectConfiguration(1);
  await usbDevice.claimInterface(0);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
