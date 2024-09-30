---
title: TransformStream
slug: Web/API/TransformStream
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Das **`TransformStream`** Interface der [Streams API](/de/docs/Web/API/Streams_API) stellt eine konkrete Implementierung des _transform stream_ Konzepts der [pipe chain](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) dar.

Es kann an die Methode [`ReadableStream.pipeThrough()`](/de/docs/Web/API/ReadableStream/pipeThrough) übergeben werden, um einen Datenstrom von einem Format in ein anderes zu transformieren.
Beispielsweise könnte es verwendet werden, um Video-Frames zu decodieren (oder zu encodieren), Daten zu dekomprimieren oder den Stream von XML zu JSON zu konvertieren.

Ein Transformationsalgorithmus kann als optionales Argument dem Objektkonstruktor übergeben werden.
Wenn keiner angegeben wird, werden Daten beim Durchleiten durch den Stream nicht geändert.

`TransformStream` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`TransformStream()`](/de/docs/Web/API/TransformStream/TransformStream)
  - : Erstellt und gibt ein Transformstream-Objekt zurück, wobei optional ein Transformationsobjekt und Strategien zur Warteschlangen für die Streams angegeben werden können.

## Instanzeigenschaften

- [`TransformStream.readable`](/de/docs/Web/API/TransformStream/readable) {{ReadOnlyInline}}
  - : Das `readable` Ende eines `TransformStream`.
- [`TransformStream.writable`](/de/docs/Web/API/TransformStream/writable) {{ReadOnlyInline}}
  - : Das `writable` Ende eines `TransformStream`.

## Instanzmethoden

Keine

## Beispiele

### Anything-to-uint8array Stream

Im folgenden Beispiel leitet ein Transformstream alle empfangenen Chunks als {{jsxref("Uint8Array")}}-Werte weiter.

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

Beachten Sie, dass dies durch die nativen Konstruktoren veraltet ist. Dies ist als Polyfill für nicht unterstützte Plattformen gedacht.

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

Ebenso kann `TextDecoderStream` wie folgt geschrieben werden:

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

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von readable, writable und transform streams.
- [Streams—The Definitive Guide](https://web.dev/articles/streams)
