---
title: AsyncIterator
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Ein **`AsyncIterator`**-Objekt ist ein Objekt, das dem [async iterator protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Promise zurückgibt, das ein Iterator-Resultat-Objekt erfüllt. Das `AsyncIterator.prototype`-Objekt ist ein verstecktes globales Objekt, von dem alle eingebauten async Iteratoren erben. Es bietet eine [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator)-Methode, die das async Iterator-Objekt selbst zurückgibt und den async Iterator somit auch [async iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) macht.

Beachten Sie, dass `AsyncIterator` _kein_ globales Objekt ist, obwohl es dies in Zukunft mit dem [async iterator helpers proposal](https://github.com/tc39/proposal-async-iterator-helpers) sein wird. Das `AsyncIterator.prototype`-Objekt, das von allen eingebauten async Iteratoren geteilt wird, kann mit dem folgenden Code erhalten werden:

```js
const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(Object.getPrototypeOf((async function* () {})())),
);
```

## Beschreibung

Derzeit ist der einzige eingebaute JavaScript async Iterator das {{jsxref("AsyncGenerator")}}-Objekt, das von [async generator functions](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zurückgegeben wird. Es gibt einige andere eingebaute async Iteratoren in Web-APIs, wie z.B. einen [`ReadableStream`](/de/docs/Web/API/ReadableStream).

Jeder dieser async Iteratoren hat ein eigenes Prototyp-Objekt, das die `next()`-Methode definiert, die vom jeweiligen async Iterator verwendet wird. Alle diese Prototyp-Objekte erben von `AsyncIterator.prototype`, das eine [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)-Methode bietet, die das async Iterator-Objekt selbst zurückgibt und den async Iterator somit auch [async iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) macht.

> [!NOTE]
> `AsyncIterator.prototype` implementiert nicht [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator), sodass async Iteratoren standardmäßig nicht [sync iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol) sind.

## Instanzmethoden

- [`AsyncIterator.prototype[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose)
  - : Ruft die `return()`-Methode von `this` auf und wartet auf sie, falls sie existiert. Dies implementiert das _async disposable protocol_ und ermöglicht es, entsorgt zu werden, wenn es mit {{jsxref("Statements/await_using", "await using")}} verwendet wird.
- [`AsyncIterator.prototype[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator)
  - : Gibt das async Iterator-Objekt selbst zurück. Dadurch können async Iterator-Objekte auch async iterable sein.

## Beispiele

### Verwendung eines async Iterators als async iterable

Alle eingebauten async Iteratoren sind auch async iterable, sodass Sie sie in einer `for await...of`-Schleife verwenden können:

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
- [Iteration protocols](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
