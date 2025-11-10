---
title: Iterator.prototype.find()
short-title: find()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/find
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`find()`**-Methode von {{jsxref("Iterator")}}-Instanzen ähnelt {{jsxref("Array.prototype.find()")}}: Sie gibt das erste vom Iterator erzeugte Element zurück, das die bereitgestellte Testfunktion erfüllt. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.

## Syntax

```js-nolint
find(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}} Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, und einen {{Glossary("Falsy", "falsy")}} Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Das erste vom Iterator erzeugte Element, das die angegebene Testfunktion erfüllt. Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

`find()` iteriert über den Iterator und ruft die `callbackFn`-Funktion einmal für jedes Element auf. Es gibt das Element sofort zurück, wenn die Callback-Funktion einen truthy Wert liefert. Andernfalls iteriert es bis zum Ende des Iterators und gibt `undefined` zurück. Wenn `find()` ein Element zurückgibt, wird der zugrunde liegende Iterator durch Aufrufen seiner `return()`-Methode geschlossen.

Der Hauptvorteil von Iterator-Hilfsfunktionen gegenüber Array-Methoden besteht darin, dass sie lazy sind, was bedeutet, dass sie nur dann den nächsten Wert erzeugen, wenn er angefordert wird. Dies vermeidet unnötige Berechnungen und ermöglicht auch deren Verwendung mit unendlichen Iteratoren. Bei unendlichen Iteratoren gibt `find()` das erste passende Element zurück, sobald es gefunden wird. Wenn die `callbackFn` immer einen falsy Wert zurückgibt, gibt die Methode nie etwas zurück.

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

Der Aufruf von `find()` schließt immer den zugrunde liegenden Iterator, auch wenn die Methode frühzeitig zurückkehrt. Der Iterator wird nie in einem halbfertigen Zustand belassen.

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
