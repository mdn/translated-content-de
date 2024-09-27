---
title: TypedArray.prototype.toSorted()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/toSorted
l10n:
  sourceCommit: e46c58e6ed948e8c35c206762eb14a2e68616ed1
---

{{JSRef}}

Die **`toSorted()`**-Methode von {{jsxref("TypedArray")}} Instanzen ist die [kopierende](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#copying_methods_and_mutating_methods) Version der {{jsxref("TypedArray/sort", "sort()")}}-Methode. Sie gibt ein neues typisiertes Array zurück, dessen Elemente in aufsteigender Reihenfolge sortiert sind. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.toSorted()")}}, außer dass sie die Werte standardmäßig numerisch statt als Zeichenketten sortiert.

## Syntax

```js-nolint
toSorted()
toSorted(compareFn)
```

### Parameter

- `compareFn` {{optional_inline}}

  - : Eine Funktion, die die Reihenfolge der Elemente bestimmt. Wird sie weggelassen, werden die Elemente des typisierten Arrays nach ihrem numerischen Wert sortiert. Siehe {{jsxref("TypedArray/sort", "sort()")}} für weitere Informationen.

### Rückgabewert

Ein neues typisiertes Array, dessen Elemente in aufsteigender Reihenfolge sortiert sind.

## Beschreibung

Siehe {{jsxref("Array.prototype.toSorted()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Sortierung eines Arrays

Für weitere Beispiele siehe auch die Methode {{jsxref("Array.prototype.sort()")}}.

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
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray.prototype.sort()")}}
- {{jsxref("TypedArray.prototype.toReversed()")}}
- {{jsxref("TypedArray.prototype.with()")}}
- {{jsxref("Array.prototype.toSorted()")}}
