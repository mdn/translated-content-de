---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
l10n:
  sourceCommit: e46c58e6ed948e8c35c206762eb14a2e68616ed1
---

{{JSRef}}

Die **`sort()`** Methode von {{jsxref("TypedArray")}} Instanzen sortiert die Elemente eines getypten Arrays _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt die Referenz zu demselben jetzt sortierten getypten Array zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.sort()")}}, außer dass sie die Werte standardmäßig numerisch anstatt als Zeichenfolgen sortiert.

{{EmbedInteractiveExample("pages/js/typedarray-sort.html", "shorter")}}

## Syntax

```js-nolint
sort()
sort(compareFn)
```

### Parameter

- `compareFn` {{optional_inline}}

  - : Eine Funktion, die die Reihenfolge der Elemente bestimmt. Die Funktion wird mit folgenden Argumenten aufgerufen:

    - `a`
      - : Das erste Element zum Vergleichen.
    - `b`
      - : Das zweite Element zum Vergleichen.

    Sie sollte eine Zahl zurückgeben, bei der:

    - Ein negativer Wert anzeigt, dass `a` vor `b` kommen sollte.
    - Ein positiver Wert anzeigt, dass `a` nach `b` kommen sollte.
    - Null oder `NaN` anzeigt, dass `a` und `b` als gleich betrachtet werden.

    Um sich dies zu merken, bedenken Sie, dass `(a, b) => a - b` Zahlen in aufsteigender Reihenfolge sortiert.

    Wird sie weggelassen, werden die getypten Array-Elemente nach ihrem numerischen Wert sortiert.

### Rückgabewert

Die Referenz zum ursprünglichen getypten Array, jetzt sortiert. Beachten Sie, dass das getypte Array _[in place](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert wird und keine Kopie erstellt wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.sort()")}} für mehr Details. Diese Methode ist nicht generisch und kann nur auf getypten Array-Instanzen aufgerufen werden.

## Beispiele

### Verwendung von sort()

Weitere Beispiele finden Sie auch bei der Methode {{jsxref("Array.prototype.sort()")}}.

```js
let numbers = new Uint8Array([40, 1, 5, 200]);
numbers.sort();
// Uint8Array [ 1, 5, 40, 200 ]
// Im Gegensatz zu normalen Arrays ist keine Vergleichsfunktion erforderlich,
// um die Zahlen numerisch zu sortieren.

// Normale Arrays benötigen eine Vergleichsfunktion, um numerisch zu sortieren:
numbers = [40, 1, 5, 200];
numbers.sort();
// [1, 200, 40, 5]

numbers.sort((a, b) => a - b); // Zahlen vergleichen
// [ 1, 5, 40, 200 ]
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `TypedArray.prototype.sort` mit modernem Verhalten wie stabiler Sortierung in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- Leitfaden zu [JavaScript getypten Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("Array.prototype.sort()")}}
