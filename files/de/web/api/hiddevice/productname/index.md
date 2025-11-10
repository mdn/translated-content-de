---
title: "HIDDevice: productName-Eigenschaft"
short-title: productName
slug: Web/API/HIDDevice/productName
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die schreibgeschützte **`productName`**-Eigenschaft der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle gibt den Produktnamen des verbundenen HID-Geräts zurück.

## Wert

Ein String.

## Beispiele

Das folgende Beispiel ruft Geräte mit [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices) ab und protokolliert den Wert von `productName` in der Konsole.

```js
let devices = await navigator.hid.getDevices();
devices.forEach((device) => {
  console.log(`HID: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
