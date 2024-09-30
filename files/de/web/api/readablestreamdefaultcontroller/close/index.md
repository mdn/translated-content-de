---
title: "ReadableStreamDefaultController: close()-Methode"
short-title: close()
slug: Web/API/ReadableStreamDefaultController/close
l10n:
  sourceCommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`close()`**-Methode der [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)-Schnittstelle schließt den zugehörigen Stream.

Leser können immer noch zuvor eingereihte Stücke aus dem Stream lesen, aber sobald diese gelesen sind, wird der Stream geschlossen. Wenn Sie den Stream vollständig entfernen und alle eingereihten Stücke verwerfen möchten, würden Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

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

  - : Wird ausgelöst, wenn `close()` aufgerufen wird, während der Stream nicht lesbar ist — weil er bereits geschlossen, abgebrochen oder fehlerbehaftet ist — oder weil das Schließen von der zugrunde liegenden Quelle angefordert wurde, aber noch nicht erfolgt ist, da immer noch eingereihte Stücke zu lesen sind.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mithilfe eines Konstruktors erstellt (siehe unser [Einfaches Zufallsstrom-Beispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion erzeugt jede Sekunde eine zufällige Textzeichenfolge und reiht sie in den Stream ein.
Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Erzeugung zu stoppen, wenn [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Wenn eine Taste gedrückt wird, wird die Erzeugung gestoppt, der Stream wird mit `close()` geschlossen, und eine andere Funktion wird ausgeführt, die die Daten wieder aus dem Stream liest.

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
