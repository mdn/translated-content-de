---
title: "TransformStreamDefaultController: Methode enqueue()"
short-title: enqueue()
slug: Web/API/TransformStreamDefaultController/enqueue
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`enqueue()`**-Methode der [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController)-Schnittstelle reiht das gegebene Datenstück auf der lesbaren Seite des Streams ein.

Weitere Informationen zu lesbaren Streams und Datenstücken finden Sie unter [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams).

## Syntax

```js-nolint
enqueue(chunk)
```

### Parameter

- `chunk`
  - : Das eingeschobene Datenstück. Ein Chunk ist ein einzelnes Datenstück. Es kann jeder Datentyp sein, und ein Stream kann Chunks unterschiedlicher Typen enthalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream ist nicht lesbar.
    Dies kann auftreten, wenn der Stream über `controller.error()` fehlerhaft ist oder wenn er geschlossen ist, ohne dass jemals die `controller.close()`-Methode seines Controllers aufgerufen wurde.

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
