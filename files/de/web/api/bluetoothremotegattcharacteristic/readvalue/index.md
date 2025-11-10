---
title: "BluetoothRemoteGATTCharacteristic: readValue() Methode"
short-title: readValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/readValue
l10n:
  sourceCommit: 5fd5cc8885286bfa5bae8b3e9970e1eab26e941d
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`BluetoothRemoteGATTCharacteristic.readValue()`** gibt ein {{jsxref("Promise")}} zurück, das zu einem {{jsxref("DataView")}} aufgelöst wird, welches eine Kopie der Eigenschaft `value` enthält, sofern diese verfügbar und unterstützt ist. Andernfalls wird ein Fehler ausgelöst.

## Syntax

```js-nolint
readValue()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem {{jsxref("DataView")}} aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
