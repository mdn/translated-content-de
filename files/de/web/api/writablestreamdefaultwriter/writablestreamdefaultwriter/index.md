---
title: "WritableStreamDefaultWriter: WritableStreamDefaultWriter() Konstruktor"
short-title: WritableStreamDefaultWriter()
slug: Web/API/WritableStreamDefaultWriter/WritableStreamDefaultWriter
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Der **`WritableStreamDefaultWriter()`**
Konstruktor erstellt eine neue Instanz des [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter).

> [!NOTE]
> Diesen Konstruktor würden Sie normalerweise nicht manuell verwenden; stattdessen
> würden Sie die Methode [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter) verwenden.

## Syntax

```js-nolint
new WritableStreamDefaultWriter(stream)
```

### Parameter

- `stream`
  - : Der [`WritableStream`](/de/docs/Web/API/WritableStream), der beschrieben werden soll.

### Rückgabewert

Eine Instanz des [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) Objekts.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der angegebene `stream`-Wert ist kein [`WritableStream`](/de/docs/Web/API/WritableStream), oder er
    ist bereits an einen anderen Writer gebunden.

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines `WritableStream` mit einem benutzerdefinierten
Sink und einer vom API bereitgestellten Warteschlangenstrategie. Es ruft dann eine Funktion namens
`sendMessage()` auf, wobei der neu erstellte Stream und ein String übergeben werden. Innerhalb dieser
Funktion wird die Methode `getWriter()` des Streams aufgerufen, die eine
Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt. Ein `forEach()`-Aufruf wird
verwendet, um jedes Stück des Strings in den Stream zu schreiben. Schließlich geben `write()` und
`close()` Versprechen zurück, die verarbeitet werden, um den Erfolg oder das Versagen
der Stücke und Streams zu behandeln.

```js
const list = document.querySelector("ul");

function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
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

Sie finden den vollständigen Code in unserem [einfachen Writer-Beispiel](https://mdn.github.io/dom-examples/streams/simple-writer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
