---
title: DataView.prototype.getBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`getBigInt64()`** von {{jsxref("DataView")}}-Instanzen liest 8 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 64-Bit-ganzzahligen Wert mit Vorzeichen. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können von jedem Offset innerhalb der Grenzen abgerufen werden.

{{InteractiveExample("JavaScript Demo: DataView.getBigInt64()")}}

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
getBigInt64(byteOffset)
getBigInt64(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Beginn der Ansicht, von dem die Daten gelesen werden sollen.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}}-Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Ein {{jsxref("BigInt")}} im Bereich von -2<sup>63</sup> bis 2<sup>63</sup>-1, einschließlich.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt wird, dass er über das Ende der Ansicht hinausliest.

## Beispiele

### Verwendung von getBigInt64()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getBigInt64(1)); // 72623859790382856n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt64Array")}}
