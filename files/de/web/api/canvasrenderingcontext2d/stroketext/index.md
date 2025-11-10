---
title: "CanvasRenderingContext2D: strokeText() Methode"
short-title: strokeText()
slug: Web/API/CanvasRenderingContext2D/strokeText
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die Methode **`strokeText()`** des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), Teil der Canvas 2D API, zeichnet die Umrisse der Zeichen eines Textstrings an den angegebenen Koordinaten. Ein optionaler Parameter ermöglicht es, eine maximale Breite für den gerenderten Text festzulegen, die der {{Glossary("user_agent", "User-Agent")}} durch Verkleinern oder durch die Verwendung einer kleineren Schriftgröße erreichen kann.

Diese Methode zeichnet direkt auf die Leinwand, ohne den aktuellen Pfad zu verändern. Deshalb haben nachfolgende Aufrufe von [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) oder [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) keinen Einfluss darauf.

> [!NOTE]
> Verwenden Sie die Methode [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText), um die Textzeichen zu füllen, anstatt nur deren Umrisse zu zeichnen.

## Syntax

```js-nolint
strokeText(text, x, y)
strokeText(text, x, y, maxWidth)
```

### Parameter

- `text`
  - : Ein String, der die zu rendernde Textzeichenfolge im Kontext angibt. Der Text wird mit den in [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) angegebenen Einstellungen gerendert.
- `x`
  - : Die x-Achsen-Koordinate des Punktes, an dem das Zeichnen des Textes beginnen soll.
- `y`
  - : Die y-Achsen-Koordinate des Punktes, an dem das Zeichnen des Textes beginnen soll.
- `maxWidth` {{optional_inline}}
  - : Die maximale Breite, die der Text bei der Darstellung einnehmen darf. Wenn nicht angegeben, gibt es keine Begrenzung der Textbreite. Ist dieser Wert jedoch angegeben, passt der User-Agent das Kerning an, wählt eine mehr horizontal kondensierte Schrift (wenn eine verfügbar ist oder ohne Qualitätsverlust generiert werden kann) oder verkleinert die Schriftgröße, um den Text in die angegebene Breite zu passen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen von Textumrissen

Dieses Beispiel schreibt die Worte "Hello world" mit der Methode `strokeText()`.

#### HTML

Zuerst benötigen wir eine Leinwand zum Zeichnen. Dieser Code erstellt einen Kontext, der 400 Pixel breit und 150 Pixel hoch ist.

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

Dieser Code erhält einen Verweis auf das {{HTMLElement("canvas")}}, dann erhält er einen Verweis auf seinen 2D-Grafikkontext.

Mit diesem in der Hand setzen wir die [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) auf "serif" in 50 Pixel Höhe (die Standard-Serifen-Schrift des Nutzers), dann rufen wir `strokeText()` auf, um den Text "Hello world" zu zeichnen, beginnend bei den Koordinaten (50, 90).

#### Ergebnis

{{ EmbedLiveSample('Drawing_text_outlines', 700, 180) }}

### Einschränkung der Textgröße

Dieses Beispiel schreibt die Worte "Hello world" und beschränkt die Breite auf 140 Pixel.

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

#### Ergebnis

{{ EmbedLiveSample('Restricting_the_text_size', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
