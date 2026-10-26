---
title: Iterator.prototype.map()
short-title: map()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/map
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`map()`** von {{jsxref("Iterator")}}-Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das die Elemente des Iterators liefert, nachdem jedes durch eine Abbildungsfunktion transformiert wurde.

## Syntax

```js-nolint
map(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Ihr Rückgabewert wird vom Iterator-Hilfsobjekt geliefert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Jedes Mal, wenn die Methode `next()` des Iterator-Hilfsobjekts aufgerufen wird, holt sie das nächste Element aus dem zugrunde liegenden Iterator, wendet `callbackFn` darauf an und liefert den Rückgabewert. Wenn der zugrunde liegende Iterator abgeschlossen ist, ist auch das Iterator-Hilfsobjekt abgeschlossen (die Methode `next()` gibt `{ value: undefined, done: true }` zurück).

## Beschreibung

Der größte Vorteil von Iterator-Hilfsobjekten gegenüber Array-Methoden besteht darin, dass sie Werte erst bei Bedarf erzeugen. Sie erzeugen den nächsten Wert also nur, wenn er angefordert wird. Das vermeidet unnötige Berechnungen und ermöglicht auch ihre Verwendung mit unendlichen Iteratoren. Mit der Methode `map()` können Sie einen neuen Iterator erstellen, der bei der Iteration transformierte Elemente liefert.

## Beispiele

### map() verwenden

Das folgende Beispiel erstellt einen Iterator, der Glieder der Fibonacci-Folge liefert, transformiert ihn in eine neue Folge, in der jedes Glied quadriert ist, und liest anschließend die ersten Glieder aus:

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

### map() mit einer for...of-Schleife verwenden

`map()` ist besonders praktisch, wenn Sie den Iterator nicht selbst implementieren. Da Iteratoren auch iterierbar sind, können Sie mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife über das zurückgegebene Hilfsobjekt iterieren:

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

- [Polyfill für `Iterator.prototype.map` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.map` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.flatMap()")}}
- {{jsxref("Array.prototype.reduce()")}}
