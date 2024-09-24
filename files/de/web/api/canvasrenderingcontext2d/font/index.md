---
title: "CanvasRenderingContext2D: font-Eigenschaft"
short-title: font
slug: Web/API/CanvasRenderingContext2D/font
l10n:
  sourceCommit: 1306c224f386c6a8038a3bd115ce5637d5bd6084
---

{{APIRef}}

Die **`CanvasRenderingContext2D.font`**-Eigenschaft der Canvas 2D API gibt den aktuellen Textstil an, der beim Zeichnen von Text verwendet werden soll. Dieser String verwendet die gleiche Syntax wie der [CSS-Schriftart-](/de/docs/Web/CSS/font) Bezeichner.

## Wert

Ein String, der als CSS {{cssxref("font")}}-Wert geparst wird. Die Standardschriftart ist 10px sans-serif.

## Beispiele

### Verwendung einer benutzerdefinierten Schriftart

In diesem Beispiel verwenden wir die `font`-Eigenschaft, um ein benutzerdefiniertes Schriftgewicht, eine Größe und eine Familie anzugeben.

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

### Laden von Schriften mit der CSS Font Loading API

Mit Hilfe der {{domxref("FontFace")}} API können Sie Schriftarten explizit laden, bevor Sie sie in einem Canvas verwenden.

```js
let f = new FontFace("test", "url(x)");

f.load().then(() => {
  // Bereit, die Schriftart im Canvas-Kontext zu verwenden
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
