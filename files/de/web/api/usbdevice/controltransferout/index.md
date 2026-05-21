---
title: "USBDevice: Methode controlTransferOut()"
short-title: controlTransferOut()
slug: Web/API/USBDevice/controlTransferOut
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`controlTransferOut()`**-Methode der [`USBDevice`](/de/docs/Web/API/USBDevice)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird, wenn ein Befehl oder eine Statusoperation vom USB-Gerät übertragen wurde.

## Syntax

```js-nolint
controlTransferOut(setup, data)
```

### Parameter

- `setup`
  - : Ein Objekt, das Optionen festlegt. Die verfügbaren Optionen sind:
    - `requestType`
      - : Muss einer der drei Werte sein, die angeben, ob die Übertragung `"standard"` (allgemein für alle USB-Geräte), `"class"` (allgemein für eine industrieübliche Gerätekategorie) oder `"vendor"` ist.
    - `recipient`
      - : Gibt das Ziel der Übertragung am Gerät an, entweder `"device"`, `"interface"`, `"endpoint"` oder `"other"`.
    - `request`
      - : Ein gerätespezifischer Befehl.
    - `value`
      - : Gerätespezifische Anforderungsparameter.
    - `index`
      - : Die Schnittstellennummer des Empfängers.

- `data`
  - : Ein {{jsxref("TypedArray")}}, das die Daten enthält, die an das Gerät übertragen werden sollen.
    Nicht alle Befehle erfordern Daten; einige Befehle können Daten nur über den Wertparameter senden.
    Überprüfen Sie Ihr Gerät, um zu sehen, welche spezifische Anforderung erforderlich ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
