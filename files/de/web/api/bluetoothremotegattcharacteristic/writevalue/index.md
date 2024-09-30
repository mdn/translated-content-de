---
title: "BluetoothRemoteGATTCharacteristic: writeValue()-Methode"
short-title: writeValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValue
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("Bluetooth API")}}{{Deprecated_header}}{{SecureContext_Header}}

Verwenden Sie stattdessen [`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse) und [`BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithoutResponse).

Die **`BluetoothRemoteGATTCharacteristic.writeValue()`**-Methode setzt die `value`-Eigenschaft eines [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic)-Objekts auf die Bytes, die in einem gegebenen {{JSxRef("ArrayBuffer")}} enthalten sind, [schreibt den Merkmalwert mit optionaler Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.

## Syntax

```js-nolint
writeValue(value)
```

### Parameter

- `value`
  - : Ein {{jsxref("ArrayBuffer")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

{{APIRef("Web Bluetooth")}}
