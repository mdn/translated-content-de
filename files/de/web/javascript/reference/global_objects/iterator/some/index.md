---
title: Iterator.prototype.some()
short-title: some()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/some
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`some()`** von {{jsxref("Iterator")}}-Instanzen ähnelt {{jsxref("Array.prototype.some()")}}: Sie gibt `true` zurück, wenn sie ein Element findet, das die angegebene Prüffunktion erfüllt. Wird der Iterator vollständig durchlaufen, ohne ein solches Element zu finden, gibt sie `false` zurück.

## Syntax

```js-nolint
some(callbackFn)
```

### Parameter

- `callbackFn`
  - : Eine Funktion, die für jedes vom Iterator erzeugte Element ausgeführt wird. Sie sollte einen {{Glossary("Truthy", "Truthy-Wert")}} zurückgeben, wenn das Element die Prüfung besteht, andernfalls einen {{Glossary("Falsy", "Falsy-Wert")}}. Die Funktion wird mit den folgenden Argumenten aufgerufen:
    - `element`
      - : Das aktuell verarbeitete Element.
    - `index`
      - : Der Index des aktuell verarbeiteten Elements.

### Rückgabewert

`true`, wenn die Callback-Funktion für mindestens ein Element einen {{Glossary("truthy", "Truthy-Wert")}} zurückgibt. Andernfalls `false`.

## Beschreibung

`some()` durchläuft den Iterator und ruft `callbackFn` einmal für jedes Element auf. Wenn die Callback-Funktion einen Truthy-Wert zurückgibt, gibt `some()` sofort `true` zurück. Andernfalls durchläuft die Methode den Iterator bis zum Ende und gibt `false` zurück. Wenn `some()` `true` zurückgibt, wird der zugrunde liegende Iterator durch Aufruf seiner Methode `return()` geschlossen.

Der wichtigste Vorteil von Iterator-Hilfsmethoden gegenüber Array-Methoden ist ihre verzögerte Auswertung: Sie erzeugen den nächsten Wert erst, wenn er angefordert wird. Das vermeidet unnötige Berechnungen und ermöglicht auch die Verwendung mit unendlichen Iteratoren. Bei unendlichen Iteratoren gibt `some()` `true` zurück, sobald das erste Element gefunden wird, für das `callbackFn` einen Truthy-Wert zurückgibt. Wenn `callbackFn` immer einen Falsy-Wert zurückgibt, kehrt die Methode nie zurück.

Ein Aufruf von `some()` schließt den zugrunde liegenden Iterator immer, auch wenn die Methode vorzeitig zurückkehrt. Der Iterator verbleibt nie in einem teilweise durchlaufenen Zustand.

## Beispiele

### some() verwenden

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

Die Methode schließt den Iterator, nachdem sie zurückgekehrt ist.

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

- [Polyfill für `Iterator.prototype.some` in `core-js`](https://core-js.io/docs/features/ecmascript/iterator)
- [Polyfill für `Iterator.prototype.some` von es-shims](https://www.npmjs.com/package/es-iterator-helpers)
- {{jsxref("Iterator")}}
- {{jsxref("Iterator.prototype.every()")}}
- {{jsxref("Iterator.prototype.find()")}}
- {{jsxref("Array.prototype.some()")}}
