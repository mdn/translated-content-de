---
title: "ReadableStreamDefaultController: close()-Methode"
short-title: close()
slug: Web/API/ReadableStreamDefaultController/close
l10n:
  sourceCommit: 6336af7a3880c350919e5b29f83b938fb1594362
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`close()`**-Methode der {{domxref("ReadableStreamDefaultController")}}-Schnittstelle schließt den zugehörigen Stream.

Leser können weiterhin alle zuvor in den Stream eingereihten Teile lesen, aber sobald diese gelesen sind, wird der Stream geschlossen. Wenn Sie den Stream vollständig entfernen und alle eingereihten Teile verwerfen möchten, verwenden Sie {{domxref("ReadableStream.cancel()")}} oder {{domxref("ReadableStreamDefaultReader.cancel()")}}.

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

  - : Wird ausgelöst, wenn `close()` aufgerufen wird, während der Stream nicht lesbar ist — weil er bereits geschlossen, abgebrochen oder ein Fehler aufgetreten ist — oder weil vom zugrunde liegenden Quellobjekt angefordert wurde, den Stream zu schließen, er dies jedoch noch nicht getan hat, da noch eingereihte Teile gelesen werden müssen.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mit einem Konstruktor erstellt (sehen Sie unser [Einfaches Zufallsstrombeispiel](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion generiert jede Sekunde eine zufällige Zeichenfolge und reiht sie in den Stream ein.
Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Generierung zu stoppen, wenn {{domxref("ReadableStream.cancel()")}} aus irgendeinem Grund aufgerufen wird.

Wenn ein Button gedrückt wird, wird die Generierung gestoppt, der Stream mit `close()` geschlossen, und eine andere Funktion wird ausgeführt, die die Daten aus dem Stream zurückliest.

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
- {{domxref("ReadableStreamDefaultController")}}
