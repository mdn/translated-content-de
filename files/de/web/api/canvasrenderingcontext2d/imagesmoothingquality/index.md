---
title: "CanvasRenderingContext2D: imageSmoothingQuality-Eigenschaft"
short-title: imageSmoothingQuality
slug: Web/API/CanvasRenderingContext2D/imageSmoothingQuality
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`imageSmoothingQuality`**-Eigenschaft des {{domxref("CanvasRenderingContext2D")}}-Interfaces, Teil der [Canvas API](/de/docs/Web/API/Canvas_API), ermöglicht es Ihnen, die Qualität der Bildglättung festzulegen.

> [!NOTE]
> Damit diese Eigenschaft eine Wirkung zeigt, muss {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} `true` sein.

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
img.src = "canvas_createpattern.png";
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

- Das Interface, das diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}
- {{cssxref("image-rendering")}}
