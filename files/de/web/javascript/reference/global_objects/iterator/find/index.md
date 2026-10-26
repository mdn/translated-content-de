---
title: Iterator.prototype.find()
short-title: find()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/find
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`find()`** von {{jsxref("Iterator")}}-Instanzen ähnelt {{jsxref("Array.prototype.find()")}}: Sie gibt das erste vom Iterator erzeugte Element zurück, das die angegebene Prüffunktion erfüllt. Wenn kein Wert die Prüffunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben.

## Syntax

```js-nolint
find(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, wenn ein passendes Element gefunden wurde, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Das erste vom Iterator erzeugte Element, das die angegebene Prüffunktion erfüllt. Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

`find()` durchläuft den Iterator und ruft die Funktion `callbackFn` einmal für jedes Element auf. Wenn die Callback-Funktion einen truthy-Wert zurückgibt, gibt `find()` das Element sofort zurück. Andernfalls durchläuft die Methode den Iterator bis zum Ende und gibt `undefined` zurück. Wenn `find()` ein Element zurückgibt, wird der zugrunde liegende Iterator durch Aufruf seiner Methode `return()` geschlossen.

Der Hauptvorteil von Iterator-Hilfsmethoden gegenüber Array-Methoden besteht darin, dass sie Werte erst bei Bedarf erzeugen: Der nächste Wert wird nur erzeugt, wenn er angefordert wird. Das vermeidet unnötige Berechnungen und ermöglicht ihre Verwendung mit unendlichen Iteratoren. Bei unendlichen Iteratoren gibt `find()` das erste passende Element zurück, sobald es gefunden wird. Wenn `callbackFn` immer einen falsy-Wert zurückgibt, kehrt die Methode nie zurück.

Ein Aufruf von `find()` schließt den zugrunde liegenden Iterator immer, auch wenn die Methode vorzeitig zurückkehrt. Der Iterator verbleibt nie in einem teilweise durchlaufenen Zustand.

## Beispiele

### find() verwenden

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

Die Methode schließt den Iterator, nachdem sie einen Wert zurückgegeben hat.

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

- [Polyfill für `Iterator.prototype.find` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.find` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
