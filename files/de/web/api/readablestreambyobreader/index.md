---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das `ReadableStreamBYOBReader`-Interface der [Streams-API](/de/docs/Web/API/Streams_API) definiert einen Leser für einen [`ReadableStream`](/de/docs/Web/API/ReadableStream), der Zero-Copy-Lesen von einer zugrunde liegenden Byte-Quelle unterstützt. Es wird für effizientes Kopieren von zugrunde liegenden Quellen verwendet, bei denen die Daten als "anonyme" Byte-Sequenzen geliefert werden, wie zum Beispiel Dateien.

Eine Instanz dieses Lesertyps sollte normalerweise durch Aufrufen von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem Stream erhalten werden, wobei im Optionsparameter `mode: "byob"` angegeben wird. Der lesbare Stream muss eine _zugrunde liegende Byte-Quelle_ haben. Mit anderen Worten, er muss [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein, wobei eine zugrunde liegende Quelle mit [`type: "bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type)) angegeben wurde.

Bei Verwendung dieses Leser-Typs führt eine [`read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read)-Anforderung, wenn die internen Warteschlangen des lesbaren Streams leer sind, zu einem Zero-Copy-Transfer von der zugrunde liegenden Quelle (unter Umgehung der internen Warteschlangen des Streams). Wenn die internen Warteschlangen nicht leer sind, wird eine `read()`-Anforderung aus den gepufferten Daten erfüllt.

Beachten Sie, dass die Methoden und Eigenschaften denen des Standardlesers ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) ähneln. Die `read()`-Methode unterscheidet sich dadurch, dass sie eine Ansicht bereitstellt, in die Daten geschrieben werden sollen.

## Konstruktor

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader)
  - : Erstellt und gibt eine `ReadableStreamBYOBReader`-Objektinstanz zurück.

## Instanzeigenschaften

- [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder fehlschlägt, wenn der Stream einen Fehler verursacht oder die Sperre des Lesers freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf das Ende des Streaming-Prozesses reagiert.

## Instanzmethoden

- [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Ein Aufruf dieser Methode signalisiert einen Verlust des Interesses an dem Stream durch einen Verbraucher. Das übergebene `reason`-Argument wird der zugrunde liegenden Quelle übergeben, die es möglicherweise verwendet oder nicht.
- [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read)
  - : Übermittelt eine Ansicht, in die Daten geschrieben werden müssen, und gibt ein {{jsxref("Promise")}} zurück, das mit dem nächsten Chunk im Stream aufgelöst wird oder mit einem Hinweis darauf fehlschlägt, dass der Stream geschlossen ist oder einen Fehler hat.
- [`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock)
  - : Gibt die Sperre des Lesers auf dem Stream frei.

## Beispiele

Das folgende Beispiel stammt aus den Live-Beispielen von [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

Erstellen Sie zunächst den Leser, indem Sie [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem Stream aufrufen und im Optionsparameter `mode: "byob"` angeben. Da dies ein "Bring Your Own Buffer"-Leser ist, müssen wir auch einen `ArrayBuffer` erstellen, in den gelesen werden soll.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(200);
```

Eine Funktion, die den Leser verwendet, ist unten dargestellt. Diese ruft die `read()`-Methode rekursiv auf, um Daten in den Puffer zu lesen. Die Methode nimmt ein [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), das eine Ansicht über den Teil des ursprünglichen Array-Puffers ist, der noch nicht geschrieben wurde. Die Parameter der Ansicht werden von den in vorherigen Aufrufen empfangenen Daten berechnet, die einen Offset im ursprünglichen Array-Puffer definieren.

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

Wenn keine Daten mehr im Stream vorhanden sind, wird die `read()`-Methode mit einem Objekt aufgelöst, das die Eigenschaft `done` auf `true` gesetzt hat, und die Funktion gibt zurück.

Die Eigenschaft [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) gibt ein Versprechen zurück, das verwendet werden kann, um zu überwachen, ob der Stream geschlossen ist, einen Fehler aufweist oder die Sperre des Lesers freigegeben wurde.

```js
reader.closed
  .then(() => {
    // Resolved - code to handle stream closing
  })
  .catch(() => {
    // Rejected - code to handle error
  });
```

Um den Stream abzubrechen, rufen Sie [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) auf und geben optional einen _Grund_ an. Dies gibt ein Versprechen zurück, das aufgelöst wird, wenn der Stream abgebrochen wurde. Wenn der Stream abgebrochen wird, ruft der Controller wiederum `cancel()` auf der zugrunde liegenden Quelle auf und übergibt den optionalen Grund.

Der Beispielcode in [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples) ruft die Cancel-Methode auf, wenn ein Button gedrückt wird, wie gezeigt:

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log("cancel complete"));
});
```

Der Verbraucher kann auch `releaseLock()` aufrufen, um die Sperre des Lesers auf dem Stream freizugeben, jedoch nur, wenn keine Leseoperation aussteht:

```js
reader.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konzepte der Streams-API](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill)
