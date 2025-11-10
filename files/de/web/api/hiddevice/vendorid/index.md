---
title: "HIDDevice: Eigenschaft vendorId"
short-title: vendorId
slug: Web/API/HIDDevice/vendorId
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die **`vendorId`**-Eigenschaft des Interface [`HIDDevice`](/de/docs/Web/API/HIDDevice) ist schreibgeschützt und gibt die Hersteller-ID des verbundenen HID-Geräts zurück. Diese identifiziert den Hersteller des Geräts.

## Wert

Ein Ganzzahlwert. Wenn das Gerät keine Hersteller-ID hat oder die Hersteller-ID nicht zugänglich ist, wird `0` zurückgegeben.

## Beispiele

Das folgende Beispiel ruft Geräte mit [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices) ab und gibt den Wert von `vendorId` in der Konsole aus.

```js
let devices = await navigator.hid.getDevices();
devices.forEach((device) => {
  console.log(`HID: ${device.vendorId}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
