---
title: WritableStreamDefaultController
slug: Web/API/WritableStreamDefaultController
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`WritableStreamDefaultController`** Interface der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller, der es ermöglicht, den Zustand eines [`WritableStream`](/de/docs/Web/API/WritableStream) zu steuern. Beim Erstellen eines `WritableStream` wird dem zugrunde liegenden Sink eine entsprechende `WritableStreamDefaultController` Instanz zur Manipulation gegeben.

## Konstruktor

Keiner. `WritableStreamDefaultController` Instanzen werden automatisch während der `WritableStream`-Konstruktion erstellt.

## Instanzeigenschaften

- [`WritableStreamDefaultController.signal`](/de/docs/Web/API/WritableStreamDefaultController/signal) {{ReadOnlyInline}}
  - : Gibt das [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das mit dem Controller verbunden ist.

## Instanzmethoden

- [`WritableStreamDefaultController.error()`](/de/docs/Web/API/WritableStreamDefaultController/error)
  - : Führt dazu, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream einen Fehler verursachen.

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
