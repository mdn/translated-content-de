---
title: "HIDDevice: vendorId-Eigenschaft"
short-title: vendorId
slug: Web/API/HIDDevice/vendorId
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`vendorId`** der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle gibt die Vendor-ID des angeschlossenen HID-Geräts zurück. Diese identifiziert den Hersteller des Geräts.

## Wert

Ein Integer. Wenn das Gerät keine Vendor-ID hat oder die Vendor-ID nicht zugänglich ist, wird `0` zurückgegeben.

## Beispiele

Das folgende Beispiel ruft Geräte mit [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices) ab und protokolliert den Wert von `vendorId` in der Konsole.

```js
document.addEventListener("DOMContentLoaded", async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID: ${device.vendorId}`);
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
