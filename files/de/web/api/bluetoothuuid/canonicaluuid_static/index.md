---
title: "BluetoothUUID: canonicalUUID() statische Methode"
short-title: canonicalUUID()
slug: Web/API/BluetoothUUID/canonicalUUID_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

Die statische Methode **`canonicalUUID()`** der [`BluetoothUUID`](/de/docs/Web/API/BluetoothUUID)-Schnittstelle gibt die 128-Bit UUID zurück, wenn ein 16- oder 32-Bit UUID-Alias übergeben wird.

## Syntax

```js-nolint
BluetoothUUID.canonicalUUID(alias)
```

### Parameter

- `alias`
  - : Ein String, der einen 16-Bit- oder 32-Bit-UUID-Alias enthält.

### Rückgabewert

Eine 128-Bit UUID.

## Beispiele

Im folgenden Beispiel wird die von dem Alias `0x110A` dargestellte UUID zurückgegeben und in der Konsole ausgegeben.

```js
let result = BluetoothUUID.canonicalUUID("0x110A");
console.log(result); // "0000110a-0000-1000-8000-00805f9b34fb"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
