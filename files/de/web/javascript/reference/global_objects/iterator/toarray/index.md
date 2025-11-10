---
title: Iterator.prototype.toArray()
short-title: toArray()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/toArray
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toArray()`** Methode von {{jsxref("Iterator")}} Instanzen erstellt eine neue {{jsxref("Array")}} Instanz, die mit den vom Iterator gelieferten Elementen gefüllt ist.

## Syntax

```js-nolint
toArray()
```

### Parameter

Keine.

### Rückgabewert

Eine neue {{jsxref("Array")}} Instanz, die die Elemente des Iterators in der Reihenfolge enthält, in der sie erzeugt wurden.

## Beispiele

### Verwendung von toArray()

`iterator.toArray()` ist gleichwertig mit `Array.from(iterator)` und `[...iterator]`, mit dem Unterschied, dass es einfacher zu verketten ist, wenn mehrere Methodenhelfer des Iterators beteiligt sind. Im folgenden Beispiel wird ein Iterator erstellt, der Begriffe in der Fibonacci-Folge liefert, die ersten 10 Begriffe nimmt, ungerade Zahlen herausfiltert und das Ergebnis in ein Array umwandelt:

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

Beachten Sie, dass es eine gute Idee ist, `toArray()` als letzten Schritt Ihrer Verarbeitung aufzurufen. Zum Beispiel ist `fibonacci().take(10).toArray().filter(...)` weniger effizient, da Iterator-Helfer faul sind und vermeiden, ein temporäres Array zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.toArray` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [es-shims Polyfill von `Iterator.prototype.toArray`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
