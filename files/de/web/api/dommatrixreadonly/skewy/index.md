---
title: "DOMMatrixReadOnly: skewY()-Methode"
short-title: skewY()
slug: Web/API/DOMMatrixReadOnly/skewY
l10n:
  sourceCommit: e65acfebb0c59023677e0bab3cc56159d2a22ed5
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `skewY()`-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation auf die Quellmatrix entlang ihrer y-Achse erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.

Um die Matrix während des Scherens entlang der y-Achse zu ändern, siehe [`DOMMatrix.skewYSelf()`](/de/docs/Web/API/DOMMatrix/skewYSelf).

## Syntax

```js-nolint
DOMMatrixReadOnly.skewY()
DOMMatrixReadOnly.skewY(sY)
```

### Parameter

- `sY`
  - : Eine Zahl; der Winkel in Grad, um den die Matrix entlang der y-Achse geschert wird.

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // original value
// "matrix(1, 0, 0, 1, 0, 0)"

console.log(matrix.skewY(14).toString()); // skew along y-axis
// "matrix(1, -0.25, 0, 1, 0, 0)"

console.log(matrix.toString()); // original unchanged
// "matrix(1, 0, 0, 1, 0, 0)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix.skewY()`](/de/docs/Web/API/DOMMatrix/skewY)
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
- CSS {{cssxref("transform")}}-Eigenschaft und die {{cssxref("transform-function/skew", "skew()")}}, {{cssxref("transform-function/skewY", "skewY()")}} und {{cssxref("transform-function/matrix", "matrix()")}} Funktionen
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle mit der [`transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)-Methode
