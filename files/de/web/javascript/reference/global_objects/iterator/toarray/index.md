---
title: Iterator.prototype.toArray()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/toArray
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`toArray()`** Methode von {{jsxref("Iterator")}} Instanzen erstellt eine neue {{jsxref("Array")}} Instanz, die mit den vom Iterator gelieferten Elementen befüllt ist.

## Syntax

```js-nolint
toArray()
```

### Parameter

Keine.

### Rückgabewert

Eine neue {{jsxref("Array")}} Instanz, die die Elemente vom Iterator in der Reihenfolge enthält, in der sie erzeugt wurden.

## Beispiele

### Verwendung von toArray()

`iterator.toArray()` entspricht `Array.from(iterator)` und `[...iterator]`, außer dass es einfacher zu verketten ist, wenn mehrere Iterator-Hilfsmethoden beteiligt sind. Im folgenden Beispiel wird ein Iterator erstellt, der Begriffe der Fibonacci-Sequenz liefert, die ersten 10 Begriffe nimmt, die ungeraden Zahlen herausfiltert und das Ergebnis in ein Array umwandelt:

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const array = fibonacci()
  .take(10)
  .filter((x) => x % 2 === 0)
  .toArray();

console.log(array); // [2, 8, 34]
```

Beachten Sie, dass es eine gute Idee ist, `toArray()` als letzten Schritt Ihrer Verarbeitung aufzurufen. Zum Beispiel ist `fibonacci().take(10).toArray().filter(...)` weniger effizient, weil Iterator-Helfer lazy sind und die Erstellung eines temporären Arrays vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.toArray` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
