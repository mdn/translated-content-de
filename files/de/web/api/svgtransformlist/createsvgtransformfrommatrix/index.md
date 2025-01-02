---
title: "SVGTransformList: createSVGTransformFromMatrix() Methode"
short-title: createSVGTransformFromMatrix()
slug: Web/API/SVGTransformList/createSVGTransformFromMatrix
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

Die Methode `createSVGTransformFromMatrix()` des [`SVGTransformList`](/de/docs/Web/API/SVGTransformList) Schnittstelle erzeugt ein [`SVGTransform`](/de/docs/Web/API/SVGTransform) Objekt, das zu einer Transformation des Typs `SVG_TRANSFORM_MATRIX` initialisiert wird und dessen Werte die angegebene Matrix sind.

Die Werte des Parameter-Matrix werden kopiert; die Matrix-Parameter wird nicht als `SVGTransform::matrix` übernommen.

## Syntax

```js-nolint
SVGTransformList.createSVGTransformFromMatrix(matrix)
```

### Parameter

- `matrix`
  - : Ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Objekt; die Transformationsmatrix.

### Rückgabewert

Ein [`SVGTransform`](/de/docs/Web/API/SVGTransform) Objekt.

## Beispiele

### Erstellen einer Transformation aus einer Matrix

```html
<svg width="200" height="200">
  <rect width="100" height="100" fill="blue" />
</svg>
```

```js
const svgElement = document.querySelector("svg");
const rectElement = svgElement.querySelector("rect");

// Access the transform list of the <rect> element
const transformList = rectElement.transform.baseVal;

// Create a DOMMatrix object for a rotation transformation
const rotationMatrix = new DOMMatrix();
rotationMatrix.a = Math.cos(Math.PI / 4); // 45-degree rotation
rotationMatrix.b = Math.sin(Math.PI / 4);
rotationMatrix.c = -Math.sin(Math.PI / 4);
rotationMatrix.d = Math.cos(Math.PI / 4);

// Create an SVGTransform object from the matrix
const svgTransform = transformList.createSVGTransformFromMatrix(rotationMatrix);

// Append the new transformation to the transform list
transformList.appendItem(svgTransform);

console.dir(svgTransform); // Output: SVGTransform { type: 1, matrix: SVGMatrix, angle: 0 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTransform`](/de/docs/Web/API/SVGTransform)
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
