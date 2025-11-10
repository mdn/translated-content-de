---
title: DataView.prototype.setFloat32()
short-title: setFloat32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setFloat32
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die Methode **`setFloat32()`** von {{jsxref("DataView")}} Instanzen nimmt eine Zahl und speichert sie als 32-Bit-Gleitkommazahl in den 4 Bytes, beginnend am angegebenen Byte-Offset dieses `DataView`. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können an jedem Offset innerhalb der Grenzen gespeichert werden.

{{InteractiveExample("JavaScript Demo: DataView.prototype.setFloat32()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat32(1, Math.PI);

console.log(view.getFloat32(1));
// Expected output: 3.1415927410125732
```

## Syntax

```js-nolint
setFloat32(byteOffset, value)
setFloat32(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset, in Bytes, vom Start der Ansicht, an dem die Daten gespeichert werden.
- `value`
  - : Der Wert, der gesetzt werden soll. Wie der Wert in Bytes kodiert wird, erfahren Sie unter [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}} Format gespeichert werden. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt ist, dass er über das Ende der Ansicht hinaus speichern würde.

## Beispiele

### Verwendung von setFloat32()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setFloat32(0, 3);
dataview.getFloat32(1); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float32Array")}}
