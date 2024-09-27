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
  - : Füllt einen gegebenen Text an der angegebenen (x,y)-Position aus. Optional mit einer maximalen Breite zum Zeichnen.
- [`strokeText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet die Umrisse eines gegebenen Textes an der angegebenen (x,y)-Position. Optional mit einer maximalen Breite zum Zeichnen.

### Ein `fillText` Beispiel

Der Text wird unter Verwendung des aktuellen `fillStyle` gefüllt.

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

Der Text wird unter Verwendung des aktuellen `strokeStyle` gefüllt.

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

## Text gestalten

In den obigen Beispielen verwenden wir bereits die `font`-Eigenschaft, um den Text etwas größer als die Standardgröße zu machen. Es gibt noch einige weitere Eigenschaften, die Ihnen ermöglichen, die Art und Weise anzupassen, wie der Text auf der Leinwand angezeigt wird:

- [`font = value`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Der aktuelle Textstil, der beim Zeichnen von Text verwendet wird. Dieser String verwendet dieselbe Syntax wie die [CSS](/de/docs/Web/CSS) {{cssxref("font")}}-Eigenschaft. Die Standardschriftart ist 10px sans-serif.
- [`textAlign = value`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Textausrichtungseinstellung. Mögliche Werte: `start`, `end`, `left`, `right` oder `center`. Der Standardwert ist `start`.
- [`textBaseline = value`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Basislinienausrichtungseinstellung. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. Der Standardwert ist `alphabetic`.
- [`direction = value`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Richtung. Mögliche Werte: `ltr`, `rtl`, `inherit`. Der Standardwert ist `inherit`.

Diese Eigenschaften könnten Ihnen bekannt vorkommen, wenn Sie bereits mit CSS gearbeitet haben.

Das folgende Diagramm von der [WHATWG](https://whatwg.org/) demonstriert die verschiedenen Baselines, die von der `textBaseline`-Eigenschaft unterstützt werden.! [Der obere Rand des Em-Quadrats befindet sich ungefähr an der Oberseite der Glyphen in einer Schrift, die hängende Basislinie ist, wo einige Glyphen wie आ verankert sind, die Mitte ist auf halbem Weg zwischen der Ober- und Unterseite des Em-Quadrats, die alphabetische Basislinie ist, wo Zeichen wie Á, ÿ, f und Ω verankert sind, die ideographische Basislinie ist, wo Glyphen wie 私 und 達 verankert sind, und die Unterseite des Em-Quadrats liegt ungefähr am unteren Ende der Glyphen in einer Schrift. Der obere und untere Rand der Begrenzungsbox können weit von diesen Basislinien entfernt sein, da Glyphen weit außerhalb des Em-Quadrats verlängert werden.](baselines.png)

### Ein textBaseline Beispiel

Bearbeiten Sie den folgenden Code und sehen Sie, wie sich Ihre Änderungen live auf der Leinwand aktualisieren:

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

Für den Fall, dass Sie weitere Details über den Text erhalten müssen, ermöglicht Ihnen die folgende Methode, ihn zu messen.

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

## Barrierefreiheitsbedenken

Das `<canvas>`-Element ist nur ein Bitmap und liefert keine Informationen über gezeichnete Objekte. Auf der Leinwand geschriebener Text kann Lesbarkeitsprobleme bei Benutzern verursachen, die auf Bildschirmlupen angewiesen sind. Die Pixel innerhalb eines `canvas`-Elements skalieren nicht und können bei Vergrößerung verschwommen werden. Dies liegt daran, dass sie keine Vektoren, sondern buchstabenförmige Pixelansammlungen sind. Beim Hineinzoomen werden die Pixel größer.

Canvas-Inhalte werden nicht für Barrierefreiheitswerkzeuge verfügbar gemacht, wie es bei semantischem HTML der Fall ist. Im Allgemeinen sollten Sie die Verwendung von Canvas in einer barrierefreien Website oder App vermeiden. Eine Alternative besteht darin, HTML-Elemente oder SVG anstelle von Canvas zu verwenden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
