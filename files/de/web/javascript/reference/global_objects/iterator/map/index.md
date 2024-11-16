---
title: Iterator.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/map
l10n:
  sourceCommit: a71768c124d1bb2dceef873c0bda266e9f714e4c
---

{{JSRef}}

Die **`map()`**-Methode von {{jsxref("Iterator")}}-Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers) zurück, das die Elemente des Iterators liefert, jeweils transformiert durch eine Mapping-Funktion.

## Syntax

```js-nolint
map(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Ihr Rückgabewert wird vom Iterator-Hilfsobjekt geliefert. Die Funktion wird mit folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell zu verarbeitende Element.
    - `index`
      - : Der Index des aktuell zu verarbeitenden Elements.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helpers). Jedes Mal, wenn die `next()`-Methode des Iterator-Hilfsobjekts aufgerufen wird, erhält sie das nächste Element vom zugrunde liegenden Iterator, wendet `callbackFn` an und liefert den Rückgabewert. Wenn der zugrunde liegende Iterator abgeschlossen ist, wird auch das Iterator-Hilfsobjekt abgeschlossen (die `next()`-Methode erzeugt `{ value: undefined, done: true }`).

## Beschreibung

Der Hauptvorteil von Iterator-Hilfsobjekten gegenüber Array-Methoden ist, dass sie lazy sind, was bedeutet, dass sie den nächsten Wert nur auf Anfrage erzeugen. Dies vermeidet unnötige Berechnungen und ermöglicht auch die Verwendung mit unendlichen Iteratoren. Die `map()`-Methode ermöglicht es Ihnen, einen neuen Iterator zu erstellen, der beim Iterieren transformierte Elemente erzeugt.

## Beispiele

### Verwendung von map()

Im folgenden Beispiel wird ein Iterator erstellt, der Terme der Fibonacci-Sequenz liefert, diese in eine neue Sequenz umwandelt, in der jedes Term quadriert wird, und dann die ersten Terme liest:

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

`map()` ist am bequemsten, wenn Sie den Iterator nicht manuell erstellen. Da Iteratoren ebenfalls iterierbar sind, können Sie den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen:

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
