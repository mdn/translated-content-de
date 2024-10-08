---
title: DataView.prototype.getInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt32
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`getInt32()`**-Methode von {{jsxref("DataView")}}-Instanzen liest 4 Bytes, beginnend beim angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 32-Bit-Ganzzahl mit Vorzeichen. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können von jedem Offset innerhalb der Grenzen abgerufen werden.

{{EmbedInteractiveExample("pages/js/dataview-getint32.html")}}

## Syntax

```js-nolint
getInt32(byteOffset)
getInt32(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes, von dem aus die Daten am Anfang der Ansicht gelesen werden.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}} Format gespeichert sind. Falls `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Eine Ganzzahl von -2147483648 bis 2147483647, inklusive.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass es über das Ende der Ansicht hinaus lesen würde.

## Beispiele

### Verwendung von getInt32()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getInt32(1)); // 16909060
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int32Array")}}
