---
title: "WritableStreamDefaultController: Methode error()"
short-title: error()
slug: Web/API/WritableStreamDefaultController/error
l10n:
  sourceCommit: 2610bf04cc058d5ea2432012e6ade57394d9258c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die Methode **`error()`** des Interfaces [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController) bewirkt, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream mit einem Fehler fehlschlagen.

Diese Methode wird selten verwendet, da es normalerweise ausreicht, aus einer der Methoden der zugrunde liegenden Senke ein abgelehntes Promise zurückzugeben. Sie kann jedoch nützlich sein, um einen Stream als Reaktion auf ein Ereignis außerhalb des normalen Ablaufs der Interaktionen mit der zugrunde liegenden Senke abrupt zu beenden.

## Syntax

```js-nolint
error(message)
```

### Parameter

- `message`
  - : Ein String, der den Fehler angibt, mit dem zukünftige Interaktionen fehlschlagen sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, für den Sie einen Fehler auslösen möchten, ist kein [`WritableStream`](/de/docs/Web/API/WritableStream).

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
  close() {
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
