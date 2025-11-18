---
title: "HTMLCanvasElement: captureStream() Methode"
short-title: captureStream()
slug: Web/API/HTMLCanvasElement/captureStream
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Media Capture and Streams")}}

Die **`captureStream()`** Methode des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) Interfaces gibt einen [`MediaStream`](/de/docs/Web/API/MediaStream)
zurück, der einen [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) enthält, der eine Echtzeit-Videoaufnahme des Inhalts der Canvas bereitstellt.

## Syntax

```js-nolint
captureStream()
captureStream(frameRate)
```

### Parameter

- `frameRate` {{optional_inline}}
  - : Ein Gleitkommawert mit doppelter Genauigkeit, der die Frequenz der Aufnahme jedes
    Frames angibt. Wenn nicht gesetzt, wird jedes Mal ein neues Frame erfasst, wenn die Canvas geändert wird; wenn auf `0` gesetzt, werden Frames nicht automatisch erfasst, sondern nur
    erfasst, wenn die `requestFrame()`-Methode des zurückgegebenen Tracks
    aufgerufen wird.

### Rückgabewert

Ein Verweis auf ein [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt, das einen einzelnen
[`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Wert von `frameRate` negativ ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Bitmap der Canvas ist nicht ursprungssicher;
    mindestens einige seiner Inhalte wurden oder könnten von einer anderen Site geladen worden sein als der, von der das Dokument selbst geladen wurde.

## Beispiel

```js
// Find the canvas element to capture
const canvasElt = document.querySelector("canvas");

// Get the stream
const stream = canvasElt.captureStream(25); // 25 FPS

// Do things to the stream
// E.g. Send it to another computer using an RTCPeerConnection
//      pc is an RTCPeerConnection created elsewhere
stream.getTracks().forEach((track) => pc.addTrack(track, stream));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream), das das Erfassen eines Streams
  von einem Media-Element ermöglicht.
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
