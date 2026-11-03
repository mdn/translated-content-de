---
title: "CanvasRenderingContext2D: Methode rotate()"
short-title: rotate()
slug: Web/API/CanvasRenderingContext2D/rotate
l10n:
  sourceCommit: e874c91a572640824bb4cd8e8ab5b6111fd04661
---

{{APIRef("Canvas API")}}

Die Methode **`CanvasRenderingContext2D.rotate()`** der Canvas 2D API fügt der Transformationsmatrix eine Drehung hinzu.

## Syntax

```js-nolint
rotate(angle)
```

![Rechteckiges Koordinatensystem, dessen Abszissenachse um einen Winkel gedreht ist](canvas_grid_rotate.svg)

### Parameter

- `angle`
  - : Der Drehwinkel im Uhrzeigersinn, angegeben im Bogenmaß. Mit `degree * Math.PI / 180` können Sie einen Winkel von Grad in Bogenmaß umrechnen.

Der Drehpunkt ist immer der Ursprung des Canvas. Um den Drehpunkt zu ändern, müssen Sie den Canvas mit der Methode [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate) verschieben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Eine Form drehen

Dieses Beispiel dreht ein Rechteck um 45°. Beachten Sie, dass der Drehpunkt die obere linke Ecke des Canvas ist und keine Position relativ zu einer Form.

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

Der Drehpunkt ist blau. Das nicht gedrehte Rechteck ist grau und das gedrehte Rechteck rot.

{{ EmbedLiveSample('Rotating_a_shape', 700, 180) }}

### Eine Form um ihren Mittelpunkt drehen

Dieses Beispiel dreht eine Form um ihren Mittelpunkt. Dazu werden die folgenden Schritte auf die Matrix angewendet:

1. Zuerst verschiebt [`translate()`](/de/docs/Web/API/CanvasRenderingContext2D/translate) den Ursprung der Matrix zum Mittelpunkt der Form.
2. `rotate()` dreht die Matrix um den gewünschten Winkel.
3. Schließlich verschiebt `translate()` den Ursprung der Matrix zurück an seinen Ausgangspunkt. Dazu werden die Koordinatenwerte des Mittelpunkts der Form mit negativem Vorzeichen verwendet.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Form ist ein Rechteck mit einer Ecke bei (80, 60), einer Breite von 140 und einer Höhe von 30. Sein horizontaler Mittelpunkt liegt bei (80 + 140 / 2), also 150. Sein vertikaler Mittelpunkt liegt bei (60 + 30 / 2\), also 75. Der Mittelpunkt liegt somit bei (150, 75).

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

Das nicht gedrehte Rechteck ist grau und das gedrehte Rechteck rot.

{{ EmbedLiveSample('Rotating_a_shape_around_its_center', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
