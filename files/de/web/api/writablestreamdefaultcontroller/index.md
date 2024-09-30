---
title: WritableStreamDefaultController
slug: Web/API/WritableStreamDefaultController
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`WritableStreamDefaultController`**-Interface der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller, der die Steuerung des Zustands eines [`WritableStream`](/de/docs/Web/API/WritableStream) ermöglicht. Beim Erstellen eines `WritableStream` erhält das zugrunde liegende Sink eine entsprechende `WritableStreamDefaultController`-Instanz zur Manipulation.

## Konstruktor

Keiner. `WritableStreamDefaultController`-Instanzen werden während der Konstruktion von `WritableStream` automatisch erstellt.

## Instanz-Eigenschaften

- [`WritableStreamDefaultController.signal`](/de/docs/Web/API/WritableStreamDefaultController/signal) {{ReadOnlyInline}}
  - : Gibt das mit dem Controller verbundene [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück.

## Instanz-Methoden

- [`WritableStreamDefaultController.error()`](/de/docs/Web/API/WritableStreamDefaultController/error)
  - : Verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream fehlschlagen.

## Beispiele

```js
const writableStream = new WritableStream({
  start(controller) {
    // do stuff with controller

    // error stream if necessary
    controller.error("My stream is broken");
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
