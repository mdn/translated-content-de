---
title: Uint16Array()-Konstruktor
short-title: Uint16Array()
slug: Web/JavaScript/Reference/Global_Objects/Uint16Array/Uint16Array
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Der **`Uint16Array()`**-Konstruktor erstellt {{jsxref("Uint16Array")}}-Objekte. Ihr Inhalt wird mit `0` initialisiert, sofern nicht ausdrücklich Initialisierungsdaten angegeben werden.

## Syntax

```js-nolint
new Uint16Array()
new Uint16Array(length)
new Uint16Array(typedArray)
new Uint16Array(object)

new Uint16Array(buffer)
new Uint16Array(buffer, byteOffset)
new Uint16Array(buffer, byteOffset, length)
```

> [!NOTE]
> `Uint16Array()` kann nur mit [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) aufgerufen werden. Ein Aufruf ohne `new` löst einen {{jsxref("TypeError")}} aus.

### Parameter

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#parameters).

### Ausnahmen

Siehe [`TypedArray`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#exceptions).

## Beispiele

### Verschiedene Möglichkeiten, ein Uint16Array zu erstellen

```js
// From a length
const uint16 = new Uint16Array(2);
uint16[0] = 42;
console.log(uint16[0]); // 42
console.log(uint16.length); // 2
console.log(uint16.BYTES_PER_ELEMENT); // 2

// From an array
const x = new Uint16Array([21, 31]);
console.log(x[1]); // 31

// From another TypedArray
const y = new Uint16Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
const buffer = new ArrayBuffer(16);
const z = new Uint16Array(buffer, 2, 4);
console.log(z.byteOffset); // 2

// From an iterable
const iterable = (function* () {
  yield* [1, 2, 3];
})();
const uint16FromIterable = new Uint16Array(iterable);
console.log(uint16FromIterable);
// Uint16Array [1, 2, 3]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Uint16Array` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) – Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
