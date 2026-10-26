---
title: DataView.prototype.setFloat16()
short-title: setFloat16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat16
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`setFloat16()`** von {{jsxref("DataView")}}-Instanzen nimmt eine Zahl entgegen und speichert sie als 16-Bit-Gleitkommazahl in den 2 Bytes ab dem angegebenen Byte-Offset dieses `DataView`. Es gibt keine Ausrichtungsanforderung; Werte, die mehrere Bytes umfassen, können an jedem Offset innerhalb der Grenzen gespeichert werden.

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
  - : Der Offset in Bytes vom Anfang der Ansicht bis zu der Stelle, an der die Daten gespeichert werden.
- `value`
  - : Der zu setzende Wert. Wie der Wert in Bytes codiert wird, erfahren Sie unter [Wertcodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little-Endian- oder Big-Endian-Format")}} gespeichert werden. Bei `false` oder `undefined` wird ein Wert im Big-Endian-Format geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass die Daten über das Ende der Ansicht hinaus gespeichert würden.

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

- [Polyfill für `DataView.prototype.setFloat16` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) – Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float16Array")}}
