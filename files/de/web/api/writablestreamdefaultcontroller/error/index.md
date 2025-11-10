---
title: "WritableStreamDefaultController: error() Methode"
short-title: error()
slug: Web/API/WritableStreamDefaultController/error
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`error()`** Methode der [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController) Schnittstelle verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream fehlerhaft werden.

Diese Methode wird selten verwendet, da es normalerweise ausreicht, ein abgelehntes Promise von einer der Methoden des zugrunde liegenden Sinks zurückzugeben. Sie kann jedoch nützlich sein, um einen Stream plötzlich in Reaktion auf ein Ereignis außerhalb des normalen Lebenszyklus von Interaktionen mit dem zugrunde liegenden Sink zu beenden.

## Syntax

```js-nolint
error(message)
```

### Parameter

- `message`
  - : Ein String, der den Fehler repräsentiert, mit dem zukünftige Interaktionen fehlschlagen sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie fehlerhaft machen möchten, ist kein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

```js
const writableStream = new WritableStream({
  start(controller) {
    // do stuff with controller

    // error stream if necessary
    controller.error("My error is broken");
  },
  write(chunk, controller) {
    // …
  },
  close(controller) {
    // …
  },
  abort(err) {
    // …
  },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
