---
title: "CanvasRenderingContext2D: textRendering-Eigenschaft"
short-title: textRendering
slug: Web/API/CanvasRenderingContext2D/textRendering
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.textRendering`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) liefert der Rendering-Engine Informationen darüber, worauf bei der Darstellung von Text optimiert werden soll.

Die Werte entsprechen dem SVG-Attribut [`text-rendering`](/de/docs/Web/SVG/Reference/Attribute/text-rendering) (und der CSS-Eigenschaft [`text-rendering`](/de/docs/Web/CSS/Reference/Properties/text-rendering)).

## Wert

Ein Hinweis zur Textdarstellung für die Browser-Engine.
Dieser ist einer von:

- `auto`
  - : Der Browser macht fundierte Vermutungen darüber, wann für Geschwindigkeit, Lesbarkeit und geometrische Präzision beim Zeichnen von Text optimiert werden soll.
- `optimizeSpeed`
  - : Der Browser betont die Rendergeschwindigkeit über Lesbarkeit und geometrische Präzision beim Zeichnen von Text.
    Es deaktiviert Kerning und Ligaturen.
- `optimizeLegibility`
  - : Der Browser betont die Lesbarkeit über Rendergeschwindigkeit und geometrische Präzision.
    Dies aktiviert Kerning und optionale Ligaturen.
- `geometricPrecision`
  - : Der Browser betont die geometrische Präzision über Rendergeschwindigkeit und Lesbarkeit.
    Bestimmte Aspekte von Schriften — wie Kerning — skalieren nicht linear.
    Bei großen Skalierungsfaktoren könnten Sie möglicherweise eine weniger schöne Textdarstellung sehen, aber die Größe entspricht Ihren Erwartungen (weder aufgerundet noch abgerundet auf die nächste von dem zugrunde liegenden Betriebssystem unterstützte Schriftgröße).

Die Eigenschaft kann verwendet werden, um den Wert zu erhalten oder zu setzen.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" unter Verwendung jedes der unterstützten Werte der `textRendering`-Eigenschaft.
Der Wert wird auch für jeden Fall angezeigt, indem die Eigenschaft ausgelesen wird.

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
