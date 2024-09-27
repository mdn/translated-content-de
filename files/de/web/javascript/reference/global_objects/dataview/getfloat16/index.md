---
title: DataView.prototype.getFloat16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat16
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

Die **`getFloat16()`** Methode von {{jsxref("DataView")}} Instanzen liest 2 Bytes beginnend beim angegebenen Byte-Offset dieses `DataView` und interpretiert sie als eine 16-Bit Gleitpunktzahl. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können von jedem Offset innerhalb der Grenzen abgerufen werden.

{{EmbedInteractiveExample("pages/js/dataview-getfloat16.html")}}

## Syntax

```js-nolint
getFloat16(byteOffset)
getFloat16(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes, von dem aus die Daten gelesen werden, ausgehend vom Anfang der Ansicht.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im [Little- oder Big-Endian](/de/docs/Glossary/Endianness) Format vorliegen. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Eine Gleitpunktzahl von `-65504` bis `65504`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass darüber hinaus vom Ende der Ansicht gelesen wird.

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
