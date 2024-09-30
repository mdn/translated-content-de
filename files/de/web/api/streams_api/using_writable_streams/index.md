---
title: Verwendung von Writable Streams
slug: Web/API/Streams_API/Using_writable_streams
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Streams")}}

Für JavaScript-Entwickler ist das programmatische Schreiben von Daten in einen Stream sehr nützlich! Dieser Artikel erklärt die Funktionalität von Writable Streams der [Streams API](/de/docs/Web/API/Streams_API).

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von Writable Streams verstehen und mit den grundlegenden Konzepten vertraut sind.
> Falls nicht, empfehlen wir Ihnen, zuerst den [Überblick über die Streams-Konzepte und -Verwendung](/de/docs/Web/API/Streams_API#concepts_and_usage) sowie den speziellen Artikel [Streams API-Konzepte](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukommen.

> [!NOTE]
> Wenn Sie Informationen über Writable Streams suchen, probieren Sie stattdessen [Verwendung von readable Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) und [Verwendung von readable byte Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) aus.

## Einführung eines Beispiels

In unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repository finden Sie ein [einfaches Writer-Beispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-writer/index.html) ([siehe es auch live](https://mdn.github.io/dom-examples/streams/simple-writer/)). Dieses nimmt eine gegebene Nachricht und schreibt sie in einen Writable Stream, wobei jedes Chunk im UI angezeigt wird, sobald es in den Stream geschrieben wird. Außerdem wird die gesamte Nachricht im UI angezeigt, wenn das Schreiben abgeschlossen ist.

## Wie Writable Streams funktionieren

Schauen wir uns an, wie die Funktionalität eines Writable Streams in unserem Demo funktioniert.

### Konstruktion eines Writable Streams

Um einen Writable Stream zu erstellen, verwenden wir den [`WritableStream()`](/de/docs/Web/API/WritableStream/WritableStream)-Konstruktor; die Syntax sieht auf den ersten Blick komplex aus, ist es aber nicht wirklich.

Das Syntax-Skelett sieht so aus:

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

Der Konstruktor nimmt zwei Objekte als Parameter. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript des zugrunde liegenden Sinks, in das die Daten geschrieben werden. Das zweite Objekt ist optional und ermöglicht es Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream anzugeben, die in Form einer Instanz von [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy) vorliegt.

Das erste Objekt kann bis zu vier Mitglieder enthalten, die alle optional sind:

1. `start(controller)` — Eine Methode, die einmal unmittelbar nach dem Konstruktion des [`WritableStream`](/de/docs/Web/API/WritableStream) aufgerufen wird. In dieser Methode sollten Sie Code einfügen, der die Stream-Funktionalität einrichtet, z.B. Zugriff auf den zugrunde liegenden Sink erhält.
2. `write(chunk,controller)` — Eine Methode, die wiederholt aufgerufen wird, wenn ein neues Chunk bereit ist, in den zugrunde liegenden Sink (im `chunk`-Parameter angegeben) geschrieben zu werden.
3. `close(controller)` — Eine Methode, die aufgerufen wird, wenn die App signalisiert, dass sie das Schreiben der Chunks in den Stream abgeschlossen hat. Sie sollte tun, was nötig ist, um das Schreiben in den zugrunde liegenden Sink abzuschließen und den Zugriff darauf freizugeben.
4. `abort(reason)` — Eine Methode, die aufgerufen wird, wenn die App signalisiert, dass sie den Stream abrupt schließen und in einen fehlerhaften Zustand versetzen möchte.

Der Konstruktoraufruf in unserem Beispiel sieht so aus:

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

- Die `write()` Methode enthält ein Promise, das Code enthält, der jedes geschriebene Chunk in ein Format dekodiert, das auf das UI geschrieben werden kann. Dies wird aufgerufen, wenn jedes Chunk tatsächlich geschrieben wird (siehe nächste Abschnitt).
- Die `close()` Methode wird automatisch aufgerufen, wenn das Schreiben abgeschlossen ist — sie druckt das gesamte dekodierte Ergebnis als eine Zeichenkette auf das UI.
- Die `abort()` Methode gibt einen Fehler in der Konsole aus, wenn der Stream abgebrochen wird.

### Schreiben

Um tatsächlich Inhalte in den Stream zu schreiben, rufen wir die `sendMessage()` Funktion auf, indem wir ihr eine Nachricht übergeben, die geschrieben werden soll, sowie den Stream, in den geschrieben werden soll:

```js
sendMessage("Hello, world.", writableStream);
```

Die Definition von `sendMessage()` sieht so aus:

```js
function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
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

Wir erstellen auch eine neue Instanz von [`TextEncoder`](/de/docs/Web/API/TextEncoder) mit dem entsprechenden Konstruktor, um die Nachricht in Chunks zu kodieren, die in den Stream eingefügt werden.

Mit den kodierten Chunks rufen wir dann [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) auf das resultierende Array auf. Innerhalb dieses Blocks verwenden wir [`WritableStreamDefaultWriter.ready`](/de/docs/Web/API/WritableStreamDefaultWriter/ready), um zu überprüfen, ob der Writer bereit ist, ein weiteres Chunk zu schreiben. `ready` gibt ein Promise zurück, das erfüllt wird, wenn dies der Fall ist, in dem wir [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) aufrufen, um das Chunk tatsächlich in den Stream zu schreiben. Dies löst auch die `write()` Methode aus, die innerhalb des `WritableStream()`-Konstruktors spezifiziert wurde, wie oben diskutiert.

Nachdem alle Chunks geschrieben wurden, führen wir die `ready`-Prüfung noch einmal durch, um zu überprüfen, ob das letzte Chunk fertig geschrieben ist und alle Arbeiten abgeschlossen sind. Wenn diese `ready`-Prüfung erfüllt ist, rufen wir [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close) auf, um den Stream zu schließen. Dies löst auch die `close()` Methode aus, die innerhalb des `WritableStream()`-Konstruktors spezifiziert wurde, wie oben diskutiert.

### Controller

Wie Sie beim Studium des `WritableStream()`-Syntax-Skeletts bemerkt haben, können die `start()`, `write()` und `close()` Methoden optional einen `controller` Parameter übergeben bekommen. Dieser enthält eine Instanz der [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController) Schnittstelle, die vom Entwickler verwendet werden kann, um den Stream weiter nach Bedarf zu steuern.

Darin ist aktuell nur eine Methode verfügbar — [`WritableStreamDefaultController.error()`](/de/docs/Web/API/WritableStreamDefaultController/error), die bei Aufruf bewirkt, dass zukünftige Interaktionen mit dem Stream fehlerhaft sind. Dies ist nützlich, wenn ein anderer Teil einer App fehlschlägt und Sie den Fehler an den Stream weiterleiten möchten, damit das gesamte System sauber ausfällt, anstatt zu riskieren, dass Müll stillschweigend in den Stream geschrieben wird (oder etwas ähnlich Schlechtes).

### Schließen und Abbrechen

Wie oben erwähnt, rufen wir die `close()` Methode auf, wenn das Schreiben abgeschlossen ist, was die im `WritableStream()`-Konstruktor spezifizierte `close()` Methode auslöst.

Wir könnten den Stream auch abbrechen, indem wir [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort) aufrufen.

Der Unterschied besteht darin, dass, wenn `close` aufgerufen wird, alle zuvor eingereihten Chunks geschrieben und fertiggestellt werden, bevor der Stream geschlossen wird.

Wenn `abort` aufgerufen wird, werden alle zuvor eingereihten Chunks sofort verworfen und der Stream wird in einen fehlerhaften Zustand versetzt. Dies bewirkt auch, dass eine im `WritableStream()`-Konstruktor spezifizierte `abort()` Methode aufgerufen wird.
