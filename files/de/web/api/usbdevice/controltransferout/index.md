---
title: "USBDevice: controlTransferOut()-Methode"
short-title: controlTransferOut()
slug: Web/API/USBDevice/controlTransferOut
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`controlTransferOut()`**-Methode des [`USBDevice`](/de/docs/Web/API/USBDevice)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird, wenn ein Befehl oder Statusvorgang vom USB-Gerät übertragen wurde.

## Syntax

```js-nolint
controlTransferOut(setup, data)
```

### Parameter

- `setup`
  - : Ein Objekt, das Optionen festlegt. Die verfügbaren Optionen sind:
    - `requestType`
      - : Muss einer von drei Werten sein, die angeben, ob die Übertragung `"standard"` (gemeinsam für alle USB-Geräte) `"class"` (gemeinsam für eine industrienormierte Geräteklasse) oder `"vendor"` ist.
    - `recipient`
      - : Gibt das Ziel der Übertragung auf dem Gerät an, eines von `"device"`, `"interface"`, `"endpoint"` oder `"other"`.
    - `request`
      - : Ein herstellerspezifischer Befehl.
    - `value`
      - : Herstellerspezifische Anforderungsparameter.
    - `index`
      - : Die Schnittstellennummer des Empfängers.

- `data`
  - : Ein {{jsxref("TypedArray")}}, das die Daten enthält, die zum Gerät übertragen werden. Nicht alle Befehle benötigen Daten; einige Befehle können Daten nur über den Wertparameter senden. Überprüfen Sie Ihr Gerät, um zu sehen, was die spezifische Anforderung erfordert.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem [`USBOutTransferResult`](/de/docs/Web/API/USBOutTransferResult) aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
