---
title: DataView.prototype.getInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt8
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`getInt8()`** von {{jsxref("DataView")}}-Instanzen liest 1 Byte an dem angegebenen Byte-Offset dieses `DataView` aus und interpretiert es als 8-Bit vorzeichenbehaftete Ganzzahl.

{{InteractiveExample("JavaScript Demo: DataView.getInt8()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setInt8(1, 127); // Max signed 8-bit integer

console.log(view.getInt8(1));
// Expected output: 127
```

## Syntax

```js-nolint
getInt8(byteOffset)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes ab dem Anfang der Ansicht, von dem die Daten gelesen werden sollen.

### Rückgabewert

Eine Ganzzahl zwischen -128 und 127, inklusive.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass es über das Ende der Ansicht hinaus liest.

## Beispiele

### Verwendung von getInt8()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getInt8(1)); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript-Typed-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int8Array")}}
