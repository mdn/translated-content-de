---
title: DataView.prototype.getInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt8
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die **`getInt8()`**-Methode von {{jsxref("DataView")}}-Instanzen liest 1 Byte an dem angegebenen Byte-Offset dieses `DataView` und interpretiert es als 8-Bit-Ganzzahl mit Vorzeichen.

{{EmbedInteractiveExample("pages/js/dataview-getint8.html")}}

## Syntax

```js-nolint
getInt8(byteOffset)
```

### Parameter

- `byteOffset`
  - : Der Offset in Bytes vom Beginn der Ansicht, von dem die Daten gelesen werden sollen.

### Rückgabewert

Eine Ganzzahl von -128 bis 127, inklusive.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so eingestellt ist, dass er über das Ende der Ansicht hinauslesen würde.

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

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int8Array")}}
