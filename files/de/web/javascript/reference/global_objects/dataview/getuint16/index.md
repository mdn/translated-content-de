---
title: DataView.prototype.getUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint16
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`getUint16()`**-Methode von {{jsxref("DataView")}}-Instanzen liest 2 Bytes, beginnend beim angegebenen Byte-Offset dieses `DataView`, und interpretiert sie als ein 16-Bit-unsigned-Integer. Es gibt keine Ausrichtungsbeschränkung; Mehrbytewerte können von jedem innerhalb der Grenzen liegenden Offset abgerufen werden.

{{EmbedInteractiveExample("pages/js/dataview-getuint16.html")}}

## Syntax

```js-nolint
getUint16(byteOffset)
getUint16(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes, von dem aus die Daten aus der Ansicht gelesen werden.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im [Little- oder Big-Endian](/de/docs/Glossary/Endianness)-Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Ein Integer von 0 bis 65535, inklusive.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt wird, dass er über das Ende der Ansicht hinaus lesen würde.

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

- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint16Array")}}
