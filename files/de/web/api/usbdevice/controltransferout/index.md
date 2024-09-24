---
title: "USBDevice: Methode controlTransferOut()"
short-title: controlTransferOut()
slug: Web/API/USBDevice/controlTransferOut
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebUSB API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`controlTransferOut()`**-Methode des {{domxref("USBDevice")}}-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("USBOutTransferResult")}} aufgelöst wird, wenn ein Befehl oder eine Statusoperation vom USB-Gerät übertragen wurde.

## Syntax

```js-nolint
controlTransferOut(setup, data)
```

### Parameter

- `setup`

  - : Ein Objekt, das Optionen festlegt. Die verfügbaren Optionen sind:

    - `requestType`
      - : Muss einen der drei Werte annehmen, die angeben, ob die Übertragung `"standard"` (alltäglich für alle USB-Geräte), `"class"` (alltäglich für eine branchenspezifische Klasse von Geräten) oder `"vendor"` ist.
    - `recipient`
      - : Gibt das Ziel der Übertragung auf dem Gerät an, eines von `"device"`, `"interface"`, `"endpoint"` oder `"other"`.
    - `request`
      - : Ein herstellerspezifischer Befehl.
    - `value`
      - : Herstellerspezifische Anforderungsparameter.
    - `index`
      - : Die Schnittstellennummer des Empfängers.

- `data`
  - : Ein {{jsxref("TypedArray")}}, das die Daten enthält, die an das Gerät übertragen werden sollen. Nicht alle Befehle erfordern Daten; einige Befehle können Daten nur über den Wertparameter senden.
    Überprüfen Sie mit Ihrem Gerät, was die spezifische Anforderung erfordert.

### Rückgabewert

Ein {{jsxref("promise")}}, das mit einem {{domxref("USBOutTransferResult")}} aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
