---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das `ReadableStreamBYOBReader`-Interface der [Streams API](/de/docs/Web/API/Streams_API) definiert einen Leser für einen [`ReadableStream`](/de/docs/Web/API/ReadableStream), der das Zero-Copy-Lesen aus einer zugrunde liegenden Byte-Quelle unterstützt.
Es wird für effizientes Kopieren von zugrunde liegenden Quellen verwendet, bei denen die Daten als "anonyme" Bytefolge geliefert werden, wie z.B. Dateien.

Eine Instanz dieses Lesertyps sollte normalerweise durch Aufrufen von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem Stream erhalten werden, wobei im Optionsparameter `mode: "byob"` angegeben wird.
Der lesbare Stream muss eine _zugrunde liegende Byte-Quelle_ haben. Mit anderen Worten, er muss [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein, indem eine zugrunde liegende Quelle mit [`type: "bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type)) angegeben wurde.

Bei der Verwendung dieses Lesertyps führt eine [`read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read)-Anfrage, wenn die internen Warteschlangen des lesbaren Streams leer sind, zu einem Zero-Copy-Transfer von der zugrunde liegenden Quelle (unter Umgehung der internen Warteschlangen des Streams).
Wenn die internen Warteschlangen nicht leer sind, wird eine `read()`-Anfrage mit den gepufferten Daten erfüllt.

Beachten Sie, dass die Methoden und Eigenschaften denen des Standardlesers ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) ähnlich sind.
Die `read()`-Methode unterscheidet sich dadurch, dass sie eine Ansicht bereitstellt, in die die Daten geschrieben werden sollen.

## Konstruktor

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader)
  - : Erstellt und gibt eine Instanz eines `ReadableStreamBYOBReader`-Objekts zurück.

## Instanzeigenschaften

- [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen ist, oder abgelehnt wird, wenn der Stream einen Fehler wirft oder die Sperre des Lesers freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf das Ende des Streaming-Prozesses reagiert.

## Instanzmethoden

- [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Das Aufrufen dieser Methode signalisiert einen Verlust des Interesses an dem Stream durch einen Verbraucher. Das übergebene `reason`-Argument wird an die zugrunde liegende Quelle gegeben, die es möglicherweise verwendet oder nicht.
- [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read)
  - : Übermittelt eine Ansicht, in die Daten geschrieben werden müssen, und gibt ein {{jsxref("Promise")}} zurück, das sich mit dem nächsten Chunk im Stream auflöst oder mit einem Hinweis ablehnt, dass der Stream geschlossen oder fehlerhaft ist.
- [`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock)
  - : Gibt die Sperre des Lesers auf den Stream frei.

## Beispiele

Das folgende Beispiel stammt aus den Live-Beispielen in [Verwendung lesbarer Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

Zuerst erstellen Sie den Leser mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem Stream, wobei `mode: "byob"` im Optionsparameter angegeben wird.
Da es sich um einen "Bringen Sie Ihren eigenen Puffer mit"-Leser handelt, müssen wir auch einen `ArrayBuffer` erstellen, in den gelesen werden soll.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(200);
```

Eine Funktion, die den Leser verwendet, wird unten gezeigt.
Diese ruft die `read()`-Methode rekursiv auf, um Daten in den Puffer zu lesen.
Die Methode nimmt ein [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) entgegen, das eine Ansicht über den Teil des ursprünglichen Array-Buffers ist, der noch nicht geschrieben wurde.
Die Parameter der Ansicht werden anhand der Daten berechnet, die in vorherigen Aufrufen empfangen wurden, welche einen Offset in den ursprünglichen Array-Buffer definieren.

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

Wenn keine Daten mehr im Stream vorhanden sind, löst die `read()`-Methode sich mit einem Objekt auf, dessen Eigenschaft `done` auf `true` gesetzt ist, und die Funktion kehrt zurück.

Die [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed)-Eigenschaft gibt ein Promise zurück, das verwendet werden kann, um zu überwachen, ob der Stream geschlossen oder fehlerhaft ist, oder die Lesersperre freigegeben wurde.

```js
reader.closed
  .then(() => {
    // Resolved - code to handle stream closing
  })
  .catch(() => {
    // Rejected - code to handle error
  });
```

Um den Stream zu stornieren, rufen Sie [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) auf und geben optional einen _reason_ an.
Dies gibt ein Promise zurück, das sich auflöst, wenn der Stream storniert wurde.
Wenn der Stream storniert wird, ruft der Controller wiederum `cancel()` an der zugrunde liegenden Quelle auf und übergibt den optionalen Grund.

Der Beispielcode in [Verwendung lesbarer Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples) ruft die Abbruchmethode auf, wenn eine Taste gedrückt wird, wie gezeigt:

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log("cancel complete"));
});
```

Der Verbraucher kann auch `releaseLock()` aufrufen, um die Halte des Lesers auf dem Stream freizugeben, jedoch nur, wenn keine Leseoperation aussteht:

```js
reader.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API-Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung lesbarer Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, beschreibbaren und Transform-Streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
