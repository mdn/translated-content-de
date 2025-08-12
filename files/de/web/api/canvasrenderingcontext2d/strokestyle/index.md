---
title: "CanvasRenderingContext2D: strokeStyle-Eigenschaft"
short-title: strokeStyle
slug: Web/API/CanvasRenderingContext2D/strokeStyle
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef}}

Die **`CanvasRenderingContext2D.strokeStyle`**-Eigenschaft der
Canvas 2D API gibt die Farbe, den Verlauf oder das Muster an, das für die Konturen
von Formen verwendet werden soll. Der Standardwert ist `black`.

> [!NOTE]
> Weitere Beispiele für Strich- und Füllstile finden Sie unter [Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) im [Canvas-Leitfaden](/de/docs/Web/API/Canvas_API/Tutorial).

## Wert

Einer der folgenden:

- `color`
  - : Ein Zeichenfolge, die als [CSS](/de/docs/Web/CSS)
    {{cssxref("&lt;color&gt;")}}-Wert interpretiert wird.
- `gradient`
  - : Ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt (ein linearer oder radialer Verlauf).
- `pattern`
  - : Ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt (ein sich wiederholendes Bild).

## Beispiele

### Ändern der Strichfarbe einer Form

Dieses Beispiel wendet eine blaue Strichfarbe auf ein Rechteck an.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "blue";
ctx.strokeRect(10, 10, 100, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Changing_the_stroke_color_of_a_shape', 700, 160) }}

### Erstellen mehrerer Strichfarben mit Schleifen

In diesem Beispiel verwenden wir zwei `for`-Schleifen und die Methode
[`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc), um ein Gitter aus Kreisen zu zeichnen,
die jeweils eine andere Strichfarbe haben. Um dies zu erreichen, verwenden wir die zwei Variablen
`i` und `j`, um eine einzigartige RGB-Farbe für jeden Kreis zu erzeugen und
ändern nur die grünen und blauen Werte. (Der Rotkanal hat einen festen Wert.)

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const ctx = document.getElementById("canvas").getContext("2d");

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx.strokeStyle = `rgb(
        0
        ${Math.floor(255 - 42.5 * i)}
        ${Math.floor(255 - 42.5 * j)})`;
    ctx.beginPath();
    ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
    ctx.stroke();
  }
}
```

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Creating_multiple_stroke_colors_using_loops", "", "180")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### WebKit/Blink-spezifische Anmerkung

In Browsern auf Basis von WebKit und Blink ist die nicht standardisierte und veraltete Methode
`ctx.setStrokeColor()` zusätzlich zu dieser Eigenschaft implementiert.

```js
setStrokeColor(color);
setStrokeColor(color, alpha);
setStrokeColor(grayLevel);
setStrokeColor(grayLevel, alpha);
setStrokeColor(r, g, b, a);
setStrokeColor(c, m, y, k, a);
```

## Siehe auch

- Die Schnittstelle, die diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)
- [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)
