---
title: AsyncIterator
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Ein **`AsyncIterator`**-Objekt ist ein Objekt, das dem [asynchronen Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) durch Bereitstellung einer `next()`-Methode entspricht, die ein Promise zurückgibt, das zu einem Iterationsergebnis-Objekt erfüllt wird. Das Objekt `AsyncIterator.prototype` ist ein verstecktes globales Objekt, von dem alle eingebauten asynchronen Iteratoren erben. Es bietet eine Methode [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator), die das asynchrone Iteratorobjekt selbst zurückgibt, wodurch der asynchrone Iterator auch [asynchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) wird.

Beachten Sie, dass `AsyncIterator` _kein_ globales Objekt ist, obwohl es in Zukunft mit dem [Vorschlag für asynchrone Iterator-Helfer](https://github.com/tc39/proposal-async-iterator-helpers) eines sein wird. Das von allen eingebauten asynchronen Iteratoren geteilte `AsyncIterator.prototype`-Objekt kann mit folgendem Code erhalten werden:

```js
const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(Object.getPrototypeOf((async function* () {})())),
);
```

## Beschreibung

Derzeit ist der einzige eingebaute JavaScript asynchrone Iterator das {{jsxref("AsyncGenerator")}}-Objekt, das von [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zurückgegeben wird. Es gibt einige andere eingebaute asynchrone Iteratoren in Web-APIs, wie zum Beispiel den eines [`ReadableStream`](/de/docs/Web/API/ReadableStream).

Jeder dieser asynchronen Iteratoren hat ein eigenes Prototyp-Objekt, das die `next()`-Methode definiert, die von diesem speziellen asynchronen Iterator verwendet wird. Alle diese Prototyp-Objekte erben von `AsyncIterator.prototype`, das eine Methode [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) bereitstellt, die das asynchrone Iteratorobjekt selbst zurückgibt, wodurch der asynchrone Iterator auch [asynchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) wird.

> [!NOTE]
> `AsyncIterator.prototype` implementiert nicht [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator), daher sind asynchrone Iteratoren standardmäßig nicht [synchron iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

## Instanzmethoden

- [`AsyncIterator.prototype[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator)
  - : Gibt das asynchrone Iteratorobjekt selbst zurück. Dadurch können asynchrone Iteratorobjekte auch asynchron iterierbar sein.

## Beispiele

### Verwenden eines asynchronen Iterators als asynchron iterierbar

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
