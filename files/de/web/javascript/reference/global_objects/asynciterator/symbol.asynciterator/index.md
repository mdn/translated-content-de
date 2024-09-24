---
title: AsyncIterator.prototype[Symbol.asyncIterator]()
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die Methode **`[Symbol.asyncIterator]()`** von {{jsxref("AsyncIterator")}}-Instanzen implementiert das [asynchrone iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) und ermöglicht es eingebauten asynchronen Iteratoren, von den meisten Syntaxen, die asynchrone Iterables erwarten, wie zum Beispiel [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleifen, konsumiert zu werden. Sie gibt den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zurück, welches das asynchrone Iteratorobjekt selbst ist.

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## Syntax

```js-nolint
asyncIterator[Symbol.asyncIterator]()
```

### Parameter

Keine.

### Rückgabewert

Der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), welches das asynchrone Iteratorobjekt selbst ist.

## Beispiele

### Iteration mit der for await...of Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Das Vorhandensein der Methode `[Symbol.asyncIterator]()` macht alle eingebauten asynchronen Iteratoren [asynchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), und iterierende Syntaxen wie die `for await...of`-Schleife rufen diese Methode automatisch auf, um den asynchronen Iterator zum Durchlaufen zu erhalten.

```js
const asyncIterator = (async function* () {
  yield 1;
  yield 2;
  yield 3;
})();
(async () => {
  for await (const value of asyncIterator) {
    console.log(value);
  }
})();
// Protokolliert: 1, 2, 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)
