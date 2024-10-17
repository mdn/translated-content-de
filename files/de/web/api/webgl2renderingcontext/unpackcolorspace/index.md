---
title: "WebGL2RenderingContext: unpackColorSpace-Eigenschaft"
short-title: unpackColorSpace
slug: Web/API/WebGL2RenderingContext/unpackColorSpace
l10n:
  sourceCommit: a9fe7e64346281003eadbde7860ff418432eb482
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WebGL2RenderingContext.unpackColorSpace`**-Eigenschaft gibt den Farbraum an, in den beim Importieren von Texturen konvertiert werden soll. Neben dem Standard (`srgb`) kann der `display-p3` Farbraum verwendet werden.

Quellen für Texturbilder können folgende sein:

- [`ImageBitmap`](/de/docs/Web/API/ImageBitmap)
- [`ImageData`](/de/docs/Web/API/ImageData)
- [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)
- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)

Texturen werden mit den Methoden [`WebGL2RenderingContext.texImage2D()`](/de/docs/Web/API/WebGL2RenderingContext/texImage2D) und [`WebGL2RenderingContext.texSubImage2D()`](/de/docs/Web/API/WebGL2RenderingContext/texSubImage2D) importiert, und die Umwandlung in den angegebenen Farbraum `unpackColorSpace` erfolgt während des Imports.

Beachten Sie, dass dies nicht für [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gilt, wenn der `UNPACK_COLORSPACE_CONVERSION_WEBGL`-Pixel-Speicherparameter auf `NONE` gesetzt ist.

## Wert

Diese Eigenschaft kann die folgenden Werte haben:

- `"srgb"` wählt den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB). Dies ist der Standardwert.
- `"display-p3"` wählt den [display-p3 Farbraum](https://en.wikipedia.org/wiki/DCI-P3).

Wenn ein ungültiger Wert angegeben wird, bleibt der Wert von `unpackColorSpace` unverändert.

## Beispiele

### Umwandlung von sRGB ImageData zu display-p3 in einer Textur

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

- [`WebGL2RenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGL2RenderingContext/drawingBufferColorSpace)
