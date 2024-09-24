---
title: "CanvasRenderingContext2D: fillText() Methode"
short-title: fillText()
slug: Web/API/CanvasRenderingContext2D/fillText
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("HTML DOM")}}

Die Methode **`fillText()`** der {{domxref("CanvasRenderingContext2D")}}, Teil der Canvas 2D API, zeichnet eine Textzeichenfolge an den angegebenen Koordinaten und füllt die Zeichen der Zeichenfolge mit dem aktuellen {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}. Ein optionaler Parameter ermöglicht es, eine maximale Breite für den gerenderten Text anzugeben, die der {{Glossary("user agent")}} entweder durch Verdichtung des Textes oder durch Verwendung einer kleineren Schriftgröße erreicht.

Diese Methode zeichnet direkt auf das Canvas, ohne den aktuellen Pfad zu ändern. Daher werden darauf folgende {{domxref("CanvasRenderingContext2D.fill()", "fill()")}}- oder {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}-Aufrufe keinen Effekt darauf haben.

Der Text wird mithilfe der Schriftart- und Textlayout-Konfiguration gerendert, wie sie durch die Eigenschaften {{domxref("CanvasRenderingContext2D.font","font")}}, {{domxref("CanvasRenderingContext2D.textAlign","textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}} und {{domxref("CanvasRenderingContext2D.direction","direction")}} definiert sind.

> [!NOTE]
> Um die Umrisse der Zeichen in einer Zeichenfolge zu zeichnen, rufen Sie die Methode {{domxref("CanvasRenderingContext2D.strokeText", "strokeText()")}} des Kontexts auf.

## Syntax

```js-nolint
fillText(text, x, y)
fillText(text, x, y, maxWidth)
```

### Parameter

- `text`
  - : Eine Zeichenfolge, die die zu rendernde Textzeichenfolge im Kontext angibt. Der Text wird mit den Einstellungen gerendert, die durch {{domxref("CanvasRenderingContext2D.font","font")}}, {{domxref("CanvasRenderingContext2D.textAlign","textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}} und {{domxref("CanvasRenderingContext2D.direction","direction")}} angegeben sind.
- `x`
  - : Die x-Achsen-Koordinate des Punktes, an dem mit dem Zeichnen des Textes begonnen werden soll, in Pixeln.
- `y`
  - : Die y-Achsen-Koordinate der Basislinie, auf der mit dem Zeichnen des Textes begonnen werden soll, in Pixeln.
- `maxWidth` {{optional_inline}}
  - : Die maximale Anzahl von Pixeln, die der Text nach dem Rendern breit sein darf. Wenn nicht angegeben, gibt es keine Begrenzung für die Breite des Textes. Wenn dieser Wert jedoch angegeben wird, passt der User-Agent das Kerning an, wählt eine horizontal komprimiertere Schriftart (wenn eine verfügbar ist oder ohne Qualitätsverlust generiert werden kann) oder skaliert auf eine kleinere Schriftgröße, um den Text in die angegebene Breite einzupassen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Zeichnen von gefülltem Text

Dieses Beispiel schreibt die Wörter "Hello world" mithilfe der Methode `fillText()`.

#### HTML

Zuerst benötigen wir ein Canvas zum Zeichnen. Dieser Code erstellt einen Kontext mit 400 Pixeln Breite und 150 Pixeln Höhe.

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

Dieser Code erhält eine Referenz zum {{HTMLElement("canvas")}} und dann eine Referenz zu seinem 2D-Grafikkontext.

Damit setzen wir die {{domxref("CanvasRenderingContext2D.font", "font")}} auf 50 Pixel hohe "serif" (die Standard-Schriftart des Benutzers [serif](https://en.wikipedia.org/wiki/Serif)), und rufen dann `fillText()` auf, um den Text "Hello world" bei den Koordinaten (50, 90) zu zeichnen.

#### Ergebnis

{{ EmbedLiveSample('Drawing_filled_text', 700, 180) }}

### Beschränkung der Textgröße

Dieses Beispiel schreibt die Wörter "Hello world," wobei die Breite auf 140 Pixel beschränkt wird.

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
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
