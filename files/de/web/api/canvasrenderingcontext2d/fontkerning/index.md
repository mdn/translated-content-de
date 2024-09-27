---
title: "CanvasRenderingContext2D: fontKerning-Eigenschaft"
short-title: fontKerning
slug: Web/API/CanvasRenderingContext2D/fontKerning
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.fontKerning`**-Eigenschaft der [Canvas API](/de/docs/Web/API/Canvas_API) gibt an, wie Informationen zum Schriftarten-Kerning verwendet werden.

Kerning passt den Abstand zwischen benachbarten Buchstaben in einer proportionalen Schriftart an, sodass sie in den visuellen Bereich des anderen ragen können, wenn Platz verfügbar ist.
In gut gekernten Schriftarten verschachteln sich beispielsweise die Zeichen `AV`, `Ta` und `We` und sorgen für einen gleichmäßigeren und angenehmeren Schriftbild als der entsprechende Text ohne Kerning.

Die Eigenschaft entspricht der [`font-kerning`](/de/docs/Web/CSS/font-kerning) CSS-Eigenschaft.

## Wert

Die Eigenschaft kann verwendet werden, um den Wert abzurufen oder festzulegen.

Zulässige Werte sind:

- `auto`
  - : Der Browser bestimmt, ob das Schriftarten-Kerning verwendet werden soll oder nicht.
    Einige Browser deaktivieren beispielsweise das Kerning bei kleinen Schriftarten, da die Lesbarkeit des Textes beeinträchtigt werden könnte.
- `normal`
  - : Informationen zum Schriftarten-Kerning, die in der Schriftart gespeichert sind, müssen angewendet werden.
- `none`
  - : Informationen zum Schriftarten-Kerning, die in der Schriftart gespeichert sind, werden deaktiviert.

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

Beachten Sie, dass der letzte String das Schriftarten-Kerning deaktiviert hat, sodass benachbarte Zeichen gleichmäßig verteilt sind.

{{ EmbedLiveSample('Examples', 700, 150) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
