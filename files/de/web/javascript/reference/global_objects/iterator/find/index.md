---
title: Iterator.prototype.find()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/find
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{JSRef}}

Die **`find()`**-Methode von {{jsxref("Iterator")}} Instanzen ähnelt {{jsxref("Array.prototype.find()")}}: Sie gibt das erste Element, das vom Iterator erzeugt wird und die bereitgestellte Testfunktion erfüllt, zurück. Wenn keine Werte die Testfunktion erfüllen, wird {{jsxref("undefined")}} zurückgegeben.

## Syntax

```js-nolint
find(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen [truthy](/de/docs/Glossary/Truthy) Wert zurückgeben, um anzuzeigen, dass ein passendes Element gefunden wurde, andernfalls einen [falsy](/de/docs/Glossary/Falsy) Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

Das erste Element, das vom Iterator erzeugt wird und die bereitgestellte Testfunktion erfüllt. Andernfalls wird {{jsxref("undefined")}} zurückgegeben.

## Beschreibung

`find()` durchläuft den Iterator und ruft die Funktion `callbackFn` einmal für jedes Element auf. Es gibt das Element sofort zurück, wenn die Callback-Funktion einen truthy Wert zurückgibt. Andernfalls wird bis zum Ende des Iterators durchlaufen und es wird `undefined` zurückgegeben. Wenn `find()` ein Element zurückgibt, wird der zugrundeliegende Iterator durch Aufruf seiner `return()`-Methode geschlossen.

Der Hauptvorteil von Iterator-Helfern gegenüber Array-Methoden ist ihre Fähigkeit, mit unendlichen Iteratoren zu arbeiten. Mit unendlichen Iteratoren gibt `find()` das erste erfüllende Element zurück, sobald es gefunden wird. Wenn `callbackFn` immer einen falsy Wert zurückgibt, gibt die Methode niemals zurück.

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

Der Aufruf von `find()` schließt immer den zugrundeliegenden Iterator, auch wenn die Methode frühzeitig zurückkehrt. Der Iterator verbleibt niemals in einem Zwischenzustand.

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
