---
title: "HIDDevice: Eigenschaft opened"
short-title: opened
slug: Web/API/HIDDevice/opened
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}

Die **`opened`** schreibgeschützte Eigenschaft des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces gibt `true` zurück, wenn die Verbindung zum [`HIDDevice`](/de/docs/Web/API/HIDDevice) geöffnet und bereit ist, Daten zu übertragen.

## Wert

Ein boolescher Wert, `true`, wenn die Verbindung geöffnet ist.

## Beispiele

Das folgende Beispiel ruft Geräte mit [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices) ab und protokolliert den Wert von `opened` in der Konsole.

```js
document.addEventListener("DOMContentLoaded", async () => {
  let devices = await navigator.hid.getDevices();
  devices.forEach((device) => {
    console.log(`HID: ${device.opened}`);
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
