---
title: DataView.prototype.getFloat16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat16
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`getFloat16()`**-Methode von {{jsxref("DataView")}}-Instanzen liest 2 Bytes, beginnend beim angegebenen Byte-Offset dieses `DataView`, und interpretiert sie als eine 16-Bit-Gleitkommazahl. Es gibt keine Ausrichtungsbeschränkung; mehrbytegroße Werte können von jedem Offset innerhalb der Grenzen abgerufen werden.

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
  - : Der Offset, in Bytes, vom Anfang der Ansicht, von dem aus die Daten gelesen werden.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}}-Format gespeichert sind. Wenn `false` oder `undefined`, wird ein big-endian-Wert gelesen.

### Rückgabewert

Eine Gleitkommazahl von `-65504` bis `65504`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so eingestellt ist, dass über das Ende der Ansicht hinaus gelesen würde.

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
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float16Array")}}
