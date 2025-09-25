---
title: "CanvasRenderingContext2D: font-Eigenschaft"
short-title: font
slug: Web/API/CanvasRenderingContext2D/font
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.font`** Eigenschaft der Canvas 2D API gibt den aktuellen Textstil an, der beim Zeichnen von Text verwendet wird.
Dieser String verwendet dieselbe Syntax wie der [CSS-Schriftart](/de/docs/Web/CSS/font) spezifizierer.

## Wert

Ein String, der als CSS {{cssxref("font")}} Wert geparst wird. Die Standardschriftart ist 10px sans-serif.

## Beispiele

### Verwendung einer benutzerdefinierten Schriftart

In diesem Beispiel verwenden wir die `font`-Eigenschaft, um ein benutzerdefiniertes Schriftgewicht, eine benutzerdefinierte Schriftgröße und -familie zu spezifizieren.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "bold 48px serif";
ctx.strokeText("Hello world", 50, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Using_a_custom_font', 700, 180) }}

### Laden von Schriftarten mit der CSS Font Loading API

Mit Hilfe der [`FontFace`](/de/docs/Web/API/FontFace) API können Sie Schriftarten explizit laden, bevor Sie sie in einem Canvas verwenden.

```js
let f = new FontFace("test", "url(x)");

f.load().then(() => {
  // Ready to use the font in a canvas context
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
