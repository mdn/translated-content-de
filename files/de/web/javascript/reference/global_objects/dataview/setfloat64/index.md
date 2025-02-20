---
title: DataView.prototype.setFloat64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat64
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`setFloat64()`** von {{jsxref("DataView")}}-Instanzen nimmt eine Zahl und speichert sie als 64-Bit-Gleitkommazahl in den 8 Bytes, die beim angegebenen Byte-Offset dieser `DataView` beginnen. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können an beliebigen Offsets innerhalb der Grenzen gespeichert werden.

{{InteractiveExample("JavaScript Demo: DataView.setFloat64()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat64(1, Math.PI);

console.log(view.getFloat64(1));
// Expected output: 3.141592653589793
```

## Syntax

```js-nolint
setFloat64(byteOffset, value)
setFloat64(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Anfang der Ansicht, an dem die Daten gespeichert werden sollen.
- `value`
  - : Der zu setzende Wert. Wie der Wert in Bytes codiert wird, finden Sie unter [Wertcodierung und -normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian-")}}-Format gespeichert werden. Wenn `false` oder `undefined`, wird ein Wert im Big-Endian-Format geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt wird, dass er über das Ende der Ansicht hinaus speichert.

## Beispiele

### Verwendung von setFloat64()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setFloat64(0, 3);
dataview.getFloat64(1); // 3.785766995733679e-270
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript-Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float64Array")}}
