---
title: Int16Array() Konstruktor
short-title: Int16Array()
slug: Web/JavaScript/Reference/Global_Objects/Int16Array/Int16Array
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Int16Array()`** Konstruktor erstellt {{jsxref("Int16Array")}} Objekte. Die Inhalte werden auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt.

## Syntax

```js-nolint
new Int16Array()
new Int16Array(length)
new Int16Array(typedArray)
new Int16Array(object)

new Int16Array(buffer)
new Int16Array(buffer, byteOffset)
new Int16Array(buffer, byteOffset, length)
```

> [!NOTE] > `Int16Array()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters).

### Ausnahmen

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Beispiele

### Verschiedene Arten, ein Int16Array zu erstellen

```js
// From a length
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42
console.log(int16.length); // 2
console.log(int16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Int16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Int16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(16);
const z = new Int16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int16FromIterable = new Int16Array(iterable);
console.log(int16FromIterable);
// Int16Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Int16Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- JavaScript-typisierte Arrays [Leitfaden](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
