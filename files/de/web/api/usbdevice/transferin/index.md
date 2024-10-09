---
title: "USBDevice: transferIn() Methode"
short-title: transferIn()
slug: Web/API/USBDevice/transferIn
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`transferIn()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("promise")}} zurück, das mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) aufgelöst wird, wenn Bulk- oder Interrupt-Daten vom USB-Gerät empfangen werden.

## Syntax

```js-nolint
transferIn(endpointNumber, length)
```

### Parameter

- `endpointNumber`
  - : Die Nummer eines gerätespezifischen Endpunkts (Puffer).
- `length`
  - : Die maximale Anzahl von Bytes, die vom Gerät zurückgelesen werden kann. Die tatsächlichen Daten befinden sich im [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) im aufgelösten Promise.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
