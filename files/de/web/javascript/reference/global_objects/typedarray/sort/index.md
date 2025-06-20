---
title: TypedArray.prototype.sort()
short-title: sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`sort()`**-Methode von {{jsxref("TypedArray")}} Instanzen sortiert die Elemente eines typisierten Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe nun sortierte typisierte Array zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.sort()")}}, mit der Ausnahme, dass die Werte standardmäßig numerisch statt als Zeichenketten sortiert werden.

{{InteractiveExample("JavaScript Demo: TypedArray.prototype.sort()", "shorter")}}

```js interactive-example
const uint8 = new Uint8Array([40, 10, 50, 20, 30]);
uint8.sort();

console.log(uint8);
// Expected output: Uint8Array [10, 20, 30, 40, 50]
```

## Syntax

```js-nolint
sort()
sort(compareFn)
```

### Parameter

- `compareFn` {{optional_inline}}

  - : Eine Funktion, die die Reihenfolge der Elemente bestimmt. Die Funktion wird mit den folgenden Argumenten aufgerufen:

    - `a`
      - : Das erste Element zum Vergleich.
    - `b`
      - : Das zweite Element zum Vergleich.

    Sie sollte eine Zahl zurückgeben, wobei:

    - Ein negativer Wert darauf hinweist, dass `a` vor `b` kommen sollte.
    - Ein positiver Wert darauf hinweist, dass `a` nach `b` kommen sollte.
    - Null oder `NaN` darauf hinweist, dass `a` und `b` als gleich betrachtet werden.

    Um dies zu merken, denken Sie daran, dass `(a, b) => a - b` Zahlen in aufsteigender Reihenfolge sortiert.

    Wird dieser Parameter weggelassen, werden die Elemente des typisierten Arrays nach ihrem numerischen Wert sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche, nun sortierte typisierte Array. Beachten Sie, dass das typisierte Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird, und keine Kopie erstellt wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.sort()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Instanzen von typisierten Arrays aufgerufen werden.

## Beispiele

### Verwendung von sort()

Für weitere Beispiele siehe auch die {{jsxref("Array.prototype.sort()")}} Methode.

```js
let numbers = new Uint8Array([40, 1, 5, 200]);
numbers.sort();
// Uint8Array [ 1, 5, 40, 200 ]
// Unlike plain Arrays, a compare function is not required
// to sort the numbers numerically.

// Regular Arrays require a compare function to sort numerically:
numbers = [40, 1, 5, 200];
numbers.sort();
// [1, 200, 40, 5]

numbers.sort((a, b) => a - b); // compare numbers
// [ 1, 5, 40, 200 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.sort` mit modernem Verhalten wie stabile Sortierung in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("Array.prototype.sort()")}}
