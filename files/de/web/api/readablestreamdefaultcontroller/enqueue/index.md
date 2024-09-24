---
title: "ReadableStreamDefaultController: enqueue()-Methode"
short-title: enqueue()
slug: Web/API/ReadableStreamDefaultController/enqueue
l10n:
  sourceCommit: f045a596e527ce975196cf527007c3b2c92baf5b
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`enqueue()`**-Methode der
{{domxref("ReadableStreamDefaultController")}}-Schnittstelle fügt einen gegebenen [Chunk](/de/docs/Web/API/Streams_API/Concepts#chunks) in den zugehörigen Stream ein.

## Syntax

```js-nolint
enqueue(chunk)
```

### Parameter

- `chunk`
  - : Der Chunk, der in die Warteschlange gestellt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das Quellobjekt kein `ReadableStreamDefaultController` ist.

## Beispiele

Im folgenden einfachen Beispiel wird ein benutzerdefinierter `ReadableStream` mit einem Konstruktor erstellt (siehe unser [Beispiel für einen einfachen Zufallsstrom](https://mdn.github.io/dom-examples/streams/simple-random-stream/) für den vollständigen Code). Die `start()`-Funktion generiert jede Sekunde einen zufälligen Textstring und stellt ihn in die Warteschlange des Streams — siehe `controller.enqueue(string)`. Eine `cancel()`-Funktion wird ebenfalls bereitgestellt, um die Generierung zu stoppen, falls {{domxref("ReadableStream.cancel()")}} aus irgendeinem Grund aufgerufen wird.

Wenn ein Knopf gedrückt wird, wird die Generierung gestoppt, der Stream wird mit {{domxref("ReadableStreamDefaultController.close()")}} geschlossen und eine andere Funktion gestartet, die die Daten wieder aus dem Stream liest.

```js
let interval;
const stream = new ReadableStream({
  start(controller) {
    interval = setInterval(() => {
      let string = randomChars();

      // Fügen Sie den String dem Stream hinzu
      controller.enqueue(string);

      // Zeigen Sie ihn auf dem Bildschirm an
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
    // Wir benötigen in diesem Beispiel keinen Pull
  },
  cancel() {
    // Dies wird aufgerufen, wenn der Leser abbricht,
    // also sollten wir die Stringgenerierung stoppen
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
