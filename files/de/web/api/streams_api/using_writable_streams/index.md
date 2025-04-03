---
title: Verwenden von beschreibbaren Streams
slug: Web/API/Streams_API/Using_writable_streams
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Streams")}}

Als JavaScript-Entwickler ist es sehr nützlich, programmatisch Daten in einen Stream zu schreiben! Dieser Artikel erklärt die Funktionalität beschreibbarer Streams der [Streams API](/de/docs/Web/API/Streams_API).

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle von beschreibbaren Streams verstehen und mit den grundlegenden Konzepten vertraut sind.
> Falls nicht, empfehlen wir Ihnen, zuerst den [Überblick über Streams-Konzepte und deren Verwendung](/de/docs/Web/API/Streams_API#concepts_and_usage) sowie den speziellen Artikel zu [Streams API-Konzepten](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukehren.

> [!NOTE]
> Wenn Sie nach Informationen zu lesbaren Streams suchen, versuchen Sie [Verwenden von lesbaren Streams](/de/docs/Web/API/Streams_API/Using_readable_streams) und [Verwenden von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).

## Einführung in ein Beispiel

In unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) Repository finden Sie ein [Einfaches Schreibbeispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-writer/index.html) ([sehen Sie es sich auch live an](https://mdn.github.io/dom-examples/streams/simple-writer/)). Es nimmt eine gegebene Nachricht und schreibt sie in einen beschreibbaren Stream, wobei jeder Chunk auf der Benutzeroberfläche angezeigt wird, sobald er in den Stream geschrieben wird. Die gesamte Nachricht wird auf der Benutzeroberfläche angezeigt, wenn das Schreiben abgeschlossen ist.

## Funktionsweise von beschreibbaren Streams

Schauen wir uns an, wie die Funktionalität der beschreibbaren Streams in unserem Demo funktioniert.

### Erstellen eines beschreibbaren Streams

Um einen beschreibbaren Stream zu erstellen, verwenden wir den [`WritableStream()`](/de/docs/Web/API/WritableStream/WritableStream) Konstruktor; die Syntax sieht zunächst komplex aus, ist aber eigentlich gar nicht so schlimm.

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

Der Konstruktor nimmt zwei Objekte als Parameter an. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript des zugrunde liegenden Sinks, in das die Daten geschrieben werden. Das zweite Objekt ist optional und ermöglicht es Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream zu spezifizieren, die in Form einer Instanz von [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy) erfolgt.

Das erste Objekt kann bis zu vier Mitglieder enthalten, die alle optional sind:

1. `start(controller)` — Eine Methode, die einmal nach dem Erstellen des [`WritableStream`](/de/docs/Web/API/WritableStream) aufgerufen wird. In dieser Methode sollten Sie Code einfügen, der die Stream-Funktionalität einrichtet, z.B. den Zugriff auf den zugrunde liegenden Sink erhalten.
2. `write(chunk,controller)` — Eine Methode, die wiederholt aufgerufen wird, wenn ein neuer Chunk bereit ist, in den zugrunde liegenden Sink geschrieben zu werden (im `chunk`-Parameter angegeben).
3. `close(controller)` — Eine Methode, die aufgerufen wird, wenn die App signalisiert, dass sie das Schreiben von Chunks in den Stream abgeschlossen hat. Sie sollte alles Nötige tun, um die Schreibvorgänge in den zugrunde liegenden Sink abzuschließen und den Zugriff darauf freizugeben.
4. `abort(reason)` — Eine Methode, die aufgerufen wird, wenn die App signalisiert, dass sie den Stream abrupt schließen und in einen Fehlerzustand versetzen möchte.

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

- Die `write()`-Methode enthält ein Versprechen, das jeden geschriebenen Chunk in ein Format dekodiert, das auf die Benutzeroberfläche geschrieben werden kann. Dies wird aufgerufen, wenn jeder Chunk tatsächlich geschrieben wird (siehe nächsten Abschnitt).
- Die `close()`-Methode wird automatisch aufgerufen, wenn das Schreiben abgeschlossen ist — sie gibt das gesamte dekodierte Ergebnis als eine Zeichenkette auf der Benutzeroberfläche aus.
- Die `abort()`-Methode gibt einen Fehler in der Konsole aus, wenn der Stream abgebrochen wird.

### Schreiben

Um tatsächlich Inhalt in den Stream zu schreiben, rufen wir die Funktion `sendMessage()` auf, indem wir ihr eine Nachricht übergeben, die geschrieben werden soll, und den Stream, in den geschrieben werden soll:

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

Wir erstellen auch eine neue Instanz von [`TextEncoder`](/de/docs/Web/API/TextEncoder) mit dem entsprechenden Konstruktor, um die Nachricht in Chunks zu kodieren, die in den Stream eingefügt werden.

Mit den kodierten Chunks rufen wir dann [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach) auf dem resultierenden Array auf. Innerhalb dieses Blocks verwenden wir [`WritableStreamDefaultWriter.ready`](/de/docs/Web/API/WritableStreamDefaultWriter/ready), um zu überprüfen, ob der Writer bereit ist, einen weiteren Chunk geschrieben zu bekommen. `ready` gibt ein Versprechen zurück, das erfüllt wird, wenn dies der Fall ist, innerhalb dessen wir [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) aufrufen, um den Chunk tatsächlich in den Stream zu schreiben. Dies löst auch die `write()`-Methode aus, die im `WritableStream()` Konstruktor angegeben ist, wie oben besprochen.

Nachdem alle Chunks geschrieben wurden, führen wir die `ready`-Überprüfung erneut durch, um sicherzustellen, dass der letzte Chunk fertig geschrieben wurde und alle Arbeiten abgeschlossen sind. Wenn diese `ready`-Überprüfung erfüllt ist, rufen wir [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close) auf, um den Stream zu schließen. Dies löst auch die `close()`-Methode aus, die im `WritableStream()` Konstruktor angegeben ist, wie oben besprochen.

### Controller

Wie Sie beim Studieren des `WritableStream()` Syntax-Skeletts bemerkt haben, können die Methoden `start()`, `write()` und `close()` optional einen `controller`-Parameter erhalten. Dieser enthält eine Instanz der [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController) Schnittstelle, die vom Entwickler verwendet werden kann, um den Stream nach Bedarf weiter zu steuern.

Dieser hat derzeit nur eine verfügbare Methode — [`WritableStreamDefaultController.error()`](/de/docs/Web/API/WritableStreamDefaultController/error), die bei Aufruf dazu führt, dass zukünftige Interaktionen mit dem Stream fehlerhaft sind. Dies ist nützlich, wenn ein anderer Teil einer App schiefgeht und Sie den Fehler an den Stream weitergeben möchten, damit das gesamte System sauber fehlschlägt, anstatt zu riskieren, dass Garbage still in den Stream geschrieben wird (oder etwas ähnlich Schlechtes).

### Schließen und Abbrechen

Wie oben erwähnt, rufen wir die `close()`-Methode auf, wenn das Schreiben abgeschlossen ist, wodurch die `close()`-Methode ausgelöst wird, die im `WritableStream()` Konstruktor angegeben ist.

Wir könnten den Stream auch abbrechen, indem wir [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort) aufrufen.

Der Unterschied besteht darin, dass beim Aufruf von `close` alle zuvor in die Warteschlange gestellten Chunks geschrieben und beendet werden, bevor der Stream geschlossen wird.

Beim Aufruf von `abort` werden alle zuvor in die Warteschlange gestellten Chunks einfach sofort verworfen und dann wird der Stream in einen Fehlerzustand versetzt. Dies löst auch jede `abort()`-Methode aus, die im `WritableStream()` Konstruktor angegeben ist.
