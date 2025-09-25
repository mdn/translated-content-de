---
title: "CanvasRenderingContext2D: getTransform()-Methode"
short-title: getTransform()
slug: Web/API/CanvasRenderingContext2D/getTransform
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Die **`CanvasRenderingContext2D.getTransform()`**-Methode der Canvas 2D API ruft die aktuelle Transformationsmatrix ab, die auf den Kontext angewendet wird.

## Syntax

```js-nolint
getTransform()
```

### Parameter

Keine.

### Rückgabewert

Ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt.

Die Transformationsmatrix wird beschrieben durch:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a & c & e \\ b & d & f \\ 0 & 0 & 1 \end{array} \right]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

> [!NOTE]
> Das zurückgegebene Objekt ist nicht live, das heißt, es zu aktualisieren hat keine Auswirkungen auf die aktuelle Transformationsmatrix, und das Aktualisieren der aktuellen Transformationsmatrix hat keine Auswirkungen auf eine bereits zurückgegebene `DOMMatrix`.

## Beispiele

Im folgenden Beispiel haben wir zwei {{htmlelement("canvas")}}-Elemente. Wir wenden eine
Transformation auf den Kontext des ersten Canvas an, indem wir
[`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform) verwenden und ein Quadrat darauf zeichnen. Dann rufen wir die Matrix davon mit `getTransform()` ab.

Wir wenden dann die abgerufene Matrix direkt auf den Kontext des zweiten Canvas an, indem wir das `DOMMatrix`-Objekt direkt an `setTransform()` übergeben und einen Kreis darauf zeichnen.

### HTML

```html
<canvas width="240"></canvas> <canvas width="240"></canvas>
```

### CSS

```css
canvas {
  border: 1px solid black;
}
```

### JavaScript

```js
const canvases = document.querySelectorAll("canvas");
const ctx1 = canvases[0].getContext("2d");
const ctx2 = canvases[1].getContext("2d");

ctx1.setTransform(1, 0.2, 0.8, 1, 0, 0);
ctx1.fillRect(25, 25, 50, 50);

let storedTransform = ctx1.getTransform();
console.log(storedTransform);

ctx2.setTransform(storedTransform);
ctx2.beginPath();
ctx2.arc(50, 50, 50, 0, 2 * Math.PI);
ctx2.fill();
```

### Ergebnis

{{ EmbedLiveSample('Examples', "100%", 180) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Schnittstelle, die diese Methode definiert: [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
