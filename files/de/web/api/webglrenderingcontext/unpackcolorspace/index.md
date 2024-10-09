---
title: "WebGLRenderingContext: unpackColorSpace-Eigenschaft"
short-title: unpackColorSpace
slug: Web/API/WebGLRenderingContext/unpackColorSpace
l10n:
  sourceCommit: 47962c4ebad5a138673422ec63a282ab9a63d454
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.unpackColorSpace`**-Eigenschaft gibt den Farbraum an, in den beim Importieren von Texturen konvertiert werden soll. Neben dem Standard (`srgb`) kann der `display-p3` Farbraum verwendet werden.

Mögliche Quellen für Texturbilder sind die folgenden:

- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
- [`ImageData`](/de/docs/Web/API/ImageData)
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)

Texturen werden mit den Methoden [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) und [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D) importiert, und die Konvertierung in den angegebenen `unpackColorSpace`-Farbraum erfolgt während des Imports.

Beachten Sie, dass dies nicht auf [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) zutrifft, wenn der `UNPACK_COLORSPACE_CONVERSION_WEBGL` Pixel-Speicherparameter auf `NONE` gesetzt ist.

## Wert

Diese Eigenschaft kann die folgenden Werte haben:

- `"srgb"` wählt den [sRGB-Farbraum](https://de.wikipedia.org/wiki/SRGB). Dies ist der Standardwert.
- `"display-p3"` wählt den [display-p3-Farbraum](https://de.wikipedia.org/wiki/DCI-P3).

Wenn ein ungültiger Wert angegeben wird, bleibt der Wert von `unpackColorSpace` unverändert.

## Beispiele

### Konvertieren von sRGB-ImageData zu display-p3 in einer Textur

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

gl.drawingBufferColorSpace = "display-p3";
gl.unpackColorSpace = "display-p3";

// Some sRGB ImageData
// Will be converted from sRGB to Display P3
const imageData = new ImageData(data, 32, 32);

const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);
gl.texImage2D(
  gl.TEXTURE_2D,
  0,
  gl.RGBA,
  width,
  height,
  0,
  gl.RGBA,
  gl.UNSIGNED_BYTE,
  imageData,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace)
