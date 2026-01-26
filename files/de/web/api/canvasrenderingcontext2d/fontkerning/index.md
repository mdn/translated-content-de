---
title: "CanvasRenderingContext2D: fontKerning-Eigenschaft"
short-title: fontKerning
slug: Web/API/CanvasRenderingContext2D/fontKerning
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.fontKerning`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) gibt an, wie Schriftarten-Kerning-Informationen verwendet werden.

Kerning passt an, wie benachbarte Buchstaben in einer proportionalen Schriftart verteilt werden, indem sie in den visuellen Bereich des jeweils anderen hineinragen können, wenn Platz vorhanden ist. Beispielsweise fügen sich in gut gekernten Schriftarten die Zeichen `AV`, `Ta` und `We` ineinander und machen den Zeichenabstand gleichmäßiger und angenehmer zu lesen als der entsprechende Text ohne Kerning.

Die Eigenschaft entspricht der {{cssxref("font-kerning")}} CSS-Eigenschaft.

## Wert

Diese Eigenschaft kann verwendet werden, um den Wert abzurufen oder festzulegen.

Erlaubte Werte sind:

- `auto`
  - : Der Browser entscheidet, ob das Kerning verwendet werden soll oder nicht.
    Beispielsweise werden einige Browser das Kerning bei kleinen Schriftarten deaktivieren, da das Anwenden die Lesbarkeit des Textes beeinträchtigen könnte.
- `normal`
  - : Die Kerning-Informationen, die in der Schriftart gespeichert sind, müssen angewendet werden.
- `none`
  - : Die Kerning-Informationen, die in der Schriftart gespeichert sind, sind deaktiviert.

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

Beachten Sie, dass im letzten String das Kerning deaktiviert ist, sodass benachbarte Zeichen gleichmäßig verteilt sind.

{{ EmbedLiveSample('Examples', 700, 150) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
