---
title: "HIDDevice: productId-Eigenschaft"
short-title: productId
slug: Web/API/HIDDevice/productId
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die schreibgeschützte Eigenschaft **`productId`** des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces gibt die Produkt-ID des verbundenen HID-Geräts zurück.

## Wert

Ein Integer. Wenn das Gerät keine Produkt-ID hat oder die Produkt-ID nicht abgerufen werden kann, wird `0` zurückgegeben.

## Beispiele

Das folgende Beispiel ruft Geräte mit [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices) ab und protokolliert den Wert von `productId` in der Konsole.

```js
let devices = await navigator.hid.getDevices();
devices.forEach((device) => {
  console.log(`HID: ${device.productId}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
