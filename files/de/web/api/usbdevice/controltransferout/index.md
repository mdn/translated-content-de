---
title: "USBDevice: controlTransferOut()-Methode"
short-title: controlTransferOut()
slug: Web/API/USBDevice/controlTransferOut
l10n:
  sourceCommit: a10e3f00a346a0ec35380513f65915849d99f895
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`controlTransferOut()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird, wenn ein Befehl oder Status von dem USB-Gerät übertragen wurde.

## Syntax

```js-nolint
controlTransferOut(setup, data)
```

### Parameter

- `setup`

  - : Ein Objekt, das Optionen festlegt. Die verfügbaren Optionen sind:

    - `requestType`
      - : Muss einer von drei Werten sein, die angeben, ob der Transfer `"standard"` (allgemein für alle USB-Geräte), `"class"` (allgemein für eine industrieübliche Geräteklasse) oder `"vendor"` ist.
    - `recipient`
      - : Gibt das Ziel des Transfers auf dem Gerät an, einer von `"device"`, `"interface"`, `"endpoint"` oder `"other"`.
    - `request`
      - : Ein herstellerspezifischer Befehl.
    - `value`
      - : Herstellerspezifische Anfrageparameter.
    - `index`
      - : Die Schnittstellennummer des Empfängers.

- `data`
  - : Ein {{jsxref("TypedArray")}}, das die Daten enthält, die an das Gerät übertragen werden sollen. Nicht alle Befehle erfordern Daten; einige Befehle können Daten nur über den Wertparameter senden. Überprüfen Sie Ihr Gerät, um zu sehen, welche spezifischen Anforderungen erforderlich sind.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
