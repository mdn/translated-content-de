---
title: "CanvasRenderingContext2D: fillText() Methode"
short-title: fillText()
slug: Web/API/CanvasRenderingContext2D/fillText
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("HTML DOM")}}

Die Methode **`fillText()`** des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), die Teil der Canvas 2D API ist, zeichnet einen Textstring an den angegebenen Koordinaten und füllt die Zeichen des Strings mit dem aktuellen [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle). Ein optionaler Parameter ermöglicht es, eine maximale Breite für den gerenderten Text anzugeben, die der [User-Agent](/de/docs/Glossary/user_agent) erreichen wird, indem er den Text verdichtet oder eine kleinere Schriftgröße verwendet.

Diese Methode zeichnet direkt auf die Leinwand, ohne den aktuellen Pfad zu verändern, sodass nachfolgende Aufrufe von [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) oder [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) darauf keine Wirkung haben.

Der Text wird unter Verwendung der Schrift- und Textlayoutkonfiguration gerendert, wie sie durch die Eigenschaften [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) definiert sind.

> [!NOTE]
> Um die Umrisse der Zeichen in einem String zu zeichnen, rufen Sie die Methode [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) des Kontextes auf.

## Syntax

```js-nolint
fillText(text, x, y)
fillText(text, x, y, maxWidth)
```

### Parameter

- `text`
  - : Ein String, der den zu rendernden Textstring im Kontext angibt. Der Text wird unter Verwendung der durch [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) spezifizierten Einstellungen gerendert.
- `x`
  - : Die x-Koordinate des Punktes, an dem das Zeichnen des Textes beginnen soll, in Pixeln.
- `y`
  - : Die y-Koordinate der Basislinie, an der das Zeichnen des Textes beginnen soll, in Pixeln.
- `maxWidth` {{optional_inline}}
  - : Die maximale Anzahl von Pixeln, die der Text bei der Darstellung breit sein darf. Wenn nicht angegeben, gibt es keine Begrenzung für die Breite des Textes. Wenn dieser Wert jedoch angegeben wird, wird der User-Agent das Kerning anpassen, eine stärker horizontal verdichtete Schriftart auswählen (falls verfügbar oder ohne Qualitätsverlust erzeugbar) oder die Schriftgröße verringern, um den Text in die angegebene Breite zu passen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen von gefülltem Text

Dieses Beispiel schreibt die Worte "Hello world" unter Verwendung der `fillText()`-Methode.

#### HTML

Zunächst benötigen wir eine Leinwand, um darauf zu zeichnen. Dieser Code erstellt einen Kontext, der 400 Pixel breit und 150 Pixel hoch ist.

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

Der JavaScript-Code für dieses Beispiel folgt.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.fillText("Hello world", 50, 90);
```

Dieser Code erhält eine Referenz auf das {{HTMLElement("canvas")}}, dann eine Referenz auf seinen 2D-Grafikkontext.

Damit in der Hand setzen wir die [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) auf "serif" (das serifenbetonte Standardfont des Benutzers) mit 50 Pixel Höhe und rufen dann `fillText()` auf, um den Text "Hello world" zu zeichnen, beginnend bei den Koordinaten (50, 90).

#### Ergebnis

{{ EmbedLiveSample('Drawing_filled_text', 700, 180) }}

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
ctx.fillText("Hello world", 50, 90, 140);
```

#### Ergebnis

{{ EmbedLiveSample('Restricting_the_text_size', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
