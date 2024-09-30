---
title: "CanvasRenderingContext2D: textRendering-Eigenschaft"
short-title: textRendering
slug: Web/API/CanvasRenderingContext2D/textRendering
l10n:
  sourceCommit: e7eb0e7c8c9e23554bb4f85ce6f86dc4991c419b
---

{{APIRef}}

Die **`CanvasRenderingContext2D.textRendering`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) liefert der Rendering-Engine Informationen darüber, was beim Rendern von Text optimiert werden soll.

Die Werte entsprechen dem SVG-Attribut [`text-rendering`](/de/docs/Web/SVG/Attribute/text-rendering) (und der CSS-Eigenschaft [`text-rendering`](/de/docs/Web/CSS/text-rendering)).

## Wert

Ein Text-Rendering-Hinweis für die Browser-Engine. Dieser ist einer der folgenden:

- `auto`
  - : Der Browser trifft fundierte Entscheidungen darüber, wann Geschwindigkeit, Lesbarkeit und geometrische Präzision beim Zeichnen von Text optimiert werden sollen.
- `optimizeSpeed`
  - : Der Browser legt Wert auf Geschwindigkeit beim Rendern über Lesbarkeit und geometrische Präzision.
    Es deaktiviert Kerning und Ligaturen.
- `optimizeLegibility`
  - : Der Browser legt Wert auf Lesbarkeit über Geschwindigkeit und geometrische Präzision.
    Dies ermöglicht Kerning und optionale Ligaturen.
- `geometricPrecision`

  - : Der Browser legt Wert auf geometrische Präzision über Geschwindigkeit und Lesbarkeit.
    Bestimmte Aspekte von Schriftarten — wie Kerning — skalieren nicht linear.
    Bei großen Skalierungsfaktoren kann es zu weniger ästhetischem Text-Rendering kommen, aber die Größe entspricht der Erwartung (weder aufgerundet noch abgerundet auf die nächste Schriftgröße, die vom zugrunde liegenden Betriebssystem unterstützt wird).

Die Eigenschaft kann verwendet werden, um den Wert zu erhalten oder zu setzen.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" unter Verwendung jedes der unterstützten Werte der `textRendering`-Eigenschaft an. Der Wert wird auch für jeden Fall angezeigt, indem die Eigenschaft gelesen wird.

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
