---
title: "CanvasRenderingContext2D: Methode resetTransform()"
short-title: resetTransform()
slug: Web/API/CanvasRenderingContext2D/resetTransform
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef}}

Die Methode
**`CanvasRenderingContext2D.resetTransform()`**
der Canvas 2D API setzt die aktuelle Transformation auf die Einheitsmatrix zurück.

## Syntax

```js-nolint
resetTransform()
```

## Beispiele

### Zurücksetzen der Matrix

Dieses Beispiel zeichnet ein gedrehtes Rechteck nach einer Modifikation der Matrix und setzt dann die Matrix mit der Methode `resetTransform()` zurück.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die Methode [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate) dreht die Transformationsmatrix um 45°. Die Methode [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) zeichnet ein gefülltes Rechteck, das entsprechend dieser Matrix angepasst wird.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw a rotated rectangle
ctx.rotate((45 * Math.PI) / 180);
ctx.fillRect(60, 0, 100, 30);

// Reset transformation matrix to the identity matrix
ctx.resetTransform();
```

#### Ergebnis

{{ EmbedLiveSample('Resetting_the_matrix', 700, 180) }}

### Fortfahren mit einer regulären Matrix

Wann immer Sie mit dem Zeichnen von transformierten Formen fertig sind, sollten Sie `resetTransform()` aufrufen, bevor Sie irgendetwas anderes rendern. In diesem Beispiel werden die ersten beiden Formen mit einer Schertransformation gezeichnet, und die letzten beiden mit der Einheits- (regulären) Transformation.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Skewed rectangles
ctx.transform(1, 0, 1.7, 1, 0, 0);
ctx.fillStyle = "gray";
ctx.fillRect(40, 40, 50, 20);
ctx.fillRect(40, 90, 50, 20);

// Non-skewed rectangles
ctx.resetTransform();
ctx.fillStyle = "red";
ctx.fillRect(40, 40, 50, 20);
ctx.fillRect(40, 90, 50, 20);
```

#### Ergebnis

Die gescherten Rechtecke sind grau, und die nicht gescherten Rechtecke sind rot.

{{ EmbedLiveSample('Continuing_with_a_regular_matrix', 700, 180) }}

## Polyfill

Sie können auch die Methode [`setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform) verwenden, um die aktuelle Transformation auf die Einheitsmatrix zurückzusetzen, wie folgt:

```js
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
