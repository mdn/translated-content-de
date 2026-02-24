---
title: Iterator.prototype.every()
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/every
l10n:
  sourceCommit: dd88a6eb2176fa31f5b744d8964efecf3f1f425b
---

Die **`every()`**-Methode von {{jsxref("Iterator")}}-Instanzen ist ähnlich wie {{jsxref("Array.prototype.every()")}}: Sie gibt `false` zurück, wenn sie ein Element findet, das die bereitgestellte Testfunktion nicht erfüllt. Andernfalls, wenn der Iterator erschöpft ist, ohne ein solches Element zu finden, gibt sie `true` zurück.

## Syntax

```js-nolint
every(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes Element ausgeführt wird, das vom Iterator erzeugt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, um anzuzeigen, dass das Element den Test besteht, und einen {{Glossary("Falsy", "falsy")}}-Wert andernfalls. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuelle Element, das verarbeitet wird.
    - `index`
      - : Der Index des aktuellen Elements, das verarbeitet wird.

### Rückgabewert

`true`, wenn `callbackFn` für jedes Element einen {{Glossary("truthy", "truthy")}}-Wert zurückgibt. Andernfalls `false`.

## Beschreibung

`every()` durchläuft den Iterator und ruft die `callbackFn`-Funktion einmal für jedes Element auf. Es wird sofort `false` zurückgegeben, wenn die Callback-Funktion einen falsy Wert zurückgibt. Andernfalls wird bis zum Ende des Iterators durchlaufen und `true` zurückgegeben. Wenn `every()` `false` zurückgibt, wird der zugrunde liegende Iterator durch Aufruf seiner `return()`-Methode geschlossen.

Der Hauptvorteil von Iterator-Hilfsfunktionen gegenüber Array-Methoden besteht darin, dass sie lazy sind, was bedeutet, dass sie nur den nächsten Wert produzieren, wenn er angefordert wird. Dies vermeidet unnötige Berechnungen und ermöglicht es ihnen auch, mit unendlichen Iteratoren verwendet zu werden. Bei unendlichen Iteratoren gibt `every()` `false` zurück, sobald der erste falsy Wert gefunden wird. Wenn die `callbackFn` immer einen truthy Wert zurückgibt, wird die Methode nie zurückkehren.

## Beispiele

### Verwendung von every()

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
console.log(fibonacci().every(isEven)); // false

const isPositive = (x) => x > 0;
console.log(fibonacci().take(10).every(isPositive)); // true
console.log(fibonacci().every(isPositive)); // Never completes
```

Der Aufruf von `every()` schließt immer den zugrunde liegenden Iterator, selbst wenn die Methode frühzeitig zurückkehrt. Der Iterator bleibt nie in einem Zwischenzustand.

```js
const seq = fibonacci();
console.log(seq.every(isEven)); // false
console.log(seq.next()); // { value: undefined, done: true }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Iterator.prototype.every` in `core-js`](https://github.com/zloirock/core-js#iterator-helpers)
- [es-shims Polyfill von `Iterator.prototype.every`](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.every()")}}
