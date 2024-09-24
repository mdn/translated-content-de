---
title: "USBDevice: Methode isochronousTransferIn()"
short-title: isochronousTransferIn()
slug: Web/API/USBDevice/isochronousTransferIn
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`isochronousTransferIn()`**-Methode der {{domxref("USBDevice")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("USBIsochronousInTransferResult")}} aufgelöst wird, wenn zeitkritische Informationen an das USB-Gerät übertragen wurden (vom Gerät empfangen wurden).

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

Ein {{jsxref("Promise")}}, das mit einem {{domxref("USBIsochronousInTransferResult")}} aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
