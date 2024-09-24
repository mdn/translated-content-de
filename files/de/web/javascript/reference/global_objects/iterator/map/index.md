---
title: Iterator.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/map
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`map()`**-Methode von {{jsxref("Iterator")}}-Instanzen gibt einen neuen [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) zurück, der Elemente des Iterators liefert, wobei jedes Element durch eine Mapping-Funktion transformiert wird.

## Syntax

```js-nolint
map(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Dessen Rückgabewert wird vom Iterator-Helfer geliefert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein neuer [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers). Jedes Mal, wenn die `next()`-Methode des Iterator-Helfers aufgerufen wird, erhält sie das nächste Element vom zugrunde liegenden Iterator, wendet `callbackFn` an und gibt den Rückgabewert zurück. Wenn der zugrunde liegende Iterator abgeschlossen ist, ist der Iterator-Helfer ebenfalls abgeschlossen (die `next()`-Methode produziert `{ value: undefined, done: true }`).

## Beschreibung

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden ist ihre Fähigkeit, mit unendlichen Iterators zu arbeiten. Mit unendlichen Iterators ermöglicht `map()` Ihnen, einen neuen Iterator zu erstellen, der beim Iterieren transformierte Elemente produziert.

## Beispiele

### Verwenden von map()

Das folgende Beispiel erstellt einen Iterator, der Terme in der Fibonacci-Folge liefert, transformiert ihn in eine neue Folge, bei der jeder Term quadriert wird, und liest dann die ersten paar Terme:

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const seq = fibonacci().map((x) => x ** 2);
console.log(seq.next().value); // 1
console.log(seq.next().value); // 1
console.log(seq.next().value); // 4
```

### Verwenden von map() mit einer for...of-Schleife

`map()` ist am bequemsten, wenn Sie den Iterator nicht manuell erstellen. Da Iteratoren auch iterierbar sind, können Sie den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen:

```js
for (const n of fibonacci().map((x) => x ** 2)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Ausgabe:
// 1
// 1
// 4
// 9
// 25
// 64
```

Dies entspricht:

```js
for (const n of fibonacci()) {
  const n2 = n ** 2;
  console.log(n2);
  if (n2 > 30) {
    break;
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.map` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
