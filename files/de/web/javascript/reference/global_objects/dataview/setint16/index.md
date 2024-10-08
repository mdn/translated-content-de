---
title: DataView.prototype.setInt16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt16
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`setInt16()`**-Methode von {{jsxref("DataView")}} Instanzen nimmt eine Zahl und speichert sie als 16-Bit-Ganzzahl mit Vorzeichen in den 2 Bytes, die beim angegebenen Byte-Offset dieses `DataView` beginnen. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können an jedem Offset innerhalb der Grenzen gespeichert werden.

{{EmbedInteractiveExample("pages/js/dataview-setint16.html")}}

## Syntax

```js-nolint
setInt16(byteOffset, value)
setInt16(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Anfang der Ansicht, um die Daten zu speichern.
- `value`
  - : Der zu setzende Wert. Wie der Wert in Bytes codiert wird, siehe [Wert-Codierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}} Format gespeichert werden. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt ist, dass er über das Ende der Ansicht hinaus speichern würde.

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
