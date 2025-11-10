---
title: DataView.prototype.setBigUint64()
short-title: setBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigUint64
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setBigUint64()`**-Methode von {{jsxref("DataView")}}-Instanzen nimmt ein BigInt und speichert es als 64-Bit-Unsigned-Integer in den 8 Bytes, beginnend beim angegebenen Byte-Offset dieses `DataView`. Es gibt keine Ausrichtungsbeschränkung; mehrbytewerte können an jedem Offset innerhalb der Grenzen gespeichert werden.

{{InteractiveExample("JavaScript Demo: DataView.prototype.setBigUint64()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Highest possible BigInt value that fits in an unsigned 64-bit integer
const max = 2n ** 64n - 1n;

const view = new DataView(buffer);
view.setBigUint64(1, max);

console.log(view.getBigUint64(1));
// Expected output: 18446744073709551615n
```

## Syntax

```js-nolint
setBigUint64(byteOffset, value)
setBigUint64(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Anfang der Ansicht, an dem die Daten gespeichert werden.
- `value`
  - : Der Wert, der als {{jsxref("BigInt")}} gesetzt werden soll. Für Informationen, wie der Wert in Bytes kodiert wird, siehe [Value encoding and normalization](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "little- oder big-endian")}}-Format gespeichert werden. Wenn `false` oder `undefined` ist, wird ein big-endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass es über das Ende der Ansicht hinaus speichern würde.

## Beispiele

### Verwendung von setBigUint64()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setBigUint64(0, 3n);
dataview.getBigUint64(1); // 768n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigUint64Array")}}
