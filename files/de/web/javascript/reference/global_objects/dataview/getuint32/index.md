---
title: DataView.prototype.getUint32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint32
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`getUint32()`** der {{jsxref("DataView")}}-Instanzen liest 4 Bytes, beginnend am angegebenen Byte-Offset dieses `DataView`, und interpretiert sie als 32-Bit-Integer ohne Vorzeichen. Es gibt keine Ausrichtungsbeschränkung; Mehr-Byte-Werte können von jedem Offset innerhalb der Grenzen abgerufen werden.

{{InteractiveExample("JavaScript Demo: DataView.getUint32()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint32(1, 4294967295); // Max unsigned 32-bit integer

console.log(view.getUint32(1));
// Expected output: 4294967295
```

## Syntax

```js-nolint
getUint32(byteOffset)
getUint32(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes ab dem Beginn der Ansicht, von dem die Daten gelesen werden.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}}-Format gespeichert sind. Falls `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Ein Integer von 0 bis 4294967295, einschließlich.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass über das Ende der Ansicht hinaus gelesen würde.

## Beispiele

### Verwendung von getUint32()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getUint32(1)); // 16909060
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint32Array")}}
