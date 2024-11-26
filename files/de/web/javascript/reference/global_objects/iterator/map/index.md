---
title: Iterator.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/map
l10n:
  sourceCommit: 7df171ff1d6da6a5e3911b7aedd56f6312bf0cca
---

{{JSRef}}

Die **`map()`**-Methode von {{jsxref("Iterator")}}-Instanzen gibt ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects) zurück, das Elemente des Iterators liefert, die jeweils durch eine Abbildungsfunktion transformiert werden.

## Syntax

```js-nolint
map(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Der Rückgabewert wird vom Iterator-Hilfsobjekt bereitgestellt. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Ein neues [Iterator-Hilfsobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator#iterator_helper_objects). Jedes Mal, wenn die `next()`-Methode des Iterator-Hilfsobjekts aufgerufen wird, erhält sie das nächste Element vom zugrunde liegenden Iterator, wendet `callbackFn` an und liefert den Rückgabewert. Wenn der zugrunde liegende Iterator abgeschlossen ist, ist auch das Iterator-Hilfsobjekt abgeschlossen (die `next()` Methode erzeugt `{ value: undefined, done: true }`).

## Beschreibung

Der Hauptvorteil von Iterator-Hilfsobjekten gegenüber Array-Methoden besteht darin, dass sie faul sind, was bedeutet, dass sie den nächsten Wert nur dann erzeugen, wenn er angefordert wird. Dies vermeidet unnötige Berechnungen und ermöglicht es ihnen, mit unendlichen Iteratoren verwendet zu werden. Die `map()`-Methode erlaubt es Ihnen, einen neuen Iterator zu erstellen, der beim Durchlaufen transformierte Elemente erzeugt.

## Beispiele

### Verwendung von map()

Im folgenden Beispiel wird ein Iterator erstellt, der Glieder der Fibonacci-Folge liefert, diese in eine neue Folge transformiert, bei der jedes Glied quadriert wird, und dann die ersten paar Glieder liest:

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

`map()` ist am bequemsten, wenn Sie den Iterator nicht manuell erstellen. Da Iteratoren auch iterierbar sind, können Sie den zurückgegebenen Helfer mit einer {{jsxref("Statements/for...of", "for...of")}}-Schleife durchlaufen:

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
