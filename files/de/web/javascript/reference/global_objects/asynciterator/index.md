---
title: AsyncIterator
slug: Web/JavaScript/Reference/Global_Objects/AsyncIterator
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

Ein **`AsyncIterator`**-Objekt ist ein Objekt, das dem [asynchronen Iterator-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) entspricht, indem es eine `next()`-Methode bereitstellt, die ein Versprechen zurückgibt, das ein Iterator-Ergebnisobjekt erfüllt. Das Objekt `AsyncIterator.prototype` ist ein verstecktes globales Objekt, von dem alle eingebauten asynchronen Iteratoren erben. Es bietet eine Methode [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator), die das asynchrone Iterator-Objekt selbst zurückgibt, und macht den asynchronen Iterator dadurch auch [asynchron iterabel](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols).

Beachten Sie, dass `AsyncIterator` _kein_ globales Objekt ist, obwohl es in Zukunft mit dem [Vorschlag zu asynchronen Iterator-Hilfsfunktionen](https://github.com/tc39/proposal-async-iterator-helpers) einer sein wird. Das Objekt `AsyncIterator.prototype`, das von allen eingebauten asynchronen Iteratoren geteilt wird, kann mit folgendem Code erhalten werden:

```js
const AsyncIteratorPrototype = Object.getPrototypeOf(
  Object.getPrototypeOf(Object.getPrototypeOf((async function* () {})())),
);
```

## Beschreibung

Derzeit ist das einzige eingebaute JavaScript-Async-Iterator-Objekt das {{jsxref("AsyncGenerator")}}-Objekt, das von [asynchronen Generatorfunktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function*) zurückgegeben wird. Es gibt einige andere eingebaute asynchrone Iteratoren in Web-APIs, wie zum Beispiel den eines [`ReadableStream`](/de/docs/Web/API/ReadableStream).

Jeder dieser asynchronen Iteratoren hat ein eigenes Prototypobjekt, das die `next()`-Methode definiert, die von dem jeweiligen asynchronen Iterator verwendet wird. Alle diese Prototypobjekte erben von `AsyncIterator.prototype`, das eine Methode [`[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator) bereitstellt, die das asynchrone Iterator-Objekt selbst zurückgibt, und den asynchronen Iterator dadurch auch [asynchron iterabel](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) macht.

> [!NOTE]
> `AsyncIterator.prototype` implementiert nicht [`[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator), daher sind asynchrone Iteratoren standardmäßig nicht [synchron iterabel](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

## Instanzmethoden

- [`AsyncIterator.prototype[Symbol.asyncDispose]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncDispose)
  - : Ruft die Methode `return()` von `this` auf und wartet auf deren Erfüllung, falls sie existiert. Dies implementiert das _asynchrone Entsorgungsprotokoll_ und ermöglicht es, es zu entsorgen, wenn es mit {{jsxref("Statements/await_using", "await using")}} verwendet wird.
- [`AsyncIterator.prototype[Symbol.asyncIterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator/Symbol.asyncIterator)
  - : Gibt das asynchrone Iterator-Objekt selbst zurück. Dies erlaubt es asynchronen Iterator-Objekten auch asynchron iterabel zu sein.

## Beispiele

### Verwenden eines asynchronen Iterators als asynchron iterabel

Alle eingebauten asynchronen Iteratoren sind auch asynchron iterabel, sodass Sie sie in einer `for await...of`-Schleife verwenden können:

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
- [Iteration-Protokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
