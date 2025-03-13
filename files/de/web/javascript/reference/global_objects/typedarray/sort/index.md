---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`sort()`**-Methode von {{jsxref("TypedArray")}}-Instanzen sortiert die Elemente eines typisierten Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe nun sortierte, typisierte Array zurück. Diese Methode hat denselben Algorithmus wie {{jsxref("Array.prototype.sort()")}}, außer dass sie die Werte standardmäßig numerisch statt als Strings sortiert.

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
      - : Das erste Element für den Vergleich.
    - `b`
      - : Das zweite Element für den Vergleich.

    Sie sollte eine Zahl zurückgeben, bei der:

    - Ein negativer Wert anzeigt, dass `a` vor `b` kommen sollte.
    - Ein positiver Wert anzeigt, dass `a` nach `b` kommen sollte.
    - Null oder `NaN` anzeigt, dass `a` und `b` als gleich angesehen werden.

    Um sich dies zu merken, beachten Sie, dass `(a, b) => a - b` Zahlen in aufsteigender Reihenfolge sortiert.

    Wenn weggelassen, werden die Elemente des typisierten Arrays nach numerischem Wert sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche typisierte Array, das nun sortiert ist. Beachten Sie, dass das typisierte Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird und keine Kopie erstellt wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.sort()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf Instanzen eines typisierten Arrays aufgerufen werden.

## Beispiele

### Verwendung von sort()

Für weitere Beispiele siehe auch die Methode {{jsxref("Array.prototype.sort()")}}.

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
- [JavaScript-typisierte Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("Array.prototype.sort()")}}
