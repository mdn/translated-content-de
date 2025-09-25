---
title: "CanvasRenderingContext2D: lineJoin-Eigenschaft"
short-title: lineJoin
slug: Web/API/CanvasRenderingContext2D/lineJoin
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.lineJoin`**-Eigenschaft der Canvas 2D API bestimmt die Form, die verwendet wird, um zwei Liniensegmente zu verbinden, wo sie sich treffen.

Diese Eigenschaft hat keine Wirkung, wenn zwei verbundene Segmente in dieselbe Richtung weisen, da in diesem Fall kein Verbindungsbereich hinzugefügt wird. Degenerierte Segmente mit einer Länge von null (d.h. mit allen Endpunkten und Kontrollpunkten an genau derselben Position) werden ebenfalls ignoriert.

> [!NOTE]
> Linien können mit den Methoden
> [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke),
> [`strokeRect()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeRect)
> und [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) gezeichnet werden.

## Wert

Es gibt drei mögliche Werte für diese Eigenschaft: `"round"`, `"bevel"` und `"miter"`. Der Standardwert ist `"miter"`.

![Drei horizontale Zickzacklinien mit den Werten rund, abgeschrägt und Gehrung, jeweils von oben nach unten gezeigt.](canvas_linejoin.png)

- `"round"`
  - : Rundet die Ecken einer Form ab, indem ein zusätzlicher Sektor eines Kreises gefüllt wird, der am gemeinsamen Endpunkt der verbundenen Segmente zentriert ist. Der Radius dieser abgerundeten Ecken entspricht der Linienbreite.
- `"bevel"`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den separaten äußeren rechteckigen Ecken jedes Segments.
- `"miter"`
  - : Verbundene Segmente werden durch das Verlängern ihrer äußeren Kanten geschlossen, um sich an einem einzigen Punkt zu verbinden, was den Effekt hat, einen zusätzlichen rautenförmigen Bereich zu füllen. Diese Einstellung wird durch die Eigenschaft [`miterLimit`](/de/docs/Web/API/CanvasRenderingContext2D/miterLimit) beeinflusst. Standardwert.

## Beispiele

### Ändern der Verbindungen in einem Pfad

Dieses Beispiel wendet abgerundete Linenverbindungen auf einen Pfad an.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 20;
ctx.lineJoin = "round";
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(190, 100);
ctx.lineTo(280, 20);
ctx.lineTo(280, 150);
ctx.stroke();
```

#### Ergebnis

{{EmbedLiveSample('Changing_the_joins_in_a_path', 700, 180)}}

### Vergleich von Linienverbindungen

Das folgende Beispiel zeichnet drei verschiedene Pfade und zeigt jede der drei `lineJoin`-Optionen.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const ctx = document.getElementById("canvas").getContext("2d");
ctx.lineWidth = 10;

["round", "bevel", "miter"].forEach((join, i) => {
  ctx.lineJoin = join;
  ctx.beginPath();
  ctx.moveTo(-5, 5 + i * 40);
  ctx.lineTo(35, 45 + i * 40);
  ctx.lineTo(75, 5 + i * 40);
  ctx.lineTo(115, 45 + i * 40);
  ctx.lineTo(155, 5 + i * 40);
  ctx.stroke();
});
```

{{EmbedLiveSample("Comparison_of_line_joins", "", "180")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### WebKit/Blink-spezifische Hinweise

- In WebKit- und Blink-basierten Browsern ist zusätzlich zu dieser Eigenschaft eine nicht standardisierte und veraltete Methode `ctx.setLineJoin()` implementiert.

## Siehe auch

- Die Schnittstelle, die diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.lineCap`](/de/docs/Web/API/CanvasRenderingContext2D/lineCap)
- [`CanvasRenderingContext2D.lineWidth`](/de/docs/Web/API/CanvasRenderingContext2D/lineWidth)
- [Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
