---
title: "CanvasRenderingContext2D: textRendering-Eigenschaft"
short-title: textRendering
slug: Web/API/CanvasRenderingContext2D/textRendering
l10n:
  sourceCommit: e7eb0e7c8c9e23554bb4f85ce6f86dc4991c419b
---

{{APIRef}}

Die **`CanvasRenderingContext2D.textRendering`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) liefert dem Rendering-Engine Informationen darüber, was beim Rendern von Text optimiert werden soll.

Die Werte entsprechen dem SVG-Attribut [`text-rendering`](/de/docs/Web/SVG/Attribute/text-rendering) (und der CSS-Eigenschaft [`text-rendering`](/de/docs/Web/CSS/text-rendering)).

## Wert

Ein Text-Rendering-Hinweis für die Browser-Engine.
Dieser ist einer der folgenden:

- `auto`
  - : Der Browser trifft fundierte Annahmen darüber, wann beim Zeichnen von Text Geschwindigkeit, Lesbarkeit und geometrische Präzision optimiert werden sollen.
- `optimizeSpeed`
  - : Der Browser legt den Fokus auf die Rendergeschwindigkeit anstatt auf Lesbarkeit und geometrische Präzision beim Zeichnen von Text.
    Es werden Kerning und Ligaturen deaktiviert.
- `optimizeLegibility`
  - : Der Browser legt den Fokus auf Lesbarkeit anstatt auf Rendergeschwindigkeit und geometrische Präzision.
    Dies aktiviert Kerning und optionale Ligaturen.
- `geometricPrecision`

  - : Der Browser legt den Fokus auf geometrische Präzision anstatt auf Rendergeschwindigkeit und Lesbarkeit.
    Bestimmte Aspekte von Schriftarten — wie Kerning — skalieren nicht linear.
    Bei großen Skalierungsfaktoren kann es zu weniger schönem Text-Rendering kommen, aber die Größe entspricht Ihren Erwartungen (weder auf- noch abgerundet auf die nächste vom zugrunde liegenden Betriebssystem unterstützte Schriftgröße).

Die Eigenschaft kann verwendet werden, um den Wert abzurufen oder festzulegen.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" unter Verwendung jedes der unterstützten Werte der `textRendering`-Eigenschaft an.
Der Wert wird auch in jedem Fall durch das Auslesen der Eigenschaft angezeigt.

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
