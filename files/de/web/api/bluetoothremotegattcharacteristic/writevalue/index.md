---
title: "BluetoothRemoteGATTCharacteristic: writeValue()-Methode"
short-title: writeValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Bluetooth API")}}{{SecureContext_Header}}

Verwenden Sie stattdessen [`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse) und [`BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithoutResponse).

Die Methode **`BluetoothRemoteGATTCharacteristic.writeValue()`** setzt die `value`-Eigenschaft eines [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic)-Objekts auf die Bytes, die in einem gegebenen {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} enthalten sind, [schreibt den Charakteristik-Wert mit optionaler Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue), und gibt das resultierende {{JSxRef("Promise")}} zurück.

## Syntax

```js-nolint
writeValue(buffer)
```

### Parameter

- `value`
  - : Ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
