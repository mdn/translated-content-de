---
title: "CanvasRenderingContext2D: globalAlpha-Eigenschaft"
short-title: globalAlpha
slug: Web/API/CanvasRenderingContext2D/globalAlpha
l10n:
  sourceCommit: 6f1b699dd8891431bbfe0bc3bb803f929fa6032e
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.globalAlpha`**-Eigenschaft der Canvas 2D-API gibt den Alpha- (Transparenz-)Wert an, der auf Formen und Bilder angewendet wird, bevor sie auf die Leinwand gezeichnet werden.

> [!NOTE]
> Siehe auch das Kapitel [Styling und Farben anwenden](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) im [Canvas-Leitfaden](/de/docs/Web/API/Canvas_API/Tutorial).

## Wert

Eine Zahl zwischen `0.0` (vollständig transparent) und `1.0` (vollständig undurchsichtig), einschließlich. Der Standardwert ist `1.0`. Werte außerhalb dieses Bereichs, einschließlich {{jsxref("Infinity")}} und {{jsxref("NaN")}}, werden nicht gesetzt, und `globalAlpha` behält seinen vorherigen Wert bei.

## Beispiele

### Zeichnen von durchscheinenden Formen

Dieses Beispiel verwendet die `globalAlpha`-Eigenschaft, um zwei halbtransparente Rechtecke zu zeichnen.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.globalAlpha = 0.5;

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Drawing_translucent_shapes', 700, 180) }}

### Überlagern von transparenten Formen

Dieses Beispiel veranschaulicht den Effekt, mehrere transparente Formen übereinander zu legen. Wir beginnen mit dem Zeichnen eines soliden Hintergrunds, der aus vier unterschiedlich gefärbten Quadraten besteht. Anschließend setzen wir die `globalAlpha`-Eigenschaft auf `0,2` (20% undurchsichtig); diese Alpha-Stufe gilt für alle unsere transparenten Formen. Danach verwenden wir eine `for`-Schleife, um eine Reihe von Kreisen mit zunehmendem Radius zu zeichnen.

Mit jedem neuen Kreis wird die Opazität der vorhergehenden Kreise darunter effektiv erhöht. Würden wir die Schrittanzahl erhöhen (und damit mehr Kreise zeichnen), würde der Hintergrund schließlich vollständig aus der Mitte des Bildes verschwinden.

```html hidden
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

// Draw background
ctx.fillStyle = "#ffdd00";
ctx.fillRect(0, 0, 75, 75);
ctx.fillStyle = "#66cc00";
ctx.fillRect(75, 0, 75, 75);
ctx.fillStyle = "#0099ff";
ctx.fillRect(0, 75, 75, 75);
ctx.fillStyle = "#ff3300";
ctx.fillRect(75, 75, 75, 75);
ctx.fillStyle = "white";

// Set transparency value
ctx.globalAlpha = 0.2;

// Draw transparent circles
for (let i = 0; i < 7; i++) {
  ctx.beginPath();
  ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
  ctx.fill();
}
```

{{EmbedLiveSample("Overlaying_transparent_shapes", "", "180")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Gecko-spezifische Hinweise

- Ab Gecko 5.0 werfen ungültige Werte für `globalAlpha` keine `SYNTAX_ERR`-Ausnahme mehr; diese werden nun korrekt stillschweigend ignoriert.

### WebKit/Blink-spezifische Hinweise

- In WebKit- und Blink-basierten Browsern ist zusätzlich zu dieser Eigenschaft eine nicht standardisierte und veraltete Methode `ctx.setAlpha()` implementiert.

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
