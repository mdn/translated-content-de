---
title: Iterator.prototype.every()
short-title: every()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/every
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`every()`** von {{jsxref("Iterator")}}-Instanzen ähnelt {{jsxref("Array.prototype.every()")}}: Sie gibt `false` zurück, wenn sie ein Element findet, das die angegebene Prüffunktion nicht erfüllt. Andernfalls gibt sie `true` zurück, wenn der Iterator erschöpft ist, ohne dass ein solches Element gefunden wurde.

## Syntax

```js-nolint
every(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "truthy")}}-Wert zurückgeben, wenn das Element die Prüfung besteht, andernfalls einen {{Glossary("Falsy", "falsy")}}-Wert. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

`true`, wenn `callbackFn` für jedes Element einen {{Glossary("truthy", "truthy")}}-Wert zurückgibt. Andernfalls `false`.

## Beschreibung

`every()` durchläuft den Iterator und ruft die Funktion `callbackFn` einmal für jedes Element auf. Die Methode gibt sofort `false` zurück, wenn die Callback-Funktion einen falsy-Wert zurückgibt. Andernfalls durchläuft sie den Iterator bis zum Ende und gibt `true` zurück. Wenn `every()` `false` zurückgibt, wird der zugrunde liegende Iterator durch Aufrufen seiner Methode `return()` geschlossen.

Der Hauptvorteil von Iterator-Hilfsmethoden gegenüber Array-Methoden besteht darin, dass sie Werte erst bei Bedarf erzeugen. Dadurch werden unnötige Berechnungen vermieden, und sie können auch mit unendlichen Iteratoren verwendet werden. Bei unendlichen Iteratoren gibt `every()` `false` zurück, sobald der erste falsy-Wert gefunden wird. Wenn `callbackFn` immer einen truthy-Wert zurückgibt, kehrt die Methode nie zurück.

Ein Aufruf von `every()` schließt den zugrunde liegenden Iterator immer, auch wenn die Methode vorzeitig zurückkehrt. Der Iterator bleibt nie in einem Zwischenzustand.

## Beispiele

### every() verwenden

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

Die Methode schließt den Iterator, nachdem sie einen Wert zurückgegeben hat.

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

- [Polyfill für `Iterator.prototype.every` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.every` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Iterator.prototype.some()")}}
- {{jsxref("Array.prototype.every()")}}
