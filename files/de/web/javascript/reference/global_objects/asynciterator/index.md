---
title: AsyncIterator
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Ein **`AsyncIterator`** Objekt ist ein Objekt, das dem [asynchronen Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) entspricht, indem es eine `next()` Methode bereitstellt, die ein Versprechen zurückgibt, das ein Iterator-Ergebnisobjekt erfüllt. Das `AsyncIterator.prototype` Objekt ist ein verborgenes globales Objekt, von dem alle eingebauten asynchronen Iteratoren erben. Es stellt eine [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator) Methode bereit, die das asynchrone Iterator-Objekt selbst zurückgibt, wodurch der asynchrone Iterator auch [asynchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) wird.

Beachten Sie, dass `AsyncIterator` _kein_ globales Objekt ist, obwohl es in Zukunft mit dem [Vorschlag für asynchrone Iterator-Helfer](https://github.com/tc39/proposal-async-iterator-helpers) sein wird. Das `AsyncIterator.prototype` Objekt, das von allen eingebauten asynchronen Iteratoren geteilt wird, kann mit dem folgenden Code erhalten werden:

```js
const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(Object.getPrototypeOf((async function* () {})())),
);
```

## Beschreibung

Derzeit ist der einzige eingebaute JavaScript-Async-Iterator das {{jsxref("AsyncGenerator")}} Objekt, das von [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zurückgegeben wird. Es gibt einige andere eingebaute asynchrone Iteratoren in Web-APIs, wie den eines {{domxref("ReadableStream")}}.

Jeder dieser asynchronen Iteratoren hat ein eigenes Prototypobjekt, das die `next()` Methode definiert, die von dem jeweiligen asynchronen Iterator verwendet wird. Alle diese Prototypobjekte erben von `AsyncIterator.prototype`, das eine [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) Methode bereitstellt, die das asynchrone Iterator-Objekt selbst zurückgibt, wodurch der asynchrone Iterator auch [asynchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) wird.

> [!NOTE]
> `AsyncIterator.prototype` implementiert nicht [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator), daher sind asynchrone Iteratoren nicht standardmäßig [synchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

## Instanzmethoden

- [`AsyncIterator.prototype[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator)
  - : Gibt das asynchrone Iterator-Objekt selbst zurück. Dies ermöglicht es asynchronen Iterator-Objekten, auch asynchron iterierbar zu sein.

## Beispiele

### Verwenden eines asynchronen Iterators als asynchron iterierbar

Alle eingebauten asynchronen Iteratoren sind auch asynchron iterierbar, sodass Sie sie in einer `for await...of` Schleife verwenden können:

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

- {{jsxref("Statements/async_function*", "async function*")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
