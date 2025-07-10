---
title: AsyncIterator.prototype[Symbol.asyncIterator]()
short-title: "[Symbol.asyncIterator]()"
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`[Symbol.asyncIterator]()`**-Methode von {{jsxref("AsyncIterator")}}-Instanzen implementiert das [asynchrone Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) und ermöglicht es, dass eingebaute asynchrone Iteratoren von den meisten Syntaxen konsumiert werden können, die asynchrone Iterables erwarten, wie z.B. [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleifen. Sie gibt den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zurück, was das asynchrone Iterator-Objekt selbst ist.

## Syntax

```js-nolint
asyncIterator[Symbol.asyncIterator]()
```

### Parameter

Keine.

### Rückgabewert

Der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), was das asynchrone Iterator-Objekt selbst ist.

## Beispiele

### Iteration mit der for await...of-Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der `[Symbol.asyncIterator]()`-Methode macht alle eingebauten asynchronen Iteratoren [asynchron iterabel](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), und iterierende Syntaxen wie die `for await...of`-Schleife rufen diese Methode automatisch auf, um den asynchronen Iterator zu erhalten, über den iteriert wird.

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
