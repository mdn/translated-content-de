---
title: "ReadableStreamDefaultController: enqueue()-Methode"
short-title: enqueue()
slug: Web/API/ReadableStreamDefaultController/enqueue
l10n:
  sourceCommit: 229a116d8b974da85bc3541a6d457f310d627be8
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`enqueue()`**-Methode des [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)-Interfaces fügt ein angegebenes [Chunk](/de/docs/Web/API/Streams_API/Concepts#chunks) in den zugehörigen Stream ein.

## Syntax

```js-nolint
enqueue(chunk)
```

### Parameter

- `chunk`
  - : Das Chunk, das eingefügt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `enqueue()` aufgerufen wird, während der Stream nicht lesbar ist, weil er bereits geschlossen, abgebrochen oder fehlerhaft ist, oder weil die zugrunde liegende Quelle gebeten hat, ihn zu schließen, dies aber noch nicht getan hat, da noch eingefügte Chunks zum Lesen vorhanden sind.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mithilfe eines Konstruktors erstellt (siehe unser [Einfaches Beispiel für einen zufälligen Stream](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion erzeugt jede Sekunde einen zufällig generierten Textstring und fügt diesen in den Stream ein — siehe `controller.enqueue(string)`. Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Erzeugung zu stoppen, wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Wenn ein Button gedrückt wird, wird die Erzeugung gestoppt, der Stream wird mit [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen, und eine andere Funktion wird ausgeführt, die die Daten erneut aus dem Stream liest.

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

- [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
