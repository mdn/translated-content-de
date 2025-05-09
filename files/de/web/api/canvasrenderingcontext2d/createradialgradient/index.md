---
title: "CanvasRenderingContext2D: createRadialGradient()-Methode"
short-title: createRadialGradient()
slug: Web/API/CanvasRenderingContext2D/createRadialGradient
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.createRadialGradient()`**
Methode der Canvas 2D API erstellt einen radialen Verlauf mithilfe der Größe und Koordinaten zweier Kreise.

Diese Methode gibt ein [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) zurück. Um auf eine Form angewendet zu werden, muss der
Verlauf zuerst den Eigenschaften [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) oder [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle) zugewiesen werden.

> [!NOTE]
> Verlaufkoordinaten sind global, d.h. relativ zum aktuellen
> Koordinatenraum. Wenn sie auf eine Form angewendet werden, sind die Koordinaten NICHT relativ zu den
> Koordinaten der Form.

## Syntax

```js-nolint
createRadialGradient(x0, y0, r0, x1, y1, r1)
```

Die `createRadialGradient()`-Methode wird durch sechs Parameter spezifiziert, wobei drei den Startkreis des Verlaufs und drei den Endkreis definieren.

### Parameter

- `x0`
  - : Die x-Achsen-Koordinate des Startkreises.
- `y0`
  - : Die y-Achsen-Koordinate des Startkreises.
- `r0`
  - : Der Radius des Startkreises. Muss nicht negativ und endlich sein.
- `x1`
  - : Die x-Achsen-Koordinate des Endkreises.
- `y1`
  - : Die y-Achsen-Koordinate des Endkreises.
- `r1`
  - : Der Radius des Endkreises. Muss nicht negativ und endlich sein.

### Rückgabewert

Ein radialer [`CanvasGradient`](/de/docs/Web/API/CanvasGradient), initialisiert mit den zwei angegebenen Kreisen.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn nicht endliche Werte als Parameter übergeben werden.
- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein negativer Radius als Parameter übergeben wird.

## Beispiele

### Füllen eines Rechtecks mit einem radialen Verlauf

Dieses Beispiel initialisiert einen radialen Verlauf mithilfe der
`createRadialGradient()`-Methode. Danach werden drei Farbstopps zwischen den beiden
Kreisen des Verlaufs erstellt. Schließlich wird der Verlauf dem Canvas-Kontext zugewiesen und
als gefülltes Rechteck dargestellt.

#### HTML

```html
<canvas id="canvas" width="200" height="200"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create a radial gradient
// The inner circle is at x=110, y=90, with radius=30
// The outer circle is at x=100, y=100, with radius=70
const gradient = ctx.createRadialGradient(110, 90, 30, 100, 100, 70);

// Add three color stops
gradient.addColorStop(0, "pink");
gradient.addColorStop(0.9, "white");
gradient.addColorStop(1, "green");

// Set the fill style and draw a rectangle
ctx.fillStyle = gradient;
ctx.fillRect(20, 20, 160, 160);
```

#### Ergebnis

{{ EmbedLiveSample('Filling_a_rectangle_with_a_radial_gradient', 700, 240) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.createLinearGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createLinearGradient)
- [`CanvasRenderingContext2D.createConicGradient()`](/de/docs/Web/API/CanvasRenderingContext2D/createConicGradient)
