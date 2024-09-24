---
title: Symbol.asyncIterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator
l10n:
  sourceCommit: 6e93ec8fc9e1f3bd83bf2f77e84e1a39637734f8
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.asyncIterator`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.asyncIterator`. Das [asynchrone Iterationsprotokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) sucht dieses Symbol für die Methode, die den asynchronen Iterator für ein Objekt zurückgibt. Damit ein Objekt asynchron iterierbar ist, muss es einen `[Symbol.asyncIterator]` Schlüssel haben.

{{EmbedInteractiveExample("pages/js/symbol-asynciterator.html", "taller")}}

## Wert

Das bekannte Symbol `Symbol.asyncIterator`.

{{js_property_attributes(0, 0, 0)}}

## Beispiele

### Benutzerdefinierte asynchrone Iterables

Sie können Ihr eigenes asynchrones Iterable definieren, indem Sie die Eigenschaft `[Symbol.asyncIterator]()` auf einem Objekt festlegen.

```js
const myAsyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield "hello";
    yield "async";
    yield "iteration!";
  },
};

(async () => {
  for await (const x of myAsyncIterable) {
    console.log(x);
  }
})();
// Protokolliert:
// "hello"
// "async"
// "iteration!"
```

Wenn Sie eine API erstellen, denken Sie daran, dass asynchrone Iterables entwickelt wurden, um etwas _Iterierbares_ darzustellen — wie einen Datenstrom oder eine Liste —, nicht um in den meisten Situationen Rückrufe und Ereignisse vollständig zu ersetzen.

### Eingebaute asynchrone Iterables

Es gibt kein Objekt in der Kern-JavaScript-Sprache, das asynchron iterierbar ist. Einige Web-APIs, wie etwa {{domxref("ReadableStream")}}, haben die Methode `Symbol.asyncIterator` standardmäßig festgelegt.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- [for await...of](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)
