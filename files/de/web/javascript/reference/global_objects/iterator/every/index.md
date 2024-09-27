---
title: Iterator.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/every
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`every()`** Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich wie {{jsxref("Array.prototype.every()")}}: Sie prüft, ob alle vom Iterator erzeugten Elemente den Test der bereitgestellten Funktion bestehen. Sie gibt einen booleschen Wert zurück.

## Syntax

```js-nolint
every(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen [falsy](/de/docs/Glossary/Falsy) Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

`true`, wenn `callbackFn` für jedes Element einen [truthy](/de/docs/Glossary/truthy) Wert zurückgibt. Andernfalls `false`.

## Beschreibung

`every()` durchläuft den Iterator und ruft die `callbackFn`-Funktion einmal für jedes Element auf. Es gibt `false` sofort zurück, wenn die Callback-Funktion einen falsy Wert zurückgibt. Andernfalls iteriert es bis zum Ende des Iterators und gibt `true` zurück. Wenn `every()` `false` zurückgibt, wird der zugrundeliegende Iterator geschlossen, indem seine `return()` Methode aufgerufen wird.

Der Hauptvorteil von Iterator-Helpern gegenüber Array-Methoden liegt in ihrer Fähigkeit, mit unendlichen Iteratoren zu arbeiten. Bei unendlichen Iteratoren gibt `every()` `false` zurück, sobald der erste falsy Wert gefunden wird. Wenn die `callbackFn` immer einen truthy Wert zurückgibt, kehrt die Methode niemals zurück.

## Beispiele

### Verwendung von every()

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const isEven = (x) => x % 2 === 0;
console.log(fibonacci().every(isEven)); // false

const isPositive = (x) => x > 0;
console.log(fibonacci().take(10).every(isPositive)); // true
console.log(fibonacci().every(isPositive)); // Never completes
```

Der Aufruf von `every()` schließt immer den zugrundeliegenden Iterator, auch wenn die Methode frühzeitig zurückkehrt. Der Iterator wird niemals in einem halb fertigen Zustand belassen.

```js
const seq = fibonacci();
console.log(seq.every(isEven)); // false
console.log(seq.next()); // { value: undefined, done: true }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.every` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.every()")}}
