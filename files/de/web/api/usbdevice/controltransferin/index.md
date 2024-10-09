---
title: "USBDevice: Methode controlTransferIn()"
short-title: controlTransferIn()
slug: Web/API/USBDevice/controlTransferIn
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`controlTransferIn()`** Methode des [`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) aufgelöst wird, wenn ein Befehl oder Statusanforderung an das USB-Gerät übertragen wurde (und vom Gerät empfangen wurde).

## Syntax

```js-nolint
controlTransferIn(setup, length)
```

### Parameter

- `setup`

  - : Ein Objekt, das Optionen festlegt. Die verfügbaren Optionen sind:

    - `requestType`
      - : Muss einer von drei Werten sein, die angeben, ob die Übertragung `"standard"` (häufig bei allen USB-Geräten), `"class"` (häufig bei einer nach Industriestandards festgelegten Geräteklasse) oder `"vendor"` ist.
    - `recipient`
      - : Gibt das Ziel der Übertragung auf dem Gerät an, eines von `"device"`, `"interface"`, `"endpoint"`, oder `"other"`.
    - `request`
      - : Ein herstellerspezifischer Befehl.
    - `value`
      - : Herstellerspezifische Anforderungsparameter.
    - `index`
      - : Die Schnittstellennummer des Empfängers.

- `length`
  - : Die maximale Anzahl von Bytes, die vom Gerät gelesen werden sollen. Die tatsächlichen Daten befinden sich im [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) im aufgelösten Promise.

### Rückgabewert

{{jsxref("promise")}} das mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
