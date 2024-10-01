---
title: DataView.prototype.getBigInt64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getBigInt64
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`getBigInt64()`**-Methode von {{jsxref("DataView")}}-Instanzen liest 8 Bytes, beginnend ab dem angegebenen Byte-Offset dieses `DataView`, und interpretiert sie als 64-Bit-Ganzzahl mit Vorzeichen. Es gibt keine Ausrichtungseinschränkung; mehrbyteige Werte können von jedem Offset innerhalb der Grenzen abgerufen werden.

{{EmbedInteractiveExample("pages/js/dataview-getbigint64.html")}}

## Syntax

```js-nolint
getBigInt64(byteOffset)
getBigInt64(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Beginn der Ansicht, ab dem die Daten gelesen werden.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}}-Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Ein {{jsxref("BigInt")}} von -2<sup>63</sup> bis 2<sup>63</sup>-1, einschließlich.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass es über das Ende der Ansicht hinauslesen würde.

## Beispiele

### Verwendung von getBigInt64()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getBigInt64(1)); // 72623859790382856n
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("BigInt64Array")}}
