---
title: "ReadableStreamDefaultController: enqueue() Methode"
short-title: enqueue()
slug: Web/API/ReadableStreamDefaultController/enqueue
l10n:
  sourceCommit: f045a596e527ce975196cf527007c3b2c92baf5b
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`enqueue()`** Methode der
[`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController) Schnittstelle reiht ein gegebenes [Chunk](/de/docs/Web/API/Streams_API/Concepts#chunks) in den zugehörigen Stream ein.

## Syntax

```js-nolint
enqueue(chunk)
```

### Parameter

- `chunk`
  - : Das Chunk, das eingereiht werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableStreamDefaultController` ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mithilfe
eines Konstruktors erstellt (siehe unser [Einfaches zufälliges Stream-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion erzeugt jede Sekunde einen
zufälligen Textstring und reiht ihn in den Stream ein — siehe
`controller.enqueue(string)`. Eine `cancel()`-Funktion wird ebenfalls
bereitgestellt, um die Erzeugung zu stoppen, falls [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Wenn eine Taste gedrückt wird, wird die Erzeugung gestoppt, der Stream wird mit
[`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen, und eine weitere Funktion wird ausgeführt,
die die Daten aus dem Stream zurückliest.

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
