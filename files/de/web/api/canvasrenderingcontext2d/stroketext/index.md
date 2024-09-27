---
title: "CanvasRenderingContext2D: strokeText()-Methode"
short-title: strokeText()
slug: Web/API/CanvasRenderingContext2D/strokeText
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die Methode **`strokeText()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), ein Teil der Canvas 2D API, zeichnet die Umrisse der Zeichen eines Textstrings an den angegebenen Koordinaten. Ein optionaler Parameter ermöglicht es, eine maximale Breite für den gerenderten Text anzugeben, die der [User Agent](/de/docs/Glossary/user_agent) erreicht, indem er den Text verdichtet oder eine kleinere Schriftgröße verwendet.

Diese Methode zeichnet direkt auf die Leinwand, ohne den aktuellen Pfad zu verändern, sodass nachfolgende Aufrufe von [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) oder [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) darauf keinen Einfluss haben werden.

> [!NOTE]
> Verwenden Sie die [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)-Methode, um die Textzeichen auszufüllen, anstatt nur ihre Umrisse zu zeichnen.

## Syntax

```js-nolint
strokeText(text, x, y)
strokeText(text, x, y, maxWidth)
```

### Parameter

- `text`
  - : Ein String, der den zu rendernden Textstring in den Kontext spezifiziert. Der Text wird unter Verwendung der Einstellungen für [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) gerendert.
- `x`
  - : Die x-Achsen-Koordinate des Punktes, an dem das Zeichnen des Textes beginnen soll.
- `y`
  - : Die y-Achsen-Koordinate des Punktes, an dem das Zeichnen des Textes beginnen soll.
- `maxWidth` {{optional_inline}}
  - : Die maximale Breite, die der Text bei der Darstellung haben darf. Falls nicht angegeben, gibt es keine Begrenzung für die Breite des Textes. Wenn dieser Wert jedoch angegeben wird, passt der User Agent das Kerning an, wählt eine mehr horizontal verdichtete Schriftart (falls verfügbar oder ohne Qualitätsverlust generierbar), oder skaliert auf eine kleinere Schriftgröße herunter, um den Text in die angegebene Breite zu bringen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen von Textumrissen

Dieses Beispiel schreibt die Worte "Hello world" mit der `strokeText()`-Methode.

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

Dieser Code erhält eine Referenz zum {{HTMLElement("canvas")}}, dann eine Referenz auf den 2D-Grafikkontext.

Mit dieser in der Hand setzen wir die [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) auf eine 50-Pixel-hohe "serif" (die Standard-Serifenschrift des Nutzers), und rufen dann `strokeText()` auf, um den Text "Hello world" an den Koordinaten (50, 90) zu zeichnen.

#### Ergebnis

{{ EmbedLiveSample('Drawing_text_outlines', 700, 180) }}

### Begrenzung der Textgröße

Dieses Beispiel schreibt die Worte "Hello world", wobei die Breite auf 140 Pixel begrenzt wird.

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

- [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
