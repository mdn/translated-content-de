---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die `ReadableStreamBYOBReader`-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) definiert einen Reader für einen [`ReadableStream`](/de/docs/Web/API/ReadableStream), der das Lesen aus einer zugrunde liegenden Byte-Quelle ohne Kopiervorgang unterstützt.
Sie wird verwendet, um Daten effizient aus zugrunde liegenden Quellen zu lesen, die sie als „anonyme“ Folge von Bytes bereitstellen, etwa Dateien.

Eine Instanz dieses Reader-Typs erhalten Sie normalerweise, indem Sie [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) für den Stream aufrufen und im Optionsparameter `mode: "byob"` angeben.
Der lesbare Stream muss eine _zugrunde liegende Byte-Quelle_ haben. Das heißt, er muss mit einer zugrunde liegenden Quelle [erstellt](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein, für die [`type: "bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type) angegeben wurde.

Wenn Sie bei diesem Reader-Typ [`read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read) aufrufen, während die internen Warteschlangen des lesbaren Streams leer sind, werden die Daten ohne Kopiervorgang aus der zugrunde liegenden Quelle übertragen; die internen Warteschlangen des Streams werden dabei umgangen.
Sind die internen Warteschlangen nicht leer, erfüllt `read()` die Anfrage mit den gepufferten Daten.

Die Methoden und Eigenschaften ähneln denen des Standard-Readers ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)).
Die Methode `read()` unterscheidet sich dadurch, dass ihr eine Ansicht übergeben wird, in die die Daten geschrieben werden sollen.

## Konstruktor

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader)
  - : Erstellt eine `ReadableStreamBYOBReader`-Objektinstanz und gibt sie zurück.

## Instanzeigenschaften

- [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder zurückgewiesen wird, wenn im Stream ein Fehler auftritt oder die Sperre des Readers aufgehoben wird. Mit dieser Eigenschaft können Sie Code schreiben, der auf das Ende des Streaming-Vorgangs reagiert.

## Instanzmethoden

- [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream abgebrochen wurde. Ein Aufruf dieser Methode signalisiert, dass ein Consumer kein Interesse mehr am Stream hat. Das übergebene Argument `reason` wird an die zugrunde liegende Quelle weitergegeben, die es verwenden kann, aber nicht muss.
- [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read)
  - : Übergibt eine Ansicht, in die Daten geschrieben werden müssen, und gibt ein {{jsxref("Promise")}} zurück, das mit dem nächsten Datenabschnitt des Streams erfüllt oder mit einem Hinweis darauf zurückgewiesen wird, dass der Stream geschlossen wurde oder ein Fehler aufgetreten ist.
- [`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock)
  - : Hebt die Sperre des Readers für den Stream auf.

## Beispiele

Das folgende Beispiel stammt aus den interaktiven Beispielen unter [Lesbare Byte-Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

Erstellen Sie zunächst den Reader, indem Sie [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) für den Stream aufrufen und im Optionsparameter `mode: "byob"` angeben.
Da es sich um einen „Bring Your Own Buffer“-Reader handelt, müssen wir außerdem einen `ArrayBuffer` erstellen, in den die Daten gelesen werden.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(200);
```

Im Folgenden ist eine Funktion dargestellt, die den Reader verwendet.
Sie ruft die Methode `read()` rekursiv auf, um Daten in den Puffer zu lesen.
Der Methode wird ein [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) übergeben, ein [Typed Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), das eine Ansicht auf den noch nicht beschriebenen Teil des ursprünglichen Array-Puffers bietet.
Die Parameter der Ansicht werden anhand der Daten berechnet, die bei vorherigen Aufrufen empfangen wurden und einen Versatz innerhalb des ursprünglichen Array-Puffers bestimmen.

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

Wenn im Stream keine weiteren Daten vorhanden sind, wird das von der Methode `read()` zurückgegebene Promise mit einem Objekt erfüllt, dessen Eigenschaft `done` auf `true` gesetzt ist. Die Funktion kehrt dann zurück.

Die Eigenschaft [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) gibt ein Promise zurück. Damit können Sie überwachen, ob der Stream geschlossen wurde, ein Fehler aufgetreten ist oder die Sperre des Readers aufgehoben wurde.

```js
reader.closed
  .then(() => {
    // Resolved - code to handle stream closing
  })
  .catch(() => {
    // Rejected - code to handle error
  });
```

Um den Stream abzubrechen, rufen Sie [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) auf und geben Sie optional einen _Grund_ an.
Die Methode gibt ein Promise zurück, das erfüllt wird, sobald der Stream abgebrochen wurde.
Wird der Stream abgebrochen, ruft der Controller seinerseits `cancel()` für die zugrunde liegende Quelle auf und übergibt dabei den optionalen Grund.

Der Beispielcode unter [Lesbare Byte-Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples) ruft die Abbruchmethode beim Drücken einer Schaltfläche auf:

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log("cancel complete"));
});
```

Der Consumer kann auch `releaseLock()` aufrufen, um die Sperre des Readers für den Stream aufzuheben, allerdings nur, wenn kein Lesevorgang aussteht:

```js
reader.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Konzepte der Streams API](/de/docs/Web/API/Streams_API)
- [Lesbare Byte-Streams verwenden](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill)
