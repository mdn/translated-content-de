---
title: WritableStreamDefaultController
slug: Web/API/WritableStreamDefaultController
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`WritableStreamDefaultController`**-Interface der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller, der die Kontrolle über den Zustand eines [`WritableStream`](/de/docs/Web/API/WritableStream) ermöglicht. Beim Erstellen eines `WritableStream` wird dem zugrunde liegenden Sink ein entsprechendes `WritableStreamDefaultController`-Instance übergeben, um es zu manipulieren.

## Konstruktor

Keiner. `WritableStreamDefaultController`-Instanzen werden automatisch während der Erstellung von `WritableStream` erstellt.

## Instanz-Eigenschaften

- [`WritableStreamDefaultController.signal`](/de/docs/Web/API/WritableStreamDefaultController/signal) {{ReadOnlyInline}}
  - : Gibt das [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück, das mit dem Controller verknüpft ist.

## Instanz-Methoden

- [`WritableStreamDefaultController.error()`](/de/docs/Web/API/WritableStreamDefaultController/error)
  - : Verursacht einen Fehler bei allen zukünftigen Interaktionen mit dem zugehörigen Stream.

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
