---
title: "CanvasRenderingContext2D: Methode createLinearGradient()"
short-title: createLinearGradient()
slug: Web/API/CanvasRenderingContext2D/createLinearGradient
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die Methode
**`CanvasRenderingContext2D.createLinearGradient()`**
der Canvas 2D API erstellt einen Farbverlauf entlang der Linie, die zwei gegebene Koordinaten verbindet.

![Der Farbverlauf wechselt die Farben entlang der Verlaufslinie, beginnend bei Punkt x0, y0 und bis zu x1, y1, auch wenn diese Punkte die Verlaufslinie über die Ränder des Elements hinaus erweitern, auf dem der Farbverlauf gezeichnet wird.](mdn-canvas-lineargradient.png)

Diese Methode gibt einen linearen [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) zurück. Um auf eine Form angewendet zu werden, muss der Farbverlauf zuerst den Eigenschaften [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) oder [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) zugewiesen werden.

> [!NOTE]
> Farbverlaufskoordinaten sind global, d.h. relativ zum aktuellen Koordinatenraum. Wenn sie auf eine Form angewendet werden, sind die Koordinaten NICHT relativ zu den Koordinaten der Form.

## Syntax

```js-nolint
createLinearGradient(x0, y0, x1, y1)
```

Die Methode `createLinearGradient()` wird mit vier Parametern spezifiziert, die die Start- und Endpunkte der Verlaufslinie definieren.

### Parameter

- `x0`
  - : Die x-Achsen-Koordinate des Startpunktes.
- `y0`
  - : Die y-Achsen-Koordinate des Startpunktes.
- `x1`
  - : Die x-Achsen-Koordinate des Endpunktes.
- `y1`
  - : Die y-Achsen-Koordinate des Endpunktes.

### Rückgabewert

Ein linearer [`CanvasGradient`](/de/docs/Web/API/CanvasGradient), der mit der angegebenen Linie initialisiert wurde.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nicht endliche Werte als Parameter übergeben werden.

## Beispiele

### Ein Rechteck mit einem linearen Farbverlauf füllen

Dieses Beispiel initialisiert einen linearen Farbverlauf mit der Methode `createLinearGradient()`. Drei Farbstopps zwischen den Start- und Endpunkten des Gradienten werden dann erstellt. Schließlich wird der Farbverlauf dem Canvas-Kontext zugewiesen und ein gefülltes Rechteck wird gerendert.

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
