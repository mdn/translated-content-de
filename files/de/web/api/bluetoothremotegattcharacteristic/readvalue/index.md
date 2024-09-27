---
title: "BluetoothRemoteGATTCharacteristic: readValue()-Methode"
short-title: readValue()
slug: Web/API/BluetoothRemoteGATTCharacteristic/readValue
l10n:
  sourceCommit: bfc735c04506625c8c60054fe6f2f136bc43bbea
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTCharacteristic.readValue()`**-Methode gibt ein {{jsxref("Promise")}} zurück, das auf einen {{jsxref("DataView")}} aufgelöst wird, der eine Kopie der `value`-Eigenschaft enthält, falls diese verfügbar und unterstützt ist. Andernfalls wird ein Fehler ausgegeben.

## Syntax

```js-nolint
readValue()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf einen {{jsxref("DataView")}} aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
