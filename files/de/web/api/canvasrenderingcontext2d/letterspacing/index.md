---
title: "CanvasRenderingContext2D: letterSpacing-Eigenschaft"
short-title: letterSpacing
slug: Web/API/CanvasRenderingContext2D/letterSpacing
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.letterSpacing`**-Eigenschaft der [Canvas-API](/de/docs/Web/API/Canvas_API) gibt den Abstand zwischen Buchstaben beim Zeichnen von Text an.

Dies entspricht der CSS-Eigenschaft {{cssxref("letter-spacing")}}.

## Wert

Der Buchstabenabstand als Zeichenkette im CSS-Datenformat {{cssxref("length")}}.
Der Standardwert ist `0px`.

Die Eigenschaft kann verwendet werden, um den Abstand zu erhalten oder festzulegen.
Der Eigenschaftswert bleibt unverändert, wenn ein ungültiger/unentzifferbarer Wert gesetzt wird.

## Beispiele

In diesem Beispiel zeigen wir den Text "Hello World" dreimal an, wobei die `letterSpacing`-Eigenschaft verwendet wird, um den Buchstabenabstand in jedem Fall zu ändern.
Der Abstand wird in jedem Fall unter Verwendung des Wertes der Eigenschaft angezeigt.

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
