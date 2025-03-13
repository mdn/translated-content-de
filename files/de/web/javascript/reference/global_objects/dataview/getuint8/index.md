---
title: DataView.prototype.getUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint8
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`getUint8()`**-Methode der {{jsxref("DataView")}} Instanzen liest 1 Byte an dem angegebenen Byte-Offset dieses `DataView` und interpretiert es als 8-Bit-unsigned Integer.

{{InteractiveExample("JavaScript Demo: DataView.prototype.getUint8()")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

const view = new DataView(buffer);
view.setUint8(1, 255); // Max unsigned 8-bit integer

console.log(view.getUint8(1));
// Expected output: 255
```

## Syntax

```js-nolint
getUint8(byteOffset)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes, ab dem Start des Views, von dem die Daten gelesen werden sollen.

### Rückgabewert

Ein ganzzahliger Wert von 0 bis 255, einschließlich.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so eingestellt ist, dass es über das Ende des Views hinaus lesen würde.

## Beispiele

### Verwendung von getUint8()

```js
const { buffer } = new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
const dataview = new DataView(buffer);
console.log(dataview.getUint8(1)); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint8Array")}}
