---
title: "WritableStreamDefaultWriter: close() Methode"
short-title: close()
slug: Web/API/WritableStreamDefaultWriter/close
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`close()`**-Methode der
[`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Schnittstelle schließt den zugehörigen beschreibbaren
Stream.

Der zugrunde liegende Sink wird alle zuvor geschriebenen Chunks verarbeiten, bevor
das Schließverhalten aufgerufen wird. Während dieser Zeit schlagen weitere Schreibversuche fehl
(ohne den Stream zu fehlerhaft zu machen).

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der mit `undefined` erfüllt wird, wenn alle
verbleibenden Chunks erfolgreich vor dem Schließen geschrieben wurden, oder mit einem Fehler abgelehnt wird,
wenn während des Prozesses ein Problem aufgetreten ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie zu schließen versuchen, ist kein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines `WritableStream` mit einem benutzerdefinierten
Sink und einer von der API bereitgestellten Warteschlangenstrategie. Es ruft dann eine Funktion namens
`sendMessage()` auf, wobei der neu erstellte Stream und ein String übergeben werden. Innerhalb dieser
Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die eine
Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt. Jeder Chunk des
kodierten Strings wird mit der `write()`-Methode in den Stream geschrieben, wobei die
`forEach()`-Methode des kodierten `Uint8Array` verwendet wird, um ihn Byte für Byte zu verarbeiten.
Abschließend wird `close()` aufgerufen und das zurückgegebene Promise wird behandelt, um
mit Erfolg (oder eventuellen Fehlern) der chunkweisen Schreiboperationen umzugehen.

```js
const list = document.querySelector("ul");

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

Sie können eine Live-Demonstration davon in unserem [einfachen Schreibbeispiel](https://mdn.github.io/dom-examples/streams/simple-writer/) ansehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
