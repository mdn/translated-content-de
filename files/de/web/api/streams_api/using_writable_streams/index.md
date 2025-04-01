---
title: Verwendung von Schreibstreams
slug: Web/API/Streams_API/Using_writable_streams
l10n:
  sourceCommit: 1fdb14f1bc00789a1dc8bf347b08b5b94d717f0c
---

{{DefaultAPISidebar("Streams")}}

Als JavaScript-Entwickler ist das programmatische Schreiben von Daten in einen Stream sehr nützlich! Dieser Artikel erklärt die Funktionalität von Schreibstreams der [Streams API](/de/docs/Web/API/Streams_API).

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von Schreibstreams verstehen und die grundlegenden Konzepte kennen.
> Falls nicht, empfehlen wir Ihnen, zuerst die [Übersicht zu Streams-Konzepten und -Nutzung](/de/docs/Web/API/Streams_API#concepts_and_usage) und den speziellen Artikel [Streams API-Konzepte](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukehren.

> [!NOTE]
> Wenn Sie Informationen zu lesbaren Streams suchen, probieren Sie [Verwendung von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) und [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) aus.

## Einführung eines Beispiels

In unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repo finden Sie ein [einfaches Schreibbeispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-writer/index.html) ([sehen Sie es sich auch live an](https://mdn.github.io/dom-examples/streams/simple-writer/)). Dieses nimmt eine gegebene Nachricht und schreibt sie in einen Schreibstream, wobei jedes Chunk in der Benutzeroberfläche angezeigt wird, sobald es in den Stream geschrieben wurde, und auch die gesamte Nachricht angezeigt wird, wenn das Schreiben abgeschlossen ist.

## Wie Schreibstreams funktionieren

Schauen wir uns an, wie die Schreibstream-Funktionalität in unserem Demo-Beispiel funktioniert.

### Konstruktion eines Schreibstreams

Um einen Schreibstream zu erstellen, verwenden wir den [`WritableStream()`](/de/docs/Web/API/WritableStream/WritableStream)-Konstruktor; die Syntax sieht auf den ersten Blick komplex aus, ist aber eigentlich nicht so schwer.

Das Syntax-Grundgerüst sieht folgendermaßen aus:

```js
const stream = new WritableStream(
  {
    start(controller) {},
    write(chunk, controller) {},
    close(controller) {},
    abort(reason) {},
  },
  {
    highWaterMark: 3,
    size: () => 1,
  },
);
```

Der Konstruktor nimmt zwei Objekte als Parameter. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript des zugrunde liegenden Sinks, in den die Daten geschrieben werden. Das zweite Objekt ist optional und ermöglicht Ihnen, eine [benutzerdefinierte Queueing-Strategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream anzugeben, die die Form einer Instanz von [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy) hat.

Das erste Objekt kann bis zu vier Mitglieder enthalten, die alle optional sind:

1. `start(controller)` — Eine Methode, die einmal aufgerufen wird, unmittelbar nachdem der [`WritableStream`](/de/docs/Web/API/WritableStream) erstellt wurde. In dieser Methode sollten Sie Code einfügen, der die Stream-Funktionalität aufsetzt, z. B. den Zugriff auf den zugrunde liegenden Sink erhält.
2. `write(chunk,controller)` — Eine Methode, die wiederholt aufgerufen wird, jedes Mal, wenn ein neuer Chunk bereit ist, in den zugrunde liegenden Sink geschrieben zu werden (im `chunk`-Parameter angegeben).
3. `close(controller)` — Eine Methode, die aufgerufen wird, wenn die App signalisiert, dass sie das Schreiben von Chunks in den Stream beendet hat. Sie sollte alles Nötige tun, um die Schreibvorgänge in den zugrunde liegenden Sink abzuschließen und den Zugriff darauf freizugeben.
4. `abort(reason)` — Eine Methode, die aufgerufen wird, wenn die App signalisiert, dass sie den Stream abrupt schließen und in einen fehlerhaften Zustand versetzen möchte.

Der Konstruktoraufruf in unserem Beispiel sieht folgendermaßen aus:

```js
const decoder = new TextDecoder("utf-8");
const queuingStrategy = new CountQueuingStrategy({ highWaterMark: 1 });
let result = "";
const writableStream = new WritableStream(
  {
    // Implement the sink
    write(chunk) {
      return new Promise((resolve, reject) => {
        const buffer = new ArrayBuffer(1);
        const view = new Uint8Array(buffer);
        view[0] = chunk;
        const decoded = decoder.decode(view, { stream: true });
        const listItem = document.createElement("li");
        listItem.textContent = `Chunk decoded: ${decoded}`;
        list.appendChild(listItem);
        result += decoded;
        resolve();
      });
    },
    close() {
      const listItem = document.createElement("li");
      listItem.textContent = `[MESSAGE RECEIVED] ${result}`;
      list.appendChild(listItem);
    },
    abort(err) {
      console.error("Sink error:", err);
    },
  },
  queuingStrategy,
);
```

- Die `write()`-Methode enthält ein Promise, das Code umfasst, der jedes geschriebene Chunk in ein Format decodiert, das in die Benutzeroberfläche geschrieben werden kann. Dies wird aufgerufen, wenn jedes Chunk tatsächlich geschrieben wird (siehe nächsten Abschnitt).
- Die `close()`-Methode wird automatisch aufgerufen, wenn das Schreiben abgeschlossen ist – sie gibt das gesamte decodierte Ergebnis in einem String auf der Benutzeroberfläche aus.
- Die `abort()`-Methode gibt einen Fehler in der Konsole aus, wenn der Stream abgebrochen wird.

### Schreiben

Um tatsächlich Inhalte in den Stream zu schreiben, rufen wir die Funktion `sendMessage()` auf und übergeben ihr eine Nachricht, die geschrieben werden soll, sowie den Stream, in den geschrieben wird:

```js
sendMessage("Hello, world.", writableStream);
```

Die Definition von `sendMessage()` sieht folgendermaßen aus:

```js
function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => console.log("Chunk written to sink."))
      .catch((err) => console.error("Chunk error:", err));
  });
  // Call ready again to ensure that all chunks are written
  //   before closing the writer.
  defaultWriter.ready
    .then(() => defaultWriter.close())
    .then(() => console.log("All chunks written"))
    .catch((err) => console.error("Stream error:", err));
}
```

Hier erstellen wir einen Writer, um die Chunks in den Stream zu schreiben, indem wir [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter) verwenden. Dies erstellt eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter).

Wir erstellen auch eine neue Instanz von [`TextEncoder`](/de/docs/Web/API/TextEncoder) mit dem entsprechenden Konstruktor, um die Nachricht in Chunks zu kodieren, die in den Stream eingefügt werden sollen.

Mit den kodierten Chunks rufen wir dann [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach) auf dem resultierenden Array auf. In diesem Block verwenden wir [`WritableStreamDefaultWriter.ready`](/de/docs/Web/API/WritableStreamDefaultWriter/ready), um zu prüfen, ob der Writer bereit ist, ein weiteres Chunk geschrieben zu bekommen. `ready` gibt ein Promise zurück, das erfüllt wird, wenn dies der Fall ist, innerhalb dessen wir [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) aufrufen, um das Chunk tatsächlich in den Stream zu schreiben. Dies löst auch die `write()`-Methode aus, die im `WritableStream()`-Konstruktor angegeben ist, wie oben besprochen.

Nachdem alle Chunks geschrieben wurden, führen wir die `ready`-Prüfung einmal mehr durch, um sicherzustellen, dass das letzte Chunk fertig geschrieben wurde und alle Arbeiten abgeschlossen sind. Wenn diese `ready`-Prüfung erfüllt wird, rufen wir [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close) auf, um den Stream zu schließen. Dies löst auch die `close()`-Methode aus, die im `WritableStream()`-Konstruktor angegeben ist, wie oben besprochen.

### Controller

Wie Sie bemerkt haben, als Sie das Syntax-Grundgerüst von `WritableStream()` studierten, können die Methoden `start()`, `write()` und `close()` optional einen `controller` Parameter übergeben bekommen. Dieser enthält eine Instanz der [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController)-Schnittstelle, die vom Entwickler verwendet werden kann, um den Stream bei Bedarf weiter zu steuern.

Diese verfügt derzeit nur über eine verfügbare Methode — [`WritableStreamDefaultController.error()`](/de/docs/Web/API/WritableStreamDefaultController/error), die bei Aufruf verursacht, dass zukünftige Interaktionen mit dem Stream fehlerhaft sind. Dies ist nützlich, wenn in einem anderen Teil einer App etwas schiefgeht und Sie den Fehler an den Stream weitergeben möchten, damit das gesamte System sauber fehlschlägt, anstatt das Risiko einzugehen, dass Müll leise in den Stream geschrieben wird (oder etwas ähnlich Schlechtes).

### Schließen und Abbrechen

Wie oben erwähnt, rufen wir die `close()`-Methode auf, wenn das Schreiben abgeschlossen ist, was die `close()`-Methode auslöst, die im `WritableStream()`-Konstruktor angegeben ist.

Wir könnten den Stream auch abbrechen, indem wir [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort) aufrufen.

Der Unterschied ist, dass beim Aufrufen von close alle zuvor eingereihten Chunks geschrieben und fertiggestellt werden, bevor der Stream geschlossen wird.

Wenn abort aufgerufen wird, werden alle zuvor eingereihten Chunks sofort verworfen und der Stream wird in einen fehlerhaften Zustand versetzt. Dies löst auch jede im `WritableStream()`-Konstruktor angegebene `abort()`-Methode aus.
