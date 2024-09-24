---
title: "WritableStreamDefaultWriter: write()-Methode"
short-title: write()
slug: Web/API/WritableStreamDefaultWriter/write
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`write()`**-Methode der Schnittstelle {{domxref("WritableStreamDefaultWriter")}} schreibt einen übergebenen Datenblock in einen {{domxref("WritableStream")}} und dessen zugrunde liegenden Sink und gibt dann ein {{jsxref("Promise")}} zurück, das auf den Erfolg oder Misserfolg des Schreibvorgangs hinweist.

Beachten Sie, dass der Begriff "Erfolg" vom zugrunde liegenden Sink bestimmt wird; es könnte bedeuten, dass der Datenblock akzeptiert wurde und nicht unbedingt, dass er sicher an sein endgültiges Ziel gespeichert wurde.

## Syntax

```js-nolint
write(chunk)
```

### Parameter

- `chunk`
  - : Ein Datenblock, der an den `WritableStream` übergeben werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das bei einem erfolgreichen Schreibvorgang mit `undefined` erfüllt wird oder abgelehnt wird, wenn das Schreiben fehlschlägt oder der Stream einen Fehler aufweist, bevor der Schreibprozess eingeleitet wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Zielstream ist kein beschreibbarer Stream oder hat keinen Besitzer.

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines `WritableStream` mit einem benutzerdefinierten Sink und einer vom API bereitgestellten Warteschlangenstrategie. Es ruft dann eine Funktion namens `sendMessage()` auf, übergibt den neu erstellten Stream und einen String. Innerhalb dieser Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz von {{domxref("WritableStreamDefaultWriter")}} zurückgibt. Ein `forEach()`-Aufruf wird verwendet, um jeden Block des Strings in den Stream zu schreiben. Schließlich geben `write()` und `close()` Versprechungen zurück, die verarbeitet werden, um mit dem Erfolg oder Misserfolg von Blöcken und Streams umzugehen.

```js
const list = document.querySelector("ul");

function sendMessage(message, writableStream) {
  // defaultWriter ist vom Typ WritableStreamDefaultWriter
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
    // Implementieren Sie den Sink
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

Sie können den vollständigen Code in unserem [einfachen Schreibe-Beispiel](https://mdn.github.io/dom-examples/streams/simple-writer/) finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
