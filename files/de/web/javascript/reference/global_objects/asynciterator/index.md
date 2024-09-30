---
title: AsyncIterator
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Ein **`AsyncIterator`**-Objekt ist ein Objekt, das dem [async Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Promise zurückgibt, das ein Iterator-Ergebnisobjekt erfüllt. Das `AsyncIterator.prototype`-Objekt ist ein verstecktes globales Objekt, von dem alle eingebauten async Iteratoren erben. Es stellt eine [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator)-Methode bereit, die das async Iterator-Objekt selbst zurückgibt, wodurch der async Iterator auch [async iterabel](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) wird.

Beachten Sie, dass `AsyncIterator` _kein_ globales Objekt ist, obwohl es dies in Zukunft mit dem [Async Iterator Helpers-Vorschlag](https://github.com/tc39/proposal-async-iterator-helpers) sein wird. Das `AsyncIterator.prototype`-Objekt, das von allen eingebauten async Iteratoren gemeinsam genutzt wird, kann mit dem folgenden Code erhalten werden:

```js
const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(Object.getPrototypeOf((async function* () {})())),
);
```

## Beschreibung

Derzeit ist der einzige eingebaute async Iterator in JavaScript das {{jsxref("AsyncGenerator")}}-Objekt, das von [async Generator-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zurückgegeben wird. Es gibt einige andere eingebaute async Iteratoren in Web-APIs, wie zum Beispiel einen [`ReadableStream`](/de/docs/Web/API/ReadableStream).

Jeder dieser async Iteratoren hat ein eigenes Prototyp-Objekt, das die `next()`-Methode definiert, die vom jeweiligen async Iterator verwendet wird. Alle diese Prototyp-Objekte erben von `AsyncIterator.prototype`, das eine [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)-Methode bereitstellt, die das async Iterator-Objekt selbst zurückgibt, wodurch der async Iterator auch [async iterabel](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) wird.

> **Note:** `AsyncIterator.prototype` implementiert nicht [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator), sodass async Iteratoren nicht standardmäßig [synchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) sind.

## Instanzmethoden

- [`AsyncIterator.prototype[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator)
  - : Gibt das async Iterator-Objekt selbst zurück. Dadurch können async Iterator-Objekte auch async iterabel sein.

## Beispiele

### Verwenden eines async Iterators als async iterabel

Alle eingebauten async Iteratoren sind auch async iterabel, sodass Sie sie in einer `for await...of`-Schleife verwenden können:

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
