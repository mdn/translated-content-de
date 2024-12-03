---
title: AsyncIterator.prototype[Symbol.asyncIterator]()
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator
l10n:
  sourceCommit: d4890424295cbb42058e53b09e67b8fd0aa222b0
---

{{JSRef}}

Die **`[Symbol.asyncIterator]()`** Methode von {{jsxref("AsyncIterator")}} Instanzen implementiert das [asynchrone Iterationsprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) und ermöglicht es, eingebaute asynchrone Iteratoren mit den meisten Syntaxen zu konsumieren, die asynchrone Iterable erwarten, wie zum Beispiel [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of) Schleifen. Sie gibt den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zurück, was das asynchrone Iteratorobjekt selbst ist.

## Syntax

```js-nolint
asyncIterator[Symbol.asyncIterator]()
```

### Parameter

Keine.

### Rückgabewert

Der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), welches das asynchrone Iteratorobjekt selbst ist.

## Beispiele

### Iteration mittels for await...of Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der Methode `[Symbol.asyncIterator]()` macht alle eingebauten asynchronen Iteratoren [asynchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols), und Iterations-Syntaxen wie die `for await...of` Schleife rufen diese Methode automatisch auf, um den asynchronen Iterator zu erhalten, über den iteriert wird.

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
