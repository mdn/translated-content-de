---
title: "USBDevice: Konfigurations-Eigenschaft"
short-title: configuration
slug: Web/API/USBDevice/configuration
l10n:
  sourceCommit: 03d7663c2965d67eca296f6a27aa8a651de7dfee
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`configuration`** des
[`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)-Objekt für
das derzeit ausgewählte Interface eines verbundenen USB-Geräts zurück.

## Wert

Ein [`USBConfiguration`](/de/docs/Web/API/USBConfiguration)-Objekt.

## Beispiele

Das folgende Beispiel verwendet diese Eigenschaft, um das Vorhandensein einer
USBConfiguration-Eigenschaft zu testen, um eine Konfiguration auszuwählen, bevor ein Interface beansprucht wird.

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
