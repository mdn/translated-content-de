---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das `ReadableStreamBYOBReader`-Interface der [Streams-API](/de/docs/Web/API/Streams_API) definiert einen Leser für einen [`ReadableStream`](/de/docs/Web/API/ReadableStream), der Zero-Copy-Lesen von einer zugrunde liegenden Byte-Quelle unterstützt. Es wird für effizientes Kopieren von zugrunde liegenden Quellen verwendet, bei denen die Daten als anonyme Byte-Sequenzen, wie z. B. Dateien, geliefert werden.

Eine Instanz dieses Lesertyps sollte normalerweise durch Aufrufen von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) am Strom erhalten werden, wobei im Optionsparameter `mode: "byob"` spezifiziert wird. Der lesbare Stream muss eine _zugrunde liegende Byte-Quelle_ haben. Mit anderen Worten, er muss mit einer zugrunde liegenden Quelle [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein, die [`type: "bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type)) spezifiziert.

Bei Verwendung dieses Lesertyps wird eine [`read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read)-Anfrage, wenn die internen Warteschlangen des lesbaren Streams leer sind, zu einem Zero-Copy-Transfer von der zugrunde liegenden Quelle führen (ohne die internen Warteschlangen des Streams zu durchlaufen). Wenn die internen Warteschlangen nicht leer sind, wird eine `read()`-Anfrage aus den gepufferten Daten erfüllt.

Beachten Sie, dass die Methoden und Eigenschaften ähnlich denen des Standardlesers ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) sind. Die `read()`-Methode unterscheidet sich darin, dass sie eine Ansicht bereitstellt, in die Daten geschrieben werden sollen.

## Konstruktor

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader)
  - : Erstellt und gibt eine Instanz eines `ReadableStreamBYOBReader`-Objekts zurück.

## Instanzeigenschaften

- [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder verwirft, wenn der Stream einen Fehler wirft oder die Sperre des Lesers freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf das Ende des Streaming-Prozesses reagiert.

## Instanzmethoden

- [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream abgebrochen wird. Durch Aufrufen dieser Methode wird das Interesse eines Verbrauchers am Stream signalisiert. Das übergebene `reason`-Argument wird der zugrunde liegenden Quelle gegeben, die es möglicherweise verwendet oder nicht.
- [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read)
  - : Überträgt eine Ansicht, in die Daten geschrieben werden müssen, und gibt ein {{jsxref("Promise")}} zurück, das mit dem nächsten Chunk im Stream aufgelöst wird oder mit einem Hinweis, dass der Stream geschlossen ist oder einen Fehler hat, abgelehnt wird.
- [`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock)
  - : Gibt die Sperre des Lesers auf dem Stream frei.

## Beispiele

Das folgende Beispiel stammt aus den Live-Beispielen in [Lesbare Byte-Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

Zuerst erstellen Sie den Leser mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) am Strom, wobei im Optionsparameter `mode: "byob"` angegeben wird. Da dies ein "Bring Your Own Buffer"-Reader ist, müssen wir auch ein `ArrayBuffer` erstellen, in das gelesen werden soll.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(200);
```

Eine Funktion, die den Leser verwendet, wird unten gezeigt. Diese ruft die `read()`-Methode rekursiv auf, um Daten in den Puffer zu lesen. Die Methode nimmt ein [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [typed array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), das eine Ansicht über den Teil des ursprünglichen Array-Buffers ist, der noch nicht beschrieben wurde. Die Parameter der Ansicht werden aus den in früheren Aufrufen empfangenen Daten berechnet, die einen Offset in den ursprünglichen Array-Puffer definieren.

```js
readStream(reader);

function readStream(reader) {
  let bytesReceived = 0;
  let offset = 0;

  // read() returns a promise that resolves when a value has been received
  reader
    .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
    .then(function processText({ done, value }) {
      // Result objects contain two properties:
      // done  - true if the stream has already given all its data.
      // value - some data. Always undefined when done is true.

      if (done) {
        logConsumer(`readStream() complete. Total bytes: ${bytesReceived}`);
        return;
      }

      buffer = value.buffer;
      offset += value.byteLength;
      bytesReceived += value.byteLength;

      logConsumer(
        `Read ${value.byteLength} (${bytesReceived}) bytes: ${value}`,
      );
      result += value;

      // Read some more, and call this function again
      return reader
        .read(new Uint8Array(buffer, offset, buffer.byteLength - offset))
        .then(processText);
    });
}
```

Wenn keine Daten mehr im Stream vorhanden sind, wird die `read()`-Methode mit einem Objekt aufgelöst, dessen Eigenschaft `done` auf `true` gesetzt ist, und die Funktion gibt zurück.

Die [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed)-Eigenschaft gibt ein Promise zurück, das verwendet werden kann, um das Schließen des Streams, Fehler oder die Freigabe der Leser-Sperre zu überwachen.

```js
reader.closed
  .then(() => {
    // Resolved - code to handle stream closing
  })
  .catch(() => {
    // Rejected - code to handle error
  });
```

Um den Stream zu kündigen, rufen Sie [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) auf, wobei optional ein _reason_ angegeben wird. Dies gibt ein Promise zurück, das erfüllt wird, wenn der Stream abgebrochen wurde. Wenn der Stream abgebrochen ist, ruft der Controller wiederum `cancel()` auf der zugrunde liegenden Quelle auf, wobei der optionale Grund übergeben wird.

Der Beispielcode in [Lesbare Byte-Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples) ruft die Abbruchmethode auf, wenn eine Schaltfläche gedrückt wird, wie gezeigt:

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log("cancel complete"));
});
```

Der Verbraucher kann auch `releaseLock()` aufrufen, um den Griff des Lesers am Stream freizugeben, jedoch nur, wenn kein Lesevorgang aussteht:

```js
reader.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konzepte der Streams-API](/de/docs/Web/API/Streams_API)
- [Verwenden eines lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill)
