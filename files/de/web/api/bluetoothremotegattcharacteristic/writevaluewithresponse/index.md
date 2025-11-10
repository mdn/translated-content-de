---
title: "BluetoothRemoteGATTCharacteristic: writeValueWithResponse() Methode"
short-title: writeValueWithResponse()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse
l10n:
  sourceCommit: 5fd5cc8885286bfa5bae8b3e9970e1eab26e941d
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`**-Methode setzt die `value`-Eigenschaft eines [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic)-Objekts auf die Bytes, die in einem gegebenen {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} enthalten sind. Sie [schreibt den Charakteristikwert mit erforderlicher Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.

## Syntax

```js-nolint
writeValueWithResponse(value)
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
