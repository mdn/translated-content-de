---
title: "TransformStreamDefaultController: enqueue() Methode"
short-title: enqueue()
slug: Web/API/TransformStreamDefaultController/enqueue
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`enqueue()`** Methode des [`TransformStreamDefaultController`](/de/docs/Web/API/TransformStreamDefaultController) Interfaces fügt das gegebene Stück auf der lesbaren Seite des Streams in die Warteschlange ein.

Weitere Informationen über lesbare Streams und Stücke finden Sie unter [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams).

## Syntax

```js-nolint
enqueue(chunk)
```

### Parameter

- `chunk`
  - : Das Stück, das in die Warteschlange eingereiht wird. Ein Stück ist ein einzelnes Datenstück. Es kann jeden Datentyp darstellen und ein Stream kann Stücke verschiedenen Typs enthalten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream ist nicht lesbar.
    Dies kann auftreten, wenn der Stream durch `controller.error()` fehlerhaft ist oder wenn er geschlossen wurde, ohne dass die `controller.close()` Methode seines Controllers jemals aufgerufen wurde.

## Beispiele

In diesem Beispiel wird ein codiertes Stück mit der `enqueue()` Methode in die Warteschlange gestellt.

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
