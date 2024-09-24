---
title: "TransformStreamDefaultController: enqueue()-Methode"
short-title: enqueue()
slug: Web/API/TransformStreamDefaultController/enqueue
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`enqueue()`**-Methode der Schnittstelle {{domxref("TransformStreamDefaultController")}} fügt den angegebenen Chunk auf der lesbaren Seite des Streams in die Warteschlange ein.

Weitere Informationen zu lesbaren Streams und Chunks finden Sie unter [Verwendung von Readable Streams](/de/docs/Web/API/Streams_API/Using_readable_streams).

## Syntax

```js-nolint
enqueue(chunk)
```

### Parameter

- `chunk`
  - : Der Chunk, der in die Warteschlange gestellt wird. Ein Chunk ist ein einzelnes Datenstück. Es kann sich um jeden Datentyp handeln, und ein Stream kann Chunks unterschiedlicher Typen enthalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream ist nicht lesbar.
    Dies kann auftreten, wenn der Stream über `controller.error()` einen Fehler aufweist oder wenn er geschlossen wird, ohne dass die `controller.close()`-Methode seines Controllers jemals aufgerufen wurde.

## Beispiele

In diesem Beispiel wird ein kodierter Chunk mit der `enqueue()`-Methode in die Warteschlange gestellt.

```js
const textEncoderStream = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(new TextEncoder().encode(chunk));
  },
  flush(controller) {
    controller.terminate();
  },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
