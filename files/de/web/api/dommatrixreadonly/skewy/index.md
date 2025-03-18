---
title: "DOMMatrixReadOnly: skewY() Methode"
short-title: skewY()
slug: Web/API/DOMMatrixReadOnly/skewY
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `skewY()`-Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwendung der angegebenen Scherungstransformation entlang ihrer y-Achse auf die Ursprungsmatrix erzeugt wird. Die Originalmatrix wird dabei nicht verändert.

Um die Matrix während der Scherung entlang der y-Achse zu verändern, siehe [`DOMMatrix.skewYSelf()`](/de/docs/Web/API/DOMMatrix/skewYSelf).

## Syntax

```js-nolint
skewY()
skewY(sY)
```

### Parameter

- `sY`
  - : Eine Zahl; der Winkel in Grad, um den die Matrix entlang der y-Achse geschert werden soll.

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
- CSS {{cssxref("transform")}}-Eigenschaft und die {{cssxref("transform-function/skew", "skew()")}}, {{cssxref("transform-function/skewY", "skewY()")}} und {{cssxref("transform-function/matrix", "matrix()")}} Funktionen
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Interface und dessen [`transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform) Methode
