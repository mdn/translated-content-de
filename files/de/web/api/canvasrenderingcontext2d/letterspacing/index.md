---
title: "CanvasRenderingContext2D: letterSpacing-Eigenschaft"
short-title: letterSpacing
slug: Web/API/CanvasRenderingContext2D/letterSpacing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.letterSpacing`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) gibt den Abstand zwischen Buchstaben beim Zeichnen von Text an.

Dies entspricht der CSS-Eigenschaft [`letter-spacing`](/de/docs/Web/CSS/Reference/Properties/letter-spacing).

## Wert

Der Buchstabenabstand als String im CSS {{cssxref("length")}} Datenformat. Der Standardwert ist `0px`.

Die Eigenschaft kann verwendet werden, um den Abstand zu erhalten oder zu setzen. Der Eigenschaftswert bleibt unverändert, wenn er auf einen ungültigen/nicht analysierbaren Wert gesetzt wird.

## Beispiele

In diesem Beispiel wird der Text "Hello World" dreimal angezeigt, wobei die `letterSpacing`-Eigenschaft verwendet wird, um den Buchstabenabstand in jedem Fall zu ändern. Der Abstand wird für jeden Fall angezeigt, indem der Wert der Eigenschaft verwendet wird.

### HTML

```html
<canvas id="canvas" width="700"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px serif";

// Default letter spacing
ctx.fillText(`Hello world (default: ${ctx.letterSpacing})`, 10, 40);

// Custom letter spacing: 10px
ctx.letterSpacing = "10px";
ctx.fillText(`Hello world (${ctx.letterSpacing})`, 10, 90);

// Custom letter spacing: 20px
ctx.letterSpacing = "20px";
ctx.fillText(`Hello world (${ctx.letterSpacing})`, 10, 140);
```

### Ergebnis

{{ EmbedLiveSample('Examples', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D.wordSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/wordSpacing)
