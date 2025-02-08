---
title: Text zeichnen
slug: Web/API/Canvas_API/Tutorial/Drawing_text
l10n:
  sourceCommit: d6b1b7b467491d6817b88944b4ce0ecf560ace38
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

Nachdem wir im vorherigen Kapitel gesehen haben, wie man [Stile und Farben anwendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors), schauen wir uns nun an, wie man Text auf die Canvas zeichnet.

## Text zeichnen

Der Rendering-Kontext der Canvas bietet zwei Methoden, um Text darzustellen:

- [`fillText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
  - : Füllt einen angegebenen Text an der angegebenen Position (x, y). Optional mit einer maximalen Breite, die gezeichnet werden soll.
- [`strokeText(text, x, y [, maxWidth])`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
  - : Zeichnet den Umriss eines angegebenen Textes an der angegebenen Position (x, y). Optional mit einer maximalen Breite, die gezeichnet werden soll.

### Ein Beispiel für `fillText`

Der Text wird mit der aktuellen `fillStyle` gefüllt.

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

### Ein Beispiel für `strokeText`

Der Text wird mit der aktuellen `strokeStyle` gezeichnet.

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

## Text stylen

In den obigen Beispielen verwenden wir bereits die Eigenschaft `font`, um den Text etwas größer als die Standardgröße darzustellen. Es gibt noch weitere Eigenschaften, mit denen Sie die Darstellung des Textes auf der Canvas anpassen können:

- [`font = value`](/de/docs/Web/API/CanvasRenderingContext2D/font)
  - : Der aktuelle Textstil, der beim Zeichnen des Textes verwendet wird. Dieser String verwendet die gleiche Syntax wie die [CSS](/de/docs/Web/CSS) {{cssxref("font")}}-Eigenschaft. Die Standard-Schriftart ist 10px sans-serif.
- [`textAlign = value`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign)
  - : Einstellung der Textausrichtung. Mögliche Werte: `start`, `end`, `left`, `right` oder `center`. Der Standardwert ist `start`.
- [`textBaseline = value`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline)
  - : Einstellung der Grundlinie. Mögliche Werte: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. Der Standardwert ist `alphabetic`.
- [`direction = value`](/de/docs/Web/API/CanvasRenderingContext2D/direction)
  - : Richtung. Mögliche Werte: `ltr`, `rtl`, `inherit`. Der Standardwert ist `inherit`.

Diese Eigenschaften könnten Ihnen bekannt vorkommen, wenn Sie bereits mit CSS gearbeitet haben.

Das folgende Diagramm aus der [HTML-Spezifikation](https://html.spec.whatwg.org/multipage/canvas.html#text-styles) demonstriert die verschiedenen Grundlinien, die von der Eigenschaft `textBaseline` unterstützt werden.

![Die "em-over"-Grundlinie befindet sich ungefähr am oberen Ende der Glyphen einer Schriftart, die "hanging"-Grundlinie ist dort, wo einige Glyphen wie आ verankert werden, die "middle"-Linie ist der Mittelpunkt zwischen den "em-over" und "em-under"-Grundlinien, die "alphabetic"-Grundlinie ist dort, wo Zeichen wie Á, ÿ, f und Ω verankert werden, die "ideographic-under"-Grundlinie ist dort, wo Glyphen wie 私 und 達 verankert werden, und die "em-under"-Grundlinie ist ungefähr am unteren Ende der Glyphen in einer Schriftart. Die obere und untere Begrenzung des Rahmens kann weit von diesen Grundlinien entfernt sein, da Glyphen weit über die "em-over"- und "em-under"-Grundlinien hinausgehen können.](baselines.png)

### Ein Beispiel für `textBaseline`

Bearbeiten Sie den Code unten und sehen Sie, wie Ihre Änderungen live auf der Canvas aktualisiert werden:

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

{{EmbedLiveSample('A_textBaseline_example', 700, 400)}}

## Erweiterte Textmessungen

Falls Sie mehr Details über den Text benötigen, bietet die folgende Methode die Möglichkeit, ihn zu messen.

- [`measureText()`](/de/docs/Web/API/CanvasRenderingContext2D/measureText)
  - : Gibt ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt zurück, das die Breite des angegebenen Textes in Pixeln enthält, wenn dieser im aktuellen Textstil gerendert wird.

Der folgende Code-Ausschnitt zeigt, wie Sie einen Text messen und seine Breite abrufen können.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  const text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

## Barrierefreiheit bedenken

Das `<canvas>`-Element ist nur eine Bitmap und stellt keine Informationen zu den gezeichneten Objekten bereit. Text, der auf Canvas geschrieben wird, kann Lesbarkeitsprobleme für Benutzer verursachen, die auf Bildschirmvergrößerung angewiesen sind. Die Pixel innerhalb eines Canvas-Elements skalieren nicht und können bei Vergrößerung unscharf werden. Das liegt daran, dass sie kein Vektor sind, sondern eine buchstabenförmige Ansammlung von Pixeln. Bei der Vergrößerung werden die Pixel größer.

Canvas-Inhalte werden nicht wie semantisches HTML an Barrierefreiheitstools weitergegeben. Im Allgemeinen sollten Sie die Verwendung von Canvas in einer zugänglichen Website oder App vermeiden. Eine Alternative besteht darin, statt Canvas HTML-Elemente oder SVG zu verwenden.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
