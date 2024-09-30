---
title: "CanvasRenderingContext2D: Methode rotate()"
short-title: rotate()
slug: Web/API/CanvasRenderingContext2D/rotate
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die Methode **`CanvasRenderingContext2D.rotate()`** der Canvas 2D API fügt der Transformationsmatrix eine Rotation hinzu.

## Syntax

```js-nolint
rotate(angle)
```

![Rektanguläres Koordinatensystem mit der Drehung der Abszissenachse um den Alpha-Winkel](canvas_grid_rotate.png)

### Parameter

- `angle`
  - : Der Drehwinkel, im Uhrzeigersinn in Radiant. Sie können `degree * Math.PI / 180` verwenden, um einen Radiant aus einem Grad zu berechnen.

Der Rotationsmittelpunkt ist immer der Ursprung des Canvas. Um den Mittelpunkt zu ändern, müssen Sie das Canvas mithilfe der [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate) Methode verschieben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Eine Form drehen

Dieses Beispiel dreht ein Rechteck um 45°. Beachten Sie, dass sich das Drehzentrum am oberen linken Rand des Canvas befindet und nicht relativ zu irgendeiner Form.

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

### Eine Form um ihr Zentrum drehen

Dieses Beispiel dreht eine Form um ihren Mittelpunkt. Dazu werden folgende Schritte auf die Matrix angewandt:

1. Zuerst bewegt [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate) den Ursprung der Matrix zum Mittelpunkt der Form.
2. `rotate()` dreht die Matrix um den gewünschten Betrag.
3. Schließlich bewegt `translate()` den Ursprung der Matrix zurück zu seinem Ausgangspunkt. Dies geschieht, indem die Werte der Koordinaten des Mittelpunktes der Form in einer negativen Richtung angewendet werden.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Form ist ein Rechteck mit seiner Ecke bei (80, 60), einer Breite von 140 und einer Höhe von 30. Sein horizontaler Mittelpunkt ist bei (80 + 140 / 2), also 150. Sein vertikaler Mittelpunkt ist bei (60 + 30 / 2), also 75. Somit befindet sich der Mittelpunkt bei (150, 75).

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
