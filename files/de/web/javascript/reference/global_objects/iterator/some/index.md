---
title: Iterator.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/some
l10n:
  sourceCommit: a71768c124d1bb2dceef873c0bda266e9f714e4c
---

{{JSRef}}

Die **`some()`** Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich wie {{jsxref("Array.prototype.some()")}}: Sie prüft, ob mindestens ein Element, das vom Iterator erzeugt wird, den von der bereitgestellten Funktion implementierten Test besteht. Sie gibt einen booleschen Wert zurück.

## Syntax

```js-nolint
some(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

`true`, wenn die Rückruffunktion für mindestens ein Element einen {{Glossary("truthy", "truthy")}} Wert zurückgibt. Andernfalls `false`.

## Beschreibung

`some()` durchläuft den Iterator und ruft die `callbackFn` Funktion einmal für jedes Element auf. Es gibt sofort `true` zurück, wenn die Rückruffunktion einen truthy Wert zurückgibt. Andernfalls iteriert es bis zum Ende des Iterators und gibt `false` zurück. Wenn `some()` `true` zurückgibt, wird der zugrunde liegende Iterator durch den Aufruf seiner `return()` Methode geschlossen.

Der Hauptvorteil von Iterator-Helpern gegenüber Array-Methoden ist, dass sie faul sind, was bedeutet, dass sie den nächsten Wert nur produzieren, wenn er angefordert wird. Dies vermeidet unnötige Berechnungen und ermöglicht es ihnen auch, mit unendlichen Iteratoren verwendet zu werden. Bei unendlichen Iteratoren gibt `some()` `true` zurück, sobald der erste truthy Wert gefunden wird. Wenn die `callbackFn` immer einen falsy Wert zurückgibt, wird die Methode niemals zurückkehren.

## Beispiele

### Verwendung von some()

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
console.log(fibonacci().some(isEven)); // true

const isNegative = (x) => x < 0;
const isPositive = (x) => x > 0;
console.log(fibonacci().take(10).some(isPositive)); // false
console.log(fibonacci().some(isNegative)); // Never completes
```

Ein Aufruf von `some()` schließt immer den zugrunde liegenden Iterator, auch wenn die Methode frühzeitig zurückkehrt. Der Iterator wird niemals in einem halbwegs Zustand belassen.

```js
const seq = fibonacci();
console.log(seq.some(isEven)); // true
console.log(seq.next()); // { value: undefined, done: true }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.some` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Array.prototype.some()")}}
