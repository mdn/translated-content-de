---
title: "ReadableStreamDefaultController: enqueue()-Methode"
short-title: enqueue()
slug: Web/API/ReadableStreamDefaultController/enqueue
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`enqueue()`**-Methode des [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)-Interfaces reiht einen gegebenen [Chunk](/de/docs/Web/API/Streams_API/Concepts#chunks) in den verbundenen Stream ein.

## Syntax

```js-nolint
enqueue(chunk)
```

### Parameter

- `chunk`
  - : Der einzureihende Chunk.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `enqueue()` aufgerufen wird, während der Stream nicht lesbar ist — weil er bereits geschlossen, abgebrochen oder fehlerhaft ist — oder weil er durch die zugrunde liegende Quelle zum Schließen aufgefordert wurde, dies aber noch nicht getan hat, da noch Chunks zum Lesen vorhanden sind.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mithilfe eines Konstruktors erstellt (siehe unser [Einfaches Zufallsstream-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion generiert jede Sekunde einen zufälligen Textstring und reiht ihn in den Stream ein — siehe `controller.enqueue(string)`. Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Generierung zu stoppen, falls [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Wenn eine Schaltfläche gedrückt wird, wird die Generierung gestoppt, der Stream wird mittels [`ReadableStreamDefaultController.close()`](/de/docs/Web/API/ReadableStreamDefaultController/close) geschlossen, und eine weitere Funktion wird ausgeführt, die die Daten aus dem Stream zurückliest.

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
