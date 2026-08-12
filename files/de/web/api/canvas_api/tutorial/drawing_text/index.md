---
title: Text zeichnen
slug: Web/API/Canvas_API/Tutorial/Drawing_text
l10n:
  sourceCommit: 6f1b699dd8891431bbfe0bc3bb803f929fa6032e
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

Nachdem wir im vorherigen Kapitel gesehen haben, wie man [Stile und Farben anwendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors), werden wir nun anschauen, wie man Text auf die Leinwand zeichnet.

## Text zeichnen

Der Zeichenkontext für das Canvas bietet zwei Methoden zur Textdarstellung:

- [`fillText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Füllt einen angegebenen Text an der gegebenen (x,y)-Position. Optional mit einer maximalen Breite zum Zeichnen.
- [`strokeText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Umrandet einen angegebenen Text an der gegebenen (x,y)-Position. Optional mit einer maximalen Breite zum Zeichnen.

### Ein `fillText` Beispiel

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

### Ein `strokeText` Beispiel

Der Text wird mit dem aktuellen `strokeStyle` umrandet.

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

In den obigen Beispielen verwenden wir bereits die `font` Eigenschaft, um den Text etwas größer als die Standardgröße zu machen. Es gibt noch weitere Eigenschaften, die es Ihnen ermöglichen, die Art und Weise, wie der Text auf dem Canvas angezeigt wird, anzupassen:

- [`font = value`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Die aktuelle Textstil-Einstellung, die beim Zeichnen von Text verwendet wird. Dieser String verwendet die gleiche Syntax wie die [CSS](/de/docs/Web/CSS) {{cssxref("font")}} Eigenschaft. Die Standardschrift ist 10px sans-serif.
- [`textAlign = value`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Textausrichtungseinstellung. Mögliche Werte: `start`, `end`, `left`, `right` oder `center`. Der Standardwert ist `start`.
- [`textBaseline = value`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Grundeinstellung für die Ausrichtung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. Der Standardwert ist `alphabetic`.
- [`direction = value`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Schriftlaufrichtung. Mögliche Werte: `ltr`, `rtl`, `inherit`. Der Standardwert ist `inherit`.

Diese Eigenschaften könnten Ihnen bekannt vorkommen, wenn Sie bereits mit CSS gearbeitet haben.

Das folgende Diagramm aus der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html#text-styles) zeigt die verschiedenen Baselines, die von der `textBaseline` Eigenschaft unterstützt werden.

![Die em-over-Basislinie liegt ungefähr am oberen Rand der Glyphen in einer Schriftart, die hängende Basislinie ist, wo einige Glyphen wie आ verankert sind, die Mitte liegt auf halbem Weg zwischen den em-over- und em-under-Basislinien, die alphabetische Basislinie ist, wo Zeichen wie Á, ÿ, f und Ω verankert sind, die ideographisch-untere Basislinie ist, wo Glyphen wie 私 und 達 verankert sind, und die em-under-Basislinie liegt ungefähr am unteren Rand der Glyphen in einer Schriftart. Die obere und untere Begrenzungsbox können weit von diesen Baselines entfernt sein, da sich Glyphen weit außerhalb der em-over- und em-under-Basislinien erstrecken.](baselines.png)

### Ein `textBaseline` Beispiel

Dieses Beispiel zeigt die verschiedenen Werte der `textBaseline` Eigenschaft.
Weitere Informationen und detaillierte Beispiele finden Sie auf der Seite [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline).

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

## Erweiterte Textmessungen

Falls Sie mehr Details zum Text benötigen, ermöglicht die folgende Methode, diesen zu messen.

- [`measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics) Objekt zurück, das die Breite in Pixeln enthält, die der angegebene Text haben wird, wenn er im aktuellen Textstil gezeichnet wird.

Der folgende Code-Schnipsel zeigt, wie Sie einen Text messen und seine Breite erhalten können.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

## Barrierefreiheit

Das `<canvas>` Element ist lediglich eine Bitmap und liefert keine Informationen über gezeichnete Objekte. Text, der auf dem Canvas geschrieben wird, kann bei Nutzern, die auf Bildschirmvergrößerung angewiesen sind, zu Lesbarkeitsproblemen führen. Die Pixel innerhalb eines Canvas-Elements skalieren nicht und können bei Vergrößerung unscharf werden. Dies liegt daran, dass sie keine Vektoren, sondern buchstabenförmige Ansammlungen von Pixeln sind. Beim Hineinzoomen werden die Pixel größer.

Canvas-Inhalte werden nicht an barrierefreie Werkzeuge wie semantisches HTML weitergegeben. Im Allgemeinen sollten Sie die Verwendung von Canvas in einer barrierefreien Website oder App vermeiden. Eine Alternative besteht darin, HTML-Elemente oder SVG anstelle von Canvas zu verwenden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
