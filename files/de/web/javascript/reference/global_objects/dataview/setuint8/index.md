---
title: DataView.prototype.setUint8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setUint8
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

Die Methode **`setUint8()`** von {{jsxref("DataView")}}-Instanzen nimmt eine Zahl und speichert sie als 8-Bit-Integer ohne Vorzeichen im Byte am angegebenen Byte-Offset dieses `DataView`.

{{EmbedInteractiveExample("pages/js/dataview-setuint8.html")}}

## Syntax

```js-nolint
setUint8(byteOffset, value)
```

### Parameter

- `byteOffset`
  - : Der Offset, in Bytes, vom Beginn der Ansicht, in dem die Daten gespeichert werden.
- `value`
  - : Der einzustellende Wert. Informationen darüber, wie der Wert in Bytes codiert wird, finden Sie unter [Wertcodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so eingestellt ist, dass er über das Ende der Ansicht hinaus speichern würde.

## Beispiele

### Verwendung von setUint8()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setUint8(0, 3);
dataview.getUint8(0); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Uint8Array")}}
