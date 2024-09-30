---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das Interface `ReadableStreamBYOBReader` der [Streams API](/de/docs/Web/API/Streams_API) definiert einen Leser für einen [`ReadableStream`](/de/docs/Web/API/ReadableStream), der zero-copy Lesen von einer zugrunde liegenden Byte-Quelle unterstützt. Es wird für effizientes Kopieren von zugrunde liegenden Quellen verwendet, bei denen die Daten als "anonyme" Folge von Bytes bereitgestellt werden, wie z. B. Dateien.

Ein Exemplar dieses Lesetyps sollte normalerweise durch Aufrufen von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) im Stream erhalten werden, wobei im Optionsparameter `mode: "byob"` angegeben wird. Der lesbare Stream muss eine _zugrunde liegende Byte-Quelle_ haben. Mit anderen Worten, er muss [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein, indem eine zugrunde liegende Quelle mit [`type: "bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type)) angegeben wurde.

Bei Verwendung dieses Leser-Typs führt eine [`read()`](#readablestreambyobreader.read)-Anfrage, wenn die internen Warteschlangen des lesbaren Streams leer sind, zu einem zero-copy Transfer von der zugrunde liegenden Quelle (umgehung der internen Warteschlangen des Streams). Wenn die internen Warteschlangen nicht leer sind, wird eine `read()`-Anfrage aus den gepufferten Daten bedient.

Beachten Sie, dass die Methoden und Eigenschaften denen des Standardlesers ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) ähneln. Die `read()`-Methode unterscheidet sich darin, dass sie eine Ansicht bereitstellt, in die Daten geschrieben werden sollen.

## Konstruktor

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader)
  - : Erstellt und gibt eine Instanz eines `ReadableStreamBYOBReader`-Objekts zurück.

## Instanz-Eigenschaften

- [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder fehlschlägt, wenn der Stream einen Fehler ausgibt oder die Sperre des Lesers freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf das Ende des Streaming-Prozesses reagiert.

## Instanz-Methoden

- [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Das Aufrufen dieser Methode signalisiert einen Verlust des Interesses am Stream durch einen Verbraucher. Das angegebene `reason`-Argument wird der zugrunde liegenden Quelle übergeben, die es möglicherweise verwendet oder nicht.
- [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read)
  - : Überträgt eine Ansicht, in die Daten geschrieben werden müssen, und gibt ein {{jsxref("Promise")}} zurück, das sich mit dem nächsten Chunk im Stream auflöst oder mit einem Hinweis abgelehnt wird, dass der Stream geschlossen oder ein Fehler aufgetreten ist.
- [`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock)
  - : Gibt die Sperre des Lesers auf den Stream frei.

## Beispiele

Das folgende Beispiel stammt aus den Live-Beispielen in [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

Zuerst erstellen Sie den Leser mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem Stream, wobei im Optionsparameter `mode: "byob"` angegeben wird. Da es sich hierbei um einen "Bring Your Own Buffer"-Leser handelt, müssen wir auch einen `ArrayBuffer` erstellen, in den gelesen wird.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(200);
```

Eine Funktion, die den Leser verwendet, wird unten gezeigt. Diese ruft die `read()`-Methode rekursiv auf, um Daten in den Puffer zu lesen. Die Methode nimmt ein [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), das eine Ansicht über den Teil des ursprünglichen Array-Puffers ist, der noch nicht geschrieben wurde. Die Parameter der Ansicht werden aus den Daten berechnet, die in vorherigen Aufrufen empfangen wurden und die einen Offset in den ursprünglichen Array-Puffer definieren.

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

Wenn keine Daten mehr im Stream vorhanden sind, löst sich die Methode `read()` mit einem Objekt auf, dessen Eigenschaft `done` auf `true` gesetzt ist, und die Funktion wird beendet.

Die Eigenschaft [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) gibt ein Promise zurück, das verwendet werden kann, um zu überwachen, ob der Stream geschlossen oder ein Fehler aufgetreten ist, oder ob die Leser-Sperre freigegeben wird.

```js
reader.closed
  .then(() => {
    // Resolved - code to handle stream closing
  })
  .catch(() => {
    // Rejected - code to handle error
  });
```

Um den Stream abzubrechen, rufen Sie [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) auf und geben optional einen _Grund_ an. Dies gibt ein Promise zurück, das erfüllt wird, wenn der Stream abgebrochen wurde. Wenn der Stream abgebrochen wird, ruft der Controller seinerseits `cancel()` auf der zugrunde liegenden Quelle auf und übergibt den optionalen Grund.

Der Beispielcode in [Verwendung von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples) ruft die Abbruchmethode auf, wenn eine Schaltfläche gedrückt wird, wie gezeigt:

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log("cancel complete"));
});
```

Der Verbraucher kann auch `releaseLock()` aufrufen, um die Verbindungen des Lesers zum Stream zu lösen, jedoch nur, wenn kein Lesevorgang aussteht:

```js
reader.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung lesbarer Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, beschreibbaren und Transformationsstreams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
