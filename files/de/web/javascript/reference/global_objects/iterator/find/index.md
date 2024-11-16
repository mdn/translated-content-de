---
title: Iterator.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/find
l10n:
  sourceCommit: a71768c124d1bb2dceef873c0bda266e9f714e4c
---

{{JSRef}}

Die **`find()`** Methode von {{jsxref("Iterator")}} Instanzen ähnelt {{jsxref("Array.prototype.find()")}}: Sie gibt das erste Element zurück, das vom Iterator erzeugt wird und die bereitgestellte Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.

## Syntax

```js-nolint
find(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}} Wert, wenn nicht. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Das erste Element, das vom Iterator erzeugt wird und die bereitgestellte Testfunktion erfüllt. Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

`find()` iteriert den Iterator und ruft die `callbackFn` Funktion einmal für jedes Element auf. Es gibt das Element sofort zurück, wenn die Callback-Funktion einen truthy Wert zurückgibt. Andernfalls wird bis zum Ende des Iterators iteriert und `undefined` zurückgegeben. Wenn `find()` ein Element zurückgibt, wird der zugrunde liegende Iterator durch Aufrufen seiner `return()` Methode geschlossen.

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden ist, dass sie lazy sind, was bedeutet, dass sie den nächsten Wert nur auf Anfrage erzeugen. Dies vermeidet unnötige Berechnungen und ermöglicht es ihnen auch, mit unendlichen Iteratoren verwendet zu werden. Bei unendlichen Iteratoren gibt `find()` das erste passende Element sofort zurück, sobald es gefunden wird. Wenn die `callbackFn` immer einen falsy Wert zurückgibt, wird die Methode nie zurückgegeben.

## Beispiele

### Verwendung von find()

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
console.log(fibonacci().find(isEven)); // 2

const isNegative = (x) => x < 0;
console.log(fibonacci().take(10).find(isNegative)); // undefined
console.log(fibonacci().find(isNegative)); // Never completes
```

Ein Aufruf von `find()` schließt immer den zugrunde liegenden Iterator, selbst wenn die Methode frühzeitig zurückkehrt. Der Iterator bleibt nie in einem halbwegs Zustand.

```js
const seq = fibonacci();
console.log(seq.find(isEven)); // 2
console.log(seq.next()); // { value: undefined, done: true }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Iterator.prototype.find` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
