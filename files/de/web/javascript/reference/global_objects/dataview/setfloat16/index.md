---
title: DataView.prototype.setFloat16()
short-title: setFloat16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setFloat16()`** Methode der {{jsxref("DataView")}} Instanzen nimmt eine Zahl und speichert sie als 16-Bit-Gleitkommazahl in den 2 Bytes, beginnend beim angegebenen Byte-Offset dieses `DataView`. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können an jedem innerhalb der Grenzen liegenden Offset gespeichert werden.

{{InteractiveExample("JavaScript Demo: DataView.prototype.setFloat16()")}}

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
setFloat16(byteOffset, value)
setFloat16(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset, in Bytes, ab dem Anfang der Ansicht, zu dem die Daten gespeichert werden sollen.
- `value`
  - : Der Wert, der festgelegt werden soll. Informationen darüber, wie der Wert in Bytes kodiert wird, finden Sie unter [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}} Format gespeichert werden. Ist `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so eingestellt wird, dass es über das Ende der Ansicht hinaus speichert.

## Beispiele

### Verwendung von setFloat16()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setFloat16(0, 3);
dataview.getFloat16(1); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `DataView.prototype.setFloat16` in `core-js`](https://github.com/zloirock/core-js#float16-methods)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float16Array")}}
