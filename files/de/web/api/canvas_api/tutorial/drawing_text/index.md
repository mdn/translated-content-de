---
title: Text zeichnen
slug: Web/API/Canvas_API/Tutorial/Drawing_text
l10n:
  sourceCommit: 788ea14745b3c5c2f45098403073b381c1357f39
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

Nachdem Sie im vorherigen Kapitel gelernt haben, wie man [Stile und Farben anwendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors), werden wir uns nun ansehen, wie man Text auf die Leinwand zeichnet.

## Text zeichnen

Der Canvas-Rendering-Kontext bietet zwei Methoden, um Text zu rendern:

- [`fillText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Füllt einen gegebenen Text an der angegebenen (x,y)-Position. Optional mit einer maximalen Breite zum Zeichnen.
- [`strokeText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet die Konturen eines gegebenen Textes an der angegebenen (x,y)-Position. Optional mit einer maximalen Breite zum Zeichnen.

### Ein `fillText`-Beispiel

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

### Ein `strokeText`-Beispiel

Der Text wird mit dem aktuellen `strokeStyle` gefüllt.

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

## Textgestaltung

In den obigen Beispielen verwenden wir bereits die `font`-Eigenschaft, um den Text etwas größer als die Standardgröße zu machen. Es gibt noch weitere Eigenschaften, die es Ihnen ermöglichen, die Anzeigeweise des Textes auf der Leinwand anzupassen:

- [`font = value`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Der aktuelle Textstil, der beim Zeichnen von Text verwendet wird. Diese Zeichenfolge verwendet die gleiche Syntax wie die [CSS](/de/docs/Web/CSS) {{cssxref("font")}}-Eigenschaft. Die Standardschriftart ist 10px sans-serif.
- [`textAlign = value`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Textausrichtungseinstellung. Mögliche Werte: `start`, `end`, `left`, `right` oder `center`. Der Standardwert ist `start`.
- [`textBaseline = value`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Basisausrichtungseinstellung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. Der Standardwert ist `alphabetic`.
- [`direction = value`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Direktionalität. Mögliche Werte: `ltr`, `rtl`, `inherit`. Der Standardwert ist `inherit`.

Diese Eigenschaften könnten Ihnen bekannt vorkommen, wenn Sie zuvor mit CSS gearbeitet haben.

Das folgende Diagramm aus den [HTML-Spezifikationen](https://html.spec.whatwg.org/multipage/canvas.html#text-styles) zeigt die verschiedenen Baselines, die von der `textBaseline`-Eigenschaft unterstützt werden.

![Der em-over-Basispunkt liegt ungefähr am oberen Rand der Glyphen in einer Schriftart, der hängende Basispunkt ist dort, wo einige Glyphen wie आ verankert sind, die Mitte ist auf halbem Wege zwischen den em-over- und em-under-Basispunkten, der alphabetische Basispunkt ist dort, wo Charaktere wie Á, ÿ, f und Ω verankert sind, der ideographische untere Basispunkt ist dort, wo Glyphen wie 私 und 達 verankert sind, und der em-under-Basispunkt liegt ungefähr am unteren Rand der Glyphen in einer Schriftart. Die obere und untere Grenze der Begrenzungsbox können weit von diesen Basispunkten entfernt sein, da Glyphen weit außerhalb der em-over- und em-under-Basispunkte reichen können.](baselines.png)

### Ein `textBaseline`-Beispiel

Dieses Beispiel zeigt die verschiedenen Werte der `textBaseline`-Eigenschaft.
Weitere Informationen und ausführliche Beispiele finden Sie auf der Seite [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline).

```html hidden live-sample___textBaseline
<canvas id="my-canvas" width="400" height="100"></canvas>
```

```js live-sample___textBaseline
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

```js hidden live-sample___textBaseline
draw();
```

{{EmbedLiveSample('textBaseline', 310, 110)}}

## Erweiterte Textmessung

Falls Sie mehr Details über den Text benötigen, ermöglicht Ihnen die folgende Methode, ihn zu messen.

- [`measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück, das die Breite in Pixel angibt, die der angegebene Text hat, wenn er im aktuellen Textstil gezeichnet wird.

Das folgende Code-Snippet zeigt, wie Sie einen Text messen und seine Breite erhalten können.

```js
function draw() {
  const ctx = document.getElementById("my-canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
