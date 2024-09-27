---
title: WritableStream
slug: Web/API/WritableStream
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`WritableStream`**-Interface der [Streams API](/de/docs/Web/API/Streams_API) bietet eine standardisierte Abstraktion zum Schreiben von Streaming-Daten zu einem Ziel, das als Sink bekannt ist. Dieses Objekt verfügt über integrierten Rückdruck und Warteschlangen.

`WritableStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`WritableStream()`](/de/docs/Web/API/WritableStream/WritableStream)
  - : Erstellt ein neues `WritableStream`-Objekt.

## Instanzeigenschaften

- [`WritableStream.locked`](/de/docs/Web/API/WritableStream/locked) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das `WritableStream` einem Writer zugewiesen ist.

## Instanzmethoden

- [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)
  - : Bricht den Stream ab und signalisiert, dass der Erzeuger nicht mehr erfolgreich in den Stream schreiben kann und dieser sofort in einen Fehlerzustand versetzt wird, wobei alle in die Warteschlange gestellten Schreibvorgänge verworfen werden.
- [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close)
  - : Schließt den Stream.
- [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter)
  - : Gibt eine neue Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurück und sperrt den Stream für diese Instanz. Solange der Stream gesperrt ist, kann kein anderer Writer erworben werden, bis dieser freigegeben wird.

## Beispiele

Das folgende Beispiel veranschaulicht mehrere Funktionen dieses Interfaces. Es zeigt die Erstellung des `WritableStream` mit einem benutzerdefinierten Sink und einer von der API bereitgestellten Warteschlangenstrategie. Dann wird eine Funktion namens `sendMessage()` aufgerufen, die den neu erstellten Stream und einen String übergibt. Innerhalb dieser Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt. Ein `forEach()`-Aufruf wird verwendet, um jedes Stück des Strings in den Stream zu schreiben. Schließlich geben `write()` und `close()` Promises zurück, die verarbeitet werden, um mit Erfolg oder Misserfolg von Chunks und Streams umzugehen.

```js
const list = document.querySelector("ul");

function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => defaultWriter.write(chunk))
      .then(() => {
        console.log("Chunk written to sink.");
      })
      .catch((err) => {
        console.log("Chunk error:", err);
      });
  });
  // Call ready again to ensure that all chunks are written
  //   before closing the writer.
  defaultWriter.ready
    .then(() => {
      defaultWriter.close();
    })
    .then(() => {
      console.log("All chunks written");
    })
    .catch((err) => {
      console.log("Stream error:", err);
    });
}

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
      console.log("Sink error:", err);
    },
  },
  queuingStrategy,
);

sendMessage("Hello, world.", writableStream);
```

Sie finden den vollständigen Code in unserem [Einfachen Writer-Beispiel](https://mdn.github.io/dom-examples/streams/simple-writer/).

### Rückdruck

Aufgrund der Unterstützung von [Rückdruck](/de/docs/Web/API/Streams_API/Concepts#backpressure) in der API ist die Implementierung im Code möglicherweise weniger offensichtlich. Um zu sehen, wie Rückdruck implementiert ist, achten Sie auf drei Dinge:

- Die `highWaterMark`-Eigenschaft, die beim Erstellen der Zählstrategie mit `new CountQueuingStrategy` gesetzt wird, bestimmt die maximale Datenmenge, die die `WritableStream`-Instanz in einer einzigen `write()`-Operation handhaben wird. In diesem Beispiel ist es die maximale Datenmenge, die an `defaultWriter.write()` in der `sendMessage`-Funktion gesendet werden kann.
- Die `defaultWriter.ready`-Eigenschaft gibt ein Promise zurück, das aufgelöst wird, wenn das Sink (die erste Eigenschaft des `WritableStream`-Konstruktors) mit dem Schreiben von Daten fertig ist. Die Datenquelle kann entweder mehr Daten mit `defaultWriter.write()` schreiben oder `defaultWriter.close()` aufrufen, wie im obigen Beispiel demonstriert. Ein zu frühes Aufrufen von `close()` kann verhindern, dass Daten geschrieben werden. Aus diesem Grund wird im Beispiel `defaultWriter.ready` zweimal aufgerufen.
- Das {{jsxref("Promise")}}, das von der `write()`-Methode des Sink zurückgegeben wird, teilt dem `WritableStream` und seinem Writer mit, wann `defaultWriter.ready` aufgelöst werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und transformierbaren Streams.
