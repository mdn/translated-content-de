---
title: "HTMLCanvasElement: captureStream()-Methode"
short-title: captureStream()
slug: Web/API/HTMLCanvasElement/captureStream
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Media Capture and Streams")}}

Die **`captureStream()`**-Methode des [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)-Interfaces gibt einen [`MediaStream`](/de/docs/Web/API/MediaStream) zurück, der einen [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) enthält. Dieser umfasst eine Echtzeit-Videoaufnahme des Inhalts des Canvas.

## Syntax

```js-nolint
captureStream()
captureStream(frameRate)
```

### Parameter

- `frameRate` {{optional_inline}}
  - : Ein doppelt präziser Gleitkommawert, der die Aufnahmerate jedes Frames angibt. Wenn dieser nicht festgelegt ist, wird ein neues Bild jedes Mal aufgenommen, wenn sich das Canvas ändert; wenn er auf `0` gesetzt ist, werden keine Bilder automatisch aufgenommen; stattdessen werden sie nur aufgenommen, wenn die `requestFrame()`-Methode des zurückgegebenen Tracks aufgerufen wird.

### Rückgabewert

Eine Referenz auf ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das einen einzelnen [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack) enthält.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn der Wert von `frameRate` negativ ist.

- `SecurityError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Bitmap des Canvas ist nicht ursprungsrein; mindestens ein Teil seines Inhalts wurde oder könnte von einer anderen Seite geladen worden sein als der, von der das Dokument selbst geladen wurde.

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

- [`HTMLMediaElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream), das es ermöglicht, einen Stream von einem Media-Element aufzunehmen.
- [`MediaStream`](/de/docs/Web/API/MediaStream)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
