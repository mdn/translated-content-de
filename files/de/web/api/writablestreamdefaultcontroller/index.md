---
title: WritableStreamDefaultController
slug: Web/API/WritableStreamDefaultController
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`WritableStreamDefaultController`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) stellt einen Controller dar, der die Kontrolle über den Zustand eines {{domxref("WritableStream")}} ermöglicht. Beim Erstellen eines `WritableStream` wird dem zugrunde liegenden Sink eine entsprechende Instanz von `WritableStreamDefaultController` zur Manipulation zugewiesen.

## Konstruktor

Keiner. `WritableStreamDefaultController`-Instanzen werden automatisch während der Konstruktion eines `WritableStream` erstellt.

## Instanz-Eigenschaften

- {{domxref("WritableStreamDefaultController.signal")}} {{ReadOnlyInline}}
  - : Gibt das mit dem Controller verbundene {{domxref("AbortSignal")}} zurück.

## Instanz-Methoden

- {{domxref("WritableStreamDefaultController.error()")}}
  - : Verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream fehlschlagen.

## Beispiele

```js
const writableStream = new WritableStream({
  start(controller) {
    // Tun Sie etwas mit dem Controller

    // Fehler im Stream verursachen, falls erforderlich
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
