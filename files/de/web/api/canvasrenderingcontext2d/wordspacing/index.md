---
title: "CanvasRenderingContext2D: wordSpacing-Eigenschaft"
short-title: wordSpacing
slug: Web/API/CanvasRenderingContext2D/wordSpacing
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.wordSpacing`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) gibt den Abstand zwischen Wörtern bei der Textdarstellung an.

Dies entspricht der CSS-Eigenschaft {{cssxref("word-spacing")}}.

## Wert

Der Wortabstand als Zeichenkette im CSS {{cssxref("length")}}-Datenformat.
Der Standardwert ist `0px`.

Die Eigenschaft kann verwendet werden, um den Abstand zu erhalten oder festzulegen.
Der Eigenschaftswert bleibt unverändert, wenn ein ungültiger oder nicht lesbarer Wert gesetzt wird.

## Beispiele

In diesem Beispiel wird der Text "Hello World" dreimal angezeigt, wobei die `wordSpacing`-Eigenschaft verwendet wird, um den Abstand in jedem Fall zu ändern.
Der Abstand wird für jeden Fall angezeigt, indem der Wert der Eigenschaft verwendet wird.

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
