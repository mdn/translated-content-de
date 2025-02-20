---
title: Symbol.asyncIterator
slug: Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.asyncIterator`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.asyncIterator`. Das [asynchrone Iterablen-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols) verwendet dieses Symbol für die Methode, die den asynchronen Iterator für ein Objekt zurückgibt. Damit ein Objekt asynchron iterierbar ist, muss es einen `[Symbol.asyncIterator]`-Schlüssel besitzen.

{{InteractiveExample("JavaScript Demo: Symbol.asyncIterator", "taller")}}

```js interactive-example
const delayedResponses = {
  delays: [500, 1300, 3500],

  wait(delay) {
    return new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  },

  async *[Symbol.asyncIterator]() {
    for (const delay of this.delays) {
      await this.wait(delay);
      yield `Delayed response for ${delay} milliseconds`;
    }
  },
};

(async () => {
  for await (const response of delayedResponses) {
    console.log(response);
  }
})();

// Expected output: "Delayed response for 500 milliseconds"
// Expected output: "Delayed response for 1300 milliseconds"
// Expected output: "Delayed response for 3500 milliseconds"
```

## Wert

Das wohlbekannte Symbol `Symbol.asyncIterator`.

{{js_property_attributes(0, 0, 0)}}

## Beispiele

### Benutzerdefinierte asynchrone Iterables

Sie können Ihr eigenes asynchrones Iterable definieren, indem Sie die Eigenschaft `[Symbol.asyncIterator]()` auf einem Objekt setzen.

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
// Logs:
// "hello"
// "async"
// "iteration!"
```

Wenn Sie eine API erstellen, bedenken Sie, dass asynchrone Iterables dazu gedacht sind, etwas _iterierbares_ zu repräsentieren – wie einen Datenstrom oder eine Liste –, und nicht in den meisten Situationen dazu dienen, Callbacks und Ereignisse vollständig zu ersetzen.

### Eingebaute asynchrone Iterables

Es gibt kein Objekt in der Kernsprache JavaScript, das asynchron iterierbar ist. Einige Web-APIs, wie zum Beispiel [`ReadableStream`](/de/docs/Web/API/ReadableStream), haben die Methode `Symbol.asyncIterator` standardmäßig gesetzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- [for await...of](/de/docs/Web/JavaScript/Reference/Statements/for-await...of)
