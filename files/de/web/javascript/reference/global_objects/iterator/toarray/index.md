---
title: Iterator.prototype.toArray()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/toArray
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`toArray()`**-Methode von {{jsxref("Iterator")}}-Instanzen erstellt eine neue {{jsxref("Array")}}-Instanz, die mit den vom Iterator gelieferten Elementen gefüllt ist.

## Syntax

```js-nolint
toArray()
```

### Parameter

Keine.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz, die die Elemente aus dem Iterator in der Reihenfolge enthält, in der sie erzeugt wurden.

## Beispiele

### Verwendung von toArray()

`iterator.toArray()` ist gleichbedeutend mit `Array.from(iterator)` und `[...iterator]`, außer dass es einfacher zu verketten ist, wenn mehrere Iterator-Hilfsmethoden beteiligt sind. Das folgende Beispiel erstellt einen Iterator, der Terme der Fibonacci-Folge liefert, nimmt die ersten 10 Terme, filtert die ungeraden Zahlen heraus und wandelt das Ergebnis in ein Array um:

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

Beachten Sie, dass es eine gute Idee ist, `toArray()` als letzten Schritt Ihrer Verarbeitung zu verwenden. Zum Beispiel ist `fibonacci().take(10).toArray().filter(...)` weniger effizient, weil Iterator-Hilfsmethoden faul sind und die Erstellung eines temporären Arrays vermieden wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.toArray` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
