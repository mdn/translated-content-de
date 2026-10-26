---
title: TypedArray.prototype.includes()
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/includes
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`includes()`** von {{jsxref("TypedArray")}}-Instanzen ermittelt, ob ein typisiertes Array einen bestimmten Wert enthält, und gibt entsprechend `true` oder `false` zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.includes()")}}.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.includes()")}}

```js interactive-example
const uint8 = new Uint8Array([10, 20, 30, 40, 50]);

console.log(uint8.includes(20));
// Expected output: true

// Check from position 3
console.log(uint8.includes(20, 3));
// Expected output: false
```

## Syntax

```js-nolint
includes(searchElement)
includes(searchElement, fromIndex)
```

### Parameter

- `searchElement`
  - : Der Wert, nach dem gesucht werden soll.
- `fromIndex` {{optional_inline}}
  - : Nullbasierter Index, ab dem die Suche beginnt, [in eine Ganzzahl umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#integer_conversion).

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn `searchElement` im typisierten Array gefunden wird (oder, falls angegeben, in dem durch `fromIndex` festgelegten Teil des typisierten Arrays).

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.includes()")}}. Diese Methode ist nicht generisch und kann nur für Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### includes() verwenden

```js
const uint8 = new Uint8Array([1, 2, 3]);
uint8.includes(2); // true
uint8.includes(4); // false
uint8.includes(3, 3); // false

// NaN handling (only relevant for floating point arrays)
new Uint8Array([NaN]).includes(NaN); // false, since the NaN passed to the constructor gets converted to 0
new Float32Array([NaN]).includes(NaN); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.includes` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu typisierten Arrays in JavaScript](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
- {{jsxref("TypedArray.prototype.find()")}}
- {{jsxref("TypedArray.prototype.findIndex()")}}
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("String.prototype.includes()")}}
