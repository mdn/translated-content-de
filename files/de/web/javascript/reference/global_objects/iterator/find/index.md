---
title: Iterator.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/find
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`find()`** Methode von {{jsxref("Iterator")}} Instanzen ähnelt {{jsxref("Array.prototype.find()")}}: Sie gibt das erste Element zurück, das von dem Iterator produziert wird und die bereitgestellte Testfunktion erfüllt. Wenn kein Element die Testfunktion erfüllt, wird {{jsxref("undefined")}} zurückgegeben.

## Syntax

```js-nolint
find(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes von dem Iterator produzierte Element ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, und einen [falsy](/de/docs/Glossary/Falsy) Wert ansonsten. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

Das erste Element, das von dem Iterator produziert wird und die bereitgestellte Testfunktion erfüllt. Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

`find()` durchläuft den Iterator und ruft die `callbackFn`-Funktion einmal für jedes Element auf. Es gibt das Element sofort zurück, wenn die Rückruffunktion einen truthy Wert zurückgibt. Andernfalls iteriert es bis zum Ende des Iterators und gibt `undefined` zurück. Wenn `find()` ein Element zurückgibt, wird der zugrunde liegende Iterator geschlossen, indem seine `return()`-Methode aufgerufen wird.

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden ist ihre Fähigkeit, mit unendlichen Iteratoren zu arbeiten. Bei unendlichen Iteratoren gibt `find()` das erste passende Element sofort zurück, wenn es gefunden wird. Wenn die `callbackFn` immer einen falsy Wert zurückgibt, gibt die Methode niemals zurück.

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

Der Aufruf von `find()` schließt immer den zugrunde liegenden Iterator, selbst wenn die Methode vorzeitig zurückkehrt. Der Iterator bleibt niemals in einem halbwegs abgeschlossenen Zustand.

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
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.find()")}}
