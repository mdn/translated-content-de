---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
l10n:
  sourceCommit: e46c58e6ed948e8c35c206762eb14a2e68616ed1
---

{{JSRef}}

Die **`sort()`**-Methode von {{jsxref("TypedArray")}}-Instanzen sortiert die Elemente eines typisierten Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz auf dasselbe nun sortierte typisierte Array zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.sort()")}}, außer dass sie die Werte standardmäßig numerisch statt als Zeichenfolgen sortiert.

{{EmbedInteractiveExample("pages/js/typedarray-sort.html", "shorter")}}

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

    Sie sollte eine Zahl zurückgeben, bei der:

    - Ein negativer Wert angibt, dass `a` vor `b` kommen sollte.
    - Ein positiver Wert angibt, dass `a` nach `b` kommen sollte.
    - Null oder `NaN` bedeutet, dass `a` und `b` als gleich angesehen werden.

    Um sich das zu merken, bedenken Sie, dass `(a, b) => a - b` Zahlen in aufsteigender Reihenfolge sortiert.

    Wird sie weggelassen, werden die typisierten Array-Elemente numerisch sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche, nun sortierte, typisierte Array. Beachten Sie, dass das typisierte Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird und keine Kopie erstellt wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.sort()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf typisierten Array-Instanzen aufgerufen werden.

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
- Leitfaden zu [JavaScript-typisierten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("Array.prototype.sort()")}}
