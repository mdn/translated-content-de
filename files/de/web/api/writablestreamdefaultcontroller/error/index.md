---
title: "WritableStreamDefaultController: error()-Methode"
short-title: error()
slug: Web/API/WritableStreamDefaultController/error
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`error()`**-Methode der {{domxref("WritableStreamDefaultController")}}-Schnittstelle bewirkt, dass zukünftige Interaktionen mit dem zugehörigen Stream fehlschlagen.

Diese Methode wird selten verwendet, da es normalerweise ausreicht, ein abgelehntes Versprechen von einer der Methoden des zugrunde liegenden Senkens zu zurückzugeben. Sie kann jedoch nützlich sein, um einen Stream plötzlich als Reaktion auf ein Ereignis außerhalb des normalen Lebenszyklus von Interaktionen mit dem zugrunde liegenden Senken zu schließen.

## Syntax

```js-nolint
error(message)
```

### Parameter

- `message`
  - : Ein String, der den Fehler darstellt, mit dem zukünftige Interaktionen scheitern sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie zu fehlerhaft machen versuchen, ist kein {{domxref("WritableStream")}}.

## Beispiele

```js
const writableStream = new WritableStream({
  start(controller) {
    // do stuff with controller

    // error stream if necessary
    controller.error("My error is broken");
  },
  write(chunk, controller) {
    // ...
  },
  close(controller) {
    // ...
  },
  abort(err) {
    // ...
  },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
