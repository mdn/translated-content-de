---
title: Iterator.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/some
l10n:
  sourceCommit: 75c5e27d00ae191a3f549820c61d5bfff31428f8
---

{{JSRef}}

Die **`some()`** Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich zu {{jsxref("Array.prototype.some()")}}: Sie prüft, ob mindestens ein Element, das vom Iterator erzeugt wird, den Test besteht, der von der bereitgestellten Funktion implementiert wird. Sie gibt einen booleschen Wert zurück.

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

`some()` iteriert durch den Iterator und ruft die `callbackFn`-Funktion einmal für jedes Element auf. Es gibt `true` sofort zurück, wenn die Callback-Funktion einen truthy Wert zurückgibt. Andernfalls wird bis zum Ende des Iterators iteriert und `false` zurückgegeben. Wenn `some()` `true` zurückgibt, wird der zugrunde liegende Iterator durch Aufrufen seiner `return()`-Methode geschlossen.

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden ist, dass sie faul sind, was bedeutet, dass sie den nächsten Wert nur bei Bedarf erzeugen. Dies vermeidet unnötige Berechnungen und ermöglicht es ihnen auch, mit unendlichen Iteratoren verwendet zu werden. Bei unendlichen Iteratoren gibt `some()` `true` zurück, sobald der erste truthy Wert gefunden wird. Wenn die `callbackFn` immer einen falsy Wert zurückgibt, kehrt die Methode nie zurück.

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
console.log(fibonacci().take(10).some(isNegative)); // false
console.log(fibonacci().some(isNegative)); // Never completes
```

Der Aufruf von `some()` schließt immer den zugrunde liegenden Iterator, auch wenn die Methode frühzeitig zurückkehrt. Der Iterator bleibt nie in einem halbfertigen Zustand.

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
