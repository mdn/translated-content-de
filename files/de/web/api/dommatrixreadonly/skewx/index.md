---
title: "DOMMatrixReadOnly: skewX() Methode"
short-title: skewX()
slug: Web/API/DOMMatrixReadOnly/skewX
l10n:
  sourceCommit: e65acfebb0c59023677e0bab3cc56159d2a22ed5
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `skewX()` Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Interfaces gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schrägtransformation an der Quellmatrix entlang ihrer x-Achse erstellt wird. Die ursprüngliche Matrix wird nicht verändert.

Um die Matrix beim Schrägen entlang der x-Achse zu verändern, siehe [`DOMMatrix.skewXSelf()`](/de/docs/Web/API/DOMMatrix/skewXSelf).

## Syntax

```js-nolint
DOMMatrixReadOnly.skewX()
DOMMatrixReadOnly.skewX(sX)
```

### Parameter

- `sX`
  - : Eine Zahl; der Winkel in Grad, um den die Matrix entlang der x-Achse schräg gestellt wird.

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // no transform applied
// "matrix(1, 0, 0, 1, 0, 0)"

console.log(matrix.skewX(14).toString());
//"matrix(1, 0, 0.25, 1, 0, 0)"

console.log(matrix.toString()); // original is unchanged
// "matrix(1, 0, 0, 1, 0, 0)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
- [`DOMMatrix.skewX()`](/de/docs/Web/API/DOMMatrix/skewX)
- CSS {{cssxref("transform")}} Eigenschaft und die {{cssxref("transform-function/skew", "skew()")}}, {{cssxref("transform-function/skewX", "skewX()")}}, und {{cssxref("transform-function/matrix", "matrix()")}} Funktionen
- [CSS Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle's [`transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform) Methode
