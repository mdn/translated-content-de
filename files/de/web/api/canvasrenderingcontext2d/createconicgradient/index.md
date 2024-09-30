---
title: "CanvasRenderingContext2D: createConicGradient()-Methode"
short-title: createConicGradient()
slug: Web/API/CanvasRenderingContext2D/createConicGradient
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die **`CanvasRenderingContext2D.createConicGradient()`**-Methode der Canvas 2D API erstellt einen Gradienten um einen Punkt mit gegebenen Koordinaten.

Diese Methode gibt einen konischen [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) zurück. Um auf eine Form angewendet zu werden, muss der Gradienten zuerst den Eigenschaften [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) oder [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) zugewiesen werden.

> [!NOTE]
> Gradient-Koordinaten sind global, d.h. relativ zum aktuellen Koordinatenraum. Wenn sie auf eine Form angewendet werden, sind die Koordinaten NICHT relativ zu den Koordinaten der Form.

## Syntax

```js-nolint
createConicGradient(startAngle, x, y)
```

### Parameter

- `startAngle`
  - : Der Winkel, bei dem der Gradienten beginnen soll, in Radiant. Der Winkel beginnt bei einer Linie, die horizontal rechts vom Zentrum verläuft, und schreitet im Uhrzeigersinn voran.
- `x`
  - : Die x-Achsen-Koordinate des Zentrums des Gradienten.
- `y`
  - : Die y-Achsen-Koordinate des Zentrums des Gradienten.

### Rückgabewert

- [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)
  - : Ein konischer `CanvasGradient`.

## Beispiele

### Ein Rechteck mit einem konischen Gradienten füllen

Dieses Beispiel initialisiert einen konischen Gradienten mit der Methode `createConicGradient()`. Fünf Farbstopps um die Zentrumkoordinate werden dann erstellt. Schließlich wird der Gradient dem Canvas-Kontext zugewiesen und in ein gefülltes Rechteck gerendert.

#### HTML

```html
<canvas id="canvas" width="240" height="240"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create a conic gradient
// The start angle is 0
// The center position is 100, 100
const gradient = ctx.createConicGradient(0, 100, 100);

// Add five color stops
gradient.addColorStop(0, "red");
gradient.addColorStop(0.25, "orange");
gradient.addColorStop(0.5, "yellow");
gradient.addColorStop(0.75, "green");
gradient.addColorStop(1, "blue");

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 200);
```

#### Rechteck-Ergebnis

{{ EmbedLiveSample('Filling_a_rectangle_with_a_conic_gradient', 240, 240) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
