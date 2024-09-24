---
title: ReadableStreamDefaultController
slug: Web/API/ReadableStreamDefaultController
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`ReadableStreamDefaultController`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert einen Controller, der die Kontrolle über den Zustand und die interne Warteschlange eines {{domxref("ReadableStream")}}s ermöglicht. Standard-Controller sind für Streams, die keine Byte-Streams sind.

## Konstruktor

Kein. `ReadableStreamDefaultController`-Instanzen werden automatisch während der Konstruktion von `ReadableStream` erzeugt.

## Instanzeigenschaften

- {{domxref("ReadableStreamDefaultController.desiredSize")}} {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.

## Instanzmethoden

- {{domxref("ReadableStreamDefaultController.close()")}}
  - : Schließt den zugehörigen Stream.
- {{domxref("ReadableStreamDefaultController.enqueue()")}}
  - : Stellt einen gegebenen Datenblock in der zugehörigen Warteschlange des Streams ein.
- {{domxref("ReadableStreamDefaultController.error()")}}
  - : Verursacht, dass alle zukünftigen Interaktionen mit dem zugehörigen Stream fehlschlagen.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mithilfe eines Konstruktors erstellt (sehen Sie sich das vollständige [einfache Zufallsdatenstrom-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) an). Die `start()`-Funktion generiert jede Sekunde einen zufälligen Textstring und fügt ihn in den Stream ein. Eine `cancel()`-Funktion wird ebenfalls zur Verfügung gestellt, um die Generierung zu stoppen, wenn {{domxref("ReadableStream.cancel()")}} aus irgendeinem Grund aufgerufen wird.

Beachten Sie, dass ein `ReadableStreamDefaultController`-Objekt als Parameter der `start()`- und `pull()`-Funktionen bereitgestellt wird.

Wenn eine Schaltfläche gedrückt wird, wird die Generierung gestoppt, der Stream wird mit {{domxref("ReadableStreamDefaultController.close()")}} geschlossen und eine andere Funktion wird ausgeführt, die die Daten aus dem Stream liest.

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

- [Streams API Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- {{domxref("ReadableStream")}}
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und transformierenden Streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
