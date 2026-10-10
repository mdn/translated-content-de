---
title: ReadableStreamDefaultController
slug: Web/API/ReadableStreamDefaultController
l10n:
  sourceCommit: 47b1321d6cac5c7093583162c4cf73e015cc4905
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die Schnittstelle **`ReadableStreamDefaultController`** der [Streams API](/de/docs/Web/API/Streams_API) stellt einen Controller dar, mit dem sich der Zustand und die interne Warteschlange eines [`ReadableStream`](/de/docs/Web/API/ReadableStream) steuern lassen. Default-Controller sind für Streams vorgesehen, die keine Byte-Streams sind.

## Konstruktor

Keiner. Instanzen von `ReadableStreamDefaultController` werden beim Erstellen eines `ReadableStream` automatisch erzeugt.

## Instanzeigenschaften

- [`ReadableStreamDefaultController.desiredSize`](/de/docs/Web/API/ReadableStreamDefaultController/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe an, um die interne Warteschlange des Streams zu füllen.

## Instanzmethoden

- [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close)
  - : Schließt den zugehörigen Stream.
- [`ReadableStreamDefaultController.enqueue()`](/de/docs/Web/API/ReadableStreamDefaultController/enqueue)
  - : Fügt der Warteschlange des zugehörigen Streams einen übergebenen Datenblock hinzu.
- [`ReadableStreamDefaultController.error()`](/de/docs/Web/API/ReadableStreamDefaultController/error)
  - : Bewirkt, dass jede weitere Interaktion mit dem zugehörigen Stream zu einem Fehler führt.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mit einem Konstruktor erstellt (den vollständigen Code finden Sie in unserem [Beispiel für einen einfachen Stream mit Zufallsdaten](https://mdn.github.io/dom-examples/streams/simple-random-stream/)). Die Funktion `start()` erzeugt jede Sekunde eine zufällige Zeichenfolge und fügt sie der Warteschlange des Streams hinzu. Außerdem wird eine Funktion `cancel()` bereitgestellt, die die Erzeugung stoppt, falls [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Beachten Sie, dass den Funktionen `start()` und `pull()` ein `ReadableStreamDefaultController`-Objekt als Parameter übergeben wird.

Wenn eine Schaltfläche gedrückt wird, wird die Erzeugung gestoppt, der Stream mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen und eine weitere Funktion ausgeführt, die die Daten aus dem Stream liest.

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
- [Verwendung lesbarer Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
