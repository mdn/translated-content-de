---
title: "HIDDevice: vendorId-Eigenschaft"
short-title: vendorId
slug: Web/API/HIDDevice/vendorId
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`vendorId`** schreibgeschützte Eigenschaft des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces gibt die Hersteller-ID des angeschlossenen HID-Geräts zurück. Diese identifiziert den Hersteller des Geräts.

## Wert

Ein Integer. Wenn das Gerät keine Hersteller-ID hat oder die Hersteller-ID nicht zugänglich ist, gibt dies `0` zurück.

## Beispiele

Das folgende Beispiel ruft Geräte mit [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices) ab und gibt den Wert von `vendorId` in der Konsole aus.

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
