---
title: "HIDDevice: opened Eigenschaft"
short-title: opened
slug: Web/API/HIDDevice/opened
l10n:
  sourceCommit: 534e2c61fee576355e8a9b7036d9fa36056edb03
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die schreibgeschützte **`opened`**-Eigenschaft des [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Interfaces gibt true zurück, wenn die Verbindung zum [`HIDDevice`](/de/docs/Web/API/HIDDevice) geöffnet ist und bereit, Daten zu übertragen.

## Wert

Ein boolescher Wert, der true ist, wenn die Verbindung geöffnet ist.

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
