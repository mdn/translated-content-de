---
title: Text zeichnen
slug: Web/API/Canvas_API/Tutorial/Drawing_text
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

Nachdem wir im vorherigen Kapitel gesehen haben, wie man [Stile und Farben anwendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors), werden wir nun betrachten, wie man Text auf die Leinwand zeichnet.

## Text zeichnen

Der Canvas-Rendering-Kontext bietet zwei Methoden, um Text zu rendern:

- [`fillText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Füllt einen gegebenen Text an der angegebenen (x,y)-Position. Optional mit einer maximalen Breite zum Zeichnen.
- [`strokeText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet den Umriss eines gegebenen Textes an der angegebenen (x,y)-Position. Optional mit einer maximalen Breite zum Zeichnen.

### Ein `fillText` Beispiel

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

### Ein `strokeText` Beispiel

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

## Textgestaltung

In den obigen Beispielen verwenden wir bereits die `font`-Eigenschaft, um den Text etwas größer als die Standardgröße zu machen. Es gibt einige weitere Eigenschaften, die Ihnen ermöglichen, die Art und Weise anzupassen, wie der Text auf der Leinwand angezeigt wird:

- [`font = value`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Der aktuelle Textstil, der beim Zeichnen von Text verwendet wird. Dieser String verwendet die gleiche Syntax wie die [CSS](/de/docs/Web/CSS) {{cssxref("font")}}-Eigenschaft. Die Standard-Schriftart ist 10px sans-serif.
- [`textAlign = value`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Einstellung der Textausrichtung. Mögliche Werte: `start`, `end`, `left`, `right` oder `center`. Der Standardwert ist `start`.
- [`textBaseline = value`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Einstellung der Grundlinienausrichtung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. Der Standardwert ist `alphabetic`.
- [`direction = value`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Richtungsangabe. Mögliche Werte: `ltr`, `rtl`, `inherit`. Der Standardwert ist `inherit`.

Diese Eigenschaften könnten Ihnen vertraut sein, wenn Sie zuvor mit CSS gearbeitet haben.

Das folgende Diagramm von der [WHATWG](https://whatwg.org/) zeigt die verschiedenen Grundlinien, die von der `textBaseline`-Eigenschaft unterstützt werden.![Die Oberseite des Em-Quadrats befindet sich ungefähr am oberen Ende der Glyphen einer Schriftart, die hängende Grundlinie ist dort, wo einige Glyphen wie आ verankert sind. Die Mitte befindet sich auf halber Strecke zwischen der Oberseite und Unterseite des Em-Quadrats. Die alphabetische Grundlinie ist dort, wo Zeichen wie Á, ÿ, f und Ω verankert sind. Die ideographische Grundlinie ist dort, wo Glyphen wie 私 und 達 verankert sind. Und die Unterseite des Em-Quadrats befindet sich ungefähr am unteren Ende der Glyphen in einer Schriftart. Die Ober- und Unterseite des Begrenzungsrahmens können weit von diesen Grundlinien entfernt sein, da Glyphen weit außerhalb des Em-Quadrats reichen können.](baselines.png)

### Ein `textBaseline` Beispiel

Bearbeiten Sie den untenstehenden Code und sehen Sie, wie sich Ihre Änderungen live auf der Leinwand aktualisieren:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);
</textarea>
```

```js hidden
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const textarea = document.getElementById("code");
const reset = document.getElementById("reset");
const edit = document.getElementById("edit");
const code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", () => {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", () => {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('A_textBaseline_example', 700, 400) }}

## Erweiterte Textmessungen

Falls Sie mehr Details über den Text benötigen, ermöglicht Ihnen die folgende Methode, ihn zu messen.

- [`measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück, das die Breite in Pixeln enthält, die der angegebene Text haben wird, wenn er im aktuellen Textstil gezeichnet wird.

Der folgende Codeausschnitt zeigt, wie Sie einen Text messen und seine Breite ermitteln können.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

## Barrierefreiheit

Das `<canvas>`-Element ist lediglich ein Bitmap und liefert keine Informationen über gezeichnete Objekte. Text, der auf einer Leinwand geschrieben wird, kann Lesbarkeitsprobleme bei Nutzern verursachen, die auf Bildschirmvergrößerung angewiesen sind. Die Pixel innerhalb eines Canvas-Elements skalieren nicht und können bei Vergrößerung unscharf werden. Dies liegt daran, dass sie keine Vektoren sind, sondern eine buchstabenförmige Ansammlung von Pixeln. Bei der Vergrößerung werden die Pixel größer.

Canvas-Inhalte werden nicht wie semantisches HTML an Barrierefreiheitswerkzeuge weitergegeben. Im Allgemeinen sollten Sie die Verwendung von Canvas in einer zugänglichen Website oder App vermeiden. Eine Alternative wäre, HTML-Elemente oder SVG anstelle von Canvas zu verwenden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
