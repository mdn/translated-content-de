---
title: "WritableStreamDefaultController: error() Methode"
short-title: error()
slug: Web/API/WritableStreamDefaultController/error
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`error()`** Methode des
[`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController)-Interfaces bewirkt, dass alle zukünftigen Interaktionen
mit dem zugehörigen Stream fehlerhaft werden.

Diese Methode wird selten verwendet, da es in der Regel ausreicht, ein abgelehntes Promise von
einer der Methoden des zugrunde liegenden Sinks zurückzugeben. Sie kann jedoch nützlich sein, um einen Stream plötzlich zu beenden, wenn ein Ereignis eintritt, das außerhalb des normalen Lebenszyklus der Interaktionen mit dem zugrunde liegenden Sink liegt.

## Syntax

```js-nolint
error(message)
```

### Parameter

- `message`
  - : Ein String, der den Fehler darstellt, mit dem zukünftige Interaktionen
    fehlschlagen sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie zu fehlerhaft machen versuchen, ist kein [`WritableStream`](/de/docs/Web/API/WritableStream).

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
