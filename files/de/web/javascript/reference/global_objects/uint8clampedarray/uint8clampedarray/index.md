---
title: Uint8ClampedArray()-Konstruktor
short-title: Uint8ClampedArray()
slug: Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray/Uint8ClampedArray
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Der **`Uint8ClampedArray()`**-Konstruktor erstellt {{jsxref("Uint8ClampedArray")}}-Objekte. Der Inhalt wird mit `0` initialisiert, es sei denn, es werden explizit Initialisierungsdaten bereitgestellt.

## Syntax

```js-nolint
new Uint8ClampedArray()
new Uint8ClampedArray(length)
new Uint8ClampedArray(typedArray)
new Uint8ClampedArray(object)

new Uint8ClampedArray(buffer)
new Uint8ClampedArray(buffer, byteOffset)
new Uint8ClampedArray(buffer, byteOffset, length)
```

> [!NOTE] > `Uint8ClampedArray()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) erstellt werden. Ein Versuch, es ohne `new` aufzurufen, führt zu einem {{jsxref("TypeError")}}.

### Parameter

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters).

### Ausnahmen

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Beispiele

### Verschiedene Möglichkeiten, ein Uint8ClampedArray zu erstellen

```js
// From a length
const uint8c = new Uint8ClampedArray(2);
uint8c[0] = 42;
uint8c[1] = 1337;
console.log(uint8c[0]); // 42
console.log(uint8c[1]); // 255 (clamped)
console.log(uint8c.length); // 2
console.log(uint8c.BYTES_PER_ELEMENT); // 1

// From an array
const x = new Uint8ClampedArray([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint8ClampedArray(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(8);
const z = new Uint8ClampedArray(buffer, 1, 4);
console.log(z.byteOffset); // 1

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint8cFromIterable = new Uint8ClampedArray(iterable);
console.log(uint8cFromIterable);
// Uint8ClampedArray [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Uint8ClampedArray` in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
