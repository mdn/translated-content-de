---
title: "ReadableStreamDefaultController: close()-Methode"
short-title: close()
slug: Web/API/ReadableStreamDefaultController/close
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`close()`**-Methode der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)-Schnittstelle schließt den zugehörigen Stream.

Leser können weiterhin alle zuvor in den Stream eingereihten Blöcke lesen, aber sobald diese gelesen wurden, wird der Stream geschlossen. Wenn Sie den Stream vollständig entfernen und alle eingereihten Blöcke verwerfen möchten, sollten Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `close()` aufgerufen wird, während der Stream nicht lesbar ist — weil er bereits geschlossen, abgebrochen oder fehlerhaft ist — oder weil er vom zugrunde liegenden Quellobjekt gebeten wurde, sich zu schließen, es aber noch nicht getan hat, da noch eingereihte Blöcke zum Lesen vorhanden sind.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mithilfe eines Konstruktors erstellt (sehen Sie unser [Einfaches Zufallsstrom-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion generiert jede Sekunde einen zufälligen Textstring und reiht ihn in den Stream ein.
Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Generierung zu stoppen, wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Wenn eine Schaltfläche gedrückt wird, wird die Generierung gestoppt, der Stream wird mit `close()` geschlossen und eine weitere Funktion wird ausgeführt, die die Daten wieder aus dem Stream liest.

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

- [Verwenden von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams)
- [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)
