---
title: "USBDevice: isochronousTransferOut()-Methode"
short-title: isochronousTransferOut()
slug: Web/API/USBDevice/isochronousTransferOut
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`isochronousTransferOut()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBIsochronousOutTransferResult`](/de/docs/Web/API/USBIsochronousOutTransferResult) aufgelöst wird, wenn zeitkritische Informationen vom USB-Gerät übertragen wurden.

## Syntax

```js-nolint
isochronousTransferOut(endpointNumber, data, packetLengths)
```

### Parameter

- `endpointNumber`
  - : Die Nummer eines gerätespezifischen Endpunkts (Buffer).
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
