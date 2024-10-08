---
title: "CanvasRenderingContext2D: fillStyle-Eigenschaft"
short-title: fillStyle
slug: Web/API/CanvasRenderingContext2D/fillStyle
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.fillStyle`**-Eigenschaft der [Canvas 2D API](/de/docs/Web/API/Canvas_API) bestimmt die Farbe, den Verlauf oder das Muster, das innerhalb von Formen verwendet werden soll. Der Standardstil ist `#000` (schwarz).

> [!NOTE]
> Weitere Beispiele für Fill- und Stroke-Stile finden Sie unter [Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Wert

Einer der folgenden:

- Ein String, der als CSS {{cssxref("&lt;color&gt;")}}-Wert geparst wird.
- Ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt (ein linearer oder radialer Verlauf).
- Ein [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt (ein sich wiederholendes Bild).

## Beispiele

### Ändern der Füllfarbe einer Form

Dieses Beispiel wendet eine blaue Füllfarbe auf ein Rechteck an.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Changing_the_fill_color_of_a_shape', 700, 160) }}

### Erstellen mehrerer Füllfarben mit Schleifen

In diesem Beispiel verwenden wir zwei `for`-Schleifen, um ein Raster von Rechtecken zu zeichnen, die jeweils eine unterschiedliche Füllfarbe haben. Um dies zu erreichen, verwenden wir die zwei Variablen `i` und `j`, um eine eindeutige RGB-Farbe für jedes Quadrat zu generieren und ändern dabei nur die roten und grünen Werte. (Der Blaukanal hat einen festen Wert.) Durch das Modifizieren der Kanäle können Sie alle Arten von Paletten erstellen.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 6; j++) {
    ctx.fillStyle = `rgb(
        ${Math.floor(255 - 42.5 * i)}
        ${Math.floor(255 - 42.5 * j)}
        0)`;
    ctx.fillRect(j * 25, i * 25, 25, 25);
  }
}
```

Das Ergebnis sieht folgendermaßen aus:

{{EmbedLiveSample("Creating_multiple_fill_colors_using_loops", "", "160")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### WebKit-/Blink-spezifische Anmerkung

In WebKit- und Blink-basierten Browsern wird die nicht standardisierte und veraltete Methode `ctx.setFillColor()` zusätzlich zu dieser Eigenschaft implementiert.

```js
setFillColor(color, /* (optional) */ alpha);
setFillColor(grayLevel, /* (optional) */ alpha);
setFillColor(r, g, b, a);
setFillColor(c, m, y, k, a);
```

## Siehe auch

- [Canvas API](/de/docs/Web/API/Canvas_API)
- Die Schnittstelle, die diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- Werte, die von dieser Eigenschaft verwendet werden:

  - {{cssxref("&lt;color&gt;")}} CSS-Datentyp
  - [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)-Objekt
  - [`CanvasPattern`](/de/docs/Web/API/CanvasPattern)-Objekt
