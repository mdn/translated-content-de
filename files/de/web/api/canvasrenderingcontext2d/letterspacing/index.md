---
title: "CanvasRenderingContext2D: letterSpacing-Eigenschaft"
short-title: letterSpacing
slug: Web/API/CanvasRenderingContext2D/letterSpacing
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{APIRef}}

Die **`CanvasRenderingContext2D.letterSpacing`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) legt den Abstand zwischen Buchstaben beim Zeichnen von Text fest.

Dies entspricht der CSS-Eigenschaft [`letter-spacing`](/de/docs/Web/CSS/letter-spacing).

## Wert

Der Buchstabenabstand als Zeichenkette im CSS-Datenformat {{cssxref("length")}}.
Der Standardwert ist `0px`.

Die Eigenschaft kann verwendet werden, um den Abstand zu erhalten oder festzulegen.
Der Eigenschaftswert bleibt unverändert, wenn er auf einen ungültigen/nicht analysierbaren Wert gesetzt wird.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" dreimal an und verwenden die `letterSpacing`-Eigenschaft, um den Buchstabenabstand in jedem Fall zu ändern.
Der Abstand wird auch für jeden Fall angezeigt, unter Verwendung des Wertes der Eigenschaft.

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
