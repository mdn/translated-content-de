---
title: DataView.prototype.setUint32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint32
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`setUint32()`**-Methode von {{jsxref("DataView")}} Instanzen nimmt eine Zahl und speichert sie als 32-Bit-Unsigned-Integer in den 4 Bytes, beginnend beim angegebenen Byte-Offset dieses `DataView`. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können an jedem Offset innerhalb der Grenzen gespeichert werden.

{{EmbedInteractiveExample("pages/js/dataview-setuint32.html")}}

## Syntax

```js-nolint
setUint32(byteOffset, value)
setUint32(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes, vom Beginn der Ansicht aus, um die Daten zu speichern.
- `value`
  - : Der einzustellende Wert. Informationen zur Kodierung des Wertes in Bytes finden Sie unter [Wertkodierung und -normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian-Format")}} gespeichert werden. Falls `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass es über das Ende der Ansicht hinaus speichern würde.

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

- [Leitfaden zu JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint32Array")}}
