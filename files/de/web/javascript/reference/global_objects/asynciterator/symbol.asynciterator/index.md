---
title: AsyncIterator.prototype[Symbol.asyncIterator]()
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.asyncIterator]()`** Methode von {{jsxref("AsyncIterator")}} Instanzen implementiert das [asynchrone Iterationsprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) und ermöglicht integrierten asynchronen Iteratoren, von den meisten Syntaxen konsumiert zu werden, die asynchrone Iterables erwarten, wie etwa [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleifen. Sie gibt den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zurück, was das asynchrone Iterator-Objekt selbst ist.

{{EmbedInteractiveExample("pages/js/map-prototype-@@iterator.html")}}

## Syntax

```js-nolint
asyncIterator[Symbol.asyncIterator]()
```

### Parameter

Keine.

### Rückgabewert

Der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), welcher das asynchrone Iterator-Objekt selbst ist.

## Beispiele

### Iteration mit der for await...of Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der `[Symbol.asyncIterator]()` Methode macht alle eingebauten asynchronen Iteratoren [asynchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), und Iterations-Syntaxen wie die `for await...of` Schleife rufen diese Methode automatisch auf, um den asynchronen Iterator zum Durchlaufen zu erhalten.

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
