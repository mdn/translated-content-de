---
title: DataView.prototype.setInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt8
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`setInt8()`** von {{jsxref("DataView")}}-Instanzen nimmt eine Zahl und speichert sie als 8-Bit-Vorzeichen-Ganzzahl im Byte an dem angegebenen Byte-Offset dieses `DataView`.

{{InteractiveExample("JavaScript Demo: DataView.setInt8()")}}

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
setInt8(byteOffset, value)
```

### Parameter

- `byteOffset`
  - : Der Offset, in Bytes, vom Anfang des Views, an dem die Daten gespeichert werden sollen.
- `value`
  - : Der Wert, der gesetzt werden soll. Für Informationen darüber, wie der Wert in Bytes kodiert wird, siehe [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so gesetzt wird, dass über das Ende des Views hinaus gespeichert würde.

## Beispiele

### Verwendung von setInt8()

```js
const buffer = new ArrayBuffer(10);
const dataview = new DataView(buffer);
dataview.setInt8(0, 3);
dataview.getInt8(0); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript-typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int8Array")}}
