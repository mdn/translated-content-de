---
title: "CanvasRenderingContext2D: wordSpacing-Eigenschaft"
short-title: wordSpacing
slug: Web/API/CanvasRenderingContext2D/wordSpacing
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{APIRef}}

Die **`CanvasRenderingContext2D.wordSpacing`**-Eigenschaft der [Canvas-API](/de/docs/Web/API/Canvas_API) legt den Abstand zwischen Wörtern beim Zeichnen von Text fest.

Dies entspricht der CSS-Eigenschaft [`word-spacing`](/de/docs/Web/CSS/word-spacing).

## Wert

Der Wortabstand als Zeichenkette im CSS-{{cssxref("length")}}-Datenformat.
Der Standardwert ist `0px`.

Die Eigenschaft kann genutzt werden, um den Abstand zu erhalten oder festzulegen.
Der Eigenschaftswert bleibt unverändert, wenn ein ungültiger/nicht interpretierbarer Wert festgelegt wird.

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
