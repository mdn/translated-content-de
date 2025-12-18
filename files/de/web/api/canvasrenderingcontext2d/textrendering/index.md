---
title: "CanvasRenderingContext2D: textRendering-Eigenschaft"
short-title: textRendering
slug: Web/API/CanvasRenderingContext2D/textRendering
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.textRendering`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) liefert dem Rendering-Engine Information darüber, worauf beim Rendern von Text optimiert werden soll.

Die Werte entsprechen dem SVG-Attribut [`text-rendering`](/de/docs/Web/SVG/Reference/Attribute/text-rendering) (und der CSS {{cssxref("text-rendering")}}-Eigenschaft).

## Wert

Ein Hinweis zur Textdarstellung für die Browser-Engine.
Einer der folgenden:

- `auto`
  - : Der Browser trifft fundierte Entscheidungen darüber, wann er beim Zeichnen von Text auf Geschwindigkeit, Lesbarkeit und geometrische Präzision optimieren soll.
- `optimizeSpeed`
  - : Der Browser betont die Rendergeschwindigkeit gegenüber Lesbarkeit und geometrischer Präzision beim Zeichnen von Text.
    Es deaktiviert Kerning und Ligaturen.
- `optimizeLegibility`
  - : Der Browser betont die Lesbarkeit gegenüber Rendergeschwindigkeit und geometrischer Präzision.
    Dies ermöglicht Kerning und optionale Ligaturen.
- `geometricPrecision`
  - : Der Browser betont die geometrische Präzision gegenüber Rendergeschwindigkeit und Lesbarkeit.
    Bestimmte Aspekte von Schriftarten — wie Kerning — skalieren nicht linear.
    Bei großen Skalierungsfaktoren könnten Sie weniger schöne Textrendering-Ergebnisse sehen, aber die Größe entspricht dem, was Sie erwarten würden (weder auf- noch abgerundet auf die nächste vom zugrunde liegenden Betriebssystem unterstützte Schriftgröße).

Die Eigenschaft kann verwendet werden, um den Wert zu erhalten oder zu setzen.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" unter Verwendung jedes der unterstützten Werte der `textRendering`-Eigenschaft.
Der Wert wird auch in jedem Fall angezeigt, indem die Eigenschaft ausgelesen wird.

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
