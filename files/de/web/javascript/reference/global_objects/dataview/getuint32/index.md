---
title: DataView.prototype.getUint32()
short-title: getUint32()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint32
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getUint32()`** Methode von {{jsxref("DataView")}} Instanzen liest 4 Bytes ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 32-Bit vorzeichenloser Integer. Es gibt keine Ausrichtungsbeschränkung; Mehrbyte-Werte können von jedem innerhalb der Grenzen liegenden Offset abgerufen werden.

{{InteractiveExample("JavaScript Demo: DataView.prototype.getUint32()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint32(1, 4294967295); // Max unsigned 32-bit integer

console.log(view.getUint32(1));
// Expected output: 4294967295
```

## Syntax

```js-nolint
getUint32(byteOffset)
getUint32(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset, in Bytes, ab dem Anfang der Ansicht, von dem aus die Daten gelesen werden.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little-Endian- oder Big-Endian")}} Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Ein Integer von 0 bis 4294967295, einschließlich.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Ausgelöst, wenn der `byteOffset` so gesetzt ist, dass über das Ende der Ansicht hinaus gelesen würde.

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

- [Leitfaden zu JavaScript-Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint32Array")}}
