---
title: "SVGSVGElement: createSVGTransformFromMatrix() Methode"
short-title: createSVGTransformFromMatrix()
slug: Web/API/SVGSVGElement/createSVGTransformFromMatrix
l10n:
  sourceCommit: 6d35583226f1ca3bac852506014f973113c0a8a2
---

{{APIRef("SVG")}}

Die `createSVGTransformFromMatrix()` Methode der Schnittstelle [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement) erstellt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform) Objekt außerhalb jeglicher Dokumentenbäume, basierend auf dem angegebenen [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Objekt.

## Syntax

```js-nolint
createSVGTransformFromMatrix(matrix)
```

### Parameter

- `matrix`
  - : Ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Objekt, das die anfängliche Matrix für die Transformation darstellt.

### Rückgabewert

Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform) Objekt, das auf die gegebene Matrixtransformation initialisiert ist. Es ist eine `matrix()` Transformation, wenn die `matrix` [2D](/de/docs/Web/API/DOMMatrixReadOnly/is2D) ist, und eine `matrix3d()` Transformation andernfalls.

## Beispiele

### Erstellen einer Transformation aus einer Matrix

```html
<svg id="exampleSVG" width="200" height="200">
  <rect id="exampleRect" x="50" y="50" width="100" height="50" fill="blue" />
</svg>
```

```js
const svgElement = document.getElementById("exampleSVG");
const rectElement = document.getElementById("exampleRect");

// Create a new matrix
const matrix = svgElement.createSVGMatrix();
matrix.a = 1; // Scale x
matrix.d = 1; // Scale y
matrix.e = 50; // Translate x
matrix.f = 50; // Translate y

// Create a new SVGTransform from the matrix
const transform = svgElement.createSVGTransformFromMatrix(matrix);

// Apply the transform to the rectangle
rectElement.transform.baseVal.appendItem(transform);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
