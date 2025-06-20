---
title: Iterator.prototype.toArray()
short-title: toArray()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/toArray
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
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

`iterator.toArray()` entspricht `Array.from(iterator)` und `[...iterator]`, außer dass es einfacher ist zu verketten, wenn mehrere Iterator-Hilfsmethoden beteiligt sind. Das folgende Beispiel erstellt einen Iterator, der Begriffe in der Fibonacci-Folge liefert, nimmt die ersten 10 Begriffe, filtert die ungeraden Zahlen heraus und konvertiert das Ergebnis in ein Array:

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

Beachten Sie, dass es eine gute Idee ist, `toArray()` als letzten Schritt Ihrer Verarbeitung zu verwenden. Zum Beispiel ist `fibonacci().take(10).toArray().filter(...)` weniger effizient, da Iterator-Hilfsmethoden faul sind und die Erstellung eines temporären Arrays vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.toArray` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [es-shims polyfill von `Iterator.prototype.toArray`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
