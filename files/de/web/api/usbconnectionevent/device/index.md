---
title: "USBConnectionEvent: Geräte-Eigenschaft"
short-title: Gerät
slug: Web/API/USBConnectionEvent/device
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Die **`device`**-Schreibgeschützte Eigenschaft der {{domxref("USBConnectionEvent")}}-Schnittstelle gibt ein {{domxref("USBDevice")}}-Objekt zurück, das das angeschlossene oder getrennte Gerät darstellt.

## Wert

Ein {{domxref("USBDevice")}}-Objekt.

## Beispiele

Das Anschließen eines USB-Geräts löst das `connect`-Ereignis aus. Das aktuelle {{domxref("USBDevice")}} wird durch Aufrufen von `event.device` zurückgegeben.

```js
navigator.usb.addEventListener("connect", (event) => {
  console.log(event.device);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
