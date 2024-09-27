---
title: DataView.prototype.getUint32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint32
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`getUint32()`**-Methode von {{jsxref("DataView")}}-Instanzen liest 4 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 32-Bit-unsigned Integer. Es besteht keine Ausrichtungsbeschränkung; Mehrbyte-Werte können von jedem innerhalb der Grenzen liegenden Offset abgerufen werden.

{{EmbedInteractiveExample("pages/js/dataview-getuint32.html")}}

## Syntax

```js-nolint
getUint32(byteOffset)
getUint32(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Start der Ansicht, von dem die Daten gelesen werden sollen.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im [Little- oder Big-Endian](/de/docs/Glossary/Endianness) Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Ein Integer von 0 bis 4294967295, einschließlich.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt wird, dass er über das Ende der Ansicht hinaus lesen würde.

## Beispiele

### Verwendung von getUint32()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getUint32(1)); // 16909060
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript Typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint32Array")}}
