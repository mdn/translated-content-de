---
title: "CanvasRenderingContext2D: lineJoin-Eigenschaft"
short-title: lineJoin
slug: Web/API/CanvasRenderingContext2D/lineJoin
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.lineJoin`**-Eigenschaft der Canvas 2D API bestimmt die Form, die verwendet wird, um zwei Liniensegmente zu verbinden, wenn sie aufeinandertreffen.

Diese Eigenschaft hat keine Wirkung, wenn zwei verbundene Segmente dieselbe Richtung haben, da in diesem Fall kein Verbindungsbereich hinzugefügt wird. Degenerierte Segmente mit einer Länge von null (d.h. mit allen Endpunkten und Kontrollpunkten an genau derselben Position) werden ebenfalls ignoriert.

> [!NOTE]
> Linien können mit den Methoden {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}, {{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}}, und {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}} gezeichnet werden.

## Wert

Es gibt drei mögliche Werte für diese Eigenschaft: `"round"`, `"bevel"` und `"miter"`. Der Standardwert ist `"miter"`.

![Drei horizontale Zickzacklinien mit den Werten round, bevel und miter, jeweils von oben nach unten gezeigt.](canvas_linejoin.png)

- `"round"`
  - : Rundet die Ecken einer Form ab, indem ein zusätzlicher Sektor einer Scheibe zentriert am gemeinsamen Endpunkt der verbundenen Segmente gefüllt wird. Der Radius für diese abgerundeten Ecken entspricht der Linienbreite.
- `"bevel"`
  - : Füllt einen zusätzlichen dreieckigen Bereich zwischen dem gemeinsamen Endpunkt der verbundenen Segmente und den separaten äußeren rechteckigen Ecken jedes Segments.
- `"miter"`
  - : Verbundene Segmente werden durch Verlängern ihrer Außenkanten so verbunden, dass sie in einem einzigen Punkt aufeinandertreffen, wodurch ein zusätzlicher, rautenförmiger Bereich gefüllt wird. Diese Einstellung wird von der {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}-Eigenschaft beeinflusst. Standardwert.

## Beispiele

### Ändern der Verbindungen in einem Pfad

Dieses Beispiel wendet abgerundete Linienverbindungen auf einen Pfad an.

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

{{ EmbedLiveSample('Changing_the_joins_in_a_path', 700, 180) }}

### Vergleich der Linienverbindungen

Das folgende Beispiel zeichnet drei verschiedene Pfade und demonstriert jede der drei `lineJoin`-Optionen.

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

- In WebKit- und Blink-basierten Browsern ist eine nicht standardmäßige und veraltete Methode `ctx.setLineJoin()` implementiert, zusätzlich zu dieser Eigenschaft.

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
- [Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
