---
title: "WritableStreamDefaultWriter: close()-Methode"
short-title: close()
slug: Web/API/WritableStreamDefaultWriter/close
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`close()`**-Methode der
{{domxref("WritableStreamDefaultWriter")}}-Schnittstelle schließt den
zugehörigen schreibbaren Stream.

Der zugrunde liegende Sink wird alle zuvor geschriebenen Teile verarbeiten, bevor
das Schließen ausgeführt wird. Während dieser Zeit schlagen alle weiteren Schreibversuche fehl
(ohne den Stream zu fehlerfrei zu machen).

## Syntax

```js-nolint
close()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit `undefined` erfüllt wird, wenn alle
verbleibenden Chunks erfolgreich geschrieben wurden, bevor das Schließen erfolgt, oder mit einem Fehler abgelehnt wird, wenn
während des Prozesses ein Problem aufgetreten ist.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Der Stream, den Sie zu schließen versuchen, ist kein {{domxref("WritableStream")}}.

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines `WritableStream` mit einem benutzerdefinierten
Sink und einer von der API bereitgestellten Warteschlangenstrategie. Dann wird eine Funktion namens
`sendMessage()` aufgerufen, wobei der neu erstellte Stream und ein String übergeben werden. Innerhalb dieser
Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die eine
Instanz von {{domxref("WritableStreamDefaultWriter")}} zurückgibt. Jeder Chunk des
kodierten Strings wird mit der `write()`-Methode in den Stream geschrieben, und die
`forEach()`-Methode des codierten `Uint8Array`, um ihn byteweise zu verarbeiten.
Schließlich wird `close()` aufgerufen und das zurückgegebene Promise verarbeitet, um mit
Erfolg (oder etwaigen Fehlern) der Stückschreibvorgänge umzugehen.

```js
const list = document.querySelector("ul");

function sendMessage(message, writableStream) {
  // defaultWriter ist vom Typ WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);
  encoded.forEach((chunk) => {
    defaultWriter.ready
      .then(() => {
        defaultWriter.write(chunk);
      })
      .then(() => {
        console.log("Chunk geschrieben.");
      })
      .catch((err) => {
        console.log("Chunk Fehler:", err);
      });
  });
  // Rufen Sie ready nochmals auf, um sicherzustellen, dass alle Chunks
  //   geschrieben sind, bevor der Writer geschlossen wird.
  defaultWriter.ready
    .then(() => {
      defaultWriter.close();
    })
    .then(() => {
      console.log("Alle Chunks geschrieben.");
    })
    .catch((err) => {
      console.log("Stream Fehler:", err);
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
        listItem.textContent = `Chunk decodiert: ${decoded}`;
        list.appendChild(listItem);
        result += decoded;
        resolve();
      });
    },
    close() {
      const listItem = document.createElement("li");
      listItem.textContent = `[NACHRICHT ERHALTEN] ${result}`;
      list.appendChild(listItem);
    },
    abort(err) {
      console.log("Sink Fehler:", err);
    },
  },
  queuingStrategy,
);

sendMessage("Hello, world.", writableStream);
```

Sie können eine Live-Demonstration davon in unserem [einfachen Writer-Beispiel](https://mdn.github.io/dom-examples/streams/simple-writer/) ansehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
