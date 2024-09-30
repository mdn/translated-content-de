---
title: Iterator.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/map
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`map()`**-Methode von {{jsxref("Iterator")}}-Instanzen gibt einen neuen [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) zurück, der Elemente des Iterators liefert, die jeweils durch eine Mapping-Funktion transformiert wurden.

## Syntax

```js-nolint
map(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt werden soll. Der Rückgabewert wird vom Iterator-Helfer geliefert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein neuer [Iterator-Helfer](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers). Jedes Mal, wenn die `next()`-Methode des Iterator-Helfers aufgerufen wird, erhält sie das nächste Element vom zugrunde liegenden Iterator, wendet `callbackFn` an und liefert den Rückgabewert. Wenn der zugrunde liegende Iterator abgeschlossen ist, wird auch der Iterator-Helfer abgeschlossen (die `next()`-Methode liefert `{ value: undefined, done: true }`).

## Beschreibung

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden ist ihre Fähigkeit, mit unendlichen Iteratoren zu arbeiten. Bei unendlichen Iteratoren ermöglicht `map()`, einen neuen Iterator zu erstellen, der bei der Iteration transformierte Elemente produziert.

## Beispiele

### Verwendung von map()

Das folgende Beispiel erstellt einen Iterator, der Terme in der Fibonacci-Folge liefert, wandelt ihn in eine neue Folge um, wobei jeder Term quadriert wird, und liest dann die ersten paar Terme:

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

### Verwendung von map() mit einer for...of-Schleife

`map()` ist am bequemsten, wenn Sie den Iterator nicht manuell schreiben. Da Iteratoren auch iterierbar sind, können Sie den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife iterieren:

```js
for (const n of fibonacci().map((x) => x ** 2)) {
  console.log(n);
  if (n > 30) {
    break;
  }
}

// Logs:
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
