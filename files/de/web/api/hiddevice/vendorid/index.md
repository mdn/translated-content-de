---
title: "HIDDevice: vendorId-Eigenschaft"
short-title: vendorId
slug: Web/API/HIDDevice/vendorId
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die schreibgeschützte **`vendorId`**-Eigenschaft der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle gibt die Hersteller-ID des verbundenen HID-Geräts zurück. Diese identifiziert den Hersteller des Geräts.

## Wert

Ein Integer. Wenn das Gerät keine Hersteller-ID hat oder die Hersteller-ID nicht zugänglich ist, wird `0` zurückgegeben.

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
