---
title: DataView.prototype.setFloat16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat16
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`setFloat16()`**-Methode von {{jsxref("DataView")}}-Instanzen nimmt eine Zahl und speichert sie als 16-Bit-Gleitkommazahl in den 2 Bytes, die beim angegebenen Byte-Offset dieses `DataView` beginnen. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können bei jedem Offset innerhalb der Begrenzungen gespeichert werden.

{{InteractiveExample("JavaScript Demo: DataView.setFloat16()")}}

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
  - : Der Offset in Bytes, ab dem Start der Ansicht, in dem die Daten gespeichert werden sollen.
- `value`
  - : Der zu speichernde Wert. Wie der Wert in Bytes codiert wird, finden Sie unter [Wert-Codierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian-Format")}} gespeichert werden. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt ist, dass er über das Ende der Ansicht hinaus speichern würde.

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
