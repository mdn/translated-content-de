---
title: DataView.prototype.getInt16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt16
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`getInt16()`**-Methode von {{jsxref("DataView")}} Instanzen liest 2 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 16-Bit-Ganzzahl mit Vorzeichen. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können von jedem Offset innerhalb der Grenzen abgerufen werden.

{{EmbedInteractiveExample("pages/js/dataview-getint16.html")}}

## Syntax

```js-nolint
getInt16(byteOffset)
getInt16(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset, in Bytes, ab dem Start der Ansicht, von dem die Daten gelesen werden.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im [Little- oder Big-Endian](/de/docs/Glossary/Endianness)-Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Eine ganze Zahl von -32768 bis 32767, inklusive.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so eingestellt ist, dass es über das Ende der Ansicht hinauslesen würde.

## Beispiele

### Verwendung von getInt16()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getInt16(1)); // 258
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