---
title: "USBDevice: transferOut()-Methode"
short-title: transferOut()
slug: Web/API/USBDevice/transferOut
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`transferOut()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("promise")}} zurück, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird, wenn Bulk- oder Interrupt-Daten an das USB-Gerät gesendet werden.

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

Ein {{jsxref("promise")}}, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
