---
title: "ImageData: colorSpace-Eigenschaft"
short-title: colorSpace
slug: Web/API/ImageData/colorSpace
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`ImageData.colorSpace`**-Eigenschaft ist ein String, der den Farbraum der Bilddaten angibt.

Der Farbraum kann während der `ImageData`-Initialisierung mit entweder dem [`ImageData()`](/de/docs/Web/API/ImageData/ImageData)-Konstruktor oder der [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)-Methode festgelegt werden.

## Wert

Diese Eigenschaft kann folgende Werte haben:

- `"srgb"` repräsentiert den [sRGB-Farbraum](https://en.wikipedia.org/wiki/SRGB).
- `"display-p3"` repräsentiert den [display-p3-Farbraum](https://en.wikipedia.org/wiki/DCI-P3).

## Beispiele

### Ermitteln des Farbraums von Canvas-Bilddaten

Die Methode [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) erlaubt es Ihnen, einen Farbraum explizit anzufordern. Wenn er nicht mit dem Farbraum übereinstimmt, mit dem das Canvas initialisiert wurde, wird eine Konvertierung durchgeführt.
Verwenden Sie die `colorSpace`-Eigenschaft, um zu wissen, in welchem Farbraum sich Ihr `ImageData`-Objekt befindet.

```js
const context = canvas.getContext("2d", { colorSpace: "display-p3" });
context.fillStyle = "color(display-p3 0.5 0 0)";
context.fillRect(0, 0, 10, 10);

const p3ImageData = context.getImageData(0, 0, 1, 1);
console.log(p3ImageData.colorSpace); // "display-p3"

const srgbImageData = context.getImageData(0, 0, 1, 1, { colorSpace: "srgb" });
console.log(srgbImageData.colorSpace); // "srgb"
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D.createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData)
- [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData)
- Einstellung des `colorSpace`-Parameters in `canvas.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext#colorspace)
- Einstellen von WebGL-Farbräumen:
  - [`WebGLRenderingContext.drawingBufferColorSpace`](/de/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace)
  - [`WebGLRenderingContext.unpackColorSpace`](/de/docs/Web/API/WebGLRenderingContext/unpackColorSpace)
