---
title: "HIDDevice: productName-Eigenschaft"
short-title: productName
slug: Web/API/HIDDevice/productName
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die schreibgeschützte Eigenschaft **`productName`** des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces gibt den Produktnamen des verbundenen HID-Geräts zurück.

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
