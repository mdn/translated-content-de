---
title: DataView.prototype.setInt32()
short-title: setInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt32
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setInt32()`**-Methode von {{jsxref("DataView")}} Instanzen nimmt eine Zahl und speichert sie als 32-Bit-Ganzzahl mit Vorzeichen in den 4 Bytes, beginnend beim angegebenen Byte-Offset dieses `DataView`. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können bei jedem Offset innerhalb der Grenzen gespeichert werden.

{{InteractiveExample("JavaScript Demo: DataView.prototype.setInt32()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt32(1, 2147483647); // Max signed 32-bit integer

console.log(view.getInt32(1));
// Expected output: 2147483647
```

## Syntax

```js-nolint
setInt32(byteOffset, value)
setInt32(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Start der Ansicht an, in dem die Daten gespeichert werden sollen.
- `value`
  - : Der zu setzende Wert. Informationen dazu, wie der Wert in Bytes kodiert wird, finden Sie unter [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}} Format gespeichert werden. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass er jenseits des Endes der Ansicht speichert.

## Beispiele

### Verwendung von setInt32()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt32(0, 3);
dataview.getInt32(1); // 768
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int32Array")}}
