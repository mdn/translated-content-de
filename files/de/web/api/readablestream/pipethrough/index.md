---
title: "ReadableStream: pipeThrough()-Methode"
short-title: pipeThrough()
slug: Web/API/ReadableStream/pipeThrough
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`pipeThrough()`**-Methode der [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle bietet eine kaskadierbare Möglichkeit, den aktuellen Stream durch einen Transformationsstream oder ein beliebiges anderes schreib-/lesepaar zu leiten.

Ein Stream wird beim Piping in der Regel für die Dauer des Pipes gesperrt, wodurch andere Leser daran gehindert werden, ihn zu sperren.

## Syntax

```js-nolint
pipeThrough(transformStream)
pipeThrough(transformStream, options)
```

### Parameter

- `transformStream`

  - : Ein [`TransformStream`](/de/docs/Web/API/TransformStream) (oder ein Objekt mit der Struktur `{writable, readable}`), das aus einem lesbaren und einem beschreibbaren Stream besteht, die zusammenarbeiten, um einige Daten von einer Form in eine andere zu transformieren.
    Daten, die in den `writable`-Stream geschrieben werden, können in einem transformierten Zustand vom `readable`-Stream gelesen werden.
    Beispielsweise hat ein [`TextDecoder`](/de/docs/Web/API/TextDecoder) Bytes, die in ihn geschrieben werden, und Zeichenketten, die aus ihm gelesen werden, während ein Videodecoder kodierte Bytes in ihn geschrieben und unkomprimierte Videoframes aus ihm gelesen werden.

- `options` {{optional_inline}}

  - : Die Optionen, die beim Piping zum `writable`-Stream verwendet werden sollen.
    Verfügbare Optionen sind:

    - `preventClose`

      - : Wenn diese Option auf `true` gesetzt ist, führt das Schließen des Quell-`ReadableStream` nicht mehr dazu, dass der Ziel-`WritableStream` geschlossen wird.

    - `preventAbort`

      - : Wenn diese Option auf `true` gesetzt ist, führen Fehler im Quell-`ReadableStream` nicht mehr dazu, dass der Ziel-`WritableStream` abgebrochen wird.

    - `preventCancel`

      - : Wenn diese Option auf `true` gesetzt ist, führen Fehler im Ziel-`WritableStream` nicht mehr dazu, dass der Quell-`ReadableStream` abgebrochen wird.

    - `signal`

      - : Wenn ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt gesetzt ist, können laufende Pipe-Operationen über den entsprechenden [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden.

### Rückgabewert

Die `readable`-Seite des `transformStream`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn die `writable`- und/oder `readable`-Eigenschaft von `transformStream` nicht definiert ist.

## Beispiele

Im folgenden Beispiel (siehe [Unpack chunks of a PNG](https://mdn.github.io/dom-examples/streams/png-transform-stream/) für den vollständigen Code, der live ausgeführt wird, und [png-transform-stream](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) für den Quellcode) wird ein Bild abgerufen und dessen Body als [`ReadableStream`](/de/docs/Web/API/ReadableStream) abgerufen.

Anschließend protokollieren wir den Inhalt des lesbaren Streams, verwenden `pipeThrough()`, um ihn an eine neue Funktion zu senden, die eine grau gefärbte Version des Streams erstellt, und protokollieren dann auch den neuen Streaminhalt.

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

- [`ReadableStream()`](/de/docs/Web/API/ReadableStream/ReadableStream)-Konstruktor
- [Pipe-Ketten](/de/docs/Web/API/Streams_API/Using_readable_streams#pipe_chains)
