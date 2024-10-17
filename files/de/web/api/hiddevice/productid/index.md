---
title: "HIDDevice: productId-Eigenschaft"
short-title: productId
slug: Web/API/HIDDevice/productId
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die schreibgeschützte **`productId`**-Eigenschaft der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle gibt die Produkt-ID des verbundenen HID-Geräts zurück.

## Wert

Ein Integer. Wenn das Gerät keine Produkt-ID hat oder die Produkt-ID nicht zugänglich ist, wird `0` zurückgegeben.

## Beispiele

Das folgende Beispiel ruft Geräte mit [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices) ab und gibt den Wert von `productId` in der Konsole aus.

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
