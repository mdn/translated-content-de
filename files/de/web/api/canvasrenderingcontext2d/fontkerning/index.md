---
title: "CanvasRenderingContext2D: fontKerning-Eigenschaft"
short-title: fontKerning
slug: Web/API/CanvasRenderingContext2D/fontKerning
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.fontKerning`**-Eigenschaft der [Canvas-API](/de/docs/Web/API/Canvas_API) legt fest, wie Schriftarten-Kerninformationen verwendet werden.

Kerning passt an, wie benachbarte Buchstaben in einer proportionalen Schriftart verteilt werden, und ermöglicht es ihnen, in den visuellen Bereich des jeweils anderen einzudringen, wenn Platz vorhanden ist. Beispielsweise nisten sich in gut gekernten Schriftarten die Zeichen `AV`, `Ta` und `We` zusammen ein und machen den Zeichenabstand gleichmäßiger und angenehmer zu lesen als der entsprechende Text ohne Kerning.

Die Eigenschaft entspricht der [`font-kerning`](/de/docs/Web/CSS/font-kerning) CSS-Eigenschaft.

## Wert

Die Eigenschaft kann verwendet werden, um den Wert abzurufen oder festzulegen.

Erlaubte Werte sind:

- `auto`
  - : Der Browser entscheidet, ob Schrift-Kerning verwendet werden soll oder nicht. Beispielsweise werden in einigen Browsern die Kerning auf kleinen Schriften deaktiviert, da dies die Lesbarkeit des Textes beeinträchtigen könnte.
- `normal`
  - : Schrift-Kerninformationen, die in der Schrift gespeichert sind, müssen angewendet werden.
- `none`
  - : Schrift-Kerninformationen, die in der Schrift gespeichert sind, werden deaktiviert.

## Beispiele

In diesem Beispiel zeigen wir den Text "AVA Ta We" unter Verwendung jeder der unterstützten Werte der `textRendering`-Eigenschaft an.

### HTML

```html
<canvas id="canvas" width="700" height="140"></canvas>
```

### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.font = "30px serif";

// Default (auto)
ctx.fillText(`AVA Ta We (default: ${ctx.fontKerning})`, 5, 30);

// Font kerning: normal
ctx.fontKerning = "normal";
ctx.fillText(`AVA Ta We (${ctx.fontKerning})`, 5, 70);

// Font kerning: none
ctx.fontKerning = "none";
ctx.fillText(`AVA Ta We (${ctx.fontKerning})`, 5, 110);
```

### Ergebnis

Beachten Sie, dass bei der letzten Zeichenkette das Schrift-Kerning deaktiviert ist, sodass benachbarte Zeichen gleichmäßig verteilt sind.

{{ EmbedLiveSample('Examples', 700, 150) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
