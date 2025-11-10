---
title: DataView.prototype.getFloat64()
short-title: getFloat64()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getFloat64
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`getFloat64()`**-Methode von {{jsxref("DataView")}}-Instanzen liest 8 Byte ab dem angegebenen Byte-Offset dieses `DataView` und interpretiert sie als 64-Bit Gleitkommazahl. Es gibt keine Ausrichtungsbeschränkungen; Mehrbyte-Werte können von jedem Offset innerhalb der Grenzen abgefragt werden.

{{InteractiveExample("JavaScript Demo: DataView.prototype.getFloat64()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setFloat64(1, Math.PI);

console.log(view.getFloat64(1));
// Expected output: 3.141592653589793
```

## Syntax

```js-nolint
getFloat64(byteOffset)
getFloat64(byteOffset, littleEndian)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes, ab dem die Ansicht die Daten lesen soll.
- `littleEndian` {{optional_inline}}
  - : Gibt an, ob die Daten im {{Glossary("Endianness", "Little- oder Big-Endian")}}-Format gespeichert sind. Wenn `false` oder `undefined`, wird ein Big-Endian-Wert gelesen.

### Rückgabewert

Jeder numerische Wert.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so eingestellt ist, dass er über das Ende der Ansicht hinaus lesen würde.

## Beispiele

### Verwendung von getFloat64()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getFloat64(1)); // 8.20788039913184e-304
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Float64Array")}}
