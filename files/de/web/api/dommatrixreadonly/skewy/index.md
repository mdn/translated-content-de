---
title: "DOMMatrixReadOnly: skewY() Methode"
short-title: skewY()
slug: Web/API/DOMMatrixReadOnly/skewY
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `skewY()`-Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation entlang der y-Achse der Quellmatrix erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.

Um die Matrix während der Scherung entlang der y-Achse zu ändern, siehe [`DOMMatrix.skewYSelf()`](/de/docs/Web/API/DOMMatrix/skewYSelf).

## Syntax

```js-nolint
skewY()
skewY(sY)
```

### Parameter

- `sY`
  - : Eine Zahl; der Winkel in Grad, um den die Matrix entlang der y-Achse verzerrt werden soll.

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
- CSS {{cssxref("transform")}} Eigenschaft und die {{cssxref("transform-function/skew", "skew()")}}, {{cssxref("transform-function/skewY", "skewY()")}}, und {{cssxref("transform-function/matrix", "matrix()")}} Funktionen
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Interface Methode [`transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
