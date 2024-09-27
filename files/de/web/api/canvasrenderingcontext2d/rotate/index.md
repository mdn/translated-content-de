---
title: "CanvasRenderingContext2D: rotate()-Methode"
short-title: rotate()
slug: Web/API/CanvasRenderingContext2D/rotate
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Die **`CanvasRenderingContext2D.rotate()`**-Methode der Canvas 2D API fügt der Transformationsmatrix eine Rotation hinzu.

## Syntax

```js-nolint
rotate(angle)
```

![Rechteckiges Koordinatensystem mit der Drehung der Abszissenachse um den Alpha-Winkel](canvas_grid_rotate.png)

### Parameter

- `angle`
  - : Der Rotationswinkel, im Uhrzeigersinn in Bogenmaß. Sie können `degree * Math.PI / 180` verwenden, um ein Gradmaß in ein Bogenmaß umzuwandeln.

Der Rotationsmittelpunkt ist immer der Ursprung der Leinwand. Um den Mittelpunkt zu ändern, müssen Sie die Leinwand mit der [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate)-Methode verschieben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Drehen einer Form

In diesem Beispiel wird ein Rechteck um 45° gedreht. Beachten Sie, dass der Drehpunkt die obere linke Ecke der Leinwand ist und nicht ein Punkt relativ zu irgendeiner Form.

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

Der Drehpunkt ist blau. Das nicht gedrehte Rechteck ist grau, und das gedrehte Rechteck ist rot.

{{ EmbedLiveSample('Rotating_a_shape', 700, 180) }}

### Drehen einer Form um ihren Mittelpunkt

Dieses Beispiel dreht eine Form um ihren Mittelpunkt. Dazu werden die folgenden Schritte auf die Matrix angewendet:

1. Zuerst verschiebt [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate) den Ursprung der Matrix zum Mittelpunkt der Form.
2. `rotate()` dreht die Matrix um den gewünschten Betrag.
3. Schließlich verschiebt `translate()` den Ursprung der Matrix zurück an den Ausgangspunkt. Dies geschieht, indem die Koordinaten des Mittelpunkts der Form in negativer Richtung angewendet werden.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Form ist ein Rechteck mit seiner Ecke bei (80, 60), einer Breite von 140 und einer Höhe von 30. Sein horizontaler Mittelpunkt liegt bei (80 + 140 / 2), also 150. Sein vertikaler Mittelpunkt liegt bei (60 + 30 / 2), also 75. Somit befindet sich der Mittelpunkt bei (150, 75).

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

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
