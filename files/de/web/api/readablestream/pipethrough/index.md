---
title: "ReadableStream: pipeThrough()-Methode"
short-title: pipeThrough()
slug: Web/API/ReadableStream/pipeThrough
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`pipeThrough()`**-Methode der [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Schnittstelle bietet eine verkettbare Möglichkeit, den aktuellen Stream durch einen Transform-Stream oder ein anderes beschreibbares/lesbares Paar zu pipen.

Das Pipen eines Streams sperrt diesen in der Regel für die Dauer des Pipes und verhindert, dass andere Leser ihn sperren.

## Syntax

```js-nolint
pipeThrough(transformStream)
pipeThrough(transformStream, options)
```

### Parameter

- `transformStream`

  - : Ein [`TransformStream`](/de/docs/Web/API/TransformStream) (oder ein Objekt mit der Struktur `{writable, readable}`), das aus einem lesbaren und einem beschreibbaren Stream besteht, die zusammenarbeiten, um Daten von einer Form in eine andere zu transformieren.
    Daten, die in den `writable`-Stream geschrieben werden, können in einem transformierten Zustand von dem `readable`-Stream gelesen werden.
    Beispielsweise hat ein [`TextDecoder`](/de/docs/Web/API/TextDecoder) Bytes, die hineingeschrieben werden, und Zeichenfolgen, die daraus gelesen werden, während ein Videodecoder kodierte Bytes hineingeschrieben bekommt und unkomprimierte Videoframes daraus gelesen werden.

- `options` {{optional_inline}}

  - : Die Optionen, die beim Pipen in den `writable`-Stream verwendet werden sollen.
    Verfügbare Optionen sind:

    - `preventClose`

      - : Wenn dieser Wert auf `true` gesetzt ist, wird das Schließen des Quell-`ReadableStream` nicht mehr dazu führen, dass der Ziel-`WritableStream` geschlossen wird.

    - `preventAbort`

      - : Wenn dieser Wert auf `true` gesetzt ist, werden Fehler im Quell-`ReadableStream` den Ziel-`WritableStream` nicht mehr abbrechen.

    - `preventCancel`

      - : Wenn dieser Wert auf `true` gesetzt ist, werden Fehler im Ziel-`WritableStream` den Quell-`ReadableStream` nicht mehr abbrechen.

    - `signal`

      - : Wenn auf ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt gesetzt, können laufende Pipe-Operationen über den entsprechenden [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden.

### Rückgabewert

Die `readable`-Seite des `transformStream`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `writable`- und/oder `readable`-Eigenschaft von `transformStream` undefiniert ist.

## Beispiele

Im folgenden Beispiel (siehe [Unpack chunks of a PNG](https://mdn.github.io/dom-examples/streams/png-transform-stream/) für den vollständigen Code, der live läuft, und [png-transform-stream](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) für den Quellcode) wird ein Bild abgerufen und dessen Inhalt als [`ReadableStream`](/de/docs/Web/API/ReadableStream) erhalten.

Anschließend protokollieren wir den Inhalt des lesbaren Streams, verwenden `pipeThrough()`, um ihn an eine neue Funktion zu senden, die eine grau skalierte Version des Streams erstellt, und protokollieren dann auch den neuen Stream-Inhalt.

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
