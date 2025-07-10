---
title: Iterator.prototype.map()
short-title: map()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/map
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`map()`** Methode von {{jsxref("Iterator")}} Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das Elemente des Iterators liefert, wobei jedes durch eine Abbildungsfunktion transformiert wird.

## Syntax

```js-nolint
map(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Ihr Rückgabewert wird vom Iterator-Hilfsobjekt geliefert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Jedes Mal, wenn die Methode `next()` des Iterator-Hilfsobjekts aufgerufen wird, erhält sie das nächste Element vom zugrunde liegenden Iterator, wendet `callbackFn` an und liefert den Rückgabewert. Wenn der zugrunde liegende Iterator abgeschlossen ist, ist auch der Iterator-Helfer abgeschlossen (die `next()`-Methode erzeugt `{ value: undefined, done: true }`).

## Beschreibung

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden ist, dass sie lazy sind, das bedeutet, dass sie nur den nächsten Wert erzeugen, wenn er angefordert wird. Dies vermeidet unnötige Berechnungen und ermöglicht es ihnen auch, mit unendlichen Iteratoren verwendet zu werden. Die `map()` Methode ermöglicht es Ihnen, einen neuen Iterator zu erstellen, der, wenn er durchlaufen wird, transformierte Elemente erzeugt.

## Beispiele

### Verwendung von map()

Das folgende Beispiel erstellt einen Iterator, der Terme in der Fibonacci-Sequenz liefert, verwandelt ihn in eine neue Sequenz, bei der jeder Term quadriert wird, und liest dann die ersten paar Terme:

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

### Verwendung von map() mit einer for...of Schleife

`map()` ist am bequemsten, wenn Sie den Iterator nicht manuell erstellen. Da Iteratoren auch iterierbar sind, können Sie den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}} Schleife durchlaufen:

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

Dies ist gleichbedeutend mit:

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
- [es-shims Polyfill von `Iterator.prototype.map`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
