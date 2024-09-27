---
title: "BluetoothUUID: canonicalUUID() statische Methode"
short-title: canonicalUUID()
slug: Web/API/BluetoothUUID/canonicalUUID_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

Die **`canonicalUUID()`** statische Methode der [`BluetoothUUID`](/de/docs/Web/API/BluetoothUUID) Schnittstelle gibt die 128-Bit UUID zurück, wenn ihr ein 16- oder 32-Bit UUID Alias übergeben wird.

## Syntax

```js-nolint
BluetoothUUID.canonicalUUID(alias)
```

### Parameter

- `alias`
  - : Ein String, der ein 16-Bit oder 32-Bit UUID Alias enthält.

### Rückgabewert

Eine 128-Bit UUID.

## Beispiele

Im folgenden Beispiel wird die UUID dargestellt, die durch den Alias `0x110A` repräsentiert wird und in die Konsole ausgegeben.

```js
let result = BluetoothUUID.canonicalUUID("0x110A");
console.log(result); // "0000110a-0000-1000-8000-00805f9b34fb"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
