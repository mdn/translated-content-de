---
title: "BluetoothRemoteGATTCharacteristic: writeValue()-Methode"
short-title: writeValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValue
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("Bluetooth API")}}{{Deprecated_header}}{{SecureContext_Header}}

Verwenden Sie stattdessen {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithResponse()")}} und {{DOMxRef("BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()")}}.

Die Methode **`BluetoothRemoteGATTCharacteristic.writeValue()`** setzt die `value`-Eigenschaft eines {{domxref("BluetoothRemoteGATTCharacteristic")}}-Objekts auf die in einem angegebenen {{JSxRef("ArrayBuffer")}} enthaltenen Bytes, [schreibt den charakteristischen Wert mit optionaler Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.

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

## Kompatibilität der Browser

{{Compat}}

{{APIRef("Web Bluetooth")}}
