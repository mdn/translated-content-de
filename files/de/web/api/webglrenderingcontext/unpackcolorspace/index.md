---
title: "WebGLRenderingContext: unpackColorSpace-Eigenschaft"
short-title: unpackColorSpace
slug: Web/API/WebGLRenderingContext/unpackColorSpace
l10n:
  sourceCommit: fe3f1f2dfaf44fcbe868b91b6a429270d2055716
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGLRenderingContext.unpackColorSpace`**-Eigenschaft gibt den Farbraum an, in den beim Import von Texturen konvertiert werden soll. Neben dem Standard (`srgb`) kann auch der `display-p3` Farbraum verwendet werden.

Quellen für Texturbilder können folgende sein:

- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
- [`ImageData`](/de/docs/Web/API/ImageData)
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)

Texturen werden mithilfe der Methoden [`WebGLRenderingContext.texImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texImage2D) und [`WebGLRenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGLRenderingContext/texSubImage2D) importiert und die Konvertierung in den angegebenen `unpackColorSpace`-Farbraum erfolgt während des Imports.

Beachten Sie, dass dies nicht für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gilt, wenn der Pixel-Speicherparameter `UNPACK_COLORSPACE_CONVERSION_WEBGL` auf `NONE` gesetzt ist.

## Wert

Diese Eigenschaft kann die folgenden Werte haben:

- `"srgb"` wählt den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB). Dies ist der Standardwert.
- `"display-p3"` wählt den [display-p3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3).

Wird ein ungültiger Wert angegeben, bleibt der Wert von `unpackColorSpace` unverändert.

## Beispiele

### Konvertieren von sRGB ImageData in display-p3 in einer Textur

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
