---
title: "USBDevice: transferOut()-Methode"
short-title: transferOut()
slug: Web/API/USBDevice/transferOut
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`transferOut()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("promise")}} zurück, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird, wenn Bulk- oder Interrupt-Daten an das USB-Gerät gesendet werden.

## Syntax

```js-nolint
transferOut(endpointNumber, data)
```

### Parameter

- `endpointNumber`
  - : Die Nummer eines gerätespezifischen Endpunkts (Puffer).
- `data`
  - : Ein {{jsxref("TypedArray")}}, das die zu sendenden Daten an das Gerät enthält.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
