---
title: TypedArray.prototype.toSorted()
short-title: toSorted()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toSorted()`** von {{jsxref("TypedArray")}}-Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Variante der Methode {{jsxref("TypedArray/sort", "sort()")}}. Sie gibt ein neues Typed Array zurück, dessen Elemente aufsteigend sortiert sind. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.toSorted()")}}, sortiert die Werte aber standardmäßig numerisch statt als Zeichenfolgen.

## Syntax

```js-nolint
toSorted()
toSorted(compareFn)
```

### Parameter

- `compareFn` {{optional_inline}}
  - : Eine Funktion, die die Reihenfolge der Elemente bestimmt. Wird sie weggelassen, werden die Elemente des Typed Arrays nach ihrem numerischen Wert sortiert. Weitere Informationen finden Sie unter {{jsxref("TypedArray/sort", "sort()")}}.

### Rückgabewert

Ein neues Typed Array mit aufsteigend sortierten Elementen.

## Beschreibung

Weitere Informationen finden Sie unter {{jsxref("Array.prototype.toSorted()")}}. Diese Methode ist nicht generisch und kann nur für Typed-Array-Instanzen aufgerufen werden.

## Beispiele

### Ein Array sortieren

Weitere Beispiele finden Sie auch bei der Methode {{jsxref("Array.prototype.sort()")}}.

```js
const numbers = new Uint8Array([40, 1, 5, 200]);
const numberSorted = numbers.toSorted();
console.log(numberSorted); // Uint8Array [ 1, 5, 40, 200 ]
// Unlike plain Arrays, a compare function is not required
// to sort the numbers numerically.
console.log(numbers); // Uint8Array [ 40, 1, 5, 200 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `TypedArray.prototype.toSorted` in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.toSorted()")}}
