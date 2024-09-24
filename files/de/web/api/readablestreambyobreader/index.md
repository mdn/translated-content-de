---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die `ReadableStreamBYOBReader`-Schnittstelle der [Streams-API](/de/docs/Web/API/Streams_API) definiert einen Leser für einen {{domxref("ReadableStream")}}, der Zero-Copy-Lesen aus einer zugrunde liegenden Bytequelle unterstützt. Sie wird für das effiziente Kopieren von zugrunde liegenden Quellen verwendet, bei denen die Daten als "anonyme" Bytefolge, wie z. B. Dateien, bereitgestellt werden.

Eine Instanz dieses Leser-Typs wird in der Regel durch Aufrufen von {{domxref("ReadableStream.getReader()")}} auf dem Stream erstellt, wobei im Optionsparameter `mode: "byob"` angegeben wird. Der lesbare Stream muss eine _zugrunde liegende Bytequelle_ haben. Mit anderen Worten: Er muss [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein, indem eine zugrunde liegende Quelle mit [`type: "bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type)) angegeben wurde.

Mit diesem Lesertyp führt eine [`read()`](#readablestreambyobreader.read)-Anfrage, wenn die internen Warteschlangen des lesbaren Streams leer sind, zu einem Zero-Copy-Transfer von der zugrunde liegenden Quelle (wobei die internen Warteschlangen des Streams umgangen werden). Wenn die internen Warteschlangen nicht leer sind, wird eine `read()`-Anfrage durch die zwischengespeicherten Daten erfüllt.

Beachten Sie, dass die Methoden und Eigenschaften denjenigen des Standardlesers ({{domxref("ReadableStreamDefaultReader")}}) ähneln. Die `read()`-Methode unterscheidet sich darin, dass sie eine Ansicht bereitstellt, in die Daten geschrieben werden sollen.

## Konstruktor

- {{domxref("ReadableStreamBYOBReader.ReadableStreamBYOBReader", "ReadableStreamBYOBReader()")}}
  - : Erstellt und gibt eine `ReadableStreamBYOBReader`-Objektinstanz zurück.

## Instanzeigenschaften

- {{domxref("ReadableStreamBYOBReader.closed")}} {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder abgelehnt wird, wenn der Stream einen Fehler wirft oder die Sperre des Lesers freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf ein Ende des Streaming-Prozesses reagiert.

## Instanzmethoden

- {{domxref("ReadableStreamBYOBReader.cancel()")}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Das Aufrufen dieser Methode signalisiert ein Verlust des Interesses am Stream durch einen Verbraucher. Das angegebene `reason`-Argument wird der zugrunde liegenden Quelle übergeben, die es möglicherweise verwendet.
- {{domxref("ReadableStreamBYOBReader.read()")}}
  - : Übergibt eine Ansicht, in die Daten geschrieben werden müssen, und gibt ein {{jsxref("Promise")}} zurück, das mit dem nächsten Chunk im Stream aufgelöst wird oder mit einem Hinweis darauf abgelehnt wird, dass der Stream geschlossen oder fehlerhaft ist.
- {{domxref("ReadableStreamBYOBReader.releaseLock()")}}
  - : Gibt die Sperre des Lesers auf dem Stream frei.

## Beispiele

Das folgende Beispiel stammt aus den Live-Beispielen unter [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

Erstellen Sie zunächst den Leser mit {{domxref("ReadableStream.getReader()")}} auf dem Stream, wobei im Optionsparameter `mode: "byob"` angegeben wird. Da dies ein "Bring Your Own Buffer"-Leser ist, müssen wir auch ein `ArrayBuffer` erstellen, in das gelesen werden soll.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(200);
```

Eine Funktion, die den Leser benutzt, wird unten gezeigt. Diese ruft die `read()`-Methode rekursiv auf, um Daten in den Puffer zu lesen. Die Methode nimmt eine [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [Typed Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), das eine Ansicht über den Teil des ursprünglichen Array-Puffers ist, der noch nicht beschrieben wurde. Die Parameter der Ansicht werden aus den in früheren Aufrufen empfangenen Daten berechnet, die einen Offset in den ursprünglichen Array-Puffer definieren.

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

Wenn keine Daten mehr im Stream sind, wird die `read()`-Methode mit einem Objekt aufgelöst, dessen Attribut `done` auf `true` gesetzt ist, und die Funktion gibt zurück.

Die {{domxref("ReadableStreamBYOBReader.closed")}}-Eigenschaft gibt ein Promise zurück, das verwendet werden kann, um zu überwachen, ob der Stream geschlossen oder fehlerhaft ist oder ob die Lesersperre freigegeben wird.

```js
reader.closed
  .then(() => {
    // Resolved - code to handle stream closing
  })
  .catch(() => {
    // Rejected - code to handle error
  });
```

Um den Stream abzubrechen, rufen Sie {{domxref("ReadableStreamBYOBReader.cancel()")}} auf und geben optional einen _Grund_ an. Dies gibt ein Promise zurück, das aufgelöst wird, wenn der Stream abgebrochen wurde. Wenn der Stream abgebrochen wird, ruft der Controller wiederum `cancel()` auf der zugrunde liegenden Quelle auf und übergibt den optionalen Grund.

Der Beispielcode in [Verwendung von lesbaren Bytestreams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples) ruft die Abbruchmethode auf, wenn eine Schaltfläche gedrückt wird, wie gezeigt:

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log("cancel complete"));
});
```

Der Verbraucher kann auch `releaseLock()` aufrufen, um die Sperre des Lesers auf dem Stream freizugeben, jedoch nur, wenn kein Lesevorgang aussteht:

```js
reader.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konzepte der Streams-API](/de/docs/Web/API/Streams_API)
- [Verwendung von lesbarem Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- {{domxref("ReadableStream")}}
- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, beschreibbaren und transformierenden Streams.
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
