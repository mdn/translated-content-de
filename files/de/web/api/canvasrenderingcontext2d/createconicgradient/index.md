---
title: "CanvasRenderingContext2D: createConicGradient() Methode"
short-title: createConicGradient()
slug: Web/API/CanvasRenderingContext2D/createConicGradient
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.createConicGradient()`** Methode der Canvas 2D API erzeugt einen Gradienten um einen Punkt mit gegebenen Koordinaten.

Diese Methode gibt einen kegelförmigen [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) zurück. Um auf eine Form angewendet zu werden, muss der Gradient zuerst den Eigenschaften [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) oder [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) zugewiesen werden.

> [!NOTE]
> Gradientkoordinaten sind global, d.h. relativ zum aktuellen Koordinatensystem. Wenn sie auf eine Form angewendet werden, sind die Koordinaten NICHT relativ zu den Koordinaten der Form.

## Syntax

```js-nolint
createConicGradient(startAngle, x, y)
```

### Parameter

- `startAngle`
  - : Der Winkel, bei dem der Gradient beginnt, in Bogenmaß. Der Winkel startet von einer Linie, die horizontal nach rechts vom Zentrum verläuft, und bewegt sich im Uhrzeigersinn.
- `x`
  - : Die x-Achsenkoordinate des Zentrums des Gradienten.
- `y`
  - : Die y-Achsenkoordinate des Zentrums des Gradienten.

### Rückgabewert

- [`CanvasGradient`](/de/docs/Web/API/CanvasGradient)
  - : Ein kegelförmiger `CanvasGradient`.

## Beispiele

### Füllen eines Rechtecks mit einem kegelförmigen Gradient

Dieses Beispiel initialisiert einen kegelförmigen Gradient mit der `createConicGradient()` Methode. Fünf Farbstufen um die Zentrumskoordinate werden dann erstellt. Schließlich wird der Gradient dem Canvas-Kontext zugewiesen und in ein gefülltes Rechteck gerendert.

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

#### Rechteckergebnis

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
