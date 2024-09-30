---
title: "CanvasRenderingContext2D: Eigenschaft globalAlpha"
short-title: globalAlpha
slug: Web/API/CanvasRenderingContext2D/globalAlpha
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.globalAlpha`**-Eigenschaft der Canvas 2D API gibt den Alpha- (Transparenz-) Wert an, der auf Formen und Bilder angewendet wird, bevor sie auf die Leinwand gezeichnet werden.

> [!NOTE]
> Siehe auch das Kapitel [Stile und Farben anwenden](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Wert

Eine Zahl zwischen `0.0` (vollständig transparent) und `1.0` (vollständig undurchsichtig), inklusive. Der Standardwert ist `1.0`. Werte außerhalb dieses Bereichs, einschließlich {{jsxref("Infinity")}} und {{jsxref("NaN")}}, werden nicht gesetzt, und `globalAlpha` behält seinen vorherigen Wert.

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

### Überlagerung transparenter Formen

Dieses Beispiel veranschaulicht den Effekt der Überlagerung mehrerer transparenter Formen übereinander. Wir beginnen mit dem Zeichnen eines soliden Hintergrunds, der aus vier unterschiedlich farbigen Quadraten besteht. Anschließend setzen wir die `globalAlpha`-Eigenschaft auf `0.2` (20% undurchsichtig); dieser Alphawert wird auf alle unsere transparenten Formen angewendet. Danach verwenden wir eine `for`-Schleife, um eine Reihe von Kreisen mit zunehmenden Radien zu zeichnen.

Mit jedem neuen Kreis wird die Opazität der darunterliegenden vorhergehenden Kreise effektiv erhöht. Wenn wir die Schrittanzahl erhöhen (und somit mehr Kreise zeichnen), würde der Hintergrund schließlich vollständig aus der Bildmitte verschwinden.

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

- Ab Gecko 5.0 wirft das Spezifizieren ungültiger Werte für `globalAlpha` keinen `SYNTAX_ERR`-Ausnahmefehler mehr; diese werden jetzt korrekt stillschweigend ignoriert.

### WebKit/Blink-spezifische Hinweise

- In Browsern, die auf WebKit und Blink basieren, ist eine nicht standardisierte und veraltete Methode `ctx.setAlpha()` zusätzlich zu dieser Eigenschaft implementiert.

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
