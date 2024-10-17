---
title: "HIDConnectionEvent: device-Eigenschaft"
short-title: device
slug: Web/API/HIDConnectionEvent/device
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die schreibgeschützte **`device`**-Eigenschaft des [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent)-Interfaces gibt das [`HIDDevice`](/de/docs/Web/API/HIDDevice) zurück, das mit diesem Verbindungsevent verknüpft ist.

## Wert

Ein [`HIDDevice`](/de/docs/Web/API/HIDDevice).

## Beispiele

Im folgenden Beispiel werden Event-Listener für `connect`- und `disconnect`-Events registriert, und anschließend wird der [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) in der Konsole ausgegeben.

```js
navigator.hid.addEventListener("connect", ({ device }) => {
  console.log(`HID connected: ${device.productName}`);
});

navigator.hid.addEventListener("disconnect", ({ device }) => {
  console.log(`HID disconnected: ${device.productName}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
