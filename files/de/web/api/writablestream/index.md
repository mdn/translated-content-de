---
title: WritableStream
slug: Web/API/WritableStream
l10n:
  sourceCommit: 84e780dd9d21655357c6514c6c8c538169149ad6
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`WritableStream`**-Interface der [Streams API](/de/docs/Web/API/Streams_API) bietet eine standardisierte Abstraktion zum Schreiben von Streaming-Daten an ein Ziel, bekannt als sink. Dieses Objekt bietet integrierten Rückstau und Warteschlangen.

`WritableStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`WritableStream()`](/de/docs/Web/API/WritableStream/WritableStream)
  - : Erstellt ein neues `WritableStream`-Objekt.

## Instanzeigenschaften

- [`WritableStream.locked`](/de/docs/Web/API/WritableStream/locked) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob das `WritableStream` an einen Writer gebunden ist.

## Instanzmethoden

- [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)
  - : Bricht den Stream ab, indem signalisiert wird, dass der Produzent nicht mehr erfolgreich in den Stream schreiben kann und dieser sofort in einen Fehlerzustand versetzt wird, wobei alle anstehenden Schreibvorgänge verworfen werden.
- [`WritableStream.close()`](/de/docs/Web/API/WritableStream/close)
  - : Schließt den Stream.
- [`WritableStream.getWriter()`](/de/docs/Web/API/WritableStream/getWriter)
  - : Gibt eine neue Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurück und sperrt den Stream für diese Instanz. Solange der Stream gesperrt ist, kann kein anderer Writer erfasst werden, bis dieser freigegeben wird.

## Beispiele

Das folgende Beispiel veranschaulicht mehrere Funktionen dieses Interfaces. Es erstellt den `WritableStream` mit einem benutzerdefinierten Sink. Anschließend wird die `getWriter()`-Methode des Streams aufgerufen, die eine Instanz von [`WritableStreamDefaultWriter`](/de/docs/Web/API/WritableStreamDefaultWriter) zurückgibt. Danach werden mehrere Zeichenfolgen in den Stream geschrieben. Schließlich gibt `close()` ein Promise zurück, das aufgelöst wird, wenn alle Schreibvorgänge erfolgreich abgeschlossen wurden.

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
  console.error("Stream error: " + error);
}
```

Dieses Beispiel unterstützt nicht die [Rückstau](/de/docs/Web/API/Streams_API/Concepts#backpressure)-Funktion der Streams.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und transformierenden Streams.
