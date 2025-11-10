---
title: "DOMMatrixReadOnly: skewY()-Methode"
short-title: skewY()
slug: Web/API/DOMMatrixReadOnly/skewY
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `skewY()`-Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch die Anwendung der angegebenen Schrägtransformation auf die Ursprungsmatrix entlang ihrer y-Achse erstellt wird. Die ursprüngliche Matrix wird nicht verändert.

Um die Matrix zu verändern, während Sie sie entlang der y-Achse schräg stellen, siehe [`DOMMatrix.skewYSelf()`](/de/docs/Web/API/DOMMatrix/skewYSelf).

## Syntax

```js-nolint
skewY()
skewY(sY)
```

### Parameter

- `sY`
  - : Eine Zahl; der Winkel in Grad, um den die Matrix entlang der y-Achse schräg gestellt wird.

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

- [`DOMMatrix.skewYSelf()`](/de/docs/Web/API/DOMMatrix/skewYSelf)
- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
- CSS {{cssxref("transform")}}-Eigenschaft und die {{cssxref("transform-function/skew", "skew()")}}, {{cssxref("transform-function/skewY", "skewY()")}}, und {{cssxref("transform-function/matrix", "matrix()")}}-Funktionen
- [CSS-Transformationsmodul](/de/docs/Web/CSS/Guides/Transforms)
- SVG-Attribut [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform)
- Methode [`transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform) des Interfaces [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
