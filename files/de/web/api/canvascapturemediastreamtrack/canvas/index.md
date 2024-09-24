---
title: "CanvasCaptureMediaStreamTrack: canvas-Eigenschaft"
short-title: canvas
slug: Web/API/CanvasCaptureMediaStreamTrack/canvas
l10n:
  sourceCommit: 7fb6ccccf88b71712c1b603bed7092dbb622b698
---

{{APIRef("Media Capture and Streams")}}

Die **`canvas`**-Eigenschaft des {{domxref("CanvasCaptureMediaStreamTrack")}}-Interfaces gibt das {{domxref("HTMLCanvasElement")}} zurück, von dem die Frames erfasst werden.

## Wert

Ein `HTMLCanvasElement`, das die Canvas angibt, die die Quelle der erfassten Frames ist.

## Beispiel

```js
// Suchen Sie das Canvas-Element, das erfasst werden soll
const canvasElt = document.querySelector("canvas");

// Holen Sie den Stream
const stream = canvasElt.captureStream(25); // 25 FPS

// Führen Sie Dinge mit dem Stream aus
// …

// Erhalten Sie die Canvas, die mit dem Stream verbunden ist
const canvas = stream.canvas;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLCanvasElement.captureStream()")}} zum Erstellen eines Streams, um ein
  bestimmtes Canvas-Element zu erfassen.
- {{HTMLElement("canvas")}}
