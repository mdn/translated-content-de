---
title: "WritableStreamDefaultWriter: WritableStreamDefaultWriter() Konstruktor"
short-title: WritableStreamDefaultWriter()
slug: Web/API/WritableStreamDefaultWriter/WritableStreamDefaultWriter
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`WritableStreamDefaultWriter()`** Konstruktor erstellt eine neue Instanz des {{domxref("WritableStreamDefaultWriter")}} Objekts.

> [!NOTE]
> Im Allgemeinen würden Sie diesen Konstruktor nicht manuell verwenden; stattdessen würden Sie die Methode {{domxref("WritableStream.getWriter()")}} verwenden.

## Syntax

```js-nolint
new WritableStreamDefaultWriter(stream)
```

### Parameter

- `stream`
  - : Der {{domxref("WritableStream")}}, in den geschrieben werden soll.

### Rückgabewert

Eine Instanz des {{domxref("WritableStreamDefaultWriter")}} Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der angegebene `stream`-Wert ist kein {{domxref("WritableStream")}}, oder er ist bereits an einen anderen Writer gebunden.

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines `WritableStream` mit einem benutzerdefinierten Senke und einer von der API bereitgestellten Warteschlangenstrategie. Dann wird eine Funktion namens `sendMessage()` aufgerufen, die den neu erstellten Stream und einen String übergibt. Innerhalb dieser Funktion wird die Methode `getWriter()` des Streams aufgerufen, die eine Instanz von {{domxref("WritableStreamDefaultWriter")}} zurückgibt. Ein `forEach()`-Aufruf wird verwendet, um jedes Chunk des Strings in den Stream zu schreiben. Schließlich geben `write()` und `close()` Promises zurück, die verarbeitet werden, um mit dem Erfolg oder dem Misserfolg von Chunks und Streams umzugehen.

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
  // Rufen Sie ready erneut auf, um sicherzustellen, dass alle Chunks geschrieben werden,
  // bevor der Writer geschlossen wird.
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
    // Implementieren Sie die Senke
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

Den vollständigen Code finden Sie in unserem [einfachen Writer-Beispiel](https://mdn.github.io/dom-examples/streams/simple-writer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
