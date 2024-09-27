---
title: "BluetoothUUID: getDescriptor() statische Methode"
short-title: getDescriptor()
slug: Web/API/BluetoothUUID/getDescriptor_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

Die **`getDescriptor()`** statische Methode der [`BluetoothUUID`](/de/docs/Web/API/BluetoothUUID) Schnittstelle gibt eine UUID zurück, die einen registrierten Descriptor darstellt, wenn ein Name oder das 16- oder 32-Bit-UUID-Alias übergeben wird.

## Syntax

```js-nolint
BluetoothUUID.getDescriptor(name)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Descriptors enthält.

### Rückgabewert

Eine 128-Bit-UUID.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `name` nicht im Verzeichnis erscheint.

## Beispiele

Im folgenden Beispiel wird die UUID zurückgegeben und in der Konsole ausgegeben, die den Descriptor mit dem Namen `time_trigger_setting` darstellt.

```js
let result = BluetoothUUID.getDescriptor("time_trigger_setting");
console.log(result); // "0000290e-0000-1000-8000-00805f9b34fb"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
