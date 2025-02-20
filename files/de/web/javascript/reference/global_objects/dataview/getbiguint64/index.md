---
title: DataView.prototype.getBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`getBigUint64()`** von {{jsxref("DataView")}}-Instanzen liest 8 Byte, beginnend bei dem angegebenen Byte-Offset dieses `DataView`, und interpretiert sie als 64-Bit-unsigned-Integer. Es gibt keine Ausrichtungsbeschränkung; Mehr-Byte-Werte können von jedem Offset innerhalb der Grenzen abgerufen werden.

{{InteractiveExample("JavaScript Demo: DataView.getBigUint64()")}}

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
getBigUint64(byteOffset)
getBigUint64(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Byte vom Beginn der Ansicht, von dem die Daten gelesen werden.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}}-Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Ein {{jsxref("BigInt")}} von 0 bis 2<sup>64</sup>-1, einschließlich.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so festgelegt ist, dass er über das Ende der Ansicht hinaus lesen würde.

## Beispiele

### Verwendung von getBigUint64()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getBigUint64(1)); // 72623859790382856n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typed arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigUint64Array")}}
