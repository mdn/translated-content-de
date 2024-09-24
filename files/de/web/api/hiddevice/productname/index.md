---
title: "HIDDevice: productName-Eigenschaft"
short-title: productName
slug: Web/API/HIDDevice/productName
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`productName`** schreibgeschützte Eigenschaft der {{domxref("HIDDevice")}}-Schnittstelle gibt den Produktnamen des angeschlossenen HID-Geräts zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel ruft Geräte mit {{domxref("HID.getDevices()")}} ab und protokolliert den Wert von `productName` in der Konsole.

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

## Kompatibilität der Browser

{{Compat}}
