---
title: "USBDevice: isochronousTransferOut()-Methode"
short-title: isochronousTransferOut()
slug: Web/API/USBDevice/isochronousTransferOut
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`isochronousTransferOut()`**-Methode des [`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBIsochronousOutTransferResult`](/de/docs/Web/API/USBIsochronousOutTransferResult) aufgelöst wird, wenn zeitkritische Informationen vom USB-Gerät übertragen wurden.

## Syntax

```js-nolint
isochronousTransferOut(endpointNumber, data, packetLengths)
```

### Parameter

- `endpointNumber`
  - : Die Nummer eines gerätespezifischen Endpunkts (Puffer).
- `data`
  - : Ein {{jsxref("TypedArray")}}, das die an das Gerät zu sendenden Daten enthält.
- `packetLengths`
  - : Ein Array von Längen für die zu übertragenden Pakete.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`USBIsochronousOutTransferResult`](/de/docs/Web/API/USBIsochronousOutTransferResult) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
