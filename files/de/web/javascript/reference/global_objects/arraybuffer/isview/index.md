---
title: ArrayBuffer.isView()
short-title: isView()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`ArrayBuffer.isView()`** statische Methode bestimmt, ob der übergebene Wert einer der `ArrayBuffer`-Ansichten ist,
wie z.B. [typisierte Array-Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
oder ein {{jsxref("DataView")}}.

{{InteractiveExample("JavaScript Demo: ArrayBuffer.isView()", "shorter")}}

```js interactive-example
// Create an ArrayBuffer with a size in bytes
const buffer = new ArrayBuffer(16);

console.log(ArrayBuffer.isView(new Int32Array()));
// Expected output: true
```

## Syntax

```js-nolint
ArrayBuffer.isView(value)
```

### Parameter

- `value`
  - : Der zu überprüfende Wert.

### Rückgabewert

`true`, wenn das gegebene Argument eine der {{jsxref("ArrayBuffer")}}-Ansichten ist;
ansonsten `false`.

## Beispiele

### Nutzung von isView

```js
ArrayBuffer.isView(); // false
ArrayBuffer.isView([]); // false
ArrayBuffer.isView({}); // false
ArrayBuffer.isView(null); // false
ArrayBuffer.isView(undefined); // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array()); // true
ArrayBuffer.isView(new Float32Array()); // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

const buffer = new ArrayBuffer(2);
const dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
