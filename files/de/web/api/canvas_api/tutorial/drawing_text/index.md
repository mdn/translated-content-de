---
title: Text zeichnen
slug: Web/API/Canvas_API/Tutorial/Drawing_text
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

Nachdem wir im vorherigen Kapitel gesehen haben, wie sich [Stile und Farben anwenden](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) lassen, sehen wir uns nun an, wie Sie Text auf dem Canvas zeichnen können.

## Text zeichnen

Der Canvas-Rendering-Kontext stellt zwei Methoden zum Zeichnen von Text bereit:

- [`fillText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Zeichnet den angegebenen Text gefüllt an der Position (x, y). Optional kann eine maximale Breite angegeben werden.
- [`strokeText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet die Konturen des angegebenen Textes an der Position (x, y). Optional kann eine maximale Breite angegeben werden.

### Ein Beispiel für `fillText`

Der Text wird mit dem aktuellen `fillStyle` gefüllt.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="my-canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_fillText_example", 310, 110)}}

### Ein Beispiel für `strokeText`

Die Textkonturen werden mit dem aktuellen `strokeStyle` gezeichnet.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.strokeText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="my-canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_strokeText_example", 310, 110)}}

## Text gestalten

In den obigen Beispielen verwenden wir bereits die Eigenschaft `font`, um den Text etwas größer als die Standardgröße darzustellen. Mit weiteren Eigenschaften können Sie anpassen, wie der Text auf dem Canvas angezeigt wird:

- [`font = value`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Der aktuelle Textstil beim Zeichnen von Text. Diese Zeichenfolge verwendet dieselbe Syntax wie die [CSS](/de/docs/Web/CSS)-Eigenschaft {{cssxref("font")}}. Die Standardschriftart ist 10px sans-serif.
- [`textAlign = value`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Einstellung für die Textausrichtung. Mögliche Werte: `start`, `end`, `left`, `right` oder `center`. Der Standardwert ist `start`.
- [`textBaseline = value`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Einstellung für die Ausrichtung an der Grundlinie. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. Der Standardwert ist `alphabetic`.
- [`direction = value`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Schreibrichtung. Mögliche Werte: `ltr`, `rtl`, `inherit`. Der Standardwert ist `inherit`.

Wenn Sie bereits mit CSS gearbeitet haben, kommen Ihnen diese Eigenschaften möglicherweise bekannt vor.

Das folgende Diagramm aus der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html#text-styles) zeigt die verschiedenen Grundlinien, die von der Eigenschaft `textBaseline` unterstützt werden.

![Die em-over-Grundlinie liegt ungefähr am oberen Rand der Glyphen einer Schriftart. An der hanging-Grundlinie sind einige Glyphen wie आ ausgerichtet. Die middle-Grundlinie liegt auf halber Höhe zwischen der em-over- und der em-under-Grundlinie. An der alphabetic-Grundlinie sind Zeichen wie Á, ÿ, f und Ω ausgerichtet. An der ideographic-under-Grundlinie sind Glyphen wie 私 und 達 ausgerichtet. Die em-under-Grundlinie liegt ungefähr am unteren Rand der Glyphen einer Schriftart. Die Ober- und Unterkante des umschließenden Rechtecks können weit von diesen Grundlinien entfernt sein, da Glyphen deutlich über die em-over- oder unter die em-under-Grundlinie hinausragen können.](baselines.png)

### Ein Beispiel für `textBaseline`

Dieses Beispiel zeigt die verschiedenen Werte der Eigenschaft `textBaseline`.
Weitere Informationen und ausführliche Beispiele finden Sie auf der Seite [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline).

```html hidden live-sample___textbaseline
<canvas id="my-canvas" width="400" height="100"></canvas>
```

```js live-sample___textbaseline
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  ctx.font = "48px serif";

  ctx.textBaseline = "hanging";
  ctx.strokeText("hanging", 10, 50);

  ctx.textBaseline = "middle";
  ctx.strokeText("middle", 250, 50);

  ctx.beginPath();
  ctx.moveTo(10, 50);
  ctx.lineTo(300, 50);
  ctx.stroke();
}
```

```js hidden live-sample___textbaseline
draw();
```

{{EmbedLiveSample('textBaseline', 310, 110)}}

## Erweiterte Textmessungen

Wenn Sie genauere Angaben zu einem Text benötigen, können Sie ihn mit der folgenden Methode messen.

- [`measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück, das unter anderem die Breite in Pixeln enthält, die der angegebene Text beim Zeichnen mit dem aktuellen Textstil hat.

Der folgende Codeausschnitt zeigt, wie Sie einen Text messen und seine Breite ermitteln können.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
