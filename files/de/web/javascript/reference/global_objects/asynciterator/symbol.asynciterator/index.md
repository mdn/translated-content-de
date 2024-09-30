---
title: AsyncIterator.prototype[Symbol.asyncIterator]()
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die Methode **`[Symbol.asyncIterator]()`** von {{jsxref("AsyncIterator")}}-Instanzen implementiert das [Asynchrones Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) und ermöglicht es, eingebaute asynchrone Iteratoren mit den meisten Syntaxen zu verwenden, die asynchrone Iterables erwarten, wie beispielsweise Schleifen vom Typ [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of). Sie gibt den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zurück, welches das asynchrone Iterator-Objekt selbst ist.

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## Syntax

```js-nolint
asyncIterator[Symbol.asyncIterator]()
```

### Parameter

Keine.

### Rückgabewert

Der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), welches das asynchrone Iterator-Objekt selbst ist.

## Beispiele

### Iteration mit einer for await...of-Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der Methode `[Symbol.asyncIterator]()` macht alle eingebauten asynchronen Iteratoren zu [asynchronen Iterables](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), und Syntaxen zur Iteration wie die `for await...of`-Schleife rufen diese Methode automatisch auf, um den asynchronen Iterator zum Durchlaufen zu erhalten.

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
// Logs: 1, 2, 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)
