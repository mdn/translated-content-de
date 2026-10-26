---
title: Int32Array()-Konstruktor
short-title: Int32Array()
slug: Web/JavaScript/Reference/Global_Objects/Int32Array/Int32Array
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`Int32Array()`**-Konstruktor erstellt {{jsxref("Int32Array")}}-Objekte. Ihr Inhalt wird mit `0` initialisiert, sofern nicht ausdrücklich Initialisierungsdaten angegeben werden.

## Syntax

```js-nolint
new Int32Array()
new Int32Array(length)
new Int32Array(typedArray)
new Int32Array(object)

new Int32Array(buffer)
new Int32Array(buffer, byteOffset)
new Int32Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Int32Array()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters).

### Ausnahmen

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Beispiele

### Verschiedene Möglichkeiten, ein Int32Array zu erstellen

```js
// From a length
const int32 = new Int32Array(2);
int32[0] = 42;
console.log(int32[0]); // 42
console.log(int32.length); // 2
console.log(int32.BYTES_PER_ELEMENT); // 4

// From an array
const x = new Int32Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Int32Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(32);
const z = new Int32Array(buffer, 4, 4);
console.log(z.byteOffset); // 4

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const int32FromIterable = new Int32Array(iterable);
console.log(int32FromIterable);
// Int32Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Int32Array` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu typisierten Arrays in JavaScript](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
