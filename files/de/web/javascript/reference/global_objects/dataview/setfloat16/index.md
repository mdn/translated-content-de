---
title: DataView.prototype.setFloat16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat16
l10n:
  sourceCommit: fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{JSRef}}

Die **`setFloat16()`**-Methode von {{jsxref("DataView")}}-Instanzen nimmt eine Zahl und speichert sie als 16-Bit-Float-Zahl in den 2 Bytes, beginnend bei dem angegebenen Byte-Offset dieses `DataView`. Es gibt keine Ausrichtungsbeschränkung; Mehr-Byte-Werte können an jedem innerhalb der Grenzen liegenden Offset gespeichert werden.

{{EmbedInteractiveExample("pages/js/dataview-setfloat16.html")}}

## Syntax

```js-nolint
setFloat16(byteOffset, value)
setFloat16(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Beginn der Ansicht, an dem die Daten gespeichert werden sollen.
- `value`
  - : Der zu setzende Wert. Für Informationen, wie der Wert in Bytes kodiert wird, siehe [Wertkodierung und -normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im [Little- oder Big-Endian](/de/docs/Glossary/Endianness)-Format gespeichert werden. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt wird, dass er über das Ende der Ansicht hinaus speichert.

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
- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float16Array")}}
