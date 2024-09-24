---
title: "HTMLCanvasElement: captureStream()-Methode"
short-title: captureStream()
slug: Web/API/HTMLCanvasElement/captureStream
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Media Capture and Streams")}}

Die **`captureStream()`**-Methode der {{domxref("HTMLCanvasElement")}}-Schnittstelle gibt einen {{domxref("MediaStream")}} zurück,
der einen {{domxref("CanvasCaptureMediaStreamTrack")}} enthält, der eine Echtzeit-Videoaufnahme des Inhalts des Canvas enthält.

## Syntax

```js-nolint
captureStream()
captureStream(frameRate)
```

### Parameter

- `frameRate` {{optional_inline}}
  - : Ein Gleitkommawert mit doppelter Genauigkeit, der die Aufnahmefrequenz jedes
    Frames angibt. Wenn nicht festgelegt, wird bei jeder Änderung des Canvas ein neuer Frame aufgenommen; wenn auf `0`
    gesetzt, werden die Frames nicht automatisch aufgenommen; stattdessen werden sie nur
    aufgenommen, wenn die Methode
    {{domxref("CanvasCaptureMediaStreamTrack.requestFrame", "requestFrame()")}} des zurückgegebenen Tracks
    aufgerufen wird.

### Rückgabewert

Ein Verweis auf ein {{domxref("MediaStream")}}-Objekt, das einen einzigen
{{domxref("CanvasCaptureMediaStreamTrack")}} enthält.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn der Wert von `frameRate` negativ ist.

- `SecurityError` {{domxref("DOMException")}}
  - : Der Bitmap des Canvas ist nicht origin clean;
    mindestens einige seiner Inhalte wurden von einer anderen Site geladen oder könnten von einer anderen Site als der geladen worden sein, von der das Dokument selbst geladen wurde.

## Beispiel

```js
// Finde das Canvas-Element, das aufgenommen werden soll
const canvasElt = document.querySelector("canvas");

// Erhalte den Stream
const stream = canvasElt.captureStream(25); // 25 FPS

// Machen Sie Dinge mit dem Stream
// Z.B. Senden Sie es mit einer RTCPeerConnection zu einem anderen Computer
//      pc ist eine anderweitig erstellte RTCPeerConnection
stream.getTracks().forEach((track) => pc.addTrack(track, stream));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement.captureStream()")}}, das die Aufnahme eines Streams
  von einem Media-Element ermöglicht.
- {{domxref("MediaStream")}}
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
