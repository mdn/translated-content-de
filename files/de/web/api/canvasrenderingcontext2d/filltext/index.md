---
title: "CanvasRenderingContext2D: fillText()-Methode"
short-title: fillText()
slug: Web/API/CanvasRenderingContext2D/fillText
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("HTML DOM")}}

Die Methode **`fillText()`** der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), Teil der Canvas 2D API, zeichnet eine Textzeichenfolge an den angegebenen Koordinaten und füllt die Zeichen der Zeichenfolge mit dem aktuellen [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle). Ein optionaler Parameter ermöglicht das Festlegen einer maximalen Breite für den gerenderten Text, die der [User-Agent](/de/docs/Glossary/user_agent) durch Komprimieren des Textes oder durch Verwendung einer kleineren Schriftart erreichen wird.

Diese Methode zeichnet direkt auf die Canvas, ohne den aktuellen Pfad zu ändern. Daher haben alle nachfolgenden Aufrufe von [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) oder [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) keine Auswirkung darauf.

Der Text wird unter Verwendung der Schrift- und Textlayoutkonfiguration gerendert, die durch die Eigenschaften [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) definiert sind.

> [!NOTE]
> Um die Umrisse der Zeichen in einer Zeichenfolge zu zeichnen, rufen Sie die Methode [`strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText) des Kontextes auf.

## Syntax

```js-nolint
fillText(text, x, y)
fillText(text, x, y, maxWidth)
```

### Parameter

- `text`
  - : Eine Zeichenkette, die die Textzeichenfolge spezifiziert, die in den Kontext gezeichnet werden soll. Der Text wird mit den Einstellungen gerendert, die von [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font), [`textAlign`](/de/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/de/docs/Web/API/CanvasRenderingContext2D/textBaseline) und [`direction`](/de/docs/Web/API/CanvasRenderingContext2D/direction) angegeben werden.
- `x`
  - : Die x-Achsenkoordinate des Punktes, an dem mit dem Zeichnen des Textes begonnen werden soll, in Pixel.
- `y`
  - : Die y-Achsenkoordinate der Basislinie, auf der das Zeichnen des Textes begonnen werden soll, in Pixel.
- `maxWidth` {{optional_inline}}
  - : Die maximale Anzahl von Pixeln, die der Text nach der Darstellung breit sein darf. Wenn nicht angegeben, gibt es keine Begrenzung für die Breite des Textes. Wenn jedoch dieser Wert angegeben wird, wird der User-Agent das Kerning anpassen, eine horizontal komprimiertere Schriftart auswählen (falls eine verfügbar ist oder erstellt werden kann, ohne Qualitätsverluste zu verursachen), oder zu einer kleineren Schriftgröße skalieren, um den Text innerhalb der angegebenen Breite anzupassen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Gefüllten Text zeichnen

Dieses Beispiel schreibt die Wörter "Hello world" mithilfe der `fillText()`-Methode.

#### HTML

Zuerst benötigen wir eine Canvas, in die wir zeichnen können. Dieser Code erstellt einen Kontext mit einer Breite von 400 Pixeln und einer Höhe von 150 Pixeln.

```html
<canvas id="canvas" width="400" height="150"></canvas>
```

#### JavaScript

Der JavaScript-Code für dieses Beispiel sieht wie folgt aus.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.font = "50px serif";
ctx.fillText("Hello world", 50, 90);
```

Dieser Code erhält eine Referenz auf das {{HTMLElement("canvas")}}, dann eine Referenz auf seinen 2D-Grafikkontext.

Damit setzen wir die [`font`](/de/docs/Web/API/CanvasRenderingContext2D/font) auf 50 Pixel hohe "serif" (die serifenbetonte Standardschrift des Nutzers), und rufen `fillText()` auf, um den Text "Hello world" bei den Koordinaten (50, 90) zu zeichnen.

#### Ergebnis

{{ EmbedLiveSample('Drawing_filled_text', 700, 180) }}

### Textgröße beschränken

Dieses Beispiel schreibt die Wörter "Hello world" und beschränkt deren Breite auf 140 Pixel.

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

- [Text zeichnen](/de/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.strokeText()`](/de/docs/Web/API/CanvasRenderingContext2D/strokeText)
