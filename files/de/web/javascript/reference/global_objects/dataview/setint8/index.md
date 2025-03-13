---
title: DataView.prototype.setInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt8
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`setInt8()`** Methode von {{jsxref("DataView")}} Instanzen nimmt eine Zahl und speichert sie als 8-Bit vorzeichenbehaftete Ganzzahl im Byte beim angegebenen Byte-Offset dieses `DataView`.

{{InteractiveExample("JavaScript Demo: DataView.prototype.setInt8()")}}

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
  - : Der Offset, in Bytes, vom Anfang des Views, in dem die Daten gespeichert werden sollen.
- `value`
  - : Der zu setzende Wert. Wie der Wert in Bytes kodiert wird, sehen Sie unter [Wertkodierung und -normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `byteOffset` so gesetzt ist, dass es über das Ende des Views hinaus gespeichert würde.

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

- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int8Array")}}
