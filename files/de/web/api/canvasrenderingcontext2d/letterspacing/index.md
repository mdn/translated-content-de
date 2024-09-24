---
title: "CanvasRenderingContext2D: Eigenschaft letterSpacing"
short-title: letterSpacing
slug: Web/API/CanvasRenderingContext2D/letterSpacing
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{APIRef}}

Die **`CanvasRenderingContext2D.letterSpacing`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) gibt den Abstand zwischen Buchstaben beim Zeichnen von Text an.

Dies entspricht der CSS-Eigenschaft [`letter-spacing`](/de/docs/Web/CSS/letter-spacing).

## Wert

Der Buchstabenabstand als String im CSS-Datenformat {{cssxref("length")}}.
Der Standard ist `0px`.

Die Eigenschaft kann verwendet werden, um den Abstand zu bekommen oder zu setzen.
Der Eigenschaftswert bleibt unverändert, wenn er auf einen ungültigen/nicht interpretierbaren Wert gesetzt wird.

## Beispiele

In diesem Beispiel wird der Text "Hello World" dreimal angezeigt, wobei die `letterSpacing`-Eigenschaft verwendet wird, um den Buchstabenabstand in jedem Fall zu ändern.
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

// Standard Buchstabenabstand
ctx.fillText(`Hello world (default: ${ctx.letterSpacing})`, 10, 40);

// Benutzerdefinierter Buchstabenabstand: 10px
ctx.letterSpacing = "10px";
ctx.fillText(`Hello world (${ctx.letterSpacing})`, 10, 90);

// Benutzerdefinierter Buchstabenabstand: 20px
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

- {{domxref("CanvasRenderingContext2D.wordSpacing")}}
