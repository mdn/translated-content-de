---
title: "CanvasRenderingContext2D: rotate() Methode"
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

![Rechteckiges Koordinatensystem mit der Drehung der Abszissenachse um den Winkel Alpha](canvas_grid_rotate.png)

### Parameter

- `angle`
  - : Der Drehwinkel im Uhrzeigersinn in Radianten. Sie können `degree * Math.PI / 180` verwenden, um einen Radianten aus einem Grad zu berechnen.

Der Drehmittelpunkt ist immer der Ursprung der Leinwand (canvas). Um den Mittelpunkt zu ändern, müssen Sie die Leinwand mit der {{domxref("CanvasRenderingContext2D.translate", "translate()")}} Methode verschieben.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Eine Form drehen

Dieses Beispiel dreht ein Rechteck um 45°. Beachten Sie, dass der Drehmittelpunkt die obere linke Ecke der Leinwand und nicht eine Position relativ zur Form ist.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Punkt des Transformationsursprungs
ctx.arc(0, 0, 5, 0, 2 * Math.PI);
ctx.fillStyle = "blue";
ctx.fill();

// Nicht-gedrehtes Rechteck
ctx.fillStyle = "gray";
ctx.fillRect(100, 0, 80, 20);

// Gedrehtes Rechteck
ctx.rotate((45 * Math.PI) / 180);
ctx.fillStyle = "red";
ctx.fillRect(100, 0, 80, 20);

// Transformationmatrix auf die Identitätsmatrix zurücksetzen
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

#### Ergebnis

Der Drehmittelpunkt ist blau. Das nicht-gedrehte Rechteck ist grau, und das gedrehte Rechteck ist rot.

{{ EmbedLiveSample('Rotating_a_shape', 700, 180) }}

### Eine Form um ihren Mittelpunkt drehen

Dieses Beispiel dreht eine Form um ihren Mittelpunkt. Dazu werden folgende Schritte auf die Matrix angewendet:

1. Zuerst verschiebt {{domxref("CanvasRenderingContext2D.translate()", "translate()")}} den Ursprung der Matrix zum Mittelpunkt der Form.
2. `rotate()` dreht die Matrix um den gewünschten Betrag.
3. Schließlich verschiebt `translate()` den Ursprung der Matrix zurück zu seinem Ausgangspunkt. Dies geschieht durch Anwenden der Koordinatenwerte des Mittelpunkts der Form in negativer Richtung.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Form ist ein Rechteck mit ihrer Ecke bei (80, 60), einer Breite von 140 und einer Höhe von 30. Ihr horizontaler Mittelpunkt ist bei (80 + 140 / 2), also 150. Ihr vertikaler Mittelpunkt ist bei (60 + 30 / 2), also 75. Somit befindet sich der Mittelpunkt bei (150, 75).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Nicht-gedrehtes Rechteck
ctx.fillStyle = "gray";
ctx.fillRect(80, 60, 140, 30);

// Matrixtransformation
ctx.translate(150, 75);
ctx.rotate(Math.PI / 2);
ctx.translate(-150, -75);

// Gedrehtes Rechteck
ctx.fillStyle = "red";
ctx.fillRect(80, 60, 140, 30);
```

#### Ergebnis

Das nicht-gedrehte Rechteck ist grau, und das gedrehte Rechteck ist rot.

{{ EmbedLiveSample('Rotating_a_shape_around_its_center', 700, 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
