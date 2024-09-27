---
title: "CanvasRenderingContext2D: globalAlpha-Eigenschaft"
short-title: globalAlpha
slug: Web/API/CanvasRenderingContext2D/globalAlpha
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.globalAlpha`**
Eigenschaft der Canvas 2D API bestimmt den Alpha- (Transparenz-) Wert, der auf Formen und Bilder angewendet wird, bevor sie auf die Leinwand gezeichnet werden.

> [!NOTE]
> Siehe auch das Kapitel [Anwenden von Stilen und Farbe](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Wert

Eine Zahl zwischen `0.0` (vollständig transparent) und `1.0` (vollständig opak), inklusive. Der Standardwert ist `1.0`. Werte außerhalb dieses Bereichs, einschließlich {{jsxref("Infinity")}} und {{jsxref("NaN")}}, werden nicht gesetzt, und `globalAlpha` behält seinen vorherigen Wert.

## Beispiele

### Zeichnen von durchscheinenden Formen

Dieses Beispiel verwendet die `globalAlpha`-Eigenschaft, um zwei halbtransparente
Rechtecke zu zeichnen.

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

### Überlagern von durchsichtigen Formen

Dieses Beispiel veranschaulicht die Wirkung des Überlagerns mehrerer transparenter Formen. Wir beginnen mit dem Zeichnen eines soliden Hintergrunds, der aus vier unterschiedlich farbigen Quadraten besteht. Anschließend setzen wir die `globalAlpha`-Eigenschaft auf `0.2` (20% opak); dieser Alphawert wird auf alle unsere transparenten Formen angewendet. Danach verwenden wir eine `for`-Schleife, um eine Serie von Kreisen mit zunehmenden Radien zu zeichnen.

Mit jedem neuen Kreis wird die Deckkraft der vorherigen Kreise darunter effektiv erhöht. Würden wir die Schrittanzahl erhöhen (und damit mehr Kreise zeichnen), würde der Hintergrund schließlich vollständig aus dem Zentrum des Bildes verschwinden.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw background
ctx.fillStyle = "#FD0";
ctx.fillRect(0, 0, 75, 75);
ctx.fillStyle = "#6C0";
ctx.fillRect(75, 0, 75, 75);
ctx.fillStyle = "#09F";
ctx.fillRect(0, 75, 75, 75);
ctx.fillStyle = "#F30";
ctx.fillRect(75, 75, 75, 75);
ctx.fillStyle = "#FFF";

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

- Ab Gecko 5.0 führt das Angeben ungültiger Werte für `globalAlpha` nicht mehr zu einem `SYNTAX_ERR`-Ausnahmefehler; diese werden jetzt korrekt stillschweigend ignoriert.

### WebKit/Blink-spezifische Hinweise

- In WebKit- und Blink-basierten Browsern wird eine nicht-standardisierte und veraltete Methode `ctx.setAlpha()` zusätzlich zu dieser Eigenschaft implementiert.

## Siehe auch

- Die Schnittstelle, die diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
