---
title: Float16Array() Konstruktor
short-title: Float16Array()
slug: Web/JavaScript/Reference/Global_Objects/Float16Array/Float16Array
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Float16Array()`** Konstruktor erstellt {{jsxref("Float16Array")}} Objekte. Der Inhalt wird auf `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt.

## Syntax

```js-nolint
new Float16Array()
new Float16Array(length)
new Float16Array(typedArray)
new Float16Array(object)

new Float16Array(buffer)
new Float16Array(buffer, byteOffset)
new Float16Array(buffer, byteOffset, length)
```

> [!NOTE] > `Float16Array()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) konstruiert werden. Der Versuch, ihn ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters).

### Ausnahmen

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Beispiele

### Verschiedene Arten, ein Float16Array zu erstellen

```js
// From a length
const float16 = new Float16Array(2);
float16[0] = 42;
console.log(float16[0]); // 42
console.log(float16.length); // 2
console.log(float16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Float16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Float16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Float16Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const float16FromIterable = new Float16Array(iterable);
console.log(float16FromIterable);
// Float16Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Leitfaden zu JavaScript-typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
