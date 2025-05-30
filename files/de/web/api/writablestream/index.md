---
title: WritableStream
slug: Web/API/WritableStream
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`WritableStream`**-Schnittstelle der [Streams-API](/de/docs/Web/API/Streams_API) bietet eine standardisierte Abstraktion zum Schreiben von Streaming-Daten an ein Ziel, das als Sink bezeichnet wird. Dieses Objekt verfügt über integrierten Gegendruck und Warteschlangen.

`WritableStream` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`WritableStream()`](/de/docs/Web/API/WritableStream/WritableStream)
  - : Erstellt ein neues `WritableStream`-Objekt.

## Instanz-Eigenschaften

- [`WritableStream.locked`](/de/docs/Web/API/WritableStream/locked) {{ReadOnlyInline}}
  - : Ein Boolean-Wert, der angibt, ob das `WritableStream` an einen Schreiber gebunden ist.

## Instanz-Methoden

- [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)
  - : Bricht den Stream ab und signalisiert, dass der Produzent nicht mehr erfolgreich in den Stream schreiben kann und dieser sofort in einen Fehlerzustand versetzt wird, wobei alle wartenden Schreibvorgänge verworfen werden.
- [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close)
  - : Schließt den Stream.
- [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter)
  - : Gibt eine neue Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurück und sperrt den Stream für diese Instanz. Solange der Stream gesperrt ist, kann kein anderer Schreiber erworben werden, bis dieser freigegeben wird.

## Beispiele

Das folgende Beispiel veranschaulicht mehrere Funktionen dieser Schnittstelle. Es erstellt das `WritableStream` mit einem benutzerdefinierten Sink. Dann wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt. Anschließend werden mehrere Zeichenfolgen in den Stream geschrieben. Schließlich gibt `close()` ein Promise zurück, das aufgelöst wird, wenn alle Schreibvorgänge erfolgreich abgeschlossen sind.

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

Dieses Beispiel unterstützt nicht die [Gegendruck](/de/docs/Web/API/Streams_API/Concepts#backpressure)-Funktion der Streams.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und Transformationsströmen.
