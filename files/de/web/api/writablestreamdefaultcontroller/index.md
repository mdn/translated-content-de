---
title: WritableStreamDefaultController
slug: Web/API/WritableStreamDefaultController
l10n:
  sourceCommit: 2610bf04cc058d5ea2432012e6ade57394d9258c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das Interface **`WritableStreamDefaultController`** der [Streams API](/de/docs/Web/API/Streams_API) stellt einen Controller dar, mit dem sich der Zustand eines [`WritableStream`](/de/docs/Web/API/WritableStream) steuern lässt. Beim Erstellen eines `WritableStream` erhält die zugrunde liegende Senke eine entsprechende `WritableStreamDefaultController`-Instanz, die sie zur Steuerung verwenden kann.

## Konstruktor

Keiner. `WritableStreamDefaultController`-Instanzen werden beim Erstellen eines `WritableStream` automatisch erzeugt.

## Instanzeigenschaften

- [`WritableStreamDefaultController.signal`](/de/docs/Web/API/WritableStreamDefaultController/signal) {{ReadOnlyInline}}
  - : Gibt das dem Controller zugeordnete [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück.

## Instanzmethoden

- [`WritableStreamDefaultController.error()`](/de/docs/Web/API/WritableStreamDefaultController/error)
  - : Bewirkt, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream zu einem Fehler führen.

## Beispiele

```js
const writableStream = new WritableStream({
  start(controller) {
    // do stuff with controller

    // error stream if necessary
    controller.error("My stream is broken");
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
