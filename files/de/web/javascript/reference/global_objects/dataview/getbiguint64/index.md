---
title: DataView.prototype.getBigUint64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigUint64
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`getBigUint64()`** Methode der {{jsxref("DataView")}} Instanzen liest 8 Bytes ab dem angegebenen Byte-Offset dieser `DataView` und interpretiert sie als 64-Bit-Integer ohne Vorzeichen. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können von jedem Offset innerhalb der Grenzen abgerufen werden.

{{EmbedInteractiveExample("pages/js/dataview-getbiguint64.html")}}

## Syntax

```js-nolint
getBigUint64(byteOffset)
getBigUint64(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset, in Bytes, ab dem Start der Ansicht, von dem die Daten gelesen werden sollen.
- `littleEndian` {{optional_inline}}
  - : Gebt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian-Format")}} gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Ein {{jsxref("BigInt")}} von 0 bis 2<sup>64</sup>-1, einschließlich.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt wird, dass er über das Ende der Ansicht hinaus lesen würde.

## Beispiele

### Verwendung von getBigUint64()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getBigUint64(1)); // 72623859790382856n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigUint64Array")}}
