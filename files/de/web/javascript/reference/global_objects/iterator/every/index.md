---
title: Iterator.prototype.every()
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/every
l10n:
  sourceCommit: 76972cdb4d87dd72e0a2a3146af07d82c7ef7d67
---

Die **`every()`** Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich wie {{jsxref("Array.prototype.every()")}}: Sie gibt `false` zurück, wenn sie ein Element findet, das die bereitgestellte Testfunktion nicht erfüllt. Andernfalls, wenn der Iterator erschöpft wird, ohne ein solches Element zu finden, gibt sie `true` zurück.

## Syntax

```js-nolint
every(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator produzierte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

`true`, wenn `callbackFn` für jedes Element einen {{Glossary("truthy", "truthy")}} Wert zurückgibt. Andernfalls `false`.

## Beschreibung

`every()` iteriert den Iterator und ruft die Funktion `callbackFn` einmal für jedes Element auf. Sie gibt `false` sofort zurück, wenn die Callback-Funktion einen falsy Wert zurückgibt. Andernfalls iteriert sie bis zum Ende des Iterators und gibt `true` zurück. Wenn `every()` `false` zurückgibt, wird der zugrundeliegende Iterator durch den Aufruf seiner `return()` Methode geschlossen.

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden ist, dass sie faul sind, das bedeutet, sie erzeugen nur dann den nächsten Wert, wenn er angefordert wird. Dies vermeidet unnötige Berechnungen und erlaubt es ihnen auch, mit unendlichen Iteratoren verwendet zu werden. Bei unendlichen Iteratoren gibt `every()` `false` zurück, sobald der erste falsy Wert gefunden wird. Wenn die `callbackFn` immer einen truthy Wert zurückgibt, gibt die Methode niemals zurück.

Ein Aufruf von `every()` schließt immer den zugrundeliegenden Iterator, auch wenn die Methode vorzeitig zurückkehrt. Der Iterator wird nie in einem halbwegs abgeschlossenen Zustand gelassen.

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

Die Methode schließt den Iterator nach der Rückgabe.

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
