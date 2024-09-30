---
title: "HIDDevice: productName-Eigenschaft"
short-title: productName
slug: Web/API/HIDDevice/productName
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`productName`**-Leseeigenschaft des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces gibt den Produktnamen des angeschlossenen HID-Geräts zurück.

## Wert

Ein Zeichenfolge.

## Beispiele

Das folgende Beispiel ruft Geräte mit [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices) ab und protokolliert den Wert von `productName` in der Konsole.

```js
document.addEventListener("DOMContentLoaded", async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID: ${device.productName}`);
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
