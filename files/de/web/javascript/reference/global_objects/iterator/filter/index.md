---
title: Iterator.prototype.filter()
short-title: filter()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/filter
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`filter()`** von {{jsxref("Iterator")}}-Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das nur die Elemente des Iterators liefert, für die die übergebene Callback-Funktion `true` zurückgibt.

## Syntax

```js-nolint
filter(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, damit das Iterator-Hilfsobjekt das Element liefert, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Bei jedem Aufruf seiner `next()`-Methode gibt es das nächste Element des Iterators zurück, für das die Callback-Funktion `true` zurückgibt. Wenn der zugrunde liegende Iterator abgeschlossen ist, ist auch das Iterator-Hilfsobjekt abgeschlossen (die `next()`-Methode liefert `{ value: undefined, done: true }`).

## Beschreibung

Der wichtigste Vorteil von Iterator-Hilfsobjekten gegenüber Array-Methoden ist, dass sie Werte erst bei Bedarf erzeugen: Der nächste Wert wird nur erzeugt, wenn er angefordert wird. Das vermeidet unnötige Berechnungen und ermöglicht auch ihre Verwendung mit unendlichen Iteratoren.

## Beispiele

### filter() verwenden

Das folgende Beispiel erstellt einen Iterator, der Glieder der Fibonacci-Folge liefert, und liest anschließend die ersten geraden Glieder:

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

### filter() mit einer for...of-Schleife verwenden

`filter()` ist besonders praktisch, wenn Sie den Iterator nicht selbst implementieren. Da Iteratoren auch iterierbar sind, können Sie das zurückgegebene Hilfsobjekt mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen:

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

- [Polyfill für `Iterator.prototype.filter` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.filter` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.forEach()")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.map()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Iterator.prototype.reduce()")}}
- {{jsxref("Array.prototype.filter()")}}
