---
title: "BluetoothRemoteGATTCharacteristic: writeValueWithResponse()-Methode"
short-title: writeValueWithResponse()
slug: Web/API/BluetoothRemoteGATTCharacteristic/writeValueWithResponse
l10n:
  sourceCommit: 0eeaa04378b34bce70e618ee20434e1193cdec17
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTCharacteristic.writeValueWithResponse()`**-Methode setzt die `value`-Eigenschaft eines [`BluetoothRemoteGATTCharacteristic`](/de/docs/Web/API/BluetoothRemoteGATTCharacteristic)-Objekts auf die Bytes, die in einem gegebenen {{JSxRef("ArrayBuffer")}} enthalten sind, [schreibt den Charakteristikwert mit erforderlicher Antwort](https://webbluetoothcg.github.io/web-bluetooth/#writecharacteristicvalue) und gibt das resultierende {{JSxRef("Promise")}} zurück.

## Syntax

```js-nolint
writeValueWithResponse(value)
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
