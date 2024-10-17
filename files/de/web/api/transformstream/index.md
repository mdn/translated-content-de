---
title: TransformStream
slug: Web/API/TransformStream
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`TransformStream`**-Interface der [Streams-API](/de/docs/Web/API/Streams_API) ist eine konkrete Implementierung des _transform streams_ Konzepts in der [pipe chain](/de/docs/Web/API/Streams_API/Concepts#pipe_chains).

Es kann an die Methode [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) übergeben werden, um einen Datenstrom von einem Format in ein anderes zu transformieren.
Beispielsweise kann es zum Dekodieren (oder Kodieren) von Videoframes, zum Dekomprimieren von Daten oder zur Konvertierung des Streams von XML zu JSON verwendet werden.

Ein Transformationsalgorithmus kann optional als Argument beim Objektkonstruktor bereitgestellt werden.
Wird dieser nicht übergeben, werden die Daten beim Durchlaufen des Streams nicht verändert.

`TransformStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`TransformStream()`](/de/docs/Web/API/TransformStream/TransformStream)
  - : Erstellt und gibt ein Transformstream-Objekt zurück, mit optionaler Angabe eines Transformationsobjekts und Verwaltungsstrategien für die Streams.

## Instanz-Eigenschaften

- [`TransformStream.readable`](/de/docs/Web/API/TransformStream/readable) {{ReadOnlyInline}}
  - : Das `readable` Ende eines `TransformStream`.
- [`TransformStream.writable`](/de/docs/Web/API/TransformStream/writable) {{ReadOnlyInline}}
  - : Das `writable` Ende eines `TransformStream`.

## Instanz-Methoden

Keine

## Beispiele

### Any-to-uint8array-Stream

Im folgenden Beispiel gibt ein Transformstream alle erhaltenen Chunks als {{jsxref("Uint8Array")}}-Werte weiter.

```js
const transformContent = {
  start() {}, // required.
  async transform(chunk, controller) {
    chunk = await chunk;
    switch (typeof chunk) {
      case "object":
        // just say the stream is done I guess
        if (chunk === null) {
          controller.terminate();
        } else if (ArrayBuffer.isView(chunk)) {
          controller.enqueue(
            new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength),
          );
        } else if (
          Array.isArray(chunk) &&
          chunk.every((value) => typeof value === "number")
        ) {
          controller.enqueue(new Uint8Array(chunk));
        } else if (
          typeof chunk.valueOf === "function" &&
          chunk.valueOf() !== chunk
        ) {
          this.transform(chunk.valueOf(), controller); // hack
        } else if ("toJSON" in chunk) {
          this.transform(JSON.stringify(chunk), controller);
        }
        break;
      case "symbol":
        controller.error("Cannot send a symbol as a chunk part");
        break;
      case "undefined":
        controller.error("Cannot send undefined as a chunk part");
        break;
      default:
        controller.enqueue(this.textencoder.encode(String(chunk)));
        break;
    }
  },
  flush() {
    /* do any destructor work here */
  },
};

class AnyToU8Stream extends TransformStream {
  constructor() {
    super({ ...transformContent, textencoder: new TextEncoder() });
  }
}
```

### Mehrere ReadableStreams verketteten

Dies ist ein nützliches Beispiel, bei dem mehrere Streams verknüpft werden können. Beispiele beinhalten den Aufbau einer PWA mit progressivem Laden und progressivem Streaming.

```js
let responses = [
  /* conjoined response tree */
];
let { readable, writable } = new TransformStream();

responses.reduce(
  (a, res, i, arr) =>
    a.then(() => res.pipeTo(writable, { preventClose: i + 1 !== arr.length })),
  Promise.resolve(),
);
```

Beachten Sie, dass dies nicht widerstandsfähig gegenüber anderen Einflüssen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WHATWG Stream-Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und Transform-Streams.
- [Streams—Der definitive Leitfaden](https://web.dev/articles/streams)
