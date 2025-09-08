---
title: ReadableStreamDefaultController
slug: Web/API/ReadableStreamDefaultController
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableStreamDefaultController`**-Interface der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller, der die Steuerung des Zustands eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) und dessen interner Warteschlange ermöglicht. Standard-Controller sind für Streams, die keine Byte-Streams sind.

## Konstruktor

Keiner. `ReadableStreamDefaultController`-Instanzen werden automatisch während der Konstruktion eines `ReadableStream` erstellt.

## Instanzeigenschaften

- [`ReadableStreamDefaultController.desiredSize`](/de/docs/Web/API/ReadableStreamDefaultController/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Instanzmethoden

- [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close)
  - : Schließt den zugehörigen Stream.
- [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue)
  - : Stellt einen gegebenen Block in der zugehörigen Stream-Warteschlange ein.
- [`ReadableStreamDefaultController.error()`](/de/docs/Web/API/ReadableStreamDefaultController/error)
  - : Verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream fehlschlagen.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mit einem Konstruktor erstellt (sehen Sie sich unser [einfaches Beispiel für einen zufälligen Stream](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code an). Die `start()`-Funktion generiert jede Sekunde eine zufällige Textzeichenfolge und stellt sie in den Stream ein. Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Generierung zu stoppen, wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Beachten Sie, dass ein `ReadableStreamDefaultController`-Objekt als Parameter der Funktionen `start()` und `pull()` bereitgestellt wird.

Wenn eine Schaltfläche gedrückt wird, wird die Generierung gestoppt, der Stream wird mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen, und eine andere Funktion wird ausgeführt, die die Daten wieder aus dem Stream liest.

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
- [Lesbare Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill)
