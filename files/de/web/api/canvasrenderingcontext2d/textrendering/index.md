---
title: "CanvasRenderingContext2D: textRendering-Eigenschaft"
short-title: textRendering
slug: Web/API/CanvasRenderingContext2D/textRendering
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.textRendering`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) liefert Informationen an die Rendering-Engine darüber, worauf beim Rendern von Text optimiert werden soll.

Die Werte entsprechen dem SVG-Attribut [`text-rendering`](/de/docs/Web/SVG/Reference/Attribute/text-rendering) (und der CSS-Eigenschaft [`text-rendering`](/de/docs/Web/CSS/text-rendering)).

## Wert

Ein Text-Rendering-Hinweis für die Browser-Engine.
Dies ist einer der folgenden:

- `auto`
  - : Der Browser trifft fundierte Vermutungen darüber, wann beim Zeichnen von Text auf Geschwindigkeit, Lesbarkeit und geometrische Präzision optimiert werden soll.
- `optimizeSpeed`
  - : Der Browser betont die Rendering-Geschwindigkeit über Lesbarkeit und geometrische Präzision beim Zeichnen von Text.
    Es deaktiviert Kerning und Ligaturen.
- `optimizeLegibility`
  - : Der Browser betont die Lesbarkeit über die Rendering-Geschwindigkeit und geometrische Präzision.
    Dies aktiviert Kerning und optionale Ligaturen.
- `geometricPrecision`
  - : Der Browser betont die geometrische Präzision über die Rendering-Geschwindigkeit und Lesbarkeit.
    Bestimmte Aspekte von Schriftarten — wie Kerning — skalieren nicht linear.
    Bei großen Skalierungsfaktoren könnten Sie weniger schön gerenderten Text sehen, aber die Größe entspricht Ihren Erwartungen (weder auf- noch abgerundet auf die nächstgrößere Schriftgröße, die vom zugrunde liegenden Betriebssystem unterstützt wird).

Die Eigenschaft kann verwendet werden, um den Wert zu ermitteln oder zu setzen.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" unter Verwendung jedes der unterstützten Werte der `textRendering`-Eigenschaft an.
Der Wert wird in jedem Fall angezeigt, indem die Eigenschaft ausgelesen wird.

### HTML

```html
<canvas id="canvas" width="700" height="220"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "20px serif";

// Default (auto)
ctx.fillText(`Hello world (default: ${ctx.textRendering})`, 5, 20);

// Text rendering: optimizeSpeed
ctx.textRendering = "optimizeSpeed";
ctx.fillText(`Hello world (${ctx.textRendering})`, 5, 50);

// Text rendering: optimizeLegibility
ctx.textRendering = "optimizeLegibility";
ctx.fillText(`Hello world (${ctx.textRendering})`, 5, 80);

// Text rendering: geometricPrecision
ctx.textRendering = "geometricPrecision";
ctx.fillText(`Hello world (${ctx.textRendering})`, 5, 110);
```

### Ergebnis

{{ EmbedLiveSample('Examples', 700, 230) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
