---
title: "BluetoothRemoteGATTDescriptor: writeValue()-Methode"
short-title: writeValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/writeValue
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTDescriptor.writeValue()`**-Methode setzt die Wert-Eigenschaft auf die Bytes, die in einem {{jsxref("ArrayBuffer")}} enthalten sind, und gibt ein {{jsxref("Promise")}} zurück.

## Syntax

```js-nolint
writeValue(array)
```

### Parameter

- `array`
  - : Setzt den Wert mit den im Array enthaltenen Bytes.

### Rückgabewert

Ein {{jsxref("Promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
