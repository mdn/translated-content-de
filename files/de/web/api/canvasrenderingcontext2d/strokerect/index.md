---
title: "CanvasRenderingContext2D: strokeRect() Methode"
short-title: strokeRect()
slug: Web/API/CanvasRenderingContext2D/strokeRect
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.strokeRect()`**
Methode der Canvas 2D API zeichnet ein Rechteck, das entsprechend dem aktuellen [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) und anderen
Kontexteinstellungen umrandet (gestrokt) ist.

Diese Methode zeichnet direkt auf das Canvas, ohne den aktuellen Pfad zu ändern. Daher haben nachfolgende Aufrufe von [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) oder
[`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) keinen Einfluss darauf.

## Syntax

```js-nolint
strokeRect(x, y, width, height)
```

Die `strokeRect()`-Methode zeichnet ein gestroktes Rechteck, dessen Startpunkt bei `(x, y)` liegt und dessen Größe durch `width` und `height` angegeben ist.

### Parameter

- `x`
  - : Die x-Achsen-Koordinate des Startpunkts des Rechtecks.
- `y`
  - : Die y-Achsen-Koordinate des Startpunkts des Rechtecks.
- `width`
  - : Die Breite des Rechtecks. Positive Werte sind nach rechts, negative nach links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte sind nach unten, negative nach oben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Ein einfaches gestroktes Rechteck

Dieses Beispiel zeichnet ein Rechteck mit einem grünen Umriss mithilfe der `strokeRect()`-Methode.

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

### Anwendung verschiedener Kontexteinstellungen

Dieses Beispiel zeichnet ein Rechteck mit einem Schlagschatten und dicken, abgeschrägten Umrissen.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.shadowColor = "#dd5533";
ctx.shadowBlur = 20;
ctx.lineJoin = "bevel";
ctx.lineWidth = 15;
ctx.strokeStyle = "#3388ff";
ctx.strokeRect(30, 30, 160, 90);
```

#### Ergebnis

{{ EmbedLiveSample('Applying_various_context_settings', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
