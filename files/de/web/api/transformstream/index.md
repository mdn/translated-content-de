---
title: TransformStream
slug: Web/API/TransformStream
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`TransformStream`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) repräsentiert eine konkrete Implementierung des _transform stream_-Konzepts innerhalb der [pipe chain](/de/docs/Web/API/Streams_API/Concepts#pipe_chains).

Sie kann an die Methode [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) übergeben werden, um einen Datenstrom von einem Format in ein anderes zu transformieren.
Beispielsweise könnte sie verwendet werden, um Videoframes zu dekodieren (oder zu kodieren), Daten zu dekomprimieren oder den Stream von XML in JSON zu konvertieren.

Ein Transformationsalgorithmus kann als optionales Argument an den Objektkonstruktor übergeben werden.
Wird dieser nicht bereitgestellt, werden die Daten nicht verändert, wenn sie durch den Stream geleitet werden.

`TransformStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`TransformStream()`](/de/docs/Web/API/TransformStream/TransformStream)
  - : Erstellt und gibt ein Transform-Stream-Objekt zurück, wobei optional ein Transformationsobjekt und Warteschlangenstrategien für die Streams spezifiziert werden können.

## Instanz-Eigenschaften

- [`TransformStream.readable`](/de/docs/Web/API/TransformStream/readable) {{ReadOnlyInline}}
  - : Das `readable`-Ende eines `TransformStream`.
- [`TransformStream.writable`](/de/docs/Web/API/TransformStream/writable) {{ReadOnlyInline}}
  - : Das `writable`-Ende eines `TransformStream`.

## Instanz-Methoden

Keine

## Beispiele

### Anything-to-uint8array stream

Im folgenden Beispiel leitet ein Transform-Stream alle Chunks, die er als {{jsxref("Uint8Array")}}-Werte empfängt, direkt weiter.

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

### Mehrere ReadableStreams zusammenketten

Dies ist ein nützliches Beispiel, bei dem mehrere Streams verknüpft werden können. Beispiele dafür sind der Bau einer PWA mit progressivem Laden und progressivem Streaming.

```js
let responses = [/* conjoined response tree */];
let { readable, writable } = new TransformStream();

responses.reduce(
  (a, res, i, arr) =>
    a.then(() => res.pipeTo(writable, { preventClose: i + 1 !== arr.length })),
  Promise.resolve(),
);
```

Beachten Sie, dass dies nicht gegen andere Einflüsse widerstandsfähig ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams—Der definitive Leitfaden](https://web.dev/articles/streams)
