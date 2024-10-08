---
title: WritableStreamDefaultWriter
slug: Web/API/WritableStreamDefaultWriter
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`WritableStreamDefaultWriter`**-Schnittstelle der [Streams-API](/de/docs/Web/API/Streams_API) ist das Objekt, das von [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter) zurückgegeben wird, und sperrt nach der Erstellung den Writer an den `WritableStream`, um sicherzustellen, dass keine anderen Streams auf das zugrunde liegende Sink schreiben können.

## Konstruktor

- [`WritableStreamDefaultWriter()`](/de/docs/Web/API/WritableStreamDefaultWriter/WritableStreamDefaultWriter)
  - : Erzeugt eine neue Instanz eines `WritableStreamDefaultWriter`-Objekts.

## Instanz-Eigenschaften

- [`WritableStreamDefaultWriter.closed`](/de/docs/Web/API/WritableStreamDefaultWriter/closed) {{ReadOnlyInline}}
  - : Ermöglicht es Ihnen, Code zu schreiben, der auf das Ende des Streaming-Prozesses reagiert. Gibt ein Versprechen zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder abgelehnt wird, wenn der Stream fehlerhaft ist oder die Sperre des Writers freigegeben wird.
- [`WritableStreamDefaultWriter.desiredSize`](/de/docs/Web/API/WritableStreamDefaultWriter/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.
- [`WritableStreamDefaultWriter.ready`](/de/docs/Web/API/WritableStreamDefaultWriter/ready) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die gewünschte Größe der internen Warteschlange des Streams vom nicht positiven Bereich in den positiven Bereich übergeht und signalisiert, dass kein Backpressure mehr angewendet wird.

## Instanz-Methoden

- [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort)
  - : Bricht den Stream ab und signalisiert, dass der Produzent nicht mehr erfolgreich in den Stream schreiben kann, und es wird sofort in einen Fehlerzustand überführt, wobei alle aufgestauten Schreibvorgänge verworfen werden.
- [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close)
  - : Schließt den zugehörigen beschreibbaren Stream.
- [`WritableStreamDefaultWriter.releaseLock()`](/de/docs/Web/API/WritableStreamDefaultWriter/releaseLock)
  - : Gibt die Sperre des Writers für den entsprechenden Stream frei. Nachdem die Sperre freigegeben wurde, ist der Writer nicht mehr aktiv. Wenn der zugehörige Stream beim Freigeben der Sperre fehlerhaft ist, wird der Writer denselben Fehlerzustand beibehalten; andernfalls wird der Writer als geschlossen angezeigt.
- [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write)
  - : Schreibt ein übergebenes Datenstück in einen [`WritableStream`](/de/docs/Web/API/WritableStream) und dessen zugrunde liegendes Sink und gibt ein {{jsxref("Promise")}} zurück, das die Erfolgs- oder Fehlschlaganzeige des Schreibvorgangs angibt.

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines `WritableStream` mit einem benutzerdefinierten Sink und einer von der API bereitgestellten Warteschlangenstrategie. Es ruft dann eine Funktion namens `sendMessage()` auf, wobei der neu erstellte Stream und ein String übergeben werden. Innerhalb dieser Funktion wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz von `WritableStreamDefaultWriter` zurückgibt. Ein `forEach()`-Aufruf wird verwendet, um jeden Teil des Strings in den Stream zu schreiben. Schließlich geben `write()` und `close()` Versprechen zurück, die verarbeitet werden, um den Erfolg oder das Scheitern von Teilen und Streams zu behandeln.

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

Sie können den vollständigen Code in unserem [einfachen Writer-Beispiel](https://mdn.github.io/dom-examples/streams/simple-writer/) finden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
