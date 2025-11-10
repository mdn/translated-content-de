---
title: DataView.prototype.getUint16()
short-title: getUint16()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint16
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getUint16()`**-Methode von {{jsxref("DataView")}}-Instanzen liest 2 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 16-Bit-Integer ohne Vorzeichen. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können von jedem Offset innerhalb der Grenzen abgerufen werden.

{{InteractiveExample("JavaScript Demo: DataView.prototype.getUint16()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint16(1, 65535); // Max unsigned 16-bit integer

console.log(view.getUint16(1));
// Expected output: 65535
```

## Syntax

```js-nolint
getUint16(byteOffset)
getUint16(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes, ab dem Beginn der Ansicht, von dem die Daten gelesen werden.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}}-Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Ein Ganzzahlwert von 0 bis einschließlich 65535.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt wird, dass er über das Ende der Ansicht hinauslesen würde.

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
