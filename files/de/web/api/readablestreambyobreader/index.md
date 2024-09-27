---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das `ReadableStreamBYOBReader`-Interface der [Streams API](/de/docs/Web/API/Streams_API) definiert einen Leser für einen [`ReadableStream`](/de/docs/Web/API/ReadableStream), der Zero-Copy-Lesen aus einer zugrunde liegenden Byte-Quelle unterstützt. Es wird für effizientes Kopieren aus zugrunde liegenden Quellen verwendet, bei denen die Daten als "anonyme" Folge von Bytes geliefert werden, wie zum Beispiel Dateien.

Eine Instanz dieses Lesertyps sollte normalerweise durch Aufruf von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem Stream erhalten werden, bei dem im Optionsparameter `mode: "byob"` angegeben wird. Der lesbare Stream muss über eine _zugrunde liegende Byte-Quelle_ verfügen. Mit anderen Worten, er muss [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein, indem eine zugrunde liegende Quelle mit [`type: "bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type) angegeben wurde.

Wenn bei diesem Lesertyp eine [`read()`](#readablestreambyobreader.read)-Anfrage gestellt wird, während die internen Warteschlangen des lesbaren Streams leer sind, erfolgt ein Zero-Copy-Transfer von der zugrunde liegenden Quelle (umgehen der internen Warteschlangen des Streams). Wenn die internen Warteschlangen nicht leer sind, wird eine `read()`-Anfrage aus den gepufferten Daten erfüllt.

Beachten Sie, dass die Methoden und Eigenschaften ähnlich zu denen des Standardlesers ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) sind. Die `read()`-Methode unterscheidet sich darin, dass sie eine Ansicht bereitstellt, in die Daten geschrieben werden sollen.

## Konstruktor

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader)
  - : Erstellt und gibt eine Instanz eines `ReadableStreamBYOBReader`-Objekts zurück.

## Instanzeigenschaften

- [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder abgelehnt wird, wenn der Stream einen Fehler wirft oder die Sperre des Lesers aufgehoben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf das Ende des Streaming-Prozesses reagiert.

## Instanzmethoden

- [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Der Aufruf dieser Methode signalisiert einen Verlust des Interesses an dem Stream durch einen Verbraucher. Das angegebene `reason`-Argument wird an die zugrunde liegende Quelle übergeben, die es möglicherweise verwendet oder ignoriert.
- [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read)
  - : Übergibt eine Ansicht, in die Daten geschrieben werden müssen, und gibt ein {{jsxref("Promise")}} zurück, das mit dem nächsten Chunk im Stream aufgelöst wird oder mit einer Angabe abgelehnt wird, dass der Stream geschlossen ist oder einen Fehler aufweist.
- [`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock)
  - : Hebt die Sperre des Lesers auf den Stream auf.

## Beispiele

Das unten stehende Beispiel stammt aus den Live-Beispielen in [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

Zuerst erstellen Sie den Leser mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem Stream, wobei im Optionsparameter `mode: "byob"` angegeben wird. Da dies ein "Bring Your Own Buffer"-Leser ist, müssen wir auch ein `ArrayBuffer` erstellen, in das gelesen werden soll.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(200);
```

Unten wird eine Funktion gezeigt, die den Leser verwendet. Sie ruft die `read()`-Methode rekursiv auf, um Daten in den Puffer zu lesen. Die Methode nimmt ein [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [typisiertes Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) entgegen, das eine Ansicht über den Teil des ursprünglichen Array-Buffers ist, der noch nicht geschrieben wurde. Die Parameter der Ansicht werden aus den Daten berechnet, die in vorherigen Aufrufen empfangen wurden und einen Offset in den ursprünglichen Array-Buffer definieren.

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

Wenn keine Daten mehr im Stream sind, wird die `read()`-Methode mit einem Objekt aufgelöst, dessen Eigenschaft `done` auf `true` gesetzt ist, und die Funktion kehrt zurück.

Die Eigenschaft [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) gibt ein Promise zurück, das verwendet werden kann, um den geschlossenen oder fehlerhaften Stream oder die Freigabe der Lesersperre zu überwachen.

```js
reader.closed
  .then(() => {
    // Resolved - code to handle stream closing
  })
  .catch(() => {
    // Rejected - code to handle error
  });
```

Um den Stream abzubrechen, rufen Sie [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) auf und geben optional einen _Grund_ an. Dies gibt ein Promise zurück, das aufgelöst wird, wenn der Stream abgebrochen wurde. Wenn der Stream abgebrochen wird, wird der Controller seinerseits `cancel()` auf der zugrunde liegenden Quelle aufrufen und den optionalen Grund übergeben.

Der Beispielcode in [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples) ruft die Cancel-Methode auf, wenn eine Schaltfläche gedrückt wird, wie gezeigt:

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log("cancel complete"));
});
```

Der Verbraucher kann auch `releaseLock()` aufrufen, um die Sperre des Lesers auf den Stream freizugeben, jedoch nur, wenn keine Leseanforderung aussteht:

```js
reader.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API Konzepte](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/) für eine grundlegende Visualisierung von lesbaren, beschreibbaren und Transform-Streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
