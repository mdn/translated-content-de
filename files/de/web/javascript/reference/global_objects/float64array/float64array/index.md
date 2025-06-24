---
title: Float64Array() Konstruktor
short-title: Float64Array()
slug: Web/JavaScript/Reference/Global_Objects/Float64Array/Float64Array
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Float64Array()`** Konstruktor erstellt {{jsxref("Float64Array")}} Objekte. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt.

## Syntax

```js-nolint
new Float64Array()
new Float64Array(length)
new Float64Array(typedArray)
new Float64Array(object)

new Float64Array(buffer)
new Float64Array(buffer, byteOffset)
new Float64Array(buffer, byteOffset, length)
```

> [!NOTE] > `Float64Array()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters).

### Ausnahmen

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Beispiele

### Verschiedene Möglichkeiten, ein Float64Array zu erstellen

```js
// From a length
const float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// From an array
const x = new Float64Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Float64Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(64);
const z = new Float64Array(buffer, 8, 4);
console.log(z.byteOffset); // 8

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float64FromIterable = new Float64Array(iterable);
console.log(float64FromIterable);
// Float64Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Float64Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
