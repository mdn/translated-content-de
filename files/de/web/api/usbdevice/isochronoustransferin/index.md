---
title: "USBDevice: isochronousTransferIn()-Methode"
short-title: isochronousTransferIn()
slug: Web/API/USBDevice/isochronousTransferIn
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`isochronousTransferIn()`**-Methode des [`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBIsochronousInTransferResult`](/de/docs/Web/API/USBIsochronousInTransferResult) aufgelöst wird, wenn zeitkritische Informationen an das USB-Gerät übertragen (empfangen) wurden.

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

Ein {{jsxref("Promise")}}, das mit einem [`USBIsochronousInTransferResult`](/de/docs/Web/API/USBIsochronousInTransferResult) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
