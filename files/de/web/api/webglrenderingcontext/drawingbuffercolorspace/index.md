---
title: "WebGLRenderingContext: drawingBufferColorSpace Eigenschaft"
short-title: drawingBufferColorSpace
slug: Web/API/WebGLRenderingContext/drawingBufferColorSpace
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.drawingBufferColorSpace`**-Eigenschaft gibt den Farbraum des WebGL-Zeichenpuffers an. Neben dem Standard (`srgb`) kann der `display-p3` Farbraum verwendet werden.

Siehe [`WebGLRenderingContext.unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace), um den Farbraum für Texturen zu spezifizieren.

## Wert

Diese Eigenschaft kann folgende Werte haben:

- `"srgb"` wählt den [sRGB Farbraum](https://en.wikipedia.org/wiki/SRGB). Dies ist der Standardwert.
- `"display-p3"` wählt den [display-p3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3).

Wenn ein ungültiger Wert angegeben wird, bleibt der Wert von `drawingBufferColorSpace` unverändert.

## Beispiele

### Festlegen des Zeichenpuffer-Farbraums, um ein Display P3 Rot zu zeichnen

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
gl.drawingBufferColorSpace = "display-p3";
gl.clearColor(1, 0, 0, 1);
gl.clear(gl.COLOR_BUFFER_BIT);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace)
