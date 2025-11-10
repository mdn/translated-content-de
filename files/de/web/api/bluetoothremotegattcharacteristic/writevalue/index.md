---
title: "BluetoothRemoteGATTCharacteristic: writeValue() Methode"
short-title: writeValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValue
l10n:
  sourceCommit: 5fd5cc8885286bfa5bae8b3e9970e1eab26e941d
---

{{APIRef("Bluetooth API")}}{{Deprecated_header}}{{SecureContext_Header}}

Verwenden Sie stattdessen [`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse) und [`BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithoutResponse).

Die **`BluetoothRemoteGATTCharacteristic.writeValue()`**-Methode setzt die `value`-Eigenschaft eines [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic)-Objekts auf die Bytes eines gegebenen {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}}, [schreibt den Charakteristikwert mit optionaler Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.

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
