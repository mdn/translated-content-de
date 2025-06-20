---
title: AsyncIterator.prototype[Symbol.asyncIterator]()
short-title: "[Symbol.asyncIterator]()"
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`[Symbol.asyncIterator]()`** von {{jsxref("AsyncIterator")}}-Instanzen implementiert das [asynchrone Iterierprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) und ermöglicht es, eingebaute asynchrone Iteratoren mit den meisten auf asynchrone Iterierbare ausgelegten Syntaxen zu verwenden, wie zum Beispiel [`for await...of`](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)-Schleifen. Sie gibt den Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this) zurück, welcher das asynchrone Iterator-Objekt selbst ist.

## Syntax

```js-nolint
asyncIterator[Symbol.asyncIterator]()
```

### Parameter

Keine.

### Rückgabewert

Der Wert von [`this`](/de/docs/Web/JavaScript/Reference/Operators/this), welches das asynchrone Iterator-Objekt selbst ist.

## Beispiele

### Iteration mit der for await...of-Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der `[Symbol.asyncIterator]()`-Methode ermöglicht es, dass alle eingebauten asynchronen Iteratoren [asynchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) sind, und Iterations-Syntaxen wie die `for await...of`-Schleife rufen automatisch diese Methode auf, um den asynchronen Iterator zu erhalten, über den iteriert werden soll.

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
