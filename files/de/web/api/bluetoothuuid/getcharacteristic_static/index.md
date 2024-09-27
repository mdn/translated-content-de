---
title: "BluetoothUUID: getCharacteristic() statische Methode"
short-title: getCharacteristic()
slug: Web/API/BluetoothUUID/getCharacteristic_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

Die **`getCharacteristic()`** statische Methode der [`BluetoothUUID`](/de/docs/Web/API/BluetoothUUID) Schnittstelle gibt eine UUID zurück, die eine registrierte Eigenschaft darstellt, wenn ein Name oder das 16- oder 32-Bit-UUID-Alias übergeben wird.

## Syntax

```js-nolint
BluetoothUUID.getCharacteristic(name)
```

### Parameter

- `name`
  - : Ein String, der den Namen der Eigenschaft enthält.

### Rückgabewert

Eine 128-Bit-UUID.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `name` nicht im Register erscheint.

## Beispiele

Im folgenden Beispiel wird die UUID zurückgegeben, die die Eigenschaft mit dem Namen `apparent_wind_direction` darstellt, und in der Konsole ausgegeben.

```js
let result = BluetoothUUID.getCharacteristic("apparent_wind_direction");
console.log(result); // "00002a73-0000-1000-8000-00805f9b34fb"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
