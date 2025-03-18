---
title: "CanvasRenderingContext2D: textRendering-Eigenschaft"
short-title: textRendering
slug: Web/API/CanvasRenderingContext2D/textRendering
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef}}

Die **`CanvasRenderingContext2D.textRendering`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) liefert der Rendering-Engine Informationen darüber, worauf beim Rendern von Text optimiert werden soll.

Die Werte entsprechen dem SVG-Attribut [`text-rendering`](/de/docs/Web/SVG/Reference/Attribute/text-rendering) (und der CSS-Eigenschaft [`text-rendering`](/de/docs/Web/CSS/text-rendering)).

## Wert

Ein Text-Rendering-Hinweis an die Browser-Engine.
Dies ist einer der folgenden:

- `auto`
  - : Der Browser trifft fundierte Vermutungen darüber, wann bei der Darstellung von Text auf Geschwindigkeit, Lesbarkeit und geometrische Präzision optimiert werden soll.
- `optimizeSpeed`
  - : Der Browser betont die Rendergeschwindigkeit über Lesbarkeit und geometrische Präzision beim Zeichnen von Text.
    Es deaktiviert Kerning und Ligaturen.
- `optimizeLegibility`
  - : Der Browser betont die Lesbarkeit über Rendergeschwindigkeit und geometrische Präzision.
    Dies aktiviert Kerning und optionale Ligaturen.
- `geometricPrecision`
  - : Der Browser betont die geometrische Präzision über Rendergeschwindigkeit und Lesbarkeit.
    Bestimmte Aspekte von Schriftarten — wie Kerning — skalieren nicht linear.
    Bei großen Skalierungsfaktoren könnten Sie weniger schöne Textrendering-Ergebnisse sehen, aber die Größe entspricht den Erwartungen (weder nach oben noch unten auf die nächste vom zugrunde liegenden Betriebssystem unterstützte Schriftgröße gerundet).

Diese Eigenschaft kann verwendet werden, um den Wert abzurufen oder festzulegen.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" unter Verwendung jedes der unterstützten Werte der `textRendering`-Eigenschaft an.
Der Wert wird auch für jeden Fall durch das Lesen der Eigenschaft angezeigt.

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
