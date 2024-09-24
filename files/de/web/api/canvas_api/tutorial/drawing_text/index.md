---
title: Text zeichnen
slug: Web/API/Canvas_API/Tutorial/Drawing_text
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

Nachdem wir im vorherigen Kapitel gesehen haben, wie man [Stile und Farben anwendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors), werden wir uns nun anschauen, wie man Text auf die Leinwand zeichnet.

## Text zeichnen

Der Canvas-Rendering-Kontext bietet zwei Methoden, um Text darzustellen:

- {{domxref("CanvasRenderingContext2D.fillText", "fillText(text, x, y [, maxWidth])")}}
  - : Füllt einen gegebenen Text an der angegebenen (x,y) Position. Optional mit einer maximalen Breite zum Zeichnen.
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText(text, x, y [, maxWidth])")}}
  - : Umrandet einen gegebenen Text an der angegebenen (x,y) Position. Optional mit einer maximalen Breite zum Zeichnen.

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

Der Text wird mit dem aktuellen `strokeStyle` gezeichnet.

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

In den obigen Beispielen verwenden wir bereits die `font`-Eigenschaft, um den Text etwas größer als die Standardgröße zu machen. Es gibt einige weitere Eigenschaften, die Ihnen helfen, das Erscheinungsbild des Textes auf der Leinwand anzupassen:

- {{domxref("CanvasRenderingContext2D.font", "font = value")}}
  - : Der aktuelle Textstil, der beim Zeichnen des Textes verwendet wird. Dieser String verwendet die gleiche Syntax wie die [CSS](/de/docs/Web/CSS) {{cssxref("font")}}-Eigenschaft. Die Standardschriftart ist 10px sans-serif.
- {{domxref("CanvasRenderingContext2D.textAlign", "textAlign = value")}}
  - : Textausrichtungseinstellung. Mögliche Werte: `start`, `end`, `left`, `right` oder `center`. Der Standardwert ist `start`.
- {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline = value")}}
  - : Basislinienausrichtungseinstellung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. Der Standardwert ist `alphabetic`.
- {{domxref("CanvasRenderingContext2D.direction", "direction = value")}}
  - : Richtungsgebung. Mögliche Werte: `ltr`, `rtl`, `inherit`. Der Standardwert ist `inherit`.

Diese Eigenschaften könnten Ihnen bekannt vorkommen, wenn Sie zuvor mit CSS gearbeitet haben.

Das folgende Diagramm von der [WHATWG](https://whatwg.org/) zeigt die verschiedenen Baselines, die von der `textBaseline`-Eigenschaft unterstützt werden.![Der obere Rand des Em-Kastens befindet sich ungefähr am oberen Rand der Buchstaben in einer Schriftart, die hängende Basislinie ist der Ankerpunkt von Glyphen wie आ, die Mitte liegt auf halber Höhe zwischen dem oberen und unteren Rand des Em-Kastens, die alphabetische Basislinie ist der Ankerpunkt für Zeichen wie Á, ÿ, f und Ω, die ideographische Basislinie ist der Ankerpunkt für Glyphen wie 私 und 達, und der untere Rand des Em-Kastens liegt ungefähr am unteren Rand der Buchstaben in einer Schriftart. Der obere und untere Rand des Begrenzungsrahmens kann weit von diesen Baselines entfernt sein, da Glyphen weit außerhalb des Em-Kastens ragen können.](baselines.png)

### Ein textBaseline Beispiel

Bearbeiten Sie den folgenden Code und sehen Sie, wie Ihre Änderungen live auf der Leinwand aktualisiert werden:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Bearbeiten" />
  <input id="reset" type="button" value="Zurücksetzen" />
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

Falls Sie detailliertere Informationen über den Text benötigen, erlaubt die folgende Methode, diesen zu messen.

- {{domxref("CanvasRenderingContext2D.measureText", "measureText()")}}
  - : Gibt ein {{domxref("TextMetrics")}}-Objekt zurück, das die Breite, in Pixeln, des spezifizierten Textes bei der Verwendung des aktuellen Textstils enthält.

Der folgende Codeausschnitt zeigt, wie Sie einen Text messen und dessen Breite erhalten können.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics Objekt
  text.width; // 16;
}
```

## Barrierefreiheitsbedenken

Das `<canvas>`-Element ist lediglich eine Bitmap und liefert keine Informationen über gezeichnete Objekte. Auf canvas geschriebener Text kann zu Lesbarkeitsproblemen für Benutzer führen, die auf Bildschirmvergrößerung angewiesen sind. Die Pixel innerhalb eines Canvas-Elements skalieren nicht und können bei Vergrößerung unscharf werden. Dies liegt daran, dass sie keine Vektoren, sondern buchstabenförmige Sammlungen von Pixeln sind. Beim Hineinzoomen werden die Pixel größer.

Inhalte auf Canvas werden nicht wie semantisches HTML für Barrierefreiheitstools sichtbar gemacht. Im Allgemeinen sollten Sie die Verwendung von Canvas in einer zugänglichen Webseite oder App vermeiden. Eine Alternative ist die Verwendung von HTML-Elementen oder SVG anstelle von Canvas.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
