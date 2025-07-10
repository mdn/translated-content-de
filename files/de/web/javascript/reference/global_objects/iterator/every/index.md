---
title: Iterator.prototype.every()
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/every
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`every()`** Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich wie {{jsxref("Array.prototype.every()")}}: Sie prüft, ob alle vom Iterator erzeugten Elemente den Test bestehen, der von der bereitgestellten Funktion implementiert wird. Sie gibt einen booleschen Wert zurück.

## Syntax

```js-nolint
every(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

`true`, wenn `callbackFn` für jedes Element einen {{Glossary("truthy", "truthy")}} Wert zurückgibt. Andernfalls `false`.

## Beschreibung

`every()` iteriert über den Iterator und ruft die Funktion `callbackFn` einmal für jedes Element auf. Wenn die Callback-Funktion einen falsy Wert zurückgibt, wird sofort `false` zurückgegeben. Andernfalls iteriert es bis zum Ende des Iterators und gibt `true` zurück. Wenn `every()` `false` zurückgibt, wird der zugrunde liegende Iterator durch Aufruf seiner `return()` Methode geschlossen.

Der Hauptvorteil von Iterator-Hilfsfunktionen gegenüber Array-Methoden ist, dass sie lazy sind, das heißt, sie erzeugen den nächsten Wert nur auf Anfrage. Dies vermeidet unnötige Berechnungen und ermöglicht auch die Verwendung mit unendlichen Iteratoren. Bei unendlichen Iteratoren gibt `every()` `false` zurück, sobald der erste falsy Wert gefunden wird. Wenn die `callbackFn` immer einen truthy Wert zurückgibt, gibt die Methode nie zurück.

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

Das Aufrufen von `every()` schließt immer den zugrunde liegenden Iterator, selbst wenn die Methode frühzeitig zurückgibt. Der Iterator wird nie in einem unvollständigen Zustand belassen.

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
- [es-shims Polyfill von `Iterator.prototype.every`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.every()")}}
