---
title: "CanvasRenderingContext2D: strokeStyle-Eigenschaft"
short-title: strokeStyle
slug: Web/API/CanvasRenderingContext2D/strokeStyle
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.strokeStyle`**-Eigenschaft der Canvas 2D API gibt die Farbe, den Verlauf oder das Muster an, das für die Umrandungen von Formen verwendet werden soll. Der Standardwert ist `#000` (schwarz).

> [!NOTE]
> Weitere Beispiele für Umrandungs- und Füllstile finden Sie unter [Anwenden von Stilen und Farben](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) im [Canvas-Tutorial](/de/docs/Web/API/Canvas_API/Tutorial).

## Wert

Einer der folgenden:

- `color`
  - : Ein als [CSS](/de/docs/Web/CSS) {{cssxref("&lt;color&gt;")}}-Wert interpretierter String.
- `gradient`
  - : Ein {{domxref("CanvasGradient")}}-Objekt (ein linearer oder radialer Verlauf).
- `pattern`
  - : Ein {{domxref("CanvasPattern")}}-Objekt (ein sich wiederholendes Bild).

## Beispiele

### Ändern der Umrandungsfarbe einer Form

Dieses Beispiel wendet eine blaue Umrandungsfarbe auf ein Rechteck an.

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

### Erstellen mehrerer Umrandungsfarben mit Schleifen

In diesem Beispiel verwenden wir zwei `for`-Schleifen und die {{domxref("CanvasRenderingContext2D.arc", "arc()")}}-Methode, um ein Raster von Kreisen zu zeichnen, wobei jeder Kreis eine andere Umrandungsfarbe hat. Um dies zu erreichen, verwenden wir die beiden Variablen `i` und `j`, um eine eindeutige RGB-Farbe für jeden Kreis zu erzeugen, und ändern dabei nur die grünen und blauen Werte. (Der rote Kanal hat einen festen Wert.)

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

In auf WebKit und Blink basierenden Browsern wird zusätzlich zu dieser Eigenschaft die nicht standardisierte und veraltete Methode `ctx.setStrokeColor()` implementiert.

```js
setStrokeColor(color);
setStrokeColor(color, alpha);
setStrokeColor(grayLevel);
setStrokeColor(grayLevel, alpha);
setStrokeColor(r, g, b, a);
setStrokeColor(c, m, y, k, a);
```

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
