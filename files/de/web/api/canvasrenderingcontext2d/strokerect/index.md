---
title: "CanvasRenderingContext2D: strokeRect()-Methode"
short-title: strokeRect()
slug: Web/API/CanvasRenderingContext2D/strokeRect
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.strokeRect()`**-Methode der Canvas 2D API zeichnet ein Rechteck, das gemäß dem aktuellen [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) und anderen Kontexteinstellungen umrandet ist.

Diese Methode zeichnet direkt auf die Leinwand, ohne den aktuellen Pfad zu ändern, sodass nachfolgende Aufrufe von [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) oder [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) keinen Einfluss darauf haben.

## Syntax

```js-nolint
strokeRect(x, y, width, height)
```

Die `strokeRect()`-Methode zeichnet ein umrandetes Rechteck, dessen Startpunkt sich bei `(x, y)` befindet und dessen Größe durch `width` und `height` angegeben ist.

### Parameter

- `x`
  - : Die x-Achsenkoordinate des Startpunkts des Rechtecks.
- `y`
  - : Die y-Achsenkoordinate des Startpunkts des Rechtecks.
- `width`
  - : Die Breite des Rechtecks. Positive Werte nach rechts, negative nach links.
- `height`
  - : Die Höhe des Rechtecks. Positive Werte nach unten, negative nach oben.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Ein einfaches umrandetes Rechteck

Dieses Beispiel zeichnet ein Rechteck mit einer grünen Umrandung mithilfe der `strokeRect()`-Methode.

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

Dieses Beispiel zeichnet ein Rechteck mit einem Schlagschatten und dicken, abgeschrägten Umrandungen.

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

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)
- [`CanvasRenderingContext2D.clearRect()`](/de/docs/Web/API/CanvasRenderingContext2D/clearRect)
- [`CanvasRenderingContext2D.fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect)
