---
title: TransformStream
slug: Web/API/TransformStream
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`TransformStream`**-Schnittstelle der [Streams-API](/de/docs/Web/API/Streams_API) stellt eine konkrete Implementierung des _Transform-Stream_-Konzepts in einer [pipe chain](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) dar.

Sie kann an die Methode [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) übergeben werden, um einen Datenstrom von einem Format in ein anderes zu transformieren.
Beispielsweise könnte sie zum Dekodieren (oder Kodieren) von Videoframes, zum Dekomprimieren von Daten oder zum Konvertieren des Streams von XML zu JSON verwendet werden.

Ein Transformationsalgorithmus kann optional als Argument beim Objektkonstruktor übergeben werden.
Wird dieser nicht bereitgestellt, werden die Daten beim Durchleiten durch den Stream nicht verändert.

`TransformStream` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`TransformStream()`](/de/docs/Web/API/TransformStream/TransformStream)
  - : Erstellt und gibt ein Transform-Stream-Objekt zurück, wobei optional ein Transformationsobjekt und Queue-Strategien für die Streams angegeben werden können.

## Instanz-Eigenschaften

- [`TransformStream.readable`](/de/docs/Web/API/TransformStream/readable) {{ReadOnlyInline}}
  - : Das `readable` Ende eines `TransformStream`.
- [`TransformStream.writable`](/de/docs/Web/API/TransformStream/writable) {{ReadOnlyInline}}
  - : Das `writable` Ende eines `TransformStream`.

## Instanz-Methoden

Keine

## Beispiele

### Anything-to-uint8array stream

Im folgenden Beispiel leitet ein Transform-Stream alle empfangenen Chunks als {{jsxref("Uint8Array")}}-Werte weiter.

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

### Polyfilling von TextEncoderStream und TextDecoderStream

Beachten Sie, dass dies von den nativen Konstruktoren als veraltet gilt. Dies ist als Polyfill für nicht unterstützte Plattformen gedacht.

```js
const tes = {
  start() {
    this.encoder = new TextEncoder();
  },
  transform(chunk, controller) {
    controller.enqueue(this.encoder.encode(chunk));
  },
};

let _jstes_wm = new WeakMap(); /* info holder */
class JSTextEncoderStream extends TransformStream {
  constructor() {
    let t = { ...tes };

    super(t);
    _jstes_wm.set(this, t);
  }
  get encoding() {
    return _jstes_wm.get(this).encoder.encoding;
  }
}
```

Ähnlich kann `TextDecoderStream` wie folgt geschrieben werden:

```js
const tds = {
  start() {
    this.decoder = new TextDecoder(this.encoding, this.options);
  },
  transform(chunk, controller) {
    controller.enqueue(this.decoder.decode(chunk, { stream: true }));
  },
};

let _jstds_wm = new WeakMap(); /* info holder */
class JSTextDecoderStream extends TransformStream {
  constructor(encoding = "utf-8", { ...options } = {}) {
    let t = { ...tds, encoding, options };

    super(t);
    _jstds_wm.set(this, t);
  }
  get encoding() {
    return _jstds_wm.get(this).decoder.encoding;
  }
  get fatal() {
    return _jstds_wm.get(this).decoder.fatal;
  }
  get ignoreBOM() {
    return _jstds_wm.get(this).decoder.ignoreBOM;
  }
}
```

### Verkettung mehrerer ReadableStreams

Dies ist ein nützliches Beispiel, bei dem mehrere Streams verbunden werden können. Beispiele hierfür sind der Aufbau einer PWA mit progressivem Laden und progressivem Streaming.

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

Beachten Sie, dass dies nicht gegen andere Einflüsse widerstandsfähig ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von lesbaren, schreibbaren und Transform-Streams.
- [Streams—The Definitive Guide](https://web.dev/articles/streams)
