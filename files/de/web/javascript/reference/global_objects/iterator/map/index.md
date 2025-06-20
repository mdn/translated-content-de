---
title: Iterator.prototype.map()
short-title: map()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/map
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`map()`** Methode von {{jsxref("Iterator")}} Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das Elemente des Iterators liefert, die jeweils durch eine Mapping-Funktion transformiert werden.

## Syntax

```js-nolint
map(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Ihr Rückgabewert wird vom Iterator-Hilfsobjekt bereitgestellt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Jedes Mal, wenn die `next()` Methode des Iterator-Hilfsobjekts aufgerufen wird, erhält es das nächste Element vom zugrunde liegenden Iterator, wendet `callbackFn` an und liefert den Rückgabewert. Wenn der zugrunde liegende Iterator abgeschlossen ist, ist auch das Iterator-Hilfsobjekt abgeschlossen (die `next()` Methode erzeugt `{ value: undefined, done: true }`).

## Beschreibung

Der Hauptvorteil von Iterator-Hilfsobjekten gegenüber Array-Methoden ist, dass sie faul sind, was bedeutet, dass sie den nächsten Wert nur bei Bedarf erzeugen. Dies vermeidet unnötige Berechnungen und ermöglicht ihre Verwendung mit unendlichen Iteratoren. Die `map()` Methode ermöglicht es Ihnen, einen neuen Iterator zu erstellen, der bei der Iteration transformierte Elemente produziert.

## Beispiele

### Verwendung von map()

Das folgende Beispiel erstellt einen Iterator, der die Terme der Fibonacci-Sequenz liefert, wandelt ihn in eine neue Sequenz um, bei der jeder Term quadriert wird, und liest dann die ersten paar Terme:

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

`map()` ist am bequemsten, wenn Sie den Iterator nicht von Hand rollen. Da Iteratoren auch iterierbar sind, können Sie den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}} Schleife durchlaufen:

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

Das entspricht:

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
