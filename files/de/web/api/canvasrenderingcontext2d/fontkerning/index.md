---
title: "CanvasRenderingContext2D: fontKerning-Eigenschaft"
short-title: fontKerning
slug: Web/API/CanvasRenderingContext2D/fontKerning
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.fontKerning`**-Eigenschaft der [Canvas-API](/de/docs/Web/API/Canvas_API) legt fest, wie Schrift-Kerning-Informationen verwendet werden.

Kerning passt den Abstand zwischen benachbarten Buchstaben in einer Proportionalschriftart an, sodass sie in den visuellen Bereich des anderen überlappen können, wenn Platz verfügbar ist. Bei gut durchgekernten Schriftarten verschmelzen beispielsweise die Zeichen `AV`, `Ta` und `We` miteinander und machen den Zeichenabstand einheitlicher und angenehmer zu lesen als der entsprechende Text ohne Kerning.

Die Eigenschaft entspricht der [`font-kerning`](/de/docs/Web/CSS/font-kerning) CSS-Eigenschaft.

## Wert

Die Eigenschaft kann verwendet werden, um den Wert zu erhalten oder festzulegen.

Erlaubte Werte sind:

- `auto`
  - : Der Browser bestimmt, ob Schrift-Kerning verwendet werden soll oder nicht. Zum Beispiel deaktivieren einige Browser das Kerning bei kleinen Schriftarten, da die Lesbarkeit des Textes beeinträchtigt werden könnte.
- `normal`
  - : Schrift-Kerning-Informationen, die in der Schrift gespeichert sind, müssen angewendet werden.
- `none`
  - : Schrift-Kerning-Informationen, die in der Schrift gespeichert sind, werden deaktiviert.

## Beispiele

In diesem Beispiel wird der Text "AVA Ta We" unter Verwendung jedes der unterstützten Werte der `textRendering`-Eigenschaft angezeigt.

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

Beachten Sie, dass bei der letzten Zeichenfolge das Schrift-Kerning deaktiviert ist, sodass benachbarte Zeichen gleichmäßig verteilt sind.

{{ EmbedLiveSample('Examples', 700, 150) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
