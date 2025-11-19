---
title: "USBDevice: controlTransferIn()-Methode"
short-title: controlTransferIn()
slug: Web/API/USBDevice/controlTransferIn
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`controlTransferIn()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBInTransferResult`](/de/docs/Web/API/USBInTransferResult) aufgelöst wird, wenn ein Befehl oder Statusanforderung an das USB-Gerät übertragen (empfangen) wurde.

## Syntax

```js-nolint
controlTransferIn(setup, length)
```

### Parameter

- `setup`
  - : Ein Objekt, das Optionen festlegt. Die verfügbaren Optionen sind:
    - `requestType`
      - : Muss einer von drei Werten sein, der angibt, ob die Übertragung `"standard"` (allgemein für alle USB-Geräte), `"class"` (allgemein für eine branchenweit standardisierte Klasse von Geräten) oder `"vendor"` ist.
    - `recipient`
      - : Gibt das Ziel der Übertragung auf dem Gerät an, eines von `"device"`, `"interface"`, `"endpoint"` oder `"other"`.
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
