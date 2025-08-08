---
title: "CanvasRenderingContext2D: globalAlpha Eigenschaft"
short-title: globalAlpha
slug: Web/API/CanvasRenderingContext2D/globalAlpha
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{APIRef}}

Die **`CanvasRenderingContext2D.globalAlpha`** Eigenschaft der Canvas 2D API legt den Alpha-Wert (Transparenz) fest, der auf Formen und Bilder angewendet wird, bevor sie auf die Leinwand gezeichnet werden.

> [!NOTE]
> Siehe auch das Kapitel [Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) im [Canvas Leitfaden](/de/docs/Web/API/Canvas_API/Tutorial).

## Wert

Eine Zahl zwischen `0.0` (vollständig transparent) und `1.0` (vollständig undurchsichtig), eingeschlossen. Der Standardwert ist `1.0`. Werte außerhalb dieses Bereichs, einschließlich {{jsxref("Infinity")}} und {{jsxref("NaN")}}, werden nicht gesetzt, und `globalAlpha` behält seinen vorherigen Wert bei.

## Beispiele

### Zeichnen von durchscheinenden Formen

Dieses Beispiel verwendet die `globalAlpha` Eigenschaft, um zwei halbtransparente
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

### Überlagern von transparenten Formen

Dieses Beispiel veranschaulicht den Effekt der Überlagerung mehrerer transparenter Formen aufeinander. Wir beginnen, indem wir einen soliden Hintergrund aus vier unterschiedlich gefärbten Quadraten zeichnen. Danach setzen wir die `globalAlpha` Eigenschaft auf `0.2` (20% undurchsichtig); dieses Alpha-Niveau wird auf alle unsere transparenten Formen angewendet. Danach verwenden wir eine `for` Schleife, um eine Serie von Kreisen mit zunehmendem Radius zu zeichnen.

Mit jedem neuen Kreis wird die Opazität der darunter liegenden Kreise effektiv erhöht. Wenn wir die Schrittanzahl erhöhen (und somit mehr Kreise zeichnen), würde der Hintergrund schließlich vollständig aus der Mitte des Bildes verschwinden.

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

### Gecko-spezifische Notizen

- Ab Gecko 5.0 führen ungültige Werte für `globalAlpha` nicht mehr zu einer `SYNTAX_ERR` Ausnahme; diese werden nun korrekt stillschweigend ignoriert.

### WebKit/Blink-spezifische Notizen

- In Browsern, die auf WebKit und Blink basieren, wird zusätzlich zu dieser Eigenschaft eine nicht standardisierte und veraltete Methode `ctx.setAlpha()` implementiert.

## Siehe auch

- Die Schnittstelle, die diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.globalCompositeOperation`](/de/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
