---
title: Verwendung von writable streams
slug: Web/API/Streams_API/Using_writable_streams
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{DefaultAPISidebar("Streams")}}

Für JavaScript-Entwickler ist das programmatische Schreiben von Daten in einen Stream sehr nützlich! Dieser Artikel erklärt die Funktionalität von writable streams der [Streams API](/de/docs/Web/API/Streams_API).

> [!NOTE]
> Dieser Artikel setzt voraus, dass Ihnen die Anwendungsfälle von writable streams bekannt sind und Sie die grundlegenden Konzepte verstehen.
> Falls nicht, empfehlen wir Ihnen, zuerst den Artikel [Überblick über Streams-Konzepte und -Nutzung](/de/docs/Web/API/Streams_API#concepts_and_usage) sowie den dedizierten Artikel zu [Streams API-Konzepten](/de/docs/Web/API/Streams_API/Concepts) zu lesen und dann zurückzukehren.

> [!NOTE]
> Wenn Sie Informationen zu readable streams suchen, versuchen Sie es stattdessen mit [Verwendung von readable streams](/de/docs/Web/API/Streams_API/Using_readable_streams) und [Verwendung von readable byte streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).

## Einführung eines Beispiels

In unserem [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams)-Repository finden Sie ein [einfaches Schreibbeispiel](https://github.com/mdn/dom-examples/blob/main/streams/simple-writer/index.html) ([siehe es live](https://mdn.github.io/dom-examples/streams/simple-writer/)). Dieses nimmt eine gegebene Nachricht und schreibt sie in einen writable stream. Dabei wird jeder Chunk in der Benutzeroberfläche angezeigt, während er in den Stream geschrieben wird, und die gesamte Nachricht wird in der Benutzeroberfläche angezeigt, wenn das Schreiben abgeschlossen ist.

## Wie writable streams funktionieren

Schauen wir uns an, wie die writable stream-Funktionalität in unserem Demo funktioniert.

### Konstruktion eines writable streams

Um einen writable stream zu erstellen, verwenden wir den [`WritableStream()`](/de/docs/Web/API/WritableStream/WritableStream)-Konstruktor; die Syntax erscheint zunächst komplex, ist es aber eigentlich nicht.

Das Syntaxgerüst sieht so aus:

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

Der Konstruktor nimmt zwei Objekte als Parameter. Das erste Objekt ist erforderlich und erstellt ein Modell in JavaScript des zugrunde liegenden Sinks, in den die Daten geschrieben werden. Das zweite Objekt ist optional und ermöglicht es Ihnen, eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream anzugeben, die in Form einer Instanz von [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy) erfolgt.

Das erste Objekt kann bis zu vier Mitglieder enthalten, die alle optional sind:

1. `start(controller)` — Eine Methode, die einmal aufgerufen wird, unmittelbar nachdem der [`WritableStream`](/de/docs/Web/API/WritableStream) konstruiert wurde. Innerhalb dieser Methode sollten Sie Code einfügen, der die Stream-Funktionalität einrichtet, z.B. Zugriff auf den zugrunde liegenden Sink erhalten.
2. `write(chunk,controller)` — Eine Methode, die wiederholt aufgerufen wird, jedes Mal, wenn ein neuer Chunk bereit ist, in den zugrunde liegenden Sink geschrieben zu werden (im `chunk`-Parameter angegeben).
3. `close(controller)` — Eine Methode, die aufgerufen wird, wenn die App signalisiert, dass sie das Schreiben von Chunks in den Stream abgeschlossen hat. Es sollte alles Notwendige tun, um das Schreiben in den zugrunde liegenden Sink abzuschließen und den Zugriff darauf freizugeben.
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

- Die `write()`-Methode enthält ein Versprechen, das jeden geschriebenen Chunk in ein Format dekodiert, das in die Benutzeroberfläche geschrieben werden kann. Diese Methode wird aufgerufen, wenn jeder Chunk tatsächlich geschrieben wird (siehe nächsten Abschnitt).
- Die `close()`-Methode wird automatisch aufgerufen, wenn das Schreiben abgeschlossen ist – sie gibt das gesamte dekodierte Ergebnis als einen String in der Benutzeroberfläche aus.
- Die `abort()`-Methode gibt einen Fehler in der Konsole aus, wenn der Stream abgebrochen wird.

### Schreiben

Um tatsächlich Inhalte in den Stream zu schreiben, rufen wir die Funktion `sendMessage()` auf, übergeben ihr eine Nachricht, die geschrieben werden soll, und den Stream, in den geschrieben werden soll:

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

Hier erstellen wir also einen Writer, um die Chunks mithilfe von [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter) in den Stream zu schreiben. Dies erstellt eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter).

Wir erstellen außerdem eine neue Instanz von [`TextEncoder`](/de/docs/Web/API/TextEncoder) mithilfe des entsprechenden Konstruktors, um die Nachricht in Chunks zu kodieren, die in den Stream eingefügt werden sollen.

Mit den kodierten Chunks rufen wir dann [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) auf dem resultierenden Array auf. Innerhalb dieses Blocks verwenden wir [`WritableStreamDefaultWriter.ready`](/de/docs/Web/API/WritableStreamDefaultWriter/ready), um zu prüfen, ob der Writer bereit ist, einen weiteren Chunk in ihn zu schreiben. `ready` gibt ein Versprechen zurück, das erfüllt wird, wenn dies der Fall ist, in dem wir [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) aufrufen, um den Chunk tatsächlich in den Stream zu schreiben. Dies wiederum löst die im `WritableStream()`-Konstruktor angegebene `write()`-Methode aus, wie oben besprochen.

Nachdem alle Chunks geschrieben wurden, führen wir die `ready`-Prüfung noch einmal durch, um zu überprüfen, ob der letzte Chunk fertig geschrieben wurde und alle Arbeiten erledigt sind. Wenn diese `ready`-Prüfung erfüllt ist, rufen wir [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close) auf, um den Stream zu schließen. Dies löst auch die im `WritableStream()`-Konstruktor angegebene `close()`-Methode aus, wie oben besprochen.

### Controller

Wie Sie beim Studium des `WritableStream()`-Syntaxgerüsts bemerkt haben, können die Methoden `start()`, `write()` und `close()` optional einen `controller`-Parameter erhalten. Dieser enthält eine Instanz der [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController)-Schnittstelle, die vom Entwickler verwendet werden kann, um den Stream bei Bedarf weiter zu steuern.

Aktuell hat dieser nur eine verfügbare Methode — [`WritableStreamDefaultController.error()`](/de/docs/Web/API/WritableStreamDefaultController/error), die beim Aufruf dazu führt, dass zukünftige Interaktionen mit dem Stream fehlschlagen. Dies ist nützlich, wenn ein anderer Teil einer App fehlschlägt und Sie den Fehler an den Stream weitergeben wollen, damit das gesamte System sauber fehlschlägt, anstatt das Risiko einzugehen, dass Müll stillschweigend in den Stream geschrieben wird (oder etwas ähnlich Schlimmes).

### Schließen und Abbrechen

Wie oben erwähnt, rufen wir die `close()`-Methode auf, wenn das Schreiben abgeschlossen ist, was die im `WritableStream()`-Konstruktor angegebene `close()`-Methode auslöst.

Wir könnten den Stream auch abbrechen, indem wir [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort) aufrufen.

Der Unterschied besteht darin, dass beim Aufrufen von `close()` alle zuvor in die Warteschlange gestellten Chunks geschrieben und abgeschlossen werden, bevor der Stream geschlossen wird.

Beim Aufrufen von `abort()` werden alle zuvor in die Warteschlange gestellten Chunks sofort verworfen, und der Stream wird in einen fehlerhaften Zustand versetzt. Dies löst auch die im `WritableStream()`-Konstruktor angebene `abort()`-Methode aus.
