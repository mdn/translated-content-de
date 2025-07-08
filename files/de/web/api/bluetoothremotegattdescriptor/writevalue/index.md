---
title: "BluetoothRemoteGATTDescriptor: writeValue()-Methode"
short-title: writeValue()
slug: Web/API/BluetoothRemoteGATTDescriptor/writeValue
l10n:
  sourceCommit: 5fd5cc8885286bfa5bae8b3e9970e1eab26e941d
---

{{APIRef("Bluetooth API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`BluetoothRemoteGATTDescriptor.writeValue()`**-Methode setzt die Eigenschaft `value` auf die Bytes, die in einem {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} enthalten sind, und gibt ein {{jsxref("Promise")}} zurück.

## Syntax

```js-nolint
writeValue(buffer)
```

### Parameter

- `buffer`
  - : Setzt den Wert mit den im Buffer enthaltenen Bytes.

### Rückgabewert

Ein {{jsxref("Promise")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
