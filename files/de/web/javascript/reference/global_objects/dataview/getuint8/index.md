---
title: DataView.prototype.getUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getUint8
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`getUint8()`** Methode von {{jsxref("DataView")}} Instanzen liest 1 Byte an dem angegebenen Byte-Offset dieses `DataView` und interpretiert es als 8-Bit-Integer ohne Vorzeichen.

{{EmbedInteractiveExample("pages/js/dataview-getuint8.html")}}

## Syntax

```js-nolint
getUint8(byteOffset)
```

### Parameter

- `byteOffset`
  - : Der Offset, in Bytes, vom Anfang der Ansicht, von dem die Daten gelesen werden sollen.

### Rückgabewert

Ein ganzzahliger Wert von 0 bis 255, einschließlich.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt ist, dass er über das Ende der Ansicht hinaus lesen würde.

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
