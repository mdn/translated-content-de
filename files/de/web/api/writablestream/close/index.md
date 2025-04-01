---
title: "WritableStream: close() Methode"
short-title: close()
slug: Web/API/WritableStream/close
l10n:
  sourceCommit: 1fdb14f1bc00789a1dc8bf347b08b5b94d717f0c
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`close()`** Methode der [`WritableStream`](/de/docs/Web/API/WritableStream) Schnittstelle schließt den zugehörigen Stream. Alle Chunks, die geschrieben wurden, bevor diese Methode aufgerufen wird, werden gesendet, bevor das zurückgegebene Promise erfüllt wird.

Dies entspricht dem Abrufen eines [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) mit [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) und dem Aufruf von [`close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close) darauf.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn alle verbleibenden Chunks erfolgreich geschrieben wurden, bevor der Stream geschlossen wurde, oder das mit einem Fehler abgelehnt wird, wenn während des Vorgangs ein Problem aufgetreten ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie zu schließen versuchen, ist gesperrt.

## Beispiele

Das folgende Beispiel veranschaulicht mehrere Funktionen des `WritableStream`. Es zeigt die Erstellung des `WritableStream` mit einem benutzerdefinierten Sink und einer vom API bereitgestellten Warteschlangenstrategie. Anschließend wird eine Funktion namens `sendMessage()` aufgerufen und der neu erstellte Stream sowie ein String übergeben. In dieser Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt. Ein `forEach()`-Aufruf wird verwendet, um jeden Chunk des Strings in den Stream zu schreiben. Schließlich geben `write()` und `close()` Promises zurück, die verarbeitet werden, um mit Erfolg oder Misserfolg von Chunks und Streams umzugehen. Beachten Sie, dass der Writer getrennt werden muss, um `close()` direkt auf dem Stream aufrufen zu können, indem `defaultWriter.releaseLock();` verwendet wird.

```html hidden
<ul id="log"></ul>
```

```js hidden
const list = document.getElementById("log");
function log(message) {
  const listItem = document.createElement("li");
  listItem.textContent = message;
  list.appendChild(listItem);
}
```

```js
function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => {
        defaultWriter.write(chunk);
      })
      .catch((err) => {
        log("Chunk error:", err);
      });
  });

  // Call ready again to ensure that all chunks are written
  //   before closing the writer.
  defaultWriter.ready
    .then(() => {
      defaultWriter.releaseLock();
      writableStream.close();
    })
    .then(() => {
      log("All chunks written / stream closed.");
    })
    .catch((err) => {
      log("Stream error:", err);
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
        result += decoded;
        resolve();
      });
    },
    close() {
      const listItem = document.createElement("li");
      log(`[MESSAGE RECEIVED] ${result}`);
    },
    abort(err) {
      log("Sink error:", err);
    },
  },
  queuingStrategy,
);

log("Sending 'Hello, world.' message.");
sendMessage("Hello, world.", writableStream);
```

{{EmbedLiveSample("Examples", "100%", "100px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
