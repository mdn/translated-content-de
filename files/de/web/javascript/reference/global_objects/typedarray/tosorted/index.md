---
title: TypedArray.prototype.toSorted()
short-title: toSorted()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toSorted()`**-Methode von {{jsxref("TypedArray")}}-Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Version der {{jsxref("TypedArray/sort", "sort()")}}-Methode. Sie gibt ein neues typisiertes Array zurück, dessen Elemente in aufsteigender Reihenfolge sortiert sind. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.toSorted()")}}, außer dass sie die Werte standardmäßig numerisch statt als Zeichenfolgen sortiert.

## Syntax

```js-nolint
toSorted()
toSorted(compareFn)
```

### Parameter

- `compareFn` {{optional_inline}}
  - : Eine Funktion, die die Reihenfolge der Elemente bestimmt. Wenn sie weggelassen wird, werden die Elemente des typisierten Arrays nach ihrem numerischen Wert sortiert. Weitere Informationen finden Sie unter {{jsxref("TypedArray/sort", "sort()")}}.

### Rückgabewert

Ein neues typisiertes Array mit den Elementen in aufsteigender Reihenfolge sortiert.

## Beschreibung

Weitere Details finden Sie unter {{jsxref("Array.prototype.toSorted()")}}. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

## Beispiele

### Sortieren eines Arrays

Weitere Beispiele finden Sie auch bei der {{jsxref("Array.prototype.sort()")}}-Methode.

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
