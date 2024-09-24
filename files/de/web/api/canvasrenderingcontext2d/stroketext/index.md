---
title: "CanvasRenderingContext2D: Methode strokeText()"
short-title: strokeText()
slug: Web/API/CanvasRenderingContext2D/strokeText
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die Methode **`strokeText()`** der {{domxref("CanvasRenderingContext2D")}}, die Teil der Canvas 2D-API ist, zeichnet die Umrisse der Zeichen eines Textstrings an den angegebenen Koordinaten. Ein optionaler Parameter ermöglicht es, eine maximale Breite für den gerenderten Text anzugeben, die der {{Glossary("user agent")}} durch Komprimierung des Textes oder durch Verwenden einer kleineren Schriftgröße erreicht.

Diese Methode zeichnet direkt auf die Leinwand, ohne den aktuellen Pfad zu verändern, sodass nachfolgende {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} oder {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} Aufrufe keinen Einfluss darauf haben.

> [!NOTE]
> Verwenden Sie die Methode {{domxref('CanvasRenderingContext2D.fillText()', 'fillText()')}}, um die Textzeichen auszufüllen, anstatt nur deren Umrisse zu zeichnen.

## Syntax

```js-nolint
strokeText(text, x, y)
strokeText(text, x, y, maxWidth)
```

### Parameter

- `text`
  - : Ein String, der den Textstring angibt, der in den Kontext gerendert werden soll.
    Der Text wird unter Verwendung der Einstellungen gerendert, die durch
    {{domxref("CanvasRenderingContext2D.font","font")}},
    {{domxref("CanvasRenderingContext2D.textAlign","textAlign")}},
    {{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}} und
    {{domxref("CanvasRenderingContext2D.direction","direction")}} festgelegt sind.
- `x`
  - : Die x-Achsenkoordinate des Punktes, an dem der Textbeginn gezeichnet wird.
- `y`
  - : Die y-Achsenkoordinate des Punktes, an dem der Textbeginn gezeichnet wird.
- `maxWidth` {{optional_inline}}
  - : Die maximale Breite, die der Text nach dem Rendern haben darf. Wenn nicht angegeben, gibt es keine Begrenzung der Textbreite. Wenn dieser Wert jedoch angegeben wird, passt der Benutzeragent das Kerning an, wählt eine horizontal komprimiertere Schriftart (falls eine verfügbar oder erzeugt werden kann, ohne an Qualität zu verlieren) oder skaliert auf eine kleinere Schriftgröße, um den Text in die angegebene Breite zu passen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen von Textumrissen

Dieses Beispiel schreibt die Worte "Hello world" mit der Methode `strokeText()`.

#### HTML

Zuerst benötigen wir eine Leinwand, auf der gezeichnet wird. Dieser Code erstellt einen Kontext mit einer Breite von 400 Pixeln und einer Höhe von 150 Pixeln.

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

Der JavaScript-Code für dieses Beispiel folgt.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.strokeText("Hello world", 50, 90);
```

Dieser Code erhält eine Referenz auf das {{HTMLElement("canvas")}}-Element und anschließend eine Referenz auf dessen 2D-Grafikkontext.

Damit in der Hand setzen wir die {{domxref("CanvasRenderingContext2D.font", "font")}} auf "serif" in 50 Pixel Höhe (die bei [serif](https://en.wikipedia.org/wiki/Serif) standardmäßig eingestellte Schrift des Benutzers), und rufen dann `strokeText()` auf, um den Text "Hello world" ab den Koordinaten (50, 90) zu zeichnen.

#### Resultat

{{ EmbedLiveSample('Drawing_text_outlines', 700, 180) }}

### Einschränken der Textgröße

Dieses Beispiel schreibt die Worte "Hello world" und beschränkt deren Breite auf 140 Pixel.

#### HTML

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.strokeText("Hello world", 50, 90, 140);
```

#### Resultat

{{ EmbedLiveSample('Restricting_the_text_size', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- Das Interface, das diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillText()")}}
