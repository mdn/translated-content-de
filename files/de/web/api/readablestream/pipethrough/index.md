---
title: "ReadableStream: pipeThrough() Methode"
short-title: pipeThrough()
slug: Web/API/ReadableStream/pipeThrough
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`pipeThrough()`** Methode der [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle bietet eine kaskadierbare Möglichkeit, den aktuellen Stream durch einen Transform-Stream oder ein anderes schreibbares/lesbares Paar zu leiten.

Das Leiten eines Streams sperrt diesen in der Regel für die Dauer der Pipe, was verhindert, dass andere Leser ihn sperren können.

## Syntax

```js-nolint
pipeThrough(transformStream)
pipeThrough(transformStream, options)
```

### Parameter

- `transformStream`

  - : Ein [`TransformStream`](/de/docs/Web/API/TransformStream) (oder ein Objekt mit der Struktur `{writable, readable}`), bestehend aus einem lesbaren und einem schreibbaren Stream, die zusammenarbeiten, um Daten von einer Form in eine andere zu transformieren.
    Daten, die in den `writable` Stream geschrieben werden, können in einem transformierten Zustand vom `readable` Stream gelesen werden.
    Beispielsweise werden in einen [`TextDecoder`](/de/docs/Web/API/TextDecoder) Bytes geschrieben und Zeichenketten ausgelesen, während ein Videodecoder codierte Bytes geschrieben und unkomprimierte Videoframes ausgelesen werden.

- `options` {{optional_inline}}

  - : Die Optionen, die beim Leiten zum `writable` Stream verwendet werden sollen.
    Verfügbare Optionen sind:

    - `preventClose`

      - : Wenn dies auf `true` gesetzt ist, führt das Schließen des Quellen-`ReadableStream` nicht mehr dazu, dass der Ziel-`WritableStream` geschlossen wird.

    - `preventAbort`

      - : Wenn dies auf `true` gesetzt ist, führen Fehler im Quellen-`ReadableStream` nicht mehr dazu, dass der Ziel-`WritableStream` abgebrochen wird.

    - `preventCancel`

      - : Wenn dies auf `true` gesetzt ist, führen Fehler im Ziel-`WritableStream` nicht mehr dazu, dass der Quellen-`ReadableStream` abgebrochen wird.

    - `signal`
      - : Wenn auf ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt gesetzt, können laufende Pipe-Operationen dann über den entsprechenden [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden.

### Rückgabewert

Die `readable` Seite des `transformStream`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `writable` und/oder `readable` Eigenschaft von `transformStream` undefiniert sind.

## Beispiele

Im folgenden Beispiel (siehe [Unpack chunks of a PNG](https://mdn.github.io/dom-examples/streams/png-transform-stream/) für den vollständigen, live ausgeführten Code und [png-transform-stream](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) für den Quellcode) wird ein Bild abgerufen und sein Körper als [`ReadableStream`](/de/docs/Web/API/ReadableStream) erfasst.

Als Nächstes protokollieren wir den Inhalt des lesbaren Streams, verwenden `pipeThrough()`, um ihn an eine neue Funktion zu senden, die eine grau skalierte Version des Streams erstellt, und protokollieren dann auch den neuen Stream-Inhalt.

```js
// Fetch the original image
fetch("png-logo.png")
  // Retrieve its body as ReadableStream
  .then((response) => response.body)
  .then((rs) => logReadableStream("Fetch Response Stream", rs))
  // Create a gray-scaled PNG stream out of the original
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => logReadableStream("PNG Chunk Stream", rs));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream) Konstruktor
- [Pipe chains](/de/docs/Web/API/Streams_API/Using_readable_streams#pipe_chains)
