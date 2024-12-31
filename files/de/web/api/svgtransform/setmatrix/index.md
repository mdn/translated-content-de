---
title: "SVGTransform: setMatrix()-Methode"
short-title: setMatrix()
slug: Web/API/SVGTransform/setMatrix
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

Die `setMatrix()`-Methode der [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Schnittstelle setzt den Transformationstyp auf `SVG_TRANSFORM_MATRIX`, wobei der Parameter `matrix` die neue Transformation definiert.

Beachten Sie, dass die Werte des Parameters `matrix` kopiert werden, was bedeutet, dass Änderungen am `matrix`-Objekt nach dem Aufruf dieser Methode die Transformation nicht beeinflussen.

## Syntax

```js-nolint
SVGTransform.setMatrix(matrix)
```

### Parameter

- `matrix`
  - : Ein live [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt, das die anzuwendende neue Transformationsmatrix definiert.

### Rückgabewert

Keiner ({{jsxref('undefined')}}).

### Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das Attribut oder das [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt schreibgeschützt ist.

## Beispiele

### Setzen einer Transformationsmatrix

```js
// Get an SVG element and create a transform object
const svgElement = document.querySelector("svg");
const transform = svgElement.createSVGTransform();

// Create a DOMMatrix with specific values
const matrix = new DOMMatrix();
matrix.a = 1; // Scale X
matrix.d = 1; // Scale Y
matrix.e = 50; // Translate X
matrix.f = 50; // Translate Y

// Set the transform to the new matrix
transform.setMatrix(matrix);

console.dir(transform.matrix); // Output: SVGMatrix { a: 1, b: 0, c: 0, d: 1, e: 50, f: 50 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
