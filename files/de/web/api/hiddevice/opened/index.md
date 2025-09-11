---
title: "HIDDevice: opened-Eigenschaft"
short-title: opened
slug: Web/API/HIDDevice/opened
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{securecontext_header}}{{APIRef("WebHID API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_shared")}}

Die schreibgeschützte **`opened`**-Eigenschaft der [`HIDDevice`](/de/docs/Web/API/HIDDevice)-Schnittstelle gibt `true` zurück, wenn die Verbindung zum [`HIDDevice`](/de/docs/Web/API/HIDDevice) geöffnet und bereit ist, Daten zu übertragen.

## Wert

Ein boolescher Wert, `true`, wenn die Verbindung geöffnet ist.

## Beispiele

Im folgenden Beispiel werden Geräte mit [`HID.getDevices()`](/de/docs/Web/API/HID/getDevices) abgerufen und der Wert von `opened` in die Konsole protokolliert.

```js
let devices = await navigator.hid.getDevices();
devices.forEach((device) => {
  console.log(`HID: ${device.opened}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
