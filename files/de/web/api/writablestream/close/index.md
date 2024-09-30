---
title: "WritableStream: close() Methode"
short-title: close()
slug: Web/API/WritableStream/close
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`close()`**-Methode des [`WritableStream`](/de/docs/Web/API/WritableStream)-Interfaces schließt den zugehörigen Stream. Alle Datenblöcke, die vor dem Aufruf dieser Methode geschrieben wurden, werden gesendet, bevor das zurückgegebene `Promise` erfüllt wird.

Dies ist gleichbedeutend damit, einen [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) mit [`getWriter()`](/de/docs/Web/API/WritableStream/getWriter) zu erhalten und darauf [`close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close) aufzurufen.

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn alle verbleibenden Datenblöcke vor dem Schließen erfolgreich geschrieben wurden, oder mit einem Fehler abgelehnt wird, wenn während des Prozesses ein Problem aufgetreten ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie versuchen zu schließen, ist gesperrt.

## Beispiele

Das folgende Beispiel veranschaulicht mehrere Funktionen des `WritableStream`. Es zeigt die Erstellung des `WritableStream` mit einem benutzerdefinierten Sink und einer von der API bereitgestellten Warteschlangenstrategie. Anschließend ruft es eine Funktion namens `sendMessage()` auf und übergibt den neu erstellten Stream sowie einen String. Innerhalb dieser Funktion wird die Methode `getWriter()` des Streams aufgerufen, die eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt. Ein `forEach()`-Aufruf wird verwendet, um jeden Datenblock des Strings an den Stream zu schreiben. Schließlich geben `write()` und `close()` Promises zurück, die verarbeitet werden, um mit dem Erfolg oder Misserfolg von Datenblöcken und Streams umzugehen. Beachten Sie, dass der Writer getrennt werden muss, um die `close()`-Methode direkt auf den Stream aufrufen zu können, indem `defaultWriter.releaseLock();` verwendet wird.

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
  const encoded = encoder.encode(message, { stream: true });
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

{{EmbedLiveSample("Beispiele", "100%", "100px")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
