---
title: "HIDDevice: productId Eigenschaft"
short-title: productId
slug: Web/API/HIDDevice/productId
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`productId`** des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces gibt die Produkt-ID des verbundenen HID-Geräts zurück.

## Wert

Ein Integer. Wenn das Gerät keine Produkt-ID hat oder die Produkt-ID nicht zugänglich ist, wird `0` zurückgegeben.

## Beispiele

Das folgende Beispiel ruft Geräte mit [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices) ab und protokolliert den Wert von `productId` in der Konsole.

```js
document.addEventListener("DOMContentLoaded", async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID: ${device.productId}`);
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
