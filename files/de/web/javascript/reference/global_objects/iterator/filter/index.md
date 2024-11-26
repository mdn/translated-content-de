---
title: Iterator.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/filter
l10n:
  sourceCommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{JSRef}}

Die **`filter()`** Methode von {{jsxref("Iterator")}} Instanzen gibt ein neues [Iterator-Helferobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das nur diejenigen Elemente des Iterators liefert, für die die bereitgestellte Callback-Funktion `true` zurückgibt.

## Syntax

```js-nolint
filter(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, damit das Element vom Iterator-Helfer geliefert wird, und einen {{Glossary("Falsy", "falsy")}} Wert ansonsten. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein neues [Iterator-Helferobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Jedes Mal, wenn die `next()` Methode des Iterator-Helfers aufgerufen wird, gibt sie das nächste Element im Iterator zurück, für das die Callback-Funktion `true` zurückgibt. Wenn der zugrunde liegende Iterator abgeschlossen ist, wird auch das Iterator-Helferobjekt abgeschlossen (die `next()`-Methode liefert `{ value: undefined, done: true }`).

## Beschreibung

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden ist, dass sie faul sind, was bedeutet, dass sie den nächsten Wert nur auf Anfrage erzeugen. Dies vermeidet unnötige Berechnungen und ermöglicht es ihnen zudem, mit unendlichen Iteratoren verwendet zu werden.

## Beispiele

### Verwendung von filter()

Das folgende Beispiel erzeugt einen Iterator, der Terme der Fibonacci-Sequenz liefert, und liest dann die ersten paar Terme, die gerade sind:

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

`filter()` ist am praktischsten, wenn Sie den Iterator nicht manuell implementieren. Da Iteratoren auch iterierbar sind, können Sie den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}} Schleife durchlaufen:

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

Dies entspricht:

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
