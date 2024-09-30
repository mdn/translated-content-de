---
title: "USBDevice: isochronousTransferIn()-Methode"
short-title: isochronousTransferIn()
slug: Web/API/USBDevice/isochronousTransferIn
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`isochronousTransferIn()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird mit einem [`USBIsochronousInTransferResult`](/de/docs/Web/API/USBIsochronousInTransferResult), wenn zeitkritische Informationen an das USB-Gerät übertragen wurden (empfangen wurden).

## Syntax

```js-nolint
isochronousTransferIn(endpointNumber, packetLengths)
```

### Parameter

- `endpointNumber`
  - : Die Nummer eines gerätespezifischen Endpunkts (Puffer).
- `packetLengths`
  - : Ein Array von Längen für die empfangenen Pakete.

### Rückgabewert

Ein {{jsxref("Promise")}}, das aufgelöst wird mit einem [`USBIsochronousInTransferResult`](/de/docs/Web/API/USBIsochronousInTransferResult).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
