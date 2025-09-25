---
title: "CanvasRenderingContext2D: Eigenschaft imageSmoothingQuality"
short-title: imageSmoothingQuality
slug: Web/API/CanvasRenderingContext2D/imageSmoothingQuality
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`imageSmoothingQuality`**-Eigenschaft des
[`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interfaces, das Teil der [Canvas-API](/de/docs/Web/API/Canvas_API) ist, ermöglicht es Ihnen, die Qualität der Bildglättung festzulegen.

> [!NOTE]
> Damit diese Eigenschaft Wirkung zeigt,
> muss [`imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
> auf `true` gesetzt sein.

## Wert

Einer der folgenden:

- `"low"`
  - : Niedrige Qualität.
- `"medium"`
  - : Mittlere Qualität.
- `"high"`
  - : Hohe Qualität.

Der Standardwert ist `"low"`.

## Beispiele

### Einstellung der Bildglättungsqualität

Dieses Beispiel verwendet die `imageSmoothingQuality`-Eigenschaft mit einem skalierten Bild.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let img = new Image();
img.src = "canvas_create_pattern.png";
img.onload = () => {
  ctx.imageSmoothingQuality = "low";
  ctx.drawImage(img, 0, 0, 300, 150);
};
```

#### Ergebnis

{{ EmbedLiveSample('Setting_image_smoothing_quality', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.imageSmoothingEnabled`](/de/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
- {{cssxref("image-rendering")}}
