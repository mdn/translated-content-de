---
title: "HIDDevice: Eigenschaft vendorId"
short-title: vendorId
slug: Web/API/HIDDevice/vendorId
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`vendorId`** der {{domxref("HIDDevice")}}-Schnittstelle gibt die Hersteller-ID des angeschlossenen HID-Geräts zurück. Dies identifiziert den Hersteller des Geräts.

## Wert

Ein ganzzahliger Wert. Wenn das Gerät keine Hersteller-ID hat oder auf diese nicht zugegriffen werden kann, wird `0` zurückgegeben.

## Beispiele

Das folgende Beispiel ruft Geräte mit {{domxref("HID.getDevices()")}} ab und protokolliert den Wert von `vendorId` in der Konsole.

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
