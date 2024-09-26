---
title: "USBDevice: transferIn()-Methode"
short-title: transferIn()
slug: Web/API/USBDevice/transferIn
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`transferIn()`**-Methode der {{domxref("USBDevice")}}
Schnittstelle gibt ein {{jsxref("promise")}} zurück, das mit einem
{{domxref("USBInTransferResult")}} aufgelöst wird, wenn Bulk- oder Interrupt-Daten vom USB-Gerät empfangen werden.

## Syntax

```js-nolint
transferIn(endpointNumber, length)
```

### Parameter

- `endpointNumber`
  - : Die Nummer eines gerätespezifischen Endpunkts (Puffer).
- `length`
  - : Die maximale Anzahl von Bytes, die vom Gerät zurückgelesen werden. Die tatsächlichen Daten befinden sich im {{domxref("USBInTransferResult")}} im aufgelösten Promise.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem {{domxref("USBInTransferResult")}} aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}