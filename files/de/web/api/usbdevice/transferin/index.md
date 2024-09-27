---
title: "USBDevice: transferIn() Methode"
short-title: transferIn()
slug: Web/API/USBDevice/transferIn
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`transferIn()`** Methode des [`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("promise")}} zurück, das aufgelöst wird mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult), wenn Bulk- oder Unterbrechungsdaten vom USB-Gerät empfangen werden.

## Syntax

```js-nolint
transferIn(endpointNumber, length)
```

### Parameter

- `endpointNumber`
  - : Die Nummer eines gerätespezifischen Endpunkts (Puffer).
- `length`
  - : Die maximale Anzahl von Bytes, die vom Gerät gelesen werden. Die tatsächlichen Daten befinden sich im [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) in dem aufgelösten Promise.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
