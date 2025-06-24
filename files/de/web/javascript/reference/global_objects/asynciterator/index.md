---
title: AsyncIterator
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

Ein **`AsyncIterator`**-Objekt ist ein Objekt, das dem [Async-Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Versprechen zurückgibt, das zu einem Iterationsergebnisobjekt führt. Das `AsyncIterator.prototype`-Objekt ist ein verborgenes globales Objekt, von dem alle eingebauten asynchronen Iteratoren erben. Es bietet eine [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator)-Methode, die das asynchrone Iterator-Objekt selbst zurückgibt, was den asynchronen Iterator auch [asynchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) macht.

Beachten Sie, dass `AsyncIterator` _kein_ globales Objekt ist, obwohl es dies in Zukunft mit dem [Async-Iterator-Helfer-Vorschlag](https://github.com/tc39/proposal-async-iterator-helpers) sein wird. Das `AsyncIterator.prototype`-Objekt, das von allen eingebauten asynchronen Iteratoren geteilt wird, kann mit folgendem Code abgerufen werden:

```js
const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(Object.getPrototypeOf((async function* () {})())),
);
```

## Beschreibung

Derzeit ist der einzige eingebaute JavaScript-Async-Iterator das {{jsxref("AsyncGenerator")}}-Objekt, das von [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zurückgegeben wird. Es gibt einige andere eingebaute asynchrone Iteratoren in Web-APIs, wie den eines [`ReadableStream`](/de/docs/Web/API/ReadableStream).

Jeder dieser asynchronen Iteratoren hat ein eigenes Prototyp-Objekt, das die `next()`-Methode definiert, die von dem jeweiligen asynchronen Iterator verwendet wird. Alle diese Prototyp-Objekte erben von `AsyncIterator.prototype`, das eine [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)-Methode bereitstellt, die das asynchrone Iterator-Objekt selbst zurückgibt, was den asynchronen Iterator auch [asynchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) macht.

> [!NOTE] > `AsyncIterator.prototype` implementiert nicht [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator), daher sind asynchrone Iteratoren standardmäßig nicht [synchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

## Instanzmethoden

- [`AsyncIterator.prototype[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator)
  - : Gibt das asynchrone Iterator-Objekt selbst zurück. Dies ermöglicht asynchronen Iterator-Objekten auch asynchron iterierbar zu sein.

## Beispiele

### Verwendung eines asynchronen Iterators als asynchron iterierbar

Alle eingebauten asynchronen Iteratoren sind auch asynchron iterierbar, sodass Sie sie in einer `for await...of`-Schleife verwenden können:

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

- {{jsxref("Statements/async_function*", "async function*")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
