---
title: "WebGL2RenderingContext: drawingBufferColorSpace Eigenschaft"
short-title: drawingBufferColorSpace
slug: Web/API/WebGL2RenderingContext/drawingBufferColorSpace
l10n:
  sourceCommit: 72a2131decd44410a5c2acb9d4d5c1c7c6340e6a
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.drawingBufferColorSpace`**-Eigenschaft legt den Farbraum des WebGL-Zeichenpuffers fest. Neben dem Standardwert (`srgb`) kann auch der `display-p3` Farbraum verwendet werden.

Siehe [`WebGL2RenderingContext.unpackColorSpace`](/de/docs/Web/API/WebGL2RenderingContext/unpackColorSpace) für die Angabe des Farbraums für Texturen.

## Wert

Diese Eigenschaft kann folgende Werte haben:

- `"srgb"` wählt den [sRGB Farbraum](https://en.wikipedia.org/wiki/SRGB) aus. Dies ist der Standardwert.
- `"display-p3"` wählt den [display-p3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3) aus.

Wenn ein ungültiger Wert angegeben wird, bleibt der Wert von `drawingBufferColorSpace` unverändert.

## Beispiele

### Setzen des Zeichenpuffer-Farbraums zum Zeichnen eines Display P3 Rottons

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

- [`WebGL2RenderingContext.unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace)
