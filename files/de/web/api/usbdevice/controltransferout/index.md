---
title: "USBDevice: Methode controlTransferOut()"
short-title: controlTransferOut()
slug: Web/API/USBDevice/controlTransferOut
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`controlTransferOut()`**-Methode des [`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird, wenn ein Steuer- oder Statusbefehl vom USB-Gerät übertragen wurde.

## Syntax

```js-nolint
controlTransferOut(setup, data)
```

### Parameter

- `setup`

  - : Ein Objekt, das Optionen festlegt. Die verfügbaren Optionen sind:

    - `requestType`
      - : Muss einer von drei Werten sein, die angeben, ob die Übertragung `"standard"` (für alle USB-Geräte üblich), `"class"` (für eine branchenübliche Gerätegruppe üblich) oder `"vendor"` ist.
    - `recipient`
      - : Gibt das Ziel der Übertragung auf dem Gerät an, eines von `"device"`, `"interface"`, `"endpoint"` oder `"other"`.
    - `request`
      - : Ein gerätespezifischer Befehl.
    - `value`
      - : Gerätespezifische Anforderungsparameter.
    - `index`
      - : Die Schnittstellennummer des Empfängers.

- `data`
  - : Ein {{jsxref("TypedArray")}}, das die Daten enthält, die an das Gerät übertragen werden sollen.
    Nicht alle Befehle erfordern Daten; einige Befehle können Daten allein über den Wertparameter senden.
    Überprüfen Sie mit Ihrem Gerät, welche spezifische Anfrage erforderlich ist.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
