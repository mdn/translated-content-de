---
title: DataView.prototype.getUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint16
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`getUint16()`**-Methode von {{jsxref("DataView")}} Instanzen liest 2 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 16-Bit-Integer ohne Vorzeichen. Es gibt keine Ausrichtungsbeschränkung; mehrbyteige Werte können von jedem Offset innerhalb der Grenzen abgerufen werden.

{{EmbedInteractiveExample("pages/js/dataview-getuint16.html")}}

## Syntax

```js-nolint
getUint16(byteOffset)
getUint16(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Start der Ansicht, von dem die Daten gelesen werden.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im [little- oder big-endian](/de/docs/Glossary/Endianness) Format gespeichert sind. Wenn `false` oder `undefined`, wird ein big-endian Wert gelesen.

### Rückgabewert

Ein Integer von 0 bis 65535, inklusive.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt wird, dass er über das Ende der Ansicht hinauslesen würde.

## Beispiele

### Verwendung von getUint16()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getUint16(1)); // 258
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint16Array")}}
