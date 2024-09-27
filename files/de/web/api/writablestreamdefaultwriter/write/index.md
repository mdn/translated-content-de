---
title: "WritableStreamDefaultWriter: write()-Methode"
short-title: write()
slug: Web/API/WritableStreamDefaultWriter/write
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`write()`**-Methode der [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter)-Schnittstelle schreibt einen übergebenen Datenblock (`chunk`) in einen [`WritableStream`](/de/docs/Web/API/WritableStream) und dessen zugrundeliegendes Ziel (`sink`), und gibt dann ein {{jsxref("Promise")}} zurück, das angibt, ob der Schreibvorgang erfolgreich war oder fehlgeschlagen ist.

Beachten Sie, dass der Begriff "Erfolg" vom zugrundeliegenden Ziel abhängt; er könnte bedeuten, dass der Block akzeptiert wurde, aber nicht notwendigerweise, dass er sicher an seinem endgültigen Ziel gespeichert ist.

## Syntax

```js-nolint
write(chunk)
```

### Parameter

- `chunk`
  - : Ein Block aus Binärdaten, der an den `WritableStream` übergeben wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das bei einem erfolgreichen Schreibvorgang mit `undefined` erfüllt wird, oder abgelehnt wird, wenn der Schreibvorgang fehlschlägt oder der Stream vor Beginn des Schreibprozesses fehlerhaft wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Ziel-Stream ist kein schreibbarer Stream oder hat keinen Besitzer.

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines `WritableStream` mit einem benutzerdefinierten `sink` und einer von der API bereitgestellten Warteschlangenstrategie. Es ruft dann eine Funktion namens `sendMessage()` auf, die den neu erstellten Stream und einen String übergibt. Innerhalb dieser Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt. Ein `forEach()`-Aufruf wird verwendet, um jeden Block des Strings in den Stream zu schreiben. Schließlich geben `write()` und `close()` Promises zurück, die verarbeitet werden, um mit Erfolg oder Misserfolg von Blöcken und Streams umzugehen.

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

Den vollständigen Code finden Sie in unserem [Einfaches Schreiber-Beispiel](https://mdn.github.io/dom-examples/streams/simple-writer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
