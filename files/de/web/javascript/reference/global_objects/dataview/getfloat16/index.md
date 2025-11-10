---
title: DataView.prototype.getFloat16()
short-title: getFloat16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getFloat16()`** Methode von {{jsxref("DataView")}} Instanzen liest 2 Bytes ab dem angegebenen Byteversatz dieses `DataView` und interpretiert sie als 16-Bit Gleitkommazahl. Es gibt keine Ausrichtungsbeschränkung; Mehrbytewerte können von jedem Offset innerhalb der Grenzen abgerufen werden.

{{InteractiveExample("JavaScript Demo: DataView.prototype.getFloat16()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat16(1, Math.PI);

console.log(view.getFloat16(1));
// Expected output: 3.140625
```

## Syntax

```js-nolint
getFloat16(byteOffset)
getFloat16(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Versatz in Bytes vom Anfang der Ansicht, ab dem die Daten gelesen werden.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}} Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Eine Gleitkommazahl von `-65504` bis `65504`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt ist, dass er über das Ende der Ansicht hinaus lesen würde.

## Beispiele

### Verwendung von getFloat16()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getFloat16(1)); // 0.00001537799835205078
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `DataView.prototype.getFloat16` in `core-js`](https://github.com/zloirock/core-js#float16-methods)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float16Array")}}
