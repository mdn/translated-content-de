---
title: Iterator.prototype.every()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/every
l10n:
  sourceCommit: a71768c124d1bb2dceef873c0bda266e9f714e4c
---

{{JSRef}}

Die **`every()`** Methode von {{jsxref("Iterator")}} Instanzen ähnelt der {{jsxref("Array.prototype.every()")}}: Sie prüft, ob alle vom Iterator erzeugten Elemente den Test bestehen, der von der bereitgestellten Funktion implementiert wird. Sie gibt einen booleschen Wert zurück.

## Syntax

```js-nolint
every(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}}-Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

`true`, wenn `callbackFn` für jedes Element einen {{Glossary("truthy", "truthy")}} Wert zurückgibt. Andernfalls `false`.

## Beschreibung

`every()` iteriert den Iterator und ruft die `callbackFn` Funktion einmal für jedes Element auf. Sie gibt sofort `false` zurück, wenn die Callback-Funktion einen falsy Wert zurückgibt. Andernfalls wird bis zum Ende des Iterators iteriert und `true` zurückgegeben. Wenn `every()` `false` zurückgibt, wird der zugrunde liegende Iterator durch Aufrufen seiner `return()` Methode geschlossen.

Der Hauptvorteil von Iterator-Hilfsmethoden gegenüber Array-Methoden ist, dass sie faul sind, was bedeutet, dass sie den nächsten Wert nur bei Bedarf erzeugen. Dies vermeidet unnötige Berechnungen und ermöglicht es auch, sie mit unendlichen Iteratoren zu verwenden. Bei unendlichen Iteratoren gibt `every()` `false` zurück, sobald der erste falsy Wert gefunden wird. Wenn die `callbackFn` immer einen truthy Wert zurückgibt, gibt die Methode nie zurück.

## Beispiele

### Verwenden von every()

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

Der Aufruf von `every()` schließt immer den zugrunde liegenden Iterator, selbst wenn die Methode frühzeitig zurückkehrt. Der Iterator wird nie in einem Zwischenschritt-Zustand belassen.

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
