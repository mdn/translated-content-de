---
title: TypedArray.prototype.sort()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/sort
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`sort()`**-Methode von {{jsxref("TypedArray")}}-Instanzen sortiert die Elemente eines Typed Arrays _[vor Ort](https://de.wikipedia.org/wiki/In-place-Algorithmus)_ und gibt die Referenz auf das gleiche, nun sortierte, Typed Array zurück. Diese Methode verwendet denselben Algorithmus wie {{jsxref("Array.prototype.sort()")}}, jedoch sortiert sie die Werte standardmäßig numerisch anstatt als Zeichenfolgen.

{{InteractiveExample("JavaScript Demo: TypedArray.sort()", "shorter")}}

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

    Die Funktion sollte eine Zahl zurückgeben, wobei:

    - Ein negativer Wert anzeigt, dass `a` vor `b` stehen sollte.
    - Ein positiver Wert anzeigt, dass `a` nach `b` stehen sollte.
    - Null oder `NaN` anzeigt, dass `a` und `b` als gleich angesehen werden.

    Merken Sie sich: `(a, b) => a - b` sortiert Zahlen in aufsteigender Reihenfolge.

    Wenn weggelassen, werden die Elemente des Typed Arrays numerisch sortiert.

### Rückgabewert

Die Referenz auf das ursprüngliche Typed Array, nun sortiert. Beachten Sie, dass das Typed Array _[vor Ort](https://de.wikipedia.org/wiki/In-place-Algorithmus)_ sortiert wird und keine Kopie erstellt wird.

## Beschreibung

Siehe {{jsxref("Array.prototype.sort()")}} für weitere Details. Diese Methode ist nicht generisch und kann nur auf Typed Array-Instanzen aufgerufen werden.

## Beispiele

### Verwendung von sort()

Für weitere Beispiele siehe auch die {{jsxref("Array.prototype.sort()")}}-Methode.

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
- [JavaScript Typed Arrays](/de/docs/Web/JavaScript/Guide/Typed_arrays) Leitfaden
- {{jsxref("TypedArray")}}
- {{jsxref("TypedArray.prototype.reverse()")}}
- {{jsxref("TypedArray.prototype.toSorted()")}}
- {{jsxref("Array.prototype.sort()")}}
