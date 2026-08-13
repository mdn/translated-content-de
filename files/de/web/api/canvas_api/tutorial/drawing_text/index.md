---
title: Text zeichnen
slug: Web/API/Canvas_API/Tutorial/Drawing_text
l10n:
  sourceCommit: 8a10694edf44bde124fa8f18af65651855f632dc
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

Nachdem wir im vorherigen Kapitel gesehen haben, wie man [Stile und Farben anwendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors), beschäftigen wir uns nun damit, wie man Text auf das Canvas zeichnet.

## Text zeichnen

Der Canvas-Rendering-Kontext bietet zwei Methoden, um Text zu rendern:

- [`fillText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Füllt einen gegebenen Text an der angegebenen (x,y)-Position. Optional mit einer maximalen Breite.
- [`strokeText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet einen Umriss eines gegebenen Textes an der angegebenen (x,y)-Position. Optional mit einer maximalen Breite.

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

## Text stylen

In den obigen Beispielen verwenden wir bereits die `font` Eigenschaft, um den Text etwas größer als die Standardgröße darzustellen. Es gibt noch weitere Eigenschaften, mit denen Sie die Darstellung des Textes auf dem Canvas anpassen können:

- [`font = value`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Der aktuelle Textstil, der beim Zeichnen von Text verwendet wird. Dieser String verwendet dieselbe Syntax wie die [CSS](/de/docs/Web/CSS) {{cssxref("font")}} Eigenschaft. Die Standardschriftart ist 10px sans-serif.
- [`textAlign = value`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Textausrichtung. Mögliche Werte: `start`, `end`, `left`, `right` oder `center`. Der Standardwert ist `start`.
- [`textBaseline = value`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Baseline-Ausrichtung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. Der Standardwert ist `alphabetic`.
- [`direction = value`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Richtung. Mögliche Werte: `ltr`, `rtl`, `inherit`. Der Standardwert ist `inherit`.

Diese Eigenschaften können Ihnen bekannt vorkommen, wenn Sie zuvor mit CSS gearbeitet haben.

Das folgende Diagramm aus der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html#text-styles) zeigt die verschiedenen von der `textBaseline` Eigenschaft unterstützten Baselines.

![Die em-over-Basislinie liegt ungefähr oben auf den Glyphen einer Schriftart, die hängende Basislinie ist dort, wo einige Glyphen wie आ verankert sind, die Mitte liegt zwischen der em-over- und der em-under-Basislinie, die alphabetische Basislinie ist, wo Zeichen wie Á, ÿ, f und Ω verankert sind, die ideografische Basislinie ist, wo Glyphen wie 私 und 達 verankert sind, und die em-under-Basislinie liegt ungefähr am unteren Ende der Glyphen einer Schriftart. Die obere und untere Begrenzung des Rahmens können weit von diesen Basislinien entfernt sein, da Glyphen weit außerhalb der em-over- und em-under-Basislinien reichen können.](baselines.png)

### Ein `textBaseline` Beispiel

Dieses Beispiel demonstriert die verschiedenen Werte der `textBaseline` Eigenschaft.
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

Falls Sie mehr Details über den Text benötigen, ermöglicht es die folgende Methode, ihn zu messen.

- [`measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics) Objekt zurück, das die Breite in Pixeln enthält, die der angegebene Text haben wird, wenn er im aktuellen Textstil gezeichnet wird.

Der folgende Codeausschnitt zeigt, wie Sie einen Text messen und seine Breite erhalten können.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
