---
title: Iterator.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/some
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`some()`**-Methode von {{jsxref("Iterator")}}-Instanzen ähnelt {{jsxref("Array.prototype.some()")}}: Sie testet, ob mindestens ein Element, das vom Iterator erzeugt wird, den Test besteht, der von der bereitgestellten Funktion implementiert wird. Sie gibt einen booleschen Wert zurück.

## Syntax

```js-nolint
some(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen [falsy](/de/docs/Glossary/Falsy) Wert, falls nicht. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

`true`, wenn die Callback-Funktion für mindestens ein Element einen [truthy](/de/docs/Glossary/truthy) Wert zurückgibt. Andernfalls `false`.

## Beschreibung

`some()` durchläuft den Iterator und ruft die `callbackFn`-Funktion einmal für jedes Element auf. Sie gibt `true` sofort zurück, wenn die Callback-Funktion einen truthy Wert zurückgibt. Andernfalls wird bis zum Ende des Iterators iteriert und `false` zurückgegeben. Wenn `some()` `true` zurückgibt, wird der zugrundeliegende Iterator durch Aufruf seiner `return()`-Methode geschlossen.

Der Hauptvorteil von Iterator-Hilfsfunktionen gegenüber Array-Methoden ist ihre Fähigkeit, mit unendlichen Iteratoren zu arbeiten. Bei unendlichen Iteratoren gibt `some()` `true` zurück, sobald der erste truthy Wert gefunden wird. Wenn die `callbackFn` immer einen falsy Wert zurückgibt, gibt die Methode nie etwas zurück.

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

Der Aufruf von `some()` schließt immer den zugrundeliegenden Iterator, auch wenn die Methode frühzeitig zurückkehrt. Der Iterator wird niemals in einem unvollständigen Zustand belassen.

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
