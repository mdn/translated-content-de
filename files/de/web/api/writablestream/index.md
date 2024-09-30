---
title: WritableStream
slug: Web/API/WritableStream
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`WritableStream`**-Schnittstelle der [Streams-API](/de/docs/Web/API/Streams_API) bietet eine standardisierte Abstraktion zum Schreiben von Streaming-Daten an ein Ziel, das als Senke bekannt ist. Dieses Objekt bietet integrierten Gegendruck und Warteschlangentechniken.

`WritableStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`WritableStream()`](/de/docs/Web/API/WritableStream/WritableStream)
  - : Erstellt ein neues `WritableStream`-Objekt.

## Instanz-Eigenschaften

- [`WritableStream.locked`](/de/docs/Web/API/WritableStream/locked) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob der `WritableStream` an einen Schreiber gebunden ist.

## Instanz-Methoden

- [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)
  - : Bricht den Stream ab und signalisiert, dass der Produzent nicht mehr erfolgreich in den Stream schreiben kann und er sofort in einen Fehlerzustand versetzt wird, wobei alle anstehenden Schreibvorgänge verworfen werden.
- [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close)
  - : Schließt den Stream.
- [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter)
  - : Gibt eine neue Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurück und sperrt den Stream für diese Instanz. Solange der Stream gesperrt ist, kann kein anderer Schreiber erworben werden, bis dieser freigegeben wird.

## Beispiele

Das folgende Beispiel veranschaulicht mehrere Funktionen dieser Schnittstelle. Es zeigt die Erstellung des `WritableStream` mit einer benutzerdefinierten Senke und einer von der API bereitgestellten Warteschlangenstrategie. Anschließend wird eine Funktion namens `sendMessage()` aufgerufen, die den neu erstellten Stream und einen String erhält. Innerhalb dieser Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt. Ein `forEach()`-Aufruf wird verwendet, um jedes Stück des Strings in den Stream zu schreiben. Schließlich geben `write()` und `close()` Promises zurück, die verarbeitet werden, um mit Erfolgen oder Fehlern von Stücken und Streams umzugehen.

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

Den vollständigen Code finden Sie in unserem [einfachen Schreibbeispiel](https://mdn.github.io/dom-examples/streams/simple-writer/).

### Gegendruck

Aufgrund der Unterstützung von [Gegendruck](/de/docs/Web/API/Streams_API/Concepts#backpressure) in der API ist dessen Implementierung im Code möglicherweise nicht offensichtlich. Um zu sehen, wie Gegendruck implementiert wird, suchen Sie nach drei Dingen:

- Die `highWaterMark`-Eigenschaft, die beim Erstellen der Zählstrategie mit `new CountQueuingStrategy` gesetzt wird, legt die maximale Menge an Daten fest, die die `WritableStream`-Instanz in einem einzigen `write()`-Vorgang verarbeiten kann. In diesem Beispiel ist es die maximale Datenmenge, die an `defaultWriter.write()` in der `sendMessage`-Funktion gesendet werden kann.
- Die `defaultWriter.ready`-Eigenschaft gibt ein Promise zurück, das aufgelöst wird, wenn die Senke (die erste Eigenschaft des `WritableStream`-Konstruktors) mit dem Schreiben der Daten fertig ist. Die Datenquelle kann entweder mehr Daten mit `defaultWriter.write()` schreiben oder `defaultWriter.close()` aufrufen, wie im obigen Beispiel gezeigt. Zu frühes Aufrufen von `close()` kann verhindern, dass Daten geschrieben werden. Deshalb ruft das Beispiel `defaultWriter.ready` zweimal auf.
- Das {{jsxref("Promise")}}, das durch die `write()`-Methode der Senke zurückgegeben wird, gibt dem `WritableStream` und seinem Schreiber an, wann `defaultWriter.ready` aufgelöst werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, beschreibbaren und Transform-Streams.
