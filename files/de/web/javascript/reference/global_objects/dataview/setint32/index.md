---
title: DataView.prototype.setInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt32
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`setInt32()`**-Methode von {{jsxref("DataView")}}-Instanzen nimmt eine Zahl und speichert sie als 32-Bit-Ganzzahl mit Vorzeichen in den 4 Bytes ab dem angegebenen Byte-Offset dieses `DataView`. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können bei jedem Offset innerhalb der Grenzen gespeichert werden.

{{EmbedInteractiveExample("pages/js/dataview-setint32.html")}}

## Syntax

```js-nolint
setInt32(byteOffset, value)
setInt32(byteOffset, value, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Beginn der Ansicht, um die Daten zu speichern.
- `value`
  - : Der zu setzende Wert. Für die Art und Weise, wie der Wert in Bytes kodiert wird, siehe [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im [Little- oder Big-Endian](/de/docs/Glossary/Endianness)-Format gespeichert werden. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert geschrieben.

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass es über das Ende der Ansicht hinaus speichern würde.

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

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int32Array")}}
