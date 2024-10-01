---
title: Iterator.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/some
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`some()`** Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich wie {{jsxref("Array.prototype.some()")}}: Sie überprüft, ob mindestens ein Element, das vom Iterator erzeugt wird, den Test der bereitgestellten Funktion besteht. Sie gibt einen booleschen Wert zurück.

## Syntax

```js-nolint
some(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

`true`, wenn die Callback-Funktion für mindestens ein Element einen {{Glossary("truthy", "truthy")}} Wert zurückgibt. Andernfalls `false`.

## Beschreibung

`some()` iteriert den Iterator und ruft die Funktion `callbackFn` einmal für jedes Element auf. Es gibt sofort `true` zurück, wenn die Callback-Funktion einen truthy Wert zurückgibt. Andernfalls iteriert es bis zum Ende des Iterators und gibt `false` zurück. Wenn `some()` `true` zurückgibt, wird der zugrundeliegende Iterator durch Aufruf seiner `return()` Methode geschlossen.

Der Hauptvorteil von Iterator-Hilfsfunktionen gegenüber Array-Methoden ist ihre Fähigkeit, mit unendlichen Iteratoren zu arbeiten. Bei unendlichen Iteratoren gibt `some()` `true` zurück, sobald der erste truthy Wert gefunden wird. Wenn die `callbackFn` stets einen falsy Wert zurückgibt, gibt die Methode niemals zurück.

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

Der Aufruf von `some()` schließt immer den zugrundeliegenden Iterator, auch wenn die Methode früh zurückkehrt. Der Iterator wird niemals in einem halben Zustand belassen.

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
