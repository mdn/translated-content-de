---
title: Iterator.prototype.toArray()
short-title: toArray()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/toArray
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`toArray()`** von {{jsxref("Iterator")}}-Instanzen erstellt eine neue {{jsxref("Array")}}-Instanz mit den vom Iterator gelieferten Elementen.

## Syntax

```js-nolint
toArray()
```

### Parameter

Keine.

### Rückgabewert

Eine neue {{jsxref("Array")}}-Instanz, die die Elemente des Iterators in der Reihenfolge enthält, in der sie geliefert wurden.

## Beispiele

### Verwendung von toArray()

`iterator.toArray()` entspricht `Array.from(iterator)` und `[...iterator]`, lässt sich aber einfacher mit mehreren Iterator-Hilfsmethoden verketten. Das folgende Beispiel erstellt einen Iterator, der Glieder der Fibonacci-Folge liefert, nimmt die ersten 10 Glieder, filtert die ungeraden Zahlen heraus und wandelt das Ergebnis in ein Array um:

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

Es empfiehlt sich, `toArray()` erst als letzten Verarbeitungsschritt aufzurufen. Beispielsweise ist `fibonacci().take(10).toArray().filter(...)` weniger effizient, weil Iterator-Hilfsmethoden verzögert ausgewertet werden und so die Erstellung eines temporären Arrays vermieden werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Iterator.prototype.toArray` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.toArray` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
