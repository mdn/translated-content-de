---
title: "CanvasRenderingContext2D: wordSpacing-Eigenschaft"
short-title: wordSpacing
slug: Web/API/CanvasRenderingContext2D/wordSpacing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.wordSpacing`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) gibt den Abstand zwischen Wörtern beim Zeichnen von Text an.

Dies entspricht der CSS-Eigenschaft [`word-spacing`](/de/docs/Web/CSS/Reference/Properties/word-spacing).

## Wert

Der Wortabstand als Zeichenkette im CSS-Datenformat {{cssxref("length")}}.
Der Standardwert ist `0px`.

Die Eigenschaft kann verwendet werden, um den Abstand zu erhalten oder zu setzen.
Der Eigenschaftswert bleibt unverändert, wenn er auf einen ungültigen/nicht parsierbaren Wert gesetzt wird.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" dreimal an, wobei die `wordSpacing`-Eigenschaft verwendet wird, um den Abstand in jedem Fall zu ändern.
Der Abstand wird auch für jeden Fall angezeigt, indem der Wert der Eigenschaft verwendet wird.

### HTML

```html
<canvas id="canvas" width="700"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "30px serif";

// Default word spacing
ctx.fillText(`Hello world (default: ${ctx.wordSpacing})`, 10, 40);

// Custom word spacing: 10px
ctx.wordSpacing = "10px";
ctx.fillText(`Hello world (${ctx.wordSpacing})`, 10, 90);

// Custom word spacing: 30px
ctx.wordSpacing = "30px";
ctx.fillText(`Hello world (${ctx.wordSpacing})`, 10, 140);
```

### Ergebnis

{{ EmbedLiveSample('Examples', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D.letterSpacing`](/de/docs/Web/API/CanvasRenderingContext2D/letterSpacing)
