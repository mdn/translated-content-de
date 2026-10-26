---
title: TypedArray.prototype.sort()
short-title: sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`sort()`** von {{jsxref("TypedArray")}}-Instanzen sortiert die Elemente eines typisierten Arrays _[an Ort und Stelle](https://en.wikipedia.org/wiki/In-place_algorithm)_ und gibt eine Referenz auf dasselbe, nun sortierte typisierte Array zurück. Die Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.sort()")}}, sortiert die Werte standardmäßig jedoch numerisch statt als Zeichenfolgen.

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
      - : Das erste zu vergleichende Element.
    - `b`
      - : Das zweite zu vergleichende Element.

    Sie sollte eine Zahl zurückgeben, wobei gilt:
    - Ein negativer Wert bedeutet, dass `a` vor `b` stehen soll.
    - Ein positiver Wert bedeutet, dass `a` nach `b` stehen soll.
    - Null oder `NaN` bedeutet, dass `a` und `b` als gleich betrachtet werden.

    Als Merkhilfe: `(a, b) => a - b` sortiert Zahlen in aufsteigender Reihenfolge.

    Wird `compareFn` weggelassen, werden die Elemente des typisierten Arrays nach ihrem numerischen Wert sortiert.

### Rückgabewert

Eine Referenz auf das ursprüngliche, nun sortierte typisierte Array. Beachten Sie, dass das typisierte Array _[an Ort und Stelle](https://en.wikipedia.org/wiki/In-place_algorithm)_ sortiert und keine Kopie erstellt wird.

## Beschreibung

Weitere Einzelheiten finden Sie unter {{jsxref("Array.prototype.sort()")}}. Diese Methode ist nicht generisch und kann nur für Instanzen typisierter Arrays aufgerufen werden.

## Beispiele

### sort() verwenden

Weitere Beispiele finden Sie auch bei der Methode {{jsxref("Array.prototype.sort()")}}.

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

- [Polyfill für `TypedArray.prototype.sort` mit modernem Verhalten wie stabiler Sortierung in `core-js`](https://core-js.io/docs/features/ecmascript/typed-arrays)
- [Leitfaden zu typisierten JavaScript-Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays)
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("Array.prototype.sort()")}}
