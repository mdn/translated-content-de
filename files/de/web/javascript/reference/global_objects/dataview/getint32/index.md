---
title: DataView.prototype.getInt32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt32
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`getInt32()`**-Methode von {{jsxref("DataView")}}-Instanzen liest 4 Bytes, beginnend beim angegebenen Byte-Offset dieses `DataView`, und interpretiert sie als 32-Bit vorzeichenbehaftete Ganzzahl. Es gibt keine Ausrichtungsbeschränkung; mehrbyteige Werte können von jedem Offset innerhalb der Grenzen abgerufen werden.

{{InteractiveExample("JavaScript Demo: DataView.getInt32()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt32(1, 2147483647); // Max signed 32-bit integer

console.log(view.getInt32(1));
// Expected output: 2147483647
```

## Syntax

```js-nolint
getInt32(byteOffset)
getInt32(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes, vom Anfang der Ansicht, von dem die Daten gelesen werden.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian-")}} Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Eine Ganzzahl im Bereich von -2147483648 bis 2147483647, einschließlich.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt wird, dass über das Ende der Ansicht hinaus gelesen würde.

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

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int32Array")}}
