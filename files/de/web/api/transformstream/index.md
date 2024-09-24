---
title: TransformStream
slug: Web/API/TransformStream
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`TransformStream`**-Schnittstelle der [Streams API](/de/docs/Web/API/Streams_API) stellt eine konkrete Implementierung des Konzeptes eines [Pipe Chains](/de/docs/Web/API/Streams_API/Concepts#pipe_chains) für _Transform Streams_ dar.

Es kann an die Methode {{domxref("ReadableStream.pipeThrough()")}} übergeben werden, um einen Datenstrom von einem Format in ein anderes zu transformieren.
Zum Beispiel könnte es verwendet werden, um Videoframes zu decodieren (oder zu encodieren), Daten zu dekomprimieren oder den Stream von XML in JSON zu konvertieren.

Ein Transformationsalgorithmus kann als optionales Argument an den Objektkonstruktor übergeben werden.
Wenn keiner angegeben wird, werden die Daten beim Durchlaufen des Streams nicht verändert.

`TransformStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- {{domxref("TransformStream.TransformStream", "TransformStream()")}}
  - : Erstellt und gibt ein Transform Stream-Objekt zurück und spezifiziert optional ein Transformationsobjekt und Warteschlangenstrategien für die Streams.

## Instanzeigenschaften

- {{domxref("TransformStream.readable")}} {{ReadOnlyInline}}
  - : Die `readable`-Ende eines `TransformStream`.
- {{domxref("TransformStream.writable")}} {{ReadOnlyInline}}
  - : Die `writable`-Ende eines `TransformStream`.

## Instanzmethoden

Keine

## Beispiele

### Alles-zu-uint8array-Stream

Im folgenden Beispiel überträgt ein Transform Stream alle empfangenen Chunks als {{jsxref("Uint8Array")}}-Werte.

```js
const transformContent = {
  start() {}, // erforderlich.
  async transform(chunk, controller) {
    chunk = await chunk;
    switch (typeof chunk) {
      case "object":
        // Ich denke, der Stream ist hier fertig
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
          this.transform(chunk.valueOf(), controller); // Hack
        } else if ("toJSON" in chunk) {
          this.transform(JSON.stringify(chunk), controller);
        }
        break;
      case "symbol":
        controller.error("Kann ein Symbol nicht als Chunk senden");
        break;
      case "undefined":
        controller.error("Kann undefined nicht als Chunk senden");
        break;
      default:
        controller.enqueue(this.textencoder.encode(String(chunk)));
        break;
    }
  },
  flush() {
    /* hier Bereinigungsvorgänge durchführen */
  },
};

class AnyToU8Stream extends TransformStream {
  constructor() {
    super({ ...transformContent, textencoder: new TextEncoder() });
  }
}
```

### Polyfill für TextEncoderStream und TextDecoderStream

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

let _jstes_wm = new WeakMap(); /* Informationsspeicher */
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

Ähnlich kann `TextDecoderStream` so geschrieben werden:

```js
const tds = {
  start() {
    this.decoder = new TextDecoder(this.encoding, this.options);
  },
  transform(chunk, controller) {
    controller.enqueue(this.decoder.decode(chunk, { stream: true }));
  },
};

let _jstds_wm = new WeakMap(); /* Informationsspeicher */
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

Dies ist ein nützliches Beispiel, in dem mehrere Streams verbunden werden können. Beispiele umfassen den Aufbau einer PWA mit progressive_loading und progressivem Streaming.

```js
let responses = [
  /* verbundener Antwortbaum */
];
let { readable, writable } = new TransformStream();

responses.reduce(
  (a, res, i, arr) =>
    a.then(() => res.pipeTo(writable, { preventClose: i + 1 !== arr.length })),
  Promise.resolve(),
);
```

Beachten Sie, dass dies nicht gegen andere Einflüsse resistent ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WHATWG Stream Visualizer](https://whatwg-stream-visualizer.glitch.me/), für eine grundlegende Visualisierung von Readable, Writable und Transform Streams.
- [Streams—Der definitive Leitfaden](https://web.dev/articles/streams)
