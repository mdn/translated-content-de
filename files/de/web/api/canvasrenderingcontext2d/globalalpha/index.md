---
title: "CanvasRenderingContext2D: globalAlpha-Eigenschaft"
short-title: globalAlpha
slug: Web/API/CanvasRenderingContext2D/globalAlpha
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef}}

Die **`CanvasRenderingContext2D.globalAlpha`**-Eigenschaft der Canvas 2D API gibt den Alpha-(Transparenz-)Wert an, der auf Formen und Bilder angewendet wird, bevor sie auf die Leinwand gezeichnet werden.

> [!NOTE]
> Siehe auch das Kapitel [Stile und Farben anwenden](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) im [Canvas-Leitfaden](/de/docs/Web/API/Canvas_API/Tutorial).

## Wert

Eine Zahl zwischen `0.0` (vollständig transparent) und `1.0` (vollständig opak), inklusive. Der Standardwert ist `1.0`. Werte außerhalb dieses Bereichs, einschließlich {{jsxref("Infinity")}} und {{jsxref("NaN")}}, werden nicht gesetzt, und `globalAlpha` behält seinen vorherigen Wert bei.

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

{{EmbedLiveSample('Drawing_translucent_shapes', 700, 180)}}

### Überlagern von transparenten Formen

Dieses Beispiel veranschaulicht den Effekt, mehrere transparente Formen übereinander zu legen. Wir beginnen mit dem Zeichnen eines soliden Hintergrunds, der aus vier unterschiedlich gefärbten Quadraten besteht. Als nächstes setzen wir die `globalAlpha`-Eigenschaft auf `0.2` (20% opak); dieses Alphalevel gilt für alle unsere transparenten Formen. Danach verwenden wir eine `for`-Schleife, um eine Reihe von Kreisen mit zunehmenden Radien zu zeichnen.

Mit jedem neuen Kreis wird die Deckkraft der vorherigen Kreise darunter effektiv erhöht. Wenn wir die Anzahl der Schritte erhöhen (und somit mehr Kreise zeichnen), würde der Hintergrund schließlich vollständig aus dem Zentrum des Bildes verschwinden.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
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

### Gecko-spezifische Anmerkungen

- Beginnend mit Gecko 5.0 werfen das Angeben ungültiger Werte für `globalAlpha` keinen `SYNTAX_ERR`-Ausnahme mehr; diese werden jetzt korrekt stillschweigend ignoriert.

### WebKit/Blink-spezifische Anmerkungen

- In WebKit- und Blink-basierten Browsern wird zusätzlich zu dieser Eigenschaft eine nicht standardisierte und veraltete Methode `ctx.setAlpha()` implementiert.

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
