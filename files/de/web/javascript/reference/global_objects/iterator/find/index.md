---
title: Iterator.prototype.find()
short-title: find()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/find
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`find()`** Methode von {{jsxref("Iterator")}} Instanzen ist ähnlich wie {{jsxref("Array.prototype.find()")}}: Sie gibt das erste Element zurück, das vom Iterator erzeugt wird und die übergebene Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.

## Syntax

```js-nolint
find(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "wahrheitsgemäßen")}} Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsity")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Das erste Element, das vom Iterator produziert wird und die angegebene Testfunktion erfüllt. Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

`find()` iteriert über den Iterator und ruft die `callbackFn` Funktion einmal für jedes Element auf. Es gibt das Element sofort zurück, wenn die Callback-Funktion einen wahrheitsgemäßen Wert liefert. Andernfalls iteriert es bis zum Ende des Iterators und gibt `undefined` zurück. Wenn `find()` ein Element zurückgibt, wird der zugrundeliegende Iterator durch den Aufruf seiner `return()`-Methode geschlossen.

Der Hauptvorteil von Iterator-Hilfsfunktionen gegenüber Array-Methoden besteht darin, dass sie faul sind, was bedeutet, dass sie nur den nächsten Wert produzieren, wenn er angefordert wird. Dies vermeidet unnötige Berechnungen und ermöglicht auch die Verwendung mit unendlichen Iteratoren. Bei unendlichen Iteratoren gibt `find()` das erste befriedigende Element sofort zurück, sobald es gefunden wurde. Wenn die `callbackFn` immer einen falsity Wert zurückgibt, liefert die Methode nie ein Ergebnis.

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

Das Aufrufen von `find()` schließt immer den zugrundeliegenden Iterator, selbst wenn die Methode frühzeitig zurückkehrt. Der Iterator wird nie in einem Zwischenzustand belassen.

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

- [Polyfill von `Iterator.prototype.find` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [es-shims Polyfill von `Iterator.prototype.find`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
