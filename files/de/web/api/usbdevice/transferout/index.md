---
title: "USBDevice: transferOut() Methode"
short-title: transferOut()
slug: Web/API/USBDevice/transferOut
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`transferOut()`** Methode des {{domxref("USBDevice")}} Schnittstelle gibt ein {{jsxref("promise")}} zurück, das sich mit einem {{domxref("USBOutTransferResult")}} auflöst, wenn Bulk- oder Interrupt-Daten an das USB-Gerät gesendet werden.

## Syntax

```js-nolint
transferOut(endpointNumber, data)
```

### Parameter

- `endpointNumber`
  - : Die Nummer eines gerätespezifischen Endpunkts (Puffer).
- `data`
  - : Ein {{jsxref("TypedArray")}}, das die an das Gerät zu sendenden Daten enthält.

### Rückgabewert

Ein {{jsxref("promise")}}, das sich mit einem {{domxref("USBOutTransferResult")}} auflöst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
