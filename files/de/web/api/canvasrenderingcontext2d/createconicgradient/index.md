---
title: "CanvasRenderingContext2D: createConicGradient() Methode"
short-title: createConicGradient()
slug: Web/API/CanvasRenderingContext2D/createConicGradient
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.createConicGradient()`**-Methode der Canvas 2D API erstellt einen Farbverlauf um einen Punkt mit angegebenen Koordinaten.

Diese Methode gibt einen konischen [`CanvasGradient`](/de/docs/Web/API/CanvasGradient) zurück. Um auf eine Form angewendet zu werden, muss der Farbverlauf zunächst der [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle)- oder [`strokeStyle`](/de/docs/Web/API/CanvasRenderingContext2D/strokeStyle)-Eigenschaft zugewiesen werden.

> [!NOTE]
> Die Farbverlaufkoordinaten sind global, d.h. relativ zum aktuellen Koordinatensystem. Bei Anwendung auf eine Form sind die Koordinaten NICHT relativ zu den Koordinaten der Form.

## Syntax

```js-nolint
createConicGradient(startAngle, x, y)
```

### Parameter

- `startAngle`
  - : Der Winkel, bei dem der Farbverlauf beginnt, in Radiant. Der Winkel startet von einer Linie, die horizontal nach rechts vom Mittelpunkt verläuft und im Uhrzeigersinn fortschreitet.
- `x`
  - : Die x-Achsen-Koordinate des Mittelpunkts des Farbverlaufs.
- `y`
  - : Die y-Achsen-Koordinate des Mittelpunkts des Farbverlaufs.

### Rückgabewert

Ein konischer [`CanvasGradient`](/de/docs/Web/API/CanvasGradient).

## Beispiele

### Ein Rechteck mit einem konischen Farbverlauf füllen

Dieses Beispiel initialisiert einen konischen Farbverlauf mit der `createConicGradient()`-Methode. Es werden fünf Farbverlaufspunkte um die Koordinaten des Zentrums erzeugt. Schließlich wird der Farbverlauf dem Canvas-Kontext zugewiesen und auf ein gefülltes Rechteck gerendert.

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
