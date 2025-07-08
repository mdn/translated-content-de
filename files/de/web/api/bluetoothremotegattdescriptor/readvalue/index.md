---
title: "BluetoothRemoteGATTDescriptor: readValue()-Methode"
short-title: readValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/readValue
l10n:
  sourceCommit: 5fd5cc8885286bfa5bae8b3e9970e1eab26e941d
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die
**`BluetoothRemoteGATTDescriptor.readValue()`**
Methode gibt ein {{jsxref("Promise")}} zurück, das auf ein {{jsxref("DataView")}} aufgelöst wird, welches eine Kopie der `value`-Eigenschaft enthält, wenn sie verfügbar und unterstützt ist. Andernfalls wird ein Fehler ausgelöst.

## Syntax

```js-nolint
readValue()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein {{jsxref("DataView")}} aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
