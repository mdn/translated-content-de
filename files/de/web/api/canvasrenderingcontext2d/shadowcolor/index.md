---
title: "CanvasRenderingContext2D: shadowColor Eigenschaft"
short-title: shadowColor
slug: Web/API/CanvasRenderingContext2D/shadowColor
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.shadowColor`** Eigenschaft der Canvas 2D API gibt die Farbe von Schatten an.

Beachten Sie, dass die Opazität des Schattens durch die Opazität der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) Farbe beim Füllen und der [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) Farbe beim Umranden beeinflusst wird.

> [!NOTE]
> Schatten werden nur gezeichnet, wenn die `shadowColor` Eigenschaft auf einen nicht-transparenten Wert gesetzt ist. Eines der [`shadowBlur`](/de/docs/Web/API/CanvasRenderingContext2D/shadowBlur), [`shadowOffsetX`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX) oder [`shadowOffsetY`](/de/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY) Eigenschaften muss ebenfalls ungleich null sein.

## Wert

Ein String, der als [CSS](/de/docs/Web/CSS) {{cssxref("&lt;color&gt;")}} Wert geparst wird. Der Standardwert ist vollständig transparentes Schwarz.

## Beispiele

### Hinzufügen eines Schattens zu Formen

Dieses Beispiel fügt einem gefüllten und einem umrandeten Quadrat einen Schatten hinzu. Die `shadowColor` Eigenschaft setzt die Farbe des Schattens, während `shadowOffsetX` und `shadowOffsetY` deren Position relativ zu den Formen bestimmen.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Shadow
ctx.shadowColor = "red";
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10;

// Filled rectangle
ctx.fillRect(20, 20, 100, 100);

// Stroked rectangle
ctx.lineWidth = 6;
ctx.strokeRect(170, 20, 100, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Adding_a_shadow_to_shapes', 700, 180) }}

### Schatten auf durchsichtigen Formen

Die Opazität eines Schattens wird durch das Transparenzlevel seines übergeordneten Objekts beeinflusst (selbst wenn `shadowColor` einen vollständig undurchsichtigen Wert angibt). Dieses Beispiel umrandet und füllt ein Rechteck mit durchsichtigen Farben.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Der resultierende Alphawert des Füllschattens ist `.8 * .2`, also `.16`. Das Alpha des Umrandungsschattens ist `.8 * .6`, also `.48`.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Shadow
ctx.shadowColor = "rgb(255 0 0 / 80%)";
ctx.shadowBlur = 8;
ctx.shadowOffsetX = 30;
ctx.shadowOffsetY = 20;

// Filled rectangle
ctx.fillStyle = "rgb(0 255 0 / 20%)";
ctx.fillRect(10, 10, 150, 100);

// Stroked rectangle
ctx.lineWidth = 10;
ctx.strokeStyle = "rgb(0 0 255 / 60%)";
ctx.strokeRect(10, 10, 150, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Shadows_on_translucent_shapes', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### WebKit/Blink-spezifische Hinweise

In WebKit- und Blink-basierten Browsern ist zusätzlich zu dieser Eigenschaft die nicht standardisierte und veraltete Methode `ctx.setShadow()` implementiert.

```js
setShadow(width, height, blur, color, alpha);
setShadow(width, height, blur, graylevel, alpha);
setShadow(width, height, blur, r, g, b, a);
setShadow(width, height, blur, c, m, y, k, a);
```

## Siehe auch

- Das Interface, das diese Eigenschaft definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
