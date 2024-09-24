---
title: "CanvasRenderingContext2D: fontKerning-Eigenschaft"
short-title: fontKerning
slug: Web/API/CanvasRenderingContext2D/fontKerning
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.fontKerning`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) gibt an, wie die Schriftkerning-Informationen verwendet werden.

Kerning passt den Abstand zwischen benachbarten Buchstaben in einer proportionalen Schriftart an und ermöglicht es, dass sie in den visuellen Bereich voneinander eindringen, wenn Platz verfügbar ist. Bei gut gekernten Schriftarten verschmelzen beispielsweise die Zeichen `AV`, `Ta` und `We` miteinander und machen den Zeichenabstand einheitlicher und angenehmer zu lesen als gleichwertiger Text ohne Kerning.

Die Eigenschaft entspricht der CSS-Eigenschaft [`font-kerning`](/de/docs/Web/CSS/font-kerning).

## Wert

Die Eigenschaft kann verwendet werden, um den Wert zu erhalten oder zu setzen.

Erlaubte Werte sind:

- `auto`
  - : Der Browser bestimmt, ob Schriftkerning verwendet werden soll oder nicht. Einige Browser deaktivieren beispielsweise das Kerning bei kleinen Schriftgrößen, da die Anwendung die Lesbarkeit des Textes beeinträchtigen könnte.
- `normal`
  - : Die im Font gespeicherten Schriftkerning-Informationen müssen angewendet werden.
- `none`
  - : Die im Font gespeicherten Schriftkerning-Informationen sind deaktiviert.

## Beispiele

In diesem Beispiel zeigen wir den Text "AVA Ta We" mit jedem der unterstützten Werte der `textRendering`-Eigenschaft an.

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

Beachten Sie, dass die letzte Zeichenfolge ohne Schriftkerning angezeigt wird, sodass die angrenzenden Zeichen gleichmäßig verteilt sind.

{{ EmbedLiveSample('Examples', 700, 150) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
