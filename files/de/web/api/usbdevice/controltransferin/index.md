---
title: "USBDevice: controlTransferIn()-Methode"
short-title: controlTransferIn()
slug: Web/API/USBDevice/controlTransferIn
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`controlTransferIn()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) aufgelöst wird, wenn ein Befehl oder Statusanfrage an das USB-Gerät übertragen (empfangen) wurde.

## Syntax

```js-nolint
controlTransferIn(setup, length)
```

### Parameter

- `setup`

  - : Ein Objekt, das Optionen setzt für. Die verfügbaren Optionen sind:

    - `requestType`
      - : Muss einer der drei Werte sein, die angeben, ob die Übertragung `"standard"` (üblich für alle USB-Geräte), `"class"` (üblich für eine industriestandardisierte Klasse von Geräten) oder `"vendor"` ist.
    - `recipient`
      - : Spezifiziert das Ziel der Übertragung auf dem Gerät, eins von `"device"`, `"interface"`, `"endpoint"` oder `"other"`.
    - `request`
      - : Ein herstellerspezifischer Befehl.
    - `value`
      - : Herstellerspezifische Anforderungsparameter.
    - `index`
      - : Die Schnittstellennummer des Empfängers.

- `length`
  - : Die maximale Anzahl von Bytes, die vom Gerät gelesen werden sollen. Die tatsächlichen Daten befinden sich im [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) im aufgelösten Promise.

### Rückgabewert

{{jsxref("promise")}}, das mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
