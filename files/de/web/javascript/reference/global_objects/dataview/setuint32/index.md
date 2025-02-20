---
title: DataView.prototype.setUint32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint32
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`setUint32()`**-Methode von {{jsxref("DataView")}}-Instanzen nimmt eine Zahl und speichert sie als 32-Bit-Unsigned-Integer in den 4 Bytes, beginnend beim angegebenen Byte-Offset dieses `DataView`. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können an jedem Offset innerhalb der Grenzen gespeichert werden.

{{InteractiveExample("JavaScript Demo: DataView.setUint32()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint32(1, 4294967295); // Max unsigned 32-bit integer

console.log(view.getUint32(1));
// Expected output: 4294967295
```

## Syntax

```js-nolint
setUint32(byteOffset, value)
setUint32(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset, in Bytes, vom Beginn des Views, an dem die Daten gespeichert werden sollen.
- `value`
  - : Der zu setzende Wert. Informationen darüber, wie der Wert in Bytes kodiert wird, finden Sie unter [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian-Format")}} gespeichert werden. Wenn `false` oder `undefined`, wird ein Wert im Big-Endian-Format geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass es über das Ende des Views hinaus speichert.

## Beispiele

### Verwendung von setUint32()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setUint32(0, 3);
dataview.getUint32(1); // 768
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint32Array")}}
