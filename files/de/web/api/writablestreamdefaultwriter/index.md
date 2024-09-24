---
title: WritableStreamDefaultWriter
slug: Web/API/WritableStreamDefaultWriter
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`WritableStreamDefaultWriter`**-Schnittstelle der [Streams-API](/de/docs/Web/API/Streams_API) ist das Objekt, das von {{domxref("WritableStream.getWriter()")}} zurückgegeben wird. Einmal erstellt, wird der Writer an den `WritableStream` gebunden, wodurch sichergestellt wird, dass keine anderen Streams zu dem darunterliegenden Abfluss schreiben können.

## Konstruktor

- {{domxref("WritableStreamDefaultWriter.WritableStreamDefaultWriter", "WritableStreamDefaultWriter()")}}
  - : Erstellt eine neue `WritableStreamDefaultWriter`-Objektinstanz.

## Instanz-Eigenschaften

- {{domxref("WritableStreamDefaultWriter.closed")}} {{ReadOnlyInline}}
  - : Ermöglicht es Ihnen, Code zu schreiben, der auf ein Ende des Streaming-Prozesses reagiert. Gibt ein Promise zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder abgelehnt wird, wenn der Stream fehlerhaft ist oder die Sperre des Writers freigegeben wird.
- {{domxref("WritableStreamDefaultWriter.desiredSize")}} {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.
- {{domxref("WritableStreamDefaultWriter.ready")}} {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das gelöst wird, wenn die gewünschte Größe der internen Warteschlange des Streams von nicht-positiv zu positiv wechselt, was signalisiert, dass kein Backpressure mehr angewendet wird.

## Instanz-Methoden

- {{domxref("WritableStreamDefaultWriter.abort()")}}
  - : Bricht den Stream ab und signalisiert, dass der Produzent nicht mehr erfolgreich in den Stream schreiben kann und dieser sofort in einen Fehlerzustand versetzt wird, wobei alle in der Warteschlange befindlichen Schreibvorgänge verworfen werden.
- {{domxref("WritableStreamDefaultWriter.close()")}}
  - : Schließt den zugehörigen beschreibbaren Stream.
- {{domxref("WritableStreamDefaultWriter.releaseLock()")}}
  - : Gibt die Sperre des Writers auf dem entsprechenden Stream frei. Nachdem die Sperre freigegeben wurde, ist der Writer nicht mehr aktiv. Wenn der zugehörige Stream fehlerhaft ist, wenn die Sperre freigegeben wird, erscheint der Writer von nun an auf dieselbe Weise fehlerhaft; andernfalls erscheint der Writer geschlossen.
- {{domxref("WritableStreamDefaultWriter.write()")}}
  - : Schreibt ein übergebenes Datenstück in einen {{domxref("WritableStream")}} und dessen darunterliegenden Abfluss und gibt dann ein {{jsxref("Promise")}} zurück, das gelöst wird, um den Erfolg oder das Scheitern des Schreibvorgangs anzuzeigen.

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines `WritableStream` mit einem benutzerdefinierten Abfluss und einer von der API bereitgestellten Warteschlangestrategie. Anschließend wird eine Funktion namens `sendMessage()` aufgerufen, die den neu erstellten Stream und einen String übergibt. In dieser Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz von `WritableStreamDefaultWriter` zurückgibt. Ein `forEach()`-Aufruf wird verwendet, um jedes Stück des Strings in den Stream zu schreiben. Schließlich geben `write()` und `close()` Promises zurück, die bearbeitet werden, um mit Erfolg oder Scheitern von Stücken und Streams umzugehen.

```js
const list = document.querySelector("ul");

async function sendMessage(message, writableStream) {
  // defaultWriter is of type WritableStreamDefaultWriter
  const defaultWriter = writableStream.getWriter();
  const encoder = new TextEncoder();
  const encoded = encoder.encode(message);

  try {
    for (const chunk of encoded) {
      await defaultWriter.ready;
      await defaultWriter.write(chunk);
      console.log("Chunk written to sink.");
    }
    // Call ready again to ensure that all chunks are written
    // before closing the writer.
    await defaultWriter.ready;
    await defaultWriter.close();
    console.log("All chunks written");
  } catch (err) {
    console.log("Error:", err);
  }
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

Sie finden den vollständigen Code in unserem [einfachen Schreibbeispiel](https://mdn.github.io/dom-examples/streams/simple-writer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
