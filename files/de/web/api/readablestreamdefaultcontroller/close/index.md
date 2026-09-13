---
title: "ReadableStreamDefaultController: close()-Methode"
short-title: close()
slug: Web/API/ReadableStreamDefaultController/close
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`close()`**-Methode des [`ReadableStreamDefaultController`](/de/docs/Web/API/ReadableStreamDefaultController)-Interfaces schließt den zugehörigen Stream.

Leser können weiterhin zuvor in den Stream eingereihte Datenblöcke lesen, aber sobald diese gelesen sind, wird der Stream geschlossen. Wenn Sie den Stream vollständig entfernen und alle eingereihten Datenblöcke verwerfen möchten, sollten Sie [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) oder [`ReadableStreamDefaultReader.cancel()`](/de/docs/Web/API/ReadableStreamDefaultReader/cancel) verwenden.

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
  - : Wird ausgelöst, wenn `close()` aufgerufen wird, während der Stream nicht lesbar ist — weil er bereits geschlossen, abgebrochen oder fehlerhaft ist — oder weil er vom zugrunde liegenden Quellcode dazu aufgefordert wurde, aber dies noch nicht getan hat, da es noch eingereihte Blöcke zum Lesen gibt.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mittels eines Konstruktors erstellt (sehen Sie sich unser [Beispiel für einen einfachen zufälligen Stream](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code an). Die `start()`-Funktion generiert alle Sekunde einen zufälligen Textstring und reiht ihn in den Stream ein.
Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Generierung zu stoppen, falls [`ReadableStream.cancel()`](/de/docs/Web/API/ReadableStream/cancel) aus irgendeinem Grund aufgerufen wird.

Wenn eine Taste gedrückt wird, wird die Generierung gestoppt, der Stream durch `close()` geschlossen, und eine weitere Funktion wird ausgeführt, die die Daten wieder aus dem Stream liest.

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
