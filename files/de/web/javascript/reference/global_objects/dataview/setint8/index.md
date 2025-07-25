---
title: DataView.prototype.setInt8()
short-title: setInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/setInt8
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`setInt8()`**-Methode von {{jsxref("DataView")}}-Instanzen nimmt eine Zahl und speichert sie als 8-Bit vorzeichenbehaftete Ganzzahl im Byte am angegebenen Byte-Offset dieses `DataView`.

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
  - : Der Offset in Bytes, vom Beginn der Ansicht, in dem die Daten gespeichert werden sollen.
- `value`
  - : Der Wert, der gesetzt werden soll. Wie der Wert in Bytes kodiert wird, siehe [Wertkodierung und Normalisierung](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#value_encoding_and_normalization).

### Rückgabewert

{{jsxref("undefined")}}.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der `byteOffset` so eingestellt ist, dass er über das Ende der Ansicht hinaus speichert.

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

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("DataView")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("Int8Array")}}
