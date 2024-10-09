---
title: "USBConnectionEvent: device-Eigenschaft"
short-title: device
slug: Web/API/USBConnectionEvent/device
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`device`** schreibgeschützte Eigenschaft des [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent)-Interfaces gibt ein [`USBDevice`](/de/docs/Web/API/USBDevice)-Objekt zurück, das das angeschlossene oder getrennte Gerät darstellt.

## Wert

Ein [`USBDevice`](/de/docs/Web/API/USBDevice)-Objekt.

## Beispiele

Das Anschließen eines USB-Geräts löst das `connect`-Ereignis aus. Das aktuelle [`USBDevice`](/de/docs/Web/API/USBDevice) wird durch Aufruf von `event.device` zurückgegeben.

```js
navigator.usb.addEventListener("connect", (event) => {
  console.log(event.device);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
