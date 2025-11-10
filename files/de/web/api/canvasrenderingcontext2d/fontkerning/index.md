---
title: "CanvasRenderingContext2D: fontKerning-Eigenschaft"
short-title: fontKerning
slug: Web/API/CanvasRenderingContext2D/fontKerning
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.fontKerning`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) gibt an, wie Informationen zum Font-Kerning verwendet werden.

Kerning justiert den Abstand zwischen angrenzenden Buchstaben in einer proportionale Schriftart, sodass sie in den visuellen Bereich des anderen hineinragen können, sofern Platz vorhanden ist. In gut gekernten Schriftarten nesteln sich beispielsweise die Zeichen `AV`, `Ta` und `We` zusammen und machen den Zeichenabstand gleichmäßiger und angenehmer zu lesen als der entsprechende Text ohne Kerning.

Die Eigenschaft entspricht der [`font-kerning`](/de/docs/Web/CSS/Reference/Properties/font-kerning) CSS-Eigenschaft.

## Wert

Die Eigenschaft kann verwendet werden, um den Wert abzurufen oder festzulegen.

Erlaubte Werte sind:

- `auto`
  - : Der Browser entscheidet, ob Font-Kerning verwendet werden soll oder nicht.
    Einige Browser deaktivieren beispielsweise das Kerning bei kleinen Schriftarten, da dies die Lesbarkeit des Textes beeinträchtigen könnte.
- `normal`
  - : Die in der Schrift gespeicherten Kerning-Informationen müssen angewendet werden.
- `none`
  - : Die in der Schrift gespeicherten Kerning-Informationen werden deaktiviert.

## Beispiele

In diesem Beispiel zeigen wir den Text "AVA Ta We" unter Verwendung jedes der unterstützten Werte der `textRendering`-Eigenschaft.

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

Beachten Sie, dass die letzte Zeichenfolge kein Font-Kerning hat, sodass angrenzende Zeichen gleichmäßig verteilt sind.

{{ EmbedLiveSample('Examples', 700, 150) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
