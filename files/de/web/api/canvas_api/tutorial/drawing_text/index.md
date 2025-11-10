---
title: Zeichnen von Text
slug: Web/API/Canvas_API/Tutorial/Drawing_text
l10n:
  sourceCommit: b2fb522de3a3aaf238d9b5af8dcf627d201551f7
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

Nachdem Sie im vorherigen Kapitel gesehen haben, wie man [Stile und Farben anwendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors), werden wir nun betrachten, wie man Text auf die Leinwand zeichnet.

## Zeichnen von Text

Der Canvas-Rendering-Kontext bietet zwei Methoden, um Text darzustellen:

- [`fillText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Füllt einen gegebenen Text an der angegebenen Position (x,y). Optional kann eine maximale Breite angegeben werden.
- [`strokeText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Umrandet einen gegebenen Text an der angegebenen Position (x,y). Optional kann eine maximale Breite angegeben werden.

### Ein `fillText`-Beispiel

Der Text wird mit dem aktuellen `fillStyle` gefüllt.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_fillText_example", 310, 110)}}

### Ein `strokeText`-Beispiel

Der Text wird mit dem aktuellen `strokeStyle` umrandet.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.strokeText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_strokeText_example", 310, 110)}}

## Styling von Text

In den obigen Beispielen verwenden wir bereits die `font`-Eigenschaft, um den Text etwas größer als die Standardgröße darzustellen. Es gibt noch einige weitere Eigenschaften, die es Ihnen ermöglichen, die Art und Weise, wie der Text auf der Leinwand dargestellt wird, anzupassen:

- [`font = value`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Der aktuelle Textstil, der beim Zeichnen des Textes verwendet wird. Dieser String verwendet die gleiche Syntax wie die [CSS](/de/docs/Web/CSS) {{cssxref("font")}} Eigenschaft. Die Standardschriftart ist 10px sans-serif.
- [`textAlign = value`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Einstellung der Textausrichtung. Mögliche Werte: `start`, `end`, `left`, `right` oder `center`. Der Standardwert ist `start`.
- [`textBaseline = value`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Einstellung der Basislinienausrichtung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. Der Standardwert ist `alphabetic`.
- [`direction = value`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Richtung. Mögliche Werte: `ltr`, `rtl`, `inherit`. Der Standardwert ist `inherit`.

Diese Eigenschaften könnten Ihnen bekannt vorkommen, wenn Sie zuvor mit CSS gearbeitet haben.

Das folgende Diagramm aus der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html#text-styles) zeigt die verschiedenen von der `textBaseline`-Eigenschaft unterstützten Baselines.

![Die em-over-Basislinie liegt ungefähr an der Oberkante der Glyphen in einer Schriftart, die hängende Basislinie ist der Ankerpunkt für einige Glyphen wie आ, die Mitte liegt zwischen der em-over und em-under-Basis, die alphabetic-Basislinie ist der Ankerpunkt für Zeichen wie Á, ÿ, f, und Ω, die ideographic-under-Basislinie ist der Ankerpunkt für Glyphen wie 私 und 達, und die em-under-Basislinie liegt ungefähr an der Unterkante der Glyphen in einer Schrift. Die obere und untere Grenze der Begrenzungsbox kann weit von diesen Baselines entfernt sein, da Glyphen weit außerhalb der em-over und em-under-Basis verlaufen können.](baselines.png)

### Ein `textBaseline`-Beispiel

Dieses Beispiel zeigt die verschiedenen `textBaseline`-Eigenschaftswerte.
Besuchen Sie die Seite [`CanvasRenderingContext2D.textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) für weitere Informationen und detaillierte Beispiele.

```html hidden live-sample___textBaseline
<canvas id="canvas" width="400" height="100"></canvas>
```

```js live-sample___textBaseline
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
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

Für den Fall, dass Sie mehr Details über den Text benötigen, erlaubt Ihnen die folgende Methode, ihn zu messen.

- [`measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück, das die Breite in Pixeln enthält, die der angegebene Text haben wird, wenn er im aktuellen Textstil gezeichnet wird.

Der folgende Codeausschnitt zeigt, wie Sie einen Text messen und seine Breite erhalten können.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

## Barrierefreiheitsaspekte

Das `<canvas>`-Element ist nur ein Bitmap und liefert keine Informationen über irgendwelche gezeichneten Objekte. Text, der auf einem Canvas geschrieben wird, kann Lesbarkeitsprobleme für Benutzer verursachen, die auf Bildschirmvergrößerung angewiesen sind. Die Pixel innerhalb eines Canvas-Elements werden nicht skaliert und können bei Vergrößerung unscharf werden. Dies liegt daran, dass sie kein Vektor, sondern eine buchstabenförmige Ansammlung von Pixeln sind. Bei Vergrößerung werden die Pixel größer.

Canvas-Inhalt wird nicht wie semantisches HTML an Barrierefreiheitstools weitergegeben. Im Allgemeinen sollten Sie die Verwendung von Canvas in einer barrierefreien Website oder App vermeiden. Eine Alternative ist die Verwendung von HTML-Elementen oder SVG anstelle von Canvas.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
