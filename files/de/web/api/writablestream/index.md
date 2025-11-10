---
title: WritableStream
slug: Web/API/WritableStream
l10n:
  sourceCommit: 7d37e07f04c40ecbfd424d6fce0766ef3d2f7db4
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`WritableStream`**-Interface der [Streams-API](/de/docs/Web/API/Streams_API) bietet eine standardisierte Abstraktion für das Schreiben von Streaming-Daten an ein Ziel, bekannt als Senke.
Dieses Objekt verfügt über eingebauten Gegendruck und Warteschlangen.

`WritableStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`WritableStream()`](/de/docs/Web/API/WritableStream/WritableStream)
  - : Erstellt ein neues `WritableStream`-Objekt.

## Instanz-Eigenschaften

- [`WritableStream.locked`](/de/docs/Web/API/WritableStream/locked) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der anzeigt, ob das `WritableStream` an einen Schreibenden gebunden ist.

## Instanz-Methoden

- [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)
  - : Bricht den Stream ab, wobei signalisiert wird, dass der Erzeuger nicht mehr erfolgreich in den Stream schreiben kann und er sofort in einen Fehlerzustand versetzt wird, wobei alle in der Warteschlange befindlichen Schreibvorgänge verworfen werden.
- [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close)
  - : Schließt den Stream.
- [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter)
  - : Gibt eine neue Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurück und sperrt den Stream für diese Instanz. Solange der Stream gesperrt ist, kann kein anderer Schreibender erworben werden, bis dieser freigegeben wird.

## Beispiele

Das folgende Beispiel veranschaulicht mehrere Merkmale dieses Interfaces. Es erstellt das `WritableStream` mit einer benutzerdefinierten Senke. Anschließend wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt. Danach werden mehrere Zeichenfolgen in den Stream geschrieben. Schließlich gibt `close()` ein Versprechen zurück, das aufgelöst wird, wenn alle Schreibvorgänge erfolgreich abgeschlossen wurden.

```js
const writableStream = new WritableStream(
  // Implement the sink
  {
    write(chunk) {
      const textElement = document.getElementById("text-output");
      textElement.textContent += chunk;
    },
  },
);

const writer = writableStream.getWriter();

try {
  writer.write("Hello, ");
  writer.write("world!\n");
  writer.write("This has been a demo!\n");

  await writer.close(); // wait for all chunks to be written
  console.log("All chunks written");
} catch (error) {
  console.error("Stream error: ", error);
}
```

Dieses Beispiel unterstützt nicht das [Gegendruck](/de/docs/Web/API/Streams_API/Concepts#backpressure)-Feature von Streams.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams—The Definitive Guide](https://web.dev/articles/streams)
