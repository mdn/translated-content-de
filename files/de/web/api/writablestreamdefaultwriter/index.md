---
title: WritableStreamDefaultWriter
slug: Web/API/WritableStreamDefaultWriter
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`WritableStreamDefaultWriter`**-Interface der [Streams API](/de/docs/Web/API/Streams_API) ist das Objekt, das von [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter) zurückgegeben wird und beim Erstellen den Schreiber an den `WritableStream` bindet, wodurch sichergestellt wird, dass keine anderen Streams in das zugrunde liegende Ziel schreiben können.

## Konstruktor

- [`WritableStreamDefaultWriter()`](/de/docs/Web/API/WritableStreamDefaultWriter/WritableStreamDefaultWriter)
  - : Erstellt eine neue Instanz des `WritableStreamDefaultWriter`-Objekts.

## Instanz-Eigenschaften

- [`WritableStreamDefaultWriter.closed`](/de/docs/Web/API/WritableStreamDefaultWriter/closed) {{ReadOnlyInline}}
  - : Ermöglicht Ihnen das Schreiben von Code, der auf das Ende des Streaming-Prozesses reagiert. Gibt ein Versprechen zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder abgelehnt wird, wenn der Stream fehlerhaft ist oder die Sperre des Schreibers freigegeben wird.
- [`WritableStreamDefaultWriter.desiredSize`](/de/docs/Web/API/WritableStreamDefaultWriter/desiredSize) {{ReadOnlyInline}}
  - : Gibt die gewünschte Größe zurück, die erforderlich ist, um die interne Warteschlange des Streams zu füllen.
- [`WritableStreamDefaultWriter.ready`](/de/docs/Web/API/WritableStreamDefaultWriter/ready) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die gewünschte Größe der internen Warteschlange des Streams von nicht-positiv zu positiv wechselt und signalisiert, dass kein Backpressure mehr angewendet wird.

## Instanz-Methoden

- [`WritableStreamDefaultWriter.abort()`](/de/docs/Web/API/WritableStreamDefaultWriter/abort)
  - : Bricht den Stream ab und signalisiert, dass der Produzent nicht mehr erfolgreich in den Stream schreiben kann und er sofort in einen Fehlerzustand versetzt wird, wobei alle wartenden Schreibvorgänge verworfen werden.
- [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close)
  - : Schließt den zugehörigen beschreibbaren Stream.
- [`WritableStreamDefaultWriter.releaseLock()`](/de/docs/Web/API/WritableStreamDefaultWriter/releaseLock)
  - : Gibt die Sperre des Schreibers auf dem entsprechenden Stream frei. Nachdem die Sperre freigegeben wurde, ist der Schreiber nicht mehr aktiv. Wenn der zugehörige Stream fehlerhaft ist, wenn die Sperre freigegeben wird, erscheint der Schreiber von nun an in gleicher Weise fehlerhaft; andernfalls erscheint der Schreiber geschlossen.
- [`WritableStreamDefaultWriter.write()`](/de/docs/Web/API/WritableStreamDefaultWriter/write)
  - : Schreibt ein übergebenes Datenstück in einen [`WritableStream`](/de/docs/Web/API/WritableStream) und dessen zugrunde liegendes Ziel und gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, um den Erfolg oder Misserfolg des Schreibvorgangs anzuzeigen.

## Beispiele

Das folgende Beispiel zeigt die Erstellung eines `WritableStream` mit einem benutzerdefinierten Ziel und einer von der API bereitgestellten Warteschlangenstrategie. Es ruft dann eine Funktion namens `sendMessage()` auf, die den neu erstellten Stream und einen String übergibt. Diese Funktion ruft die `getWriter()`-Methode des Streams auf, die eine Instanz von `WritableStreamDefaultWriter` zurückgibt. Ein `forEach()`-Aufruf wird verwendet, um jedes Stück des Strings in den Stream zu schreiben. Schließlich geben `write()` und `close()` Versprechen zurück, die verarbeitet werden, um mit dem Erfolg oder Misserfolg von Stücken und Streams umzugehen.

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

Den vollständigen Code finden Sie in unserem [einfachen Schreiber-Beispiel](https://mdn.github.io/dom-examples/streams/simple-writer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
