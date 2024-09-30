---
title: TypedArray.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted
l10n:
  sourceCommit: e46c58e6ed948e8c35c206762eb14a2e68616ed1
---

{{JSRef}}

Die Methode **`toSorted()`** von {{jsxref("TypedArray")}}-Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Version der {{jsxref("TypedArray/sort", "sort()")}}-Methode. Sie gibt ein neues typisiertes Array zurück, dessen Elemente in aufsteigender Reihenfolge sortiert sind. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.toSorted()")}}, sortiert die Werte jedoch standardmäßig numerisch statt als Zeichenfolgen.

## Syntax

```js-nolint
toSorted()
toSorted(compareFn)
```

### Parameter

- `compareFn` {{optional_inline}}

  - : Eine Funktion, die die Reihenfolge der Elemente bestimmt. Wird diese weggelassen, werden die Elemente des typisierten Arrays numerisch sortiert. Weitere Informationen finden Sie unter {{jsxref("TypedArray/sort", "sort()")}}.

### Rückgabewert

Ein neues typisiertes Array mit den in aufsteigender Reihenfolge sortierten Elementen.

## Beschreibung

Siehe {{jsxref("Array.prototype.toSorted()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Sortieren eines Arrays

Weitere Beispiele finden Sie auch in der Methode {{jsxref("Array.prototype.sort()")}}.

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

- [Polyfill von `TypedArray.prototype.toSorted` in `core-js`](https://github.com/zloirock/core-js#change-array-by-copy)
- [Leitfaden zu JavaScript typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.toSorted()")}}
