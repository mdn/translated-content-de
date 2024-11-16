---
title: Iterator.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/filter
l10n:
  sourceCommit: a71768c124d1bb2dceef873c0bda266e9f714e4c
---

{{JSRef}}

Die **`filter()`** Methode von {{jsxref("Iterator")}} Instanzen gibt einen neuen [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) zurück, der nur jene Elemente des Iterators liefert, für die die bereitgestellte Callback-Funktion `true` zurückgibt.

## Syntax

```js-nolint
filter(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator produzierte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, damit das Element vom Iterator-Helfer geliefert wird, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Ein neuer [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers). Jedes Mal, wenn die `next()` Methode des Iterator-Helfers aufgerufen wird, gibt sie das nächste Element im Iterator zurück, für das die Callback-Funktion `true` zurückgibt. Wenn der zugrunde liegende Iterator abgeschlossen ist, ist auch der Iterator-Helfer abgeschlossen (die `next()` Methode erzeugt `{ value: undefined, done: true }`).

## Beschreibung

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden ist, dass sie faul sind, was bedeutet, dass sie den nächsten Wert nur bei Bedarf produzieren. Dies vermeidet unnötige Berechnungen und erlaubt auch die Verwendung mit unendlichen Iteratoren.

## Beispiele

### Verwendung von filter()

Das folgende Beispiel erstellt einen Iterator, der Begriffe in der Fibonacci-Folge liefert, und liest dann die ersten wenigen Begriffe, die gerade sind:

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().filter((x) => x % 2 === 0);
console.log(seq.next().value); // 2
console.log(seq.next().value); // 8
console.log(seq.next().value); // 34
```

### Verwendung von filter() mit einer for...of Schleife

`filter()` ist am praktischsten, wenn der Iterator nicht manuell erstellt wird. Da Iteratoren auch iterierbar sind, können Sie den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}} Schleife durchlaufen:

```js
for (const n of fibonacci().filter((x) => x % 2 === 0)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
// 2
// 8
// 34
```

Dies ist gleichbedeutend mit:

```js
for (const n of fibonacci()) {
  if (n % 2 !== 0) {
    continue;
  }
  console.log(n);
  if (n > 30) {
    break;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.filter` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.forEach()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Iterator.prototype.reduce()")}}
- {{jsxref("Array.prototype.filter()")}}
