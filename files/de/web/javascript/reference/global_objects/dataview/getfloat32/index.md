---
title: DataView.prototype.getFloat32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat32
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die Methode **`getFloat32()`** von {{jsxref("DataView")}} Instanzen liest 4 Bytes, beginnend beim angegebenen Byte-Offset dieses `DataView`, und interpretiert sie als 32-Bit-Gleitkommazahl. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können von jedem innerhalb der Grenzen liegenden Offset abgerufen werden.

{{EmbedInteractiveExample("pages/js/dataview-getfloat32.html")}}

## Syntax

```js-nolint
getFloat32(byteOffset)
getFloat32(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes, ab dem der View die Daten lesen soll.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}} Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Eine Gleitkommazahl von `-3.4e38` bis `3.4e38`.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass über das Ende der Ansicht hinaus gelesen würde.

## Beispiele

### Verwendung von getFloat32()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getFloat32(1)); // 2.387939260590663e-38
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float32Array")}}
