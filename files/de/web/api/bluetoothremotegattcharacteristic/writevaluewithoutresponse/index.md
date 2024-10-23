---
title: "BluetoothRemoteGATTCharacteristic: writeValueWithoutResponse() Methode"
short-title: writeValueWithoutResponse()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithoutResponse
l10n:
  sourceCommit: 0eeaa04378b34bce70e618ee20434e1193cdec17
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse()`** Methode setzt die `value`-Eigenschaft eines [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic) Objekts auf die Bytes, die in einem gegebenen {{JSxRef("ArrayBuffer")}} enthalten sind, [schreibt den Charakteristik-Wert ohne Rückmeldung](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.

## Syntax

```js-nolint
writeValueWithoutResponse(value)
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
