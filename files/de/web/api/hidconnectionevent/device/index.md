---
title: "HIDConnectionEvent: device-Eigenschaft"
short-title: device
slug: Web/API/HIDConnectionEvent/device
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`device`**-Eigenschaft, die nur lesbar ist, des [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent)-Interfaces gibt das mit diesem Verbindungsevent verbundene [`HIDDevice`](/de/docs/Web/API/HIDDevice) zurück.

## Wert

Ein [`HIDDevice`](/de/docs/Web/API/HIDDevice).

## Beispiele

Das folgende Beispiel registriert Ereignis-Listener für die `connect`- und `disconnect`-Ereignisse und gibt dann den [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) in der Konsole aus.

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
