---
title: "WritableStreamDefaultWriter: write() Methode"
short-title: write()
slug: Web/API/WritableStreamDefaultWriter/write
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`write()`**-Methode der [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Schnittstelle schreibt einen übergebenen Datenblock in einen [`WritableStream`](/de/docs/Web/API/WritableStream) und dessen zugrundeliegenden Sink und gibt ein {{jsxref("Promise")}} zurück, das auflöst, um den Erfolg oder Misserfolg des Schreibvorgangs anzuzeigen.

Beachten Sie, dass die Definition von „Erfolg“ vom zugrundeliegenden Sink abhängt; es könnte bedeuten, dass der Block akzeptiert wurde, und nicht unbedingt, dass er sicher an seinem endgültigen Ziel gespeichert wurde.

## Syntax

```js-nolint
write(chunk)
```

### Parameter

- `chunk`
  - : Ein Block von Binärdaten, der an den `WritableStream` übergeben werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das bei erfolgreichem Schreiben mit `undefined` erfüllt wird oder abgelehnt wird, wenn das Schreiben fehlschlägt oder der Stream fehlerhaft wird, bevor der Schreibprozess gestartet wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Zielstream ist kein beschreibbarer Stream oder hat keinen Eigentümer.

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines `WritableStream` mit einem benutzerdefinierten Sink und einer von der API bereitgestellten Wartestrategie. Es ruft dann eine Funktion namens `sendMessage()` auf, übergibt den neu erstellten Stream und einen String. Innerhalb dieser Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die ein Exemplar von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt. Ein `forEach()`-Aufruf wird verwendet, um jeden Block des Strings in den Stream zu schreiben. Schließlich geben `write()` und `close()` Promises zurück, die verarbeitet werden, um den Erfolg oder Misserfolg von Blöcken und Streams zu behandeln.

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

Sie finden den vollständigen Code in unserem [einfachen Writer-Beispiel](https://mdn.github.io/dom-examples/streams/simple-writer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
