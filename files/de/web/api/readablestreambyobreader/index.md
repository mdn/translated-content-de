---
title: ReadableStreamBYOBReader
slug: Web/API/ReadableStreamBYOBReader
l10n:
  sourceCommit: 7d37e07f04c40ecbfd424d6fce0766ef3d2f7db4
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die Schnittstelle `ReadableStreamBYOBReader` des [Streams API](/de/docs/Web/API/Streams_API) definiert einen Leser für einen [`ReadableStream`](/de/docs/Web/API/ReadableStream), der Zero-Copy-Lesen aus einer zugrunde liegenden Bytequelle unterstützt.
Sie wird für effizientes Kopieren aus zugrunde liegenden Quellen verwendet, bei denen die Daten als anonyme Folge von Bytes geliefert werden, wie z. B. Dateien.

Eine Instanz dieses Lesertyps sollte in der Regel durch den Aufruf von [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem Stream erhalten werden, wobei im Optionsparameter `mode: "byob"` angegeben wird.
Der lesbare Stream muss eine _zugrunde liegende Bytequelle_ haben. Mit anderen Worten, er muss [konstruiert](/de/docs/Web/API/ReadableStream/ReadableStream) worden sein, indem eine zugrunde liegende Quelle mit [`type: "bytes"`](/de/docs/Web/API/ReadableStream/ReadableStream#type) spezifiziert wurde.

Bei Verwendung dieses Lesertyps führt eine [`read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read)-Anfrage, wenn die internen Warteschlangen des lesbaren Streams leer sind, zu einem Zero-Copy-Transfer von der zugrunde liegenden Quelle (unter Umgehung der internen Warteschlangen des Streams).
Wenn die internen Warteschlangen nicht leer sind, wird eine `read()`-Anfrage aus den gepufferten Daten erfüllt.

Beachten Sie, dass die Methoden und Eigenschaften denen des Standardlesers ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) ähneln.
Die `read()`-Methode unterscheidet sich darin, dass sie eine Ansicht bietet, in die Daten geschrieben werden sollen.

## Konstruktor

- [`ReadableStreamBYOBReader()`](/de/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader)
  - : Erstellt und gibt eine Instanz des `ReadableStreamBYOBReader` -Objekts zurück.

## Instanzeigenschaften

- [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn der Stream geschlossen wird, oder abgelehnt wird, wenn der Stream einen Fehler wirft oder die Sperre des Leser freigegeben wird. Diese Eigenschaft ermöglicht es Ihnen, Code zu schreiben, der auf ein Ende des Streaming-Prozesses reagiert.

## Instanzmethoden

- [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel)
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Stream abgebrochen wird. Das Aufrufen dieser Methode signalisiert einem Verbraucher das Verlustinteresse am Stream. Das übergebene Argument `reason` wird der zugrunde liegenden Quelle übergeben, die es möglicherweise nutzt oder nicht.
- [`ReadableStreamBYOBReader.read()`](/de/docs/Web/API/ReadableStreamBYOBReader/read)
  - : Überträgt eine Ansicht, in die Daten geschrieben werden müssen, und gibt ein {{jsxref("Promise")}} zurück, das mit dem nächsten Chunk im Stream aufgelöst oder mit dem Hinweis abgelehnt wird, dass der Stream geschlossen ist oder einen Fehler aufweist.
- [`ReadableStreamBYOBReader.releaseLock()`](/de/docs/Web/API/ReadableStreamBYOBReader/releaseLock)
  - : Gibt die Sperre des Lesers auf den Stream frei.

## Beispiele

Das folgende Beispiel stammt aus den Live-Beispielen in [Verwenden von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples).

Erstellen Sie zuerst den Leser mit [`ReadableStream.getReader()`](/de/docs/Web/API/ReadableStream/getReader) auf dem Stream und geben Sie `mode: "byob"` im Optionsparameter an.
Da dies ein "Bring Your Own Buffer"-Leser ist, müssen wir auch ein `ArrayBuffer` erstellen, in das gelesen werden soll.

```js
const reader = stream.getReader({ mode: "byob" });
let buffer = new ArrayBuffer(200);
```

Nachfolgend ist eine Funktion aufgeführt, die den Leser verwendet.
Diese ruft die `read()`-Methode rekursiv auf, um Daten in den Puffer zu lesen.
Die Methode nimmt ein [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) [Typed Array](/de/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), das eine Ansicht über den Teil des ursprünglichen Array-Puffers ist, der noch nicht beschrieben wurde.
Die Parameter der Ansicht werden aus den in vorherigen Aufrufen empfangenen Daten berechnet, die einen Versatz in den ursprünglichen Array-Puffer definieren.

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

Wenn es keine Daten mehr im Stream gibt, wird die `read()`-Methode mit einem Objekt gelöst, dessen Eigenschaft `done` auf `true` gesetzt ist, und die Funktion gibt zurück.

Die [`ReadableStreamBYOBReader.closed`](/de/docs/Web/API/ReadableStreamBYOBReader/closed)-Eigenschaft gibt ein Versprechen zurück, das verwendet werden kann, um zu überwachen, ob der Stream geschlossen oder ein Fehler aufgetreten ist oder die Lesersperre freigegeben wurde.

```js
reader.closed
  .then(() => {
    // Resolved - code to handle stream closing
  })
  .catch(() => {
    // Rejected - code to handle error
  });
```

Um den Stream abzubrechen, rufen Sie [`ReadableStreamBYOBReader.cancel()`](/de/docs/Web/API/ReadableStreamBYOBReader/cancel) auf und geben dabei optional einen _Grund_ an.
Dies gibt ein Versprechen zurück, das gelöst wird, wenn der Stream abgebrochen wurde.
Wenn der Stream abgebrochen wird, ruft der Controller seinerseits `cancel()` auf der zugrunde liegenden Quelle auf und übergibt den optionalen Grund.

Der Beispielcode in [Verwenden von lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams#examples) ruft die Abbrechen-Methode auf, wenn eine Taste gedrückt wird, wie gezeigt:

```js
button.addEventListener("click", () => {
  reader.cancel("user choice").then(() => console.log("cancel complete"));
});
```

Der Verbraucher kann auch `releaseLock()` aufrufen, um die Sperrung des Lesers auf dem Stream freizugeben, jedoch nur, wenn kein Lesevorgang aussteht:

```js
reader.releaseLock();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API-Konzepte](/de/docs/Web/API/Streams_API)
- [Verwenden eines lesbaren Byte-Streams](/de/docs/Web/API/Streams_API/Using_readable_byte_streams)
- [`ReadableStream`](/de/docs/Web/API/ReadableStream)
- [Web-streams-polyfill](https://github.com/MattiasBuelens/web-streams-polyfill) oder [sd-streams](https://github.com/stardazed/sd-streams) - Polyfills
