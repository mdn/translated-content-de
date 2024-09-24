---
title: "WebGLRenderingContext: Eigenschaft drawingBufferColorSpace"
short-title: drawingBufferColorSpace
slug: Web/API/WebGLRenderingContext/drawingBufferColorSpace
l10n:
  sourceCommit: 21a713eb00555af7e98aea347ba35070c7525fda
---

{{APIRef("WebGL")}}

Die **`WebGLRenderingContext.drawingBufferColorSpace`**-Eigenschaft gibt den Farbraum des WebGL-Zeichenpuffers an. Neben dem Standardwert (`srgb`) kann der `display-p3` Farbraum verwendet werden.

Siehe [`WebGLRenderingContext.unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace) für die Angabe des Farbraums für Texturen.

## Wert

Diese Eigenschaft kann die folgenden Werte haben:

- `"srgb"` wählt den [sRGB Farbraum](https://en.wikipedia.org/wiki/SRGB) aus. Dies ist der Standardwert.
- `"display-p3"` wählt den [display-p3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3) aus.

Wenn ein ungültiger Wert angegeben wird, bleibt der Wert von `drawingBufferColorSpace` unverändert.

## Beispiele

### Den Zeichenpuffer-Farbraum setzen, um ein Display P3 Rot zu zeichnen

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
