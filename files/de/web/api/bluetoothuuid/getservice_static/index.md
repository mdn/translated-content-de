---
title: "BluetoothUUID: getService() statische Methode"
short-title: getService()
slug: Web/API/BluetoothUUID/getService_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}

Die **`getService()`** statische Methode des [`BluetoothUUID`](/de/docs/Web/API/BluetoothUUID)-Interfaces gibt eine UUID zurück, die einen registrierten Dienst darstellt, wenn ihr ein Name oder das 16- oder 32-Bit-UUID-Alias übergeben wird.

## Syntax

```js-nolint
BluetoothUUID.getService(name)
```

### Parameter

- `name`
  - : Ein String, der den Namen des Dienstes enthält.

### Rückgabewert

Eine 128-Bit-UUID.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `name` nicht im Register erscheint.

## Beispiele

Im folgenden Beispiel wird die UUID, die den Dienst mit dem Namen `device_information` darstellt, zurückgegeben und in der Konsole ausgegeben.

```js
let result = BluetoothUUID.getService("device_information");
console.log(result); // "0000180a-0000-1000-8000-00805f9b34fb"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
