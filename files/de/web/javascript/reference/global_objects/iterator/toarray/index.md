---
title: Iterator.prototype.toArray()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/toArray
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
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

Eine neue {{jsxref("Array")}}-Instanz, die die Elemente aus dem Iterator in der Reihenfolge enthält, in der sie produziert wurden.

## Beispiele

### Verwendung von toArray()

`iterator.toArray()` entspricht `Array.from(iterator)` und `[...iterator]`, außer dass es einfacher ist, zu verketteten Aufrufen zu verwenden, wenn mehrere Iterator-Hilfsmethoden involviert sind. Im folgenden Beispiel wird ein Iterator erstellt, der Terme der Fibonacci-Sequenz liefert, die ersten 10 Terme nimmt, die ungeraden Zahlen herausfiltert und das Ergebnis in ein Array umwandelt:

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

Es ist ratsam, `toArray()` als letzten Schritt Ihrer Verarbeitung aufzurufen. Zum Beispiel ist `fibonacci().take(10).toArray().filter(...)` weniger effizient, da Iterator-Helfer faul sind und die Erstellung eines temporären Arrays vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.toArray` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [ES-Shims Polyfill von `Iterator.prototype.toArray`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Array.from()")}}
