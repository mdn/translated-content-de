---
title: "USBConnectionEvent: device-Eigenschaft"
short-title: device
slug: Web/API/USBConnectionEvent/device
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Die **`device`**-Eigenschaft des [`USBConnectionEvent`](/de/docs/Web/API/USBConnectionEvent)-Interfaces ist schreibgeschützt und gibt ein [`USBDevice`](/de/docs/Web/API/USBDevice)-Objekt zurück, das das verbundene oder getrennte Gerät darstellt.

## Wert

Ein [`USBDevice`](/de/docs/Web/API/USBDevice)-Objekt.

## Beispiele

Das Verbinden eines USB-Geräts löst das `connect`-Ereignis aus. Das aktuelle [`USBDevice`](/de/docs/Web/API/USBDevice) wird durch den Aufruf von `event.device` zurückgegeben.

```js
navigator.usb.addEventListener("connect", (event) => {
  console.log(event.device);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
