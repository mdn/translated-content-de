---
title: Int8Array()-Konstruktor
short-title: Int8Array()
slug: Web/JavaScript/Reference/Global_Objects/Int8Array/Int8Array
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Int8Array()`**-Konstruktor erstellt {{jsxref("Int8Array")}}-Objekte. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt.

## Syntax

```js-nolint
new Int8Array()
new Int8Array(length)
new Int8Array(typedArray)
new Int8Array(object)

new Int8Array(buffer)
new Int8Array(buffer, byteOffset)
new Int8Array(buffer, byteOffset, length)
```

> [!NOTE] > `Int8Array()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters).

### Ausnahmen

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Beispiele

### Verschiedene Möglichkeiten, ein Int8Array zu erstellen

```js
// From a length
const int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// From an array
const x = new Int8Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Int8Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Int8Array(buffer, 1, 4);
console.log(z.byteOffset); // 1

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int8FromIterable = new Int8Array(iterable);
console.log(int8FromIterable);
// Int8Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Int8Array` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
