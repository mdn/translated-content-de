---
title: "CanvasRenderingContext2D: rotate()-Methode"
short-title: rotate()
slug: Web/API/CanvasRenderingContext2D/rotate
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.rotate()`**-Methode der Canvas 2D-API fügt der Transformationsmatrix eine Rotation hinzu.

## Syntax

```js-nolint
rotate(angle)
```

![Rechtwinkliges Koordinatensystem mit Drehung der Abszissenachse um den Alpha-Winkel](canvas_grid_rotate.png)

### Parameter

- `angle`
  - : Der Rotationswinkel, im Uhrzeigersinn und in Bogenmaß. Sie können `degree * Math.PI / 180` verwenden, um ein Grad in ein Bogenmaß umzuwandeln.

Der Rotationsmittelpunkt ist immer der Ursprung des Canvas. Um den Mittelpunkt zu ändern, müssen Sie das Canvas mit der [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)-Methode verschieben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Rotation einer Form

Dieses Beispiel dreht ein Rechteck um 45°. Beachten Sie, dass der Mittelpunkt der Drehung die obere linke Ecke des Canvas ist und nicht relativ zu einer beliebigen Form ist.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Point of transform origin
ctx.arc(0, 0, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

// Non-rotated rectangle
ctx.fillStyle = "gray";
ctx.fillRect(100, 0, 80, 20);

// Rotated rectangle
ctx.rotate((45 * Math.PI) / 180);
ctx.fillStyle = "red";
ctx.fillRect(100, 0, 80, 20);

// Reset transformation matrix to the identity matrix
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

#### Ergebnis

Der Drehmittelpunkt ist blau. Das nicht gedrehte Rechteck ist grau, und das gedrehte Rechteck ist rot.

{{ EmbedLiveSample('Rotating_a_shape', 700, 180) }}

### Rotation einer Form um ihren Mittelpunkt

Dieses Beispiel dreht eine Form um ihren Mittelpunkt. Hierfür werden die folgenden Schritte auf die Matrix angewendet:

1. Zuerst verschiebt [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate) den Ursprung der Matrix zum Mittelpunkt der Form.
2. `rotate()` dreht die Matrix um den gewünschten Betrag.
3. Schließlich verschiebt `translate()` den Ursprung der Matrix zurück zum Ausgangspunkt. Dies geschieht durch Anwenden der Werte der Mittelpunktskoordinaten der Form in negativer Richtung.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Form ist ein Rechteck mit einer Ecke bei (80, 60), einer Breite von 140 und einer Höhe von 30. Ihr horizontaler Mittelpunkt ist bei (80 + 140 / 2), also 150. Ihr vertikaler Mittelpunkt ist bei (60 + 30 / 2), also 75. Somit ist der Mittelpunkt bei (150, 75).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Non-rotated rectangle
ctx.fillStyle = "gray";
ctx.fillRect(80, 60, 140, 30);

// Matrix transformation
ctx.translate(150, 75);
ctx.rotate(Math.PI / 2);
ctx.translate(-150, -75);

// Rotated rectangle
ctx.fillStyle = "red";
ctx.fillRect(80, 60, 140, 30);
```

#### Ergebnis

Das nicht gedrehte Rechteck ist grau, und das gedrehte Rechteck ist rot.

{{ EmbedLiveSample('Rotating_a_shape_around_its_center', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
