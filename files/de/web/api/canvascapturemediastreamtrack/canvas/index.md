---
title: "CanvasCaptureMediaStreamTrack: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/CanvasCaptureMediaStreamTrack/canvas
l10n:
  sourceCommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{APIRef("Media Capture and Streams")}}

Die schreibgeschützte **`canvas`**-Eigenschaft der [`CanvasCaptureMediaStreamTrack`](/de/docs/Web/API/CanvasCaptureMediaStreamTrack)-Schnittstelle gibt das [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) zurück, von dem die Frames erfasst werden.

## Wert

Ein `HTMLCanvasElement`, das die Canvas angibt, die die Quelle der erfassten Frames ist.

## Beispiel

```js
// Find the canvas element to capture
const canvasElt = document.querySelector("canvas");

// Get the stream
const stream = canvasElt.captureStream(25); // 25 FPS

// Do things to the stream
// …

// Obtain the canvas associated with the stream
const canvas = stream.canvas;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement.captureStream()`](/de/docs/Web/API/HTMLCanvasElement/captureStream), um einen Stream zu erstellen, der ein bestimmtes Canvas-Element erfasst.
- {{HTMLElement("canvas")}}
