---
title: DataView.prototype.setBigInt64()
short-title: setBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setBigInt64
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setBigInt64()`** Methode von {{jsxref("DataView")}} Instanzen nimmt ein BigInt und speichert es als 64-Bit-Ganzzahl mit Vorzeichen in den 8 Bytes, beginnend bei dem angegebenen Byte-Offset dieses `DataView`. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können an jedem Offset innerhalb der Grenzen gespeichert werden.

{{InteractiveExample("JavaScript Demo: DataView.prototype.setBigInt64()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

// Highest possible BigInt value that fits in a signed 64-bit integer
const max = 2n ** (64n - 1n) - 1n;

const view = new DataView(buffer);
view.setBigInt64(1, max);

console.log(view.getBigInt64(1));
// Expected output: 9223372036854775807n
```

## Syntax

```js-nolint
setBigInt64(byteOffset, value)
setBigInt64(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset, in Bytes, vom Anfang der Ansicht, um die Daten zu speichern.
- `value`
  - : Der Wert, der als {{jsxref("BigInt")}} gesetzt werden soll. Informationen darüber, wie der Wert in Bytes codiert wird, finden Sie unter [Wertcodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}} Format gespeichert werden. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt ist, dass er über das Ende der Ansicht hinaus gespeichert würde.

## Beispiele

### Verwendung von setBigInt64()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setBigInt64(0, 3n);
dataview.getBigInt64(1); // 768n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt64Array")}}
