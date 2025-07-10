---
title: DataView.prototype.setUint8()
short-title: setUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint8
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setUint8()`**-Methode von {{jsxref("DataView")}}-Instanzen nimmt eine Zahl und speichert sie als 8-Bit-Integer ohne Vorzeichen im Byte an dem angegebenen Byte-Offset dieses `DataView`.

{{InteractiveExample("JavaScript Demo: DataView.prototype.setUint8()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint8(1, 255); // Max unsigned 8-bit integer

console.log(view.getUint8(1));
// Expected output: 255
```

## Syntax

```js-nolint
setUint8(byteOffset, value)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Anfang der Sicht, um die Daten zu speichern.
- `value`
  - : Der Wert, der gesetzt werden soll. Informationen darüber, wie der Wert in Bytes kodiert wird, finden Sie unter [Value encoding and normalization](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt ist, dass er über das Ende der Sicht hinaus speichern würde.

## Beispiele

### Verwendung von setUint8()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setUint8(0, 3);
dataview.getUint8(0); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Leitfaden zu [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint8Array")}}
