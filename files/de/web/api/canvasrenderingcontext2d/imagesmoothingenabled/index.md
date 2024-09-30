---
title: "CanvasRenderingContext2D: imageSmoothingEnabled-Eigenschaft"
short-title: imageSmoothingEnabled
slug: Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`imageSmoothingEnabled`**-Eigenschaft des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interfaces, ein Teil der [Canvas-API](/de/docs/Web/API/Canvas_API), bestimmt, ob skalierte Bilder geglättet werden (`true`, Standard) oder nicht (`false`). Beim Abrufen der `imageSmoothingEnabled`-Eigenschaft wird der letzte Wert zurückgegeben, auf den sie gesetzt wurde.

Diese Eigenschaft ist nützlich für Spiele und andere Anwendungen, die Pixelgrafiken verwenden. Beim Vergrößern von Bildern wird der Standard-Resizing-Algorithmus die Pixel verwischen. Setzen Sie diese Eigenschaft auf `false`, um die Schärfe der Pixel zu erhalten.

> [!NOTE]
> Sie können die Glättungsqualität mit der [`imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)-Eigenschaft anpassen.

## Wert

Ein boolescher Wert, der angibt, ob skalierte Bilder geglättet werden sollen oder nicht. Der Standardwert ist `true`.

## Beispiele

### Deaktivieren der Bildglättung

Dieses Beispiel vergleicht drei Bilder. Das erste Bild wird in seiner natürlichen Größe gezeichnet, das zweite wird auf das 3-fache skaliert und mit aktivierter Bildglättung gezeichnet, und das dritte wird ebenfalls auf das 3-fache skaliert, aber ohne Bildglättung gezeichnet.

#### HTML

```html
<canvas id="canvas" width="460" height="210"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
ctx.font = "16px sans-serif";
ctx.textAlign = "center";

const img = new Image();
img.src =
  "https://interactive-examples.mdn.mozilla.net/media/examples/star.png";
img.onload = () => {
  const w = img.width,
    h = img.height;

  ctx.fillText("Source", w * 0.5, 20);
  ctx.drawImage(img, 0, 24, w, h);

  ctx.fillText("Smoothing = TRUE", w * 2.5, 20);
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(img, w, 24, w * 3, h * 3);

  ctx.fillText("Smoothing = FALSE", w * 5.5, 20);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, w * 4, 24, w * 3, h * 3);
};
```

#### Ergebnis

{{ EmbedLiveSample('Disabling_image_smoothing', 700, 240) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.imageSmoothingQuality`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality)
- {{cssxref("image-rendering")}}
