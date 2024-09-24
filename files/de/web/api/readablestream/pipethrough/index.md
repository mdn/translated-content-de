---
title: "ReadableStream: pipeThrough() Methode"
short-title: pipeThrough()
slug: Web/API/ReadableStream/pipeThrough
l10n:
  sourceCommit: d8b4431bfde42f1bc195239ea1f378d763f8163e
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die **`pipeThrough()`** Methode der {{domxref("ReadableStream")}} Schnittstelle bietet eine kaskadierbare Möglichkeit, den aktuellen Stream durch einen Transformationsstrom oder ein anderes beschreibbares/lesbares Paar zu leiten.

Das Pipen eines Streams wird diesen im Allgemeinen für die Dauer des Pipelining sperren, wodurch verhindert wird, dass andere Leser ihn sperren können.

## Syntax

```js-nolint
pipeThrough(transformStream)
pipeThrough(transformStream, options)
```

### Parameter

- `transformStream`

  - : Ein {{domxref("TransformStream")}} (oder ein Objekt mit der Struktur `{writable, readable}`), das aus einem lesbaren Stream und einem beschreibbaren Stream besteht, die zusammenarbeiten, um Daten von einer Form in eine andere zu transformieren.
    In den `writable` Stream geschriebene Daten können in einem transformierten Zustand vom `readable` Stream gelesen werden.
    Beispielsweise hat ein {{domxref("TextDecoder")}} Bytes, die ihm geschrieben werden, und Zeichenketten, die aus ihm gelesen werden, während ein Videodecoder codierte Bytes geschrieben bekommt und unkomprimierte Videoframes ausliest.

- `options` {{optional_inline}}

  - : Die Optionen, die beim Pipelining in den `writable` Stream verwendet werden sollen.
    Verfügbare Optionen sind:

    - `preventClose`

      - : Wenn dies auf `true` gesetzt ist, führt das Schließen des Quell-`ReadableStream` nicht mehr dazu, dass der Ziel-`WritableStream` geschlossen wird.

    - `preventAbort`

      - : Wenn dies auf `true` gesetzt ist, führen Fehler im Quell-`ReadableStream` nicht mehr dazu, dass der Ziel-`WritableStream` abgebrochen wird.

    - `preventCancel`

      - : Wenn dies auf `true` gesetzt ist, führen Fehler im Ziel-`WritableStream` nicht mehr dazu, dass der Quell-`ReadableStream` abgebrochen wird.

    - `signal`

      - : Wenn auf ein [`AbortSignal`](/de/docs/Web/API/AbortSignal) Objekt gesetzt, können laufende Pipelining-Operationen über den entsprechenden [`AbortController`](/de/docs/Web/API/AbortController) abgebrochen werden.

### Rückgabewert

Die `readable` Seite des `transformStream`.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die `writable` und/oder `readable` Eigenschaft von `transformStream` undefiniert sind.

## Beispiele

Im folgenden Beispiel (siehe [Chunks eines PNG entpacken](https://mdn.github.io/dom-examples/streams/png-transform-stream/) für den vollständigen Code, der live läuft, und [png-transform-stream](https://github.com/mdn/dom-examples/tree/main/streams/png-transform-stream) für den Quellcode) wird ein Bild abgerufen und dessen Body als {{domxref("ReadableStream")}} bezogen.

Als nächstes protokollieren wir die Inhalte des lesbaren Streams, verwenden `pipeThrough()`, um es an eine neue Funktion zu senden, die eine graustufenbasierte Version des Stroms erstellt, und protokollieren dann auch den neuen Stream-Inhalt.

```js
// Das ursprüngliche Bild abrufen
fetch("png-logo.png")
  // Den Body als ReadableStream abrufen
  .then((response) => response.body)
  .then((rs) => logReadableStream("Fetch Response Stream", rs))
  // Einen graustufenbasierten PNG-Strom aus dem Original erstellen
  .then((body) => body.pipeThrough(new PNGTransformStream()))
  .then((rs) => logReadableStream("PNG Chunk Stream", rs));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("ReadableStream.ReadableStream", "ReadableStream()")}} Konstruktor
- [Pipelinings](/de/docs/Web/API/Streams_API/Using_readable_streams#pipe_chains)
