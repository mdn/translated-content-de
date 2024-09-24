---
title: "CanvasRenderingContext2D: resetTransform()-Methode"
short-title: resetTransform()
slug: Web/API/CanvasRenderingContext2D/resetTransform
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef}}

Die
**`CanvasRenderingContext2D.resetTransform()`**
Methode der Canvas 2D API setzt die aktuelle Transformation auf die Einheitsmatrix zurück.

## Syntax

```js-nolint
resetTransform()
```

## Beispiele

### Zurücksetzen der Matrix

In diesem Beispiel wird ein gedrehtes Rechteck gezeichnet, nachdem die Matrix modifiziert wurde, und dann wird die Matrix mithilfe der `resetTransform()`-Methode zurückgesetzt.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

Die {{domxref("CanvasRenderingContext2D.rotate()", "rotate()")}} Methode dreht die Transformationsmatrix um 45°. Die {{domxref("CanvasRenderingContext2D.fillRect()", "fillRect()")}} Methode zeichnet ein gefülltes Rechteck, das entsprechend dieser Matrix angepasst ist.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Zeichnen eines gedrehten Rechtecks
ctx.rotate((45 * Math.PI) / 180);
ctx.fillRect(60, 0, 100, 30);

// Zurücksetzen der Transformationsmatrix auf die Einheitsmatrix
ctx.resetTransform();
```

#### Ergebnis

{{ EmbedLiveSample('Resetting_the_matrix', 700, 180) }}

### Fortfahren mit einer regulären Matrix

Wann immer Sie die Zeichnung transformierter Formen abgeschlossen haben, sollten Sie `resetTransform()` aufrufen, bevor Sie etwas anderes rendern. In diesem Beispiel werden die ersten beiden Formen mit einer Schrägtransformation gezeichnet, und die letzten beiden mit der Einheits- (regulären) Transformation.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Schräge Rechtecke
ctx.transform(1, 0, 1.7, 1, 0, 0);
ctx.fillStyle = "gray";
ctx.fillRect(40, 40, 50, 20);
ctx.fillRect(40, 90, 50, 20);

// Nicht geschrägte Rechtecke
ctx.resetTransform();
ctx.fillStyle = "red";
ctx.fillRect(40, 40, 50, 20);
ctx.fillRect(40, 90, 50, 20);
```

#### Ergebnis

Die schrägen Rechtecke sind grau, und die nicht geschrägten Rechtecke sind rot.

{{ EmbedLiveSample('Continuing_with_a_regular_matrix', 700, 180) }}

## Polyfill

Sie können auch die {{domxref("CanvasRenderingContext2D.setTransform()", "setTransform()")}} Methode verwenden, um die aktuelle Transformation auf die Einheitsmatrix zurückzusetzen, wie folgt:

```js
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: {{domxref("CanvasRenderingContext2D")}}
