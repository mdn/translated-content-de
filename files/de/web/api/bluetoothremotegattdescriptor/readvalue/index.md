---
title: "BluetoothRemoteGATTDescriptor: readValue()-Methode"
short-title: readValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/readValue
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTDescriptor.readValue()`**-Methode gibt ein {{jsxref("Promise")}} zurück, das auf einen {{jsxref("ArrayBuffer")}} aufgelöst wird, der eine Kopie der `value`-Eigenschaft enthält, wenn diese verfügbar und unterstützt ist. Andernfalls wird ein Fehler geworfen.

## Syntax

```js-nolint
readValue()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf einen {{jsxref("ArrayBuffer")}} aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
