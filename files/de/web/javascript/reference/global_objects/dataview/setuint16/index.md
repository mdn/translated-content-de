---
title: DataView.prototype.setUint16()
short-title: setUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setUint16()`**-Methode von {{jsxref("DataView")}}-Instanzen nimmt eine Zahl und speichert sie als 16-Bit-Unsigned-Integer in den 2 Bytes, die beim angegebenen Byte-Offset dieses `DataView` beginnen. Es gibt keine Ausrichtungsbeschränkung; mehrbyte Werte können an beliebigen Offsets innerhalb der Grenzen gespeichert werden.

{{InteractiveExample("JavaScript Demo: DataView.prototype.setUint16()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint16(1, 65535); // Max unsigned 16-bit integer

console.log(view.getUint16(1));
// Expected output: 65535
```

## Syntax

```js-nolint
setUint16(byteOffset, value)
setUint16(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset, in Bytes, ab dem Beginn der Ansicht, in dem die Daten gespeichert werden.
- `value`
  - : Der zu setzende Wert. Wie der Wert in Bytes kodiert ist, siehe [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}}-Format gespeichert werden. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt wird, dass er über das Ende der Ansicht hinaus speichern würde.

## Beispiele

### Verwendung von setUint16()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setUint16(0, 3);
dataview.getUint16(1); // 768
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden für JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint16Array")}}
