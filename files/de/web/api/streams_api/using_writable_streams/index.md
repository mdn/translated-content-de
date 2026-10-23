---
title: Schreibbare Streams verwenden
slug: Web/API/Streams_API/Using_writable_streams
l10n:
  sourceCommit: 2610bf04cc058d5ea2432012e6ade57394d9258c
---

{{DefaultAPISidebar("Streams")}}

Für JavaScript-Entwickler ist es sehr nützlich, Daten programmgesteuert in einen Stream zu schreiben. Dieser Artikel erläutert die Funktionen der [Streams API](/de/docs/Web/API/Streams_API) für schreibbare Streams.

> [!NOTE]
> Dieser Artikel setzt voraus, dass Sie die Anwendungsfälle für schreibbare Streams verstehen und mit den grundlegenden Konzepten vertraut sind.
> Falls nicht, empfehlen wir Ihnen, zuerst den [Überblick über Konzepte und Verwendung von Streams](/de/docs/Web/API/Streams_API#concepts_and_usage) und den ausführlichen Artikel zu den [Konzepten der Streams API](/de/docs/Web/API/Streams_API/Concepts) zu lesen und anschließend hierher zurückzukehren.

> [!NOTE]
> Wenn Sie Informationen zu lesbaren Streams suchen, lesen Sie stattdessen [Lesbare Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_streams) und [Lesbare Byte-Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_byte_streams).

## Ein Beispiel

Im Repository [dom-examples/streams](https://github.com/mdn/dom-examples/tree/main/streams) finden Sie ein [einfaches Beispiel für das Schreiben in einen Stream](https://github.com/mdn/dom-examples/blob/main/streams/simple-writer/index.html) ([auch als Live-Demo verfügbar](https://mdn.github.io/dom-examples/streams/simple-writer/)). Das Beispiel nimmt eine vorgegebene Nachricht und schreibt sie in einen schreibbaren Stream. Dabei zeigt es jeden Datenblock beim Schreiben auf der Benutzeroberfläche an und gibt nach Abschluss des Schreibvorgangs dort auch die gesamte Nachricht aus.

## Funktionsweise schreibbarer Streams

Sehen wir uns an, wie das Schreiben in einen Stream in unserer Demo funktioniert.

### Einen schreibbaren Stream erstellen

Um einen schreibbaren Stream zu erstellen, verwenden wir den Konstruktor [`WritableStream()`](/de/docs/Web/API/WritableStream/WritableStream). Die Syntax sieht zunächst kompliziert aus, ist aber recht überschaubar.

Das Grundgerüst der Syntax sieht so aus:

```js
const stream = new WritableStream(
  {
    start(controller) {},
    write(chunk, controller) {},
    close() {},
    abort(reason) {},
  },
  {
    highWaterMark: 3,
    size: () => 1,
  },
);
```

Der Konstruktor nimmt zwei Objekte als Parameter entgegen. Das erste Objekt ist erforderlich und bildet in JavaScript die zugrunde liegende Datensenke ab, in die die Daten geschrieben werden. Das zweite Objekt ist optional. Damit können Sie eine [benutzerdefinierte Warteschlangenstrategie](/de/docs/Web/API/Streams_API/Concepts#internal_queues_and_queuing_strategies) für Ihren Stream angeben, und zwar als Instanz von [`ByteLengthQueuingStrategy`](/de/docs/Web/API/ByteLengthQueuingStrategy) oder [`CountQueuingStrategy`](/de/docs/Web/API/CountQueuingStrategy).

Das erste Objekt kann bis zu vier Eigenschaften enthalten, die alle optional sind:

1. `start(controller)` — Eine Methode, die unmittelbar nach der Erstellung des [`WritableStream`](/de/docs/Web/API/WritableStream) einmal aufgerufen wird. In dieser Methode sollten Sie den Code zur Einrichtung der Stream-Funktionalität unterbringen, beispielsweise um Zugriff auf die zugrunde liegende Datensenke zu erhalten.
2. `write(chunk,controller)` — Eine Methode, die jedes Mal aufgerufen wird, wenn ein neuer Datenblock bereit ist, in die zugrunde liegende Datensenke geschrieben zu werden. Der Datenblock wird im Parameter `chunk` übergeben.
3. `close()` — Eine Methode, die aufgerufen wird, wenn die Anwendung signalisiert, dass sie keine weiteren Datenblöcke in den Stream schreiben wird. Sie sollte alle erforderlichen Schritte ausführen, um die Schreibvorgänge für die zugrunde liegende Datensenke abzuschließen und den Zugriff darauf freizugeben.
4. `abort(reason)` — Eine Methode, die aufgerufen wird, wenn die Anwendung signalisiert, dass sie den Stream unvermittelt beenden und in einen Fehlerzustand versetzen möchte.

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

- Die Methode `write()` enthält ein Promise mit Code, der jeden geschriebenen Datenblock in ein Format dekodiert, das auf der Benutzeroberfläche angezeigt werden kann. Sie wird aufgerufen, wenn der jeweilige Datenblock tatsächlich geschrieben wird (siehe den nächsten Abschnitt).
- Die Methode `close()` wird automatisch aufgerufen, wenn der Schreibvorgang abgeschlossen ist. Sie gibt das gesamte dekodierte Ergebnis als eine Zeichenfolge auf der Benutzeroberfläche aus.
- Die Methode `abort()` gibt einen Fehler in der Konsole aus, wenn der Stream abgebrochen wird.

### Schreiben

Um Inhalte tatsächlich in den Stream zu schreiben, rufen wir die Funktion `sendMessage()` auf und übergeben ihr die zu schreibende Nachricht sowie den Stream, in den geschrieben werden soll:

```js
sendMessage("Hello, world.", writableStream);
```

Die Definition von `sendMessage()` sieht so aus:

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

Hier erstellen wir also mit [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter) einen Writer, um die Datenblöcke in den Stream zu schreiben. Dadurch entsteht eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter).

Außerdem erstellen wir mit dem entsprechenden Konstruktor eine neue Instanz von [`TextEncoder`](/de/docs/Web/API/TextEncoder), um die Nachricht in Datenblöcke zu kodieren, die in den Stream geschrieben werden können.

Nachdem die Datenblöcke kodiert wurden, rufen wir [`forEach()`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/forEach) für das resultierende Array auf. Innerhalb dieses Blocks prüfen wir mit [`WritableStreamDefaultWriter.ready`](/de/docs/Web/API/WritableStreamDefaultWriter/ready), ob der Writer bereit ist, einen weiteren Datenblock entgegenzunehmen. `ready` gibt ein Promise zurück, das erfüllt wird, sobald dies der Fall ist. Anschließend rufen wir [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write) auf, um den Datenblock tatsächlich in den Stream zu schreiben. Dadurch wird auch die Methode `write()` ausgelöst, die wie oben beschrieben im Konstruktor `WritableStream()` angegeben wurde.

Nachdem alle Datenblöcke geschrieben wurden, prüfen wir `ready` noch einmal, um sicherzustellen, dass der letzte Datenblock vollständig geschrieben und die gesamte Arbeit erledigt ist. Sobald dieses `ready`-Promise erfüllt wird, rufen wir [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close) auf, um den Stream zu schließen. Dadurch wird auch die Methode `close()` ausgelöst, die wie oben beschrieben im Konstruktor `WritableStream()` angegeben wurde.

### Controller

Wie Sie beim Betrachten des Syntaxgerüsts von `WritableStream()` vielleicht bemerkt haben, kann den Methoden `start()`, `write()` und `close()` optional ein Parameter `controller` übergeben werden. Dieser enthält eine Instanz der Schnittstelle [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController), mit der Entwickler den Stream bei Bedarf weiter steuern können.

Derzeit steht dafür nur eine Methode zur Verfügung: [`WritableStreamDefaultController.error()`](/de/docs/Web/API/WritableStreamDefaultController/error). Wird sie aufgerufen, führen zukünftige Interaktionen mit dem Stream zu einem Fehler. Das ist nützlich, wenn in einem anderen Teil der Anwendung ein Fehler auftritt und Sie ihn an den Stream weitergeben möchten. So kann das gesamte System kontrolliert mit einem Fehler abbrechen, anstatt zu riskieren, dass unbemerkt fehlerhafte Daten in den Stream geschrieben werden oder Ähnliches geschieht.

### Schließen und Abbrechen

Wie oben beschrieben, rufen wir nach Abschluss des Schreibvorgangs `close()` auf. Dadurch wird die im Konstruktor `WritableStream()` angegebene Methode `close()` ausgelöst.

Wir könnten den Stream auch durch Aufruf von [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort) abbrechen.

Der Unterschied besteht darin, dass beim Schließen zunächst alle zuvor in die Warteschlange eingereihten Datenblöcke vollständig geschrieben werden, bevor der Stream geschlossen wird.

Beim Abbrechen werden dagegen alle zuvor eingereihten Datenblöcke sofort verworfen und der Stream in einen Fehlerzustand versetzt. Dadurch wird auch eine gegebenenfalls im Konstruktor `WritableStream()` angegebene Methode `abort()` aufgerufen.
