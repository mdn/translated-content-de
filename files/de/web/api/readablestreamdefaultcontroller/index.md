---
title: ReadableStreamDefaultController
slug: Web/API/ReadableStreamDefaultController
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`ReadableStreamDefaultController`**-Interface der [Streams-API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller, der die Steuerung des Zustands und der internen Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) ermöglicht. Standardcontroller sind für Streams, die keine Bytestreams sind.

## Konstruktor

Keine. `ReadableStreamDefaultController`-Instanzen werden automatisch während der Konstruktion eines `ReadableStream` erstellt.

## Instanzeigenschaften

- [`ReadableStreamDefaultController.desiredSize`](/de/docs/Web/API/ReadableStreamDefaultController/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Instanzmethoden

- [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close)
  - : Schließt den zugehörigen Stream.
- [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue)
  - : Fügt einen gegebenen Abschnitt in die zugehörige Stream-Warteschlange ein.
- [`ReadableStreamDefaultController.error()`](/de/docs/Web/API/ReadableStreamDefaultController/error)
  - : Verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream fehlschlagen.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mithilfe eines Konstruktors erstellt (siehe unser [einfaches Zufallsstream-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion erzeugt jede Sekunde eine zufällige Textzeichenfolge und fügt sie in den Stream ein. Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Erzeugung zu stoppen, falls [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Beachten Sie, dass ein `ReadableStreamDefaultController`-Objekt als Parameter der `start()`- und `pull()`-Funktionen bereitgestellt wird.

Wenn eine Taste gedrückt wird, wird die Erzeugung gestoppt, der Stream wird mithilfe von [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen, und eine weitere Funktion wird ausgeführt, die die Daten aus dem Stream ausliest.

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
- [Verwendung lesbarer Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und transformierenden Streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
