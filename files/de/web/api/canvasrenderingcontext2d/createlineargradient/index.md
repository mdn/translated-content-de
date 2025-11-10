---
title: "CanvasRenderingContext2D: createLinearGradient() Methode"
short-title: createLinearGradient()
slug: Web/API/CanvasRenderingContext2D/createLinearGradient
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die Methode **`CanvasRenderingContext2D.createLinearGradient()`** des Canvas 2D API erstellt einen Verlauf entlang der Linie, die zwei gegebene Koordinaten verbindet.

![Der Verlauf ändert die Farben entlang der Verlaufsline, beginnend am Punkt x0, y0 und gehend bis x1, y1, auch wenn diese Punkte die Verlaufsline über die Kanten des Elements hinaus verlängern, auf dem der Verlauf gezeichnet wird.](mdn-canvas-lineargradient.png)

Diese Methode gibt einen linearen [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) zurück. Um auf eine Form angewendet zu werden, muss der Verlauf zunächst den Eigenschaften [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) oder [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) zugewiesen werden.

> [!NOTE]
> Verlaufskoordinaten sind global, d.h. relativ zum aktuellen Koordinatenraum. Wenn sie auf eine Form angewendet werden, sind die Koordinaten NICHT relativ zu den Koordinaten der Form.

## Syntax

```js-nolint
createLinearGradient(x0, y0, x1, y1)
```

Die Methode `createLinearGradient()` wird durch vier Parameter spezifiziert, die die Start- und Endpunkte der Verlaufsline definieren.

### Parameter

- `x0`
  - : Die x-Achsen-Koordinate des Startpunkts.
- `y0`
  - : Die y-Achsen-Koordinate des Startpunkts.
- `x1`
  - : Die x-Achsen-Koordinate des Endpunkts.
- `y1`
  - : Die y-Achsen-Koordinate des Endpunkts.

### Rückgabewert

Ein linearer [`CanvasGradient`](/de/docs/Web/API/CanvasGradient), initialisiert mit der angegebenen Linie.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nicht-endliche Werte als Parameter übergeben werden.

## Beispiele

### Füllen eines Rechtecks mit einem linearen Verlauf

In diesem Beispiel wird ein linearer Verlauf mit der Methode `createLinearGradient()` initialisiert. Drei Farbstopps zwischen den Start- und Endpunkten des Verlaufs werden dann erstellt. Schließlich wird der Verlauf dem Canvas-Kontext zugewiesen und als gefülltes Rechteck gerendert.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create a linear gradient
// The start gradient point is at x=20, y=0
// The end gradient point is at x=220, y=0
const gradient = ctx.createLinearGradient(20, 0, 220, 0);

// Add three color stops
gradient.addColorStop(0, "green");
gradient.addColorStop(0.5, "cyan");
gradient.addColorStop(1, "green");

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 200, 100);
```

#### Ergebnis

{{ EmbedLiveSample('Filling_a_rectangle_with_a_linear_gradient', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.createRadialGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createRadialGradient)
- [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
