---
title: "CanvasRenderingContext2D: Methode strokeRect()"
short-title: strokeRect()
slug: Web/API/CanvasRenderingContext2D/strokeRect
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.strokeRect()`**
Methode der Canvas 2D API zeichnet ein Rechteck, das entsprechend dem aktuellen {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} und anderen
Kontexteinstellungen umrandet (mit Linien versehen) wird.

Diese Methode zeichnet direkt auf die Leinwand, ohne den aktuellen Pfad zu ändern. Daher haben alle nachfolgenden {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} oder {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} Aufrufe keine Wirkung darauf.

## Syntax

```js-nolint
strokeRect(x, y, width, height)
```

Die `strokeRect()` Methode zeichnet ein umrandetes Rechteck, dessen Startpunkt bei `(x, y)` liegt und dessen Größe durch `width` und `height` angegeben wird.

### Parameter

- `x`
  - : Die x-Koordinate des Startpunkts des Rechtecks.
- `y`
  - : Die y-Koordinate des Startpunkts des Rechtecks.
- `width`
  - : Die Breite des Rechtecks. Positive Werte gehen nach rechts, negative nach links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte gehen nach unten, negative nach oben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Ein einfaches umrandetes Rechteck

Dieses Beispiel zeichnet ein Rechteck mit einem grünen Umriss mit der `strokeRect()`
Methode.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die obere linke Ecke des Rechtecks befindet sich bei (20, 10). Es hat eine Breite von 160 und eine Höhe von 100.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "green";
ctx.strokeRect(20, 10, 160, 100);
```

#### Ergebnis

{{ EmbedLiveSample('A_simple_stroked_rectangle', 700, 180) }}

### Verschiedene Kontexteinstellungen anwenden

Dieses Beispiel zeichnet ein Rechteck mit einem Schlagschatten und dicken, abgeschrägten Umrissen.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.shadowColor = "#d53";
ctx.shadowBlur = 20;
ctx.lineJoin = "bevel";
ctx.lineWidth = 15;
ctx.strokeStyle = "#38f";
ctx.strokeRect(30, 30, 160, 90);
```

#### Ergebnis

{{ EmbedLiveSample('Applying_various_context_settings', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
