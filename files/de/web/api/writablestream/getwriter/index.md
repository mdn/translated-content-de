---
title: "WritableStream: getWriter() Methode"
short-title: getWriter()
slug: Web/API/WritableStream/getWriter
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`getWriter()`** Methode des {{domxref("WritableStream")}} Interfaces gibt eine neue Instanz von {{domxref("WritableStreamDefaultWriter")}} zurück und sperrt den Stream für diese Instanz. Solange der Stream gesperrt ist, kann kein anderer Writer erworben werden, bis dieser freigegeben wird.

## Syntax

```js-nolint
getWriter()
```

### Parameter

Keine.

### Rückgabewert

Eine Instanz des {{domxref("WritableStreamDefaultWriter")}} Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, für den Sie versuchen, einen Writer zu erstellen, ist kein {{domxref("WritableStream")}} oder er ist bereits für einen anderen Writer gesperrt.

## Beispiele

Das folgende Beispiel zeigt mehrere Funktionen dieses Interfaces. Es zeigt die Erstellung des `WritableStream` mit einem benutzerdefinierten Sink und einer API-gelieferten Warteschlangenstrategie. Danach wird eine Funktion namens `sendMessage()` aufgerufen, die den neu erstellten Stream und einen String übergibt. Innerhalb dieser Funktion wird die `getWriter()` Methode des Streams aufgerufen, die eine Instanz von {{domxref("WritableStreamDefaultWriter")}} zurückgibt. Ein `forEach()` Aufruf wird verwendet, um jeden Teil des Strings in den Stream zu schreiben. Schließlich geben `write()` und `close()` Promises zurück, die verarbeitet werden, um mit Erfolg oder Misserfolg von Teilen und Streams umzugehen.

```js
const list = document.querySelector("ul");

function sendMessage(message, writableStream) {
  // defaultWriter ist vom Typ WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message, { stream: true });
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

Den vollständigen Code finden Sie in unserem [Simple writer example](https://mdn.github.io/dom-examples/streams/simple-writer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
