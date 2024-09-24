---
title: "HIDConnectionEvent: Geräte-Eigenschaft"
short-title: Gerät
slug: Web/API/HIDConnectionEvent/device
l10n:
  sourceCommit: b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`device`**-Eigenschaft der schreibgeschützten Schnittstelle {{domxref("HIDConnectionEvent")}} gibt das mit diesem Verbindungsereignis verbundene {{domxref("HIDDevice")}} zurück.

## Wert

Ein {{domxref("HIDDevice")}}.

## Beispiele

Das folgende Beispiel registriert Ereignislistener für `connect` und `disconnect` Ereignisse und gibt den {{domxref("HIDDevice.productName")}} in der Konsole aus.

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
