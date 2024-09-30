---
title: "CanvasRenderingContext2D: strokeText() Methode"
short-title: strokeText()
slug: Web/API/CanvasRenderingContext2D/strokeText
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die Methode **`strokeText()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), Teil der Canvas 2D API, zeichnet die Umrisse der Zeichen einer Textzeichenfolge an den angegebenen Koordinaten. Ein optionaler Parameter ermöglicht es, eine maximale Breite für den gerenderten Text anzugeben, die der [User Agent](/de/docs/Glossary/user_agent) durch Textverdichtung oder durch die Verwendung einer kleineren Schriftgröße erreicht.

Diese Methode zeichnet direkt auf die Leinwand, ohne den aktuellen Pfad zu verändern, sodass nachfolgende Aufrufe von [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) oder [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) keine Wirkung darauf haben.

> [!NOTE]
> Verwenden Sie die Methode [`fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText), um die Textzeichen zu füllen, anstatt nur deren Umrisse zu zeichnen.

## Syntax

```js-nolint
strokeText(text, x, y)
strokeText(text, x, y, maxWidth)
```

### Parameter

- `text`
  - : Eine Zeichenfolge, die den zu rendernden Text im Kontext angibt.
    Der Text wird unter Verwendung der in
    [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font),
    [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign),
    [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und
    [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) angegebenen Einstellungen gerendert.
- `x`
  - : Die x-Achsen-Koordinate des Punktes, an dem mit dem Zeichnen des Textes begonnen wird.
- `y`
  - : Die y-Achsen-Koordinate des Punktes, an dem mit dem Zeichnen des Textes begonnen wird.
- `maxWidth` {{optional_inline}}
  - : Die maximale Breite, die der Text nach dem Rendern haben darf. Wenn sie nicht angegeben ist, gibt es keine Begrenzung für die Breite des Textes. Falls dieser Wert angegeben wird, passt der User Agent das Kerning an, wählt eine horizontal komprimiertere Schriftart (falls verfügbar oder ohne Qualitätsverlust generierbar) oder verkleinert die Schriftgröße, um den Text in die angegebene Breite einzupassen.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen von Textumrissen

In diesem Beispiel wird der Text "Hello world" mit der Methode `strokeText()` geschrieben.

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

Dieser Code erhält eine Referenz zum {{HTMLElement("canvas")}}, dann eine Referenz zu seinem 2D-Grafikkontext.

Damit in der Hand setzen wir das [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) auf 50 Pixel hohe "serif" (die Standard-Serifenschrift des Benutzers), dann rufen wir `strokeText()` auf, um den Text "Hello world" zu zeichnen, beginnend bei den Koordinaten (50, 90).

#### Ergebnis

{{ EmbedLiveSample('Drawing_text_outlines', 700, 180) }}

### Einschränkung der Textgröße

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

#### Ergebnis

{{ EmbedLiveSample('Restricting_the_text_size', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Zeichnen von Text](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.fillText()`](/de/docs/Web/API/CanvasRenderingContext2D/fillText)
