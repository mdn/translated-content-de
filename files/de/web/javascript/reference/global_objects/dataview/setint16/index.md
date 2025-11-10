---
title: DataView.prototype.setInt16()
short-title: setInt16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setInt16()`**-Methode von {{jsxref("DataView")}}-Instanzen nimmt eine Zahl und speichert sie als 16-Bit-Ganzzahl mit Vorzeichen in den 2 Bytes, die an dem angegebenen Byte-Offset dieses `DataView` beginnen. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können an jedem Offset innerhalb der Grenzen gespeichert werden.

{{InteractiveExample("JavaScript Demo: DataView.prototype.setInt16()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt16(1, 32767); // Max signed 16-bit integer

console.log(view.getInt16(1));
// Expected output: 32767
```

## Syntax

```js-nolint
setInt16(byteOffset, value)
setInt16(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Beginn der Ansicht, an dem die Daten gespeichert werden.
- `value`
  - : Der zu setzende Wert. Informationen zur Codierung des Wertes in Bytes finden Sie unter [Wertcodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}} Format gespeichert werden. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt ist, dass er über das Ende der Ansicht hinaus speichert.

## Beispiele

### Verwendung von setInt16()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt16(0, 3);
dataview.getInt16(1); // 768
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int16Array")}}
