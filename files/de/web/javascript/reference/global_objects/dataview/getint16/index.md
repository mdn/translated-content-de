---
title: DataView.prototype.getInt16()
short-title: getInt16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getInt16()`**-Methode von {{jsxref("DataView")}}-Instanzen liest 2 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 16-Bit-Ganzzahl mit Vorzeichen. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können von jedem innerhalb der Grenzen liegenden Offset gelesen werden.

{{InteractiveExample("JavaScript Demo: DataView.prototype.getInt16()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt16(1, 32767); // Max signed 16-bit integer

console.log(view.getInt16(1));
// Expected output: 32767
```

## Syntax

```js-nolint
getInt16(byteOffset)
getInt16(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Beginn der Ansicht, von dem die Daten gelesen werden sollen.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}}-Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Eine Ganzzahl von -32768 bis 32767, einschließlich.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt wird, dass über das Ende der Ansicht hinaus gelesen würde.

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
