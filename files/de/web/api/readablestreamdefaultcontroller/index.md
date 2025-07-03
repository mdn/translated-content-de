---
title: ReadableStreamDefaultController
slug: Web/API/ReadableStreamDefaultController
l10n:
  sourceCommit: 7d37e07f04c40ecbfd424d6fce0766ef3d2f7db4
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`ReadableStreamDefaultController`**-Schnittstelle der [Streams-API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller, der die Steuerung des Zustands und der internen Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) ermöglicht. Standard-Controller dienen für Streams, die keine Byte-Streams sind.

## Konstruktor

Keiner. `ReadableStreamDefaultController`-Instanzen werden automatisch während der `ReadableStream`-Konstruktion erstellt.

## Instanz-Eigenschaften

- [`ReadableStreamDefaultController.desiredSize`](/de/docs/Web/API/ReadableStreamDefaultController/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Instanz-Methoden

- [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close)
  - : Schließt den zugehörigen Stream.
- [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue)
  - : Stellt ein gegebenes Chunk in die zugehörige Warteschlange des Streams.
- [`ReadableStreamDefaultController.error()`](/de/docs/Web/API/ReadableStreamDefaultController/error)
  - : Verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream zu einem Fehler führen.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mithilfe eines Konstruktors erstellt (siehe unser [Einfaches Zufalls-Stream-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion generiert jede Sekunde eine zufällige Textzeichenfolge und stellt sie in die Warteschlange des Streams. Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Generierung zu stoppen, falls [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Beachten Sie, dass ein `ReadableStreamDefaultController`-Objekt als Parameter der `start()`- und `pull()`-Funktionen bereitgestellt wird.

Wenn eine Schaltfläche gedrückt wird, wird die Generierung gestoppt, der Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen und eine weitere Funktion ausgeführt, die die Daten aus dem Stream zurückliest.

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

- [Streams-API-Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
