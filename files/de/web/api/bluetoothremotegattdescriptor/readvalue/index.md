---
title: "BluetoothRemoteGATTDescriptor: readValue()-Methode"
short-title: readValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/readValue
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die
**`BluetoothRemoteGATTDescriptor.readValue()`**
Methode gibt ein {{jsxref("Promise")}} zurück, das in ein {{jsxref("ArrayBuffer")}} aufgelöst wird, welches eine Kopie der `value`-Eigenschaft enthält, wenn diese verfügbar und unterstützt ist. Andernfalls wird ein Fehler ausgelöst.

## Syntax

```js-nolint
readValue()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein {{jsxref("ArrayBuffer")}} aufgelöst wird.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
