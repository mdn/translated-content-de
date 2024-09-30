---
title: ReadableStreamDefaultController
slug: Web/API/ReadableStreamDefaultController
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableStreamDefaultController`**-Interface der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller, der die Kontrolle über den Zustand und die interne Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) ermöglicht. Standard-Controller sind für Ströme gedacht, die keine Byte-Ströme sind.

## Konstruktor

Keine. `ReadableStreamDefaultController`-Instanzen werden automatisch während der `ReadableStream`-Erstellung erstellt.

## Instanz-Eigenschaften

- [`ReadableStreamDefaultController.desiredSize`](/de/docs/Web/API/ReadableStreamDefaultController/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Instanz-Methoden

- [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close)
  - : Schließt den zugehörigen Stream.
- [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue)
  - : Stellt ein gegebenes Datenstück in den zugehörigen Stream ein.
- [`ReadableStreamDefaultController.error()`](/de/docs/Web/API/ReadableStreamDefaultController/error)
  - : Verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream fehlerhaft sind.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` unter Verwendung eines Konstruktors erstellt (siehe unser [Einfaches Zufallsstrom-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion generiert jede Sekunde einen zufälligen Textstring und fügt ihn in den Stream ein. Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Generierung zu stoppen, wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Beachten Sie, dass ein `ReadableStreamDefaultController`-Objekt als Parameter der `start()`- und `pull()`-Funktionen bereitgestellt wird.

Wenn eine Schaltfläche gedrückt wird, wird die Generierung gestoppt, der Stream wird mithilfe von [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen, und eine andere Funktion wird ausgeführt, die die Daten wieder aus dem Stream liest.

```js
let interval;
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();

      // Add the string to the stream
      controller.enqueue(string);

      // show it on the screen
      let listItem = document.createElement("li");
      listItem.textContent = string;
      list1.appendChild(listItem);
    }, 1000);

    button.addEventListener("click", () => {
      clearInterval(interval);
      fetchStream();
      controller.close();
    });
  },
  pull(controller) {
    // We don't really need a pull in this example
  },
  cancel() {
    // This is called if the reader cancels,
    // so we should stop generating strings
    clearInterval(interval);
  },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konzepte der Streams API](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, beschreibbaren und Transformationsströmen.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills.
