---
title: "CanvasRenderingContext2D: textRendering-Eigenschaft"
short-title: textRendering
slug: Web/API/CanvasRenderingContext2D/textRendering
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Die **`CanvasRenderingContext2D.textRendering`**-Eigenschaft der [Canvas-API](/de/docs/Web/API/Canvas_API) liefert dem Rendering-Engine Informationen darüber, worauf bei der Textdarstellung optimiert werden soll.

Die Werte entsprechen dem SVG-Attribut [`text-rendering`](/de/docs/Web/SVG/Reference/Attribute/text-rendering) (und der CSS-Eigenschaft [`text-rendering`](/de/docs/Web/CSS/text-rendering)).

## Wert

Ein Hinweis zur Textdarstellung für das Browser-Engine.
Dies ist einer von:

- `auto`
  - : Der Browser trifft fundierte Entscheidungen darüber, wann Geschwindigkeit, Lesbarkeit und geometrische Präzision beim Zeichnen von Text zu optimieren sind.
- `optimizeSpeed`
  - : Der Browser priorisiert die Rendergeschwindigkeit über Lesbarkeit und geometrische Präzision beim Zeichnen von Text.
    Er deaktiviert Kerning und Ligaturen.
- `optimizeLegibility`
  - : Der Browser priorisiert Lesbarkeit über Rendergeschwindigkeit und geometrische Präzision.
    Dies ermöglicht Kerning und optionale Ligaturen.
- `geometricPrecision`
  - : Der Browser priorisiert geometrische Präzision über Rendergeschwindigkeit und Lesbarkeit.
    Bestimmte Aspekte von Schriftarten — wie Kerning — skalieren nicht linear.
    Bei großen Skalierungsfaktoren könnte weniger schöne Textdarstellung sichtbar werden, aber die Größe entspricht den Erwartungen (weder nach oben noch nach unten auf die nächste von dem zugrunde liegenden Betriebssystem unterstützte Schriftgröße gerundet).

Die Eigenschaft kann verwendet werden, um den Wert zu lesen oder zu setzen.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" mit jedem der unterstützten Werte der `textRendering`-Eigenschaft.
Der Wert wird auch für jeden Fall angezeigt, indem die Eigenschaft gelesen wird.

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
