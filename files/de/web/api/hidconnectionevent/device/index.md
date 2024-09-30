---
title: "HIDConnectionEvent: device-Eigenschaft"
short-title: device
slug: Web/API/HIDConnectionEvent/device
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`device`**-Eigenschaft des [`HIDConnectionEvent`](/de/docs/Web/API/HIDConnectionEvent)-Interfaces ist schreibgeschützt und gibt das [`HIDDevice`](/de/docs/Web/API/HIDDevice) zurück, das mit diesem Verbindungsevent verknüpft ist.

## Wert

Ein [`HIDDevice`](/de/docs/Web/API/HIDDevice).

## Beispiele

Das folgende Beispiel registriert Ereignislistener für die Ereignisse `connect` und `disconnect` und gibt anschließend den [`HIDDevice.productName`](/de/docs/Web/API/HIDDevice/productName) in der Konsole aus.

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
