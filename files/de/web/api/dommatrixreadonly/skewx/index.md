---
title: "DOMMatrixReadOnly: skewX()-Methode"
short-title: skewX()
slug: Web/API/DOMMatrixReadOnly/skewX
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `skewX()`-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Anwenden der angegebenen Schertransformation auf die Ausgangsmatrix entlang ihrer x-Achse erstellt wurde. Die Originalmatrix wird nicht verändert.

Um die Matrix zu ändern, während Sie sie entlang der x-Achse scheren, siehe [`DOMMatrix.skewXSelf()`](/de/docs/Web/API/DOMMatrix/skewXSelf).

## Syntax

```js-nolint
skewX()
skewX(sX)
```

### Parameter

- `sX`
  - : Eine Zahl; der Winkel in Grad, um den die Matrix entlang der x-Achse geschert wird.

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // no transform applied
// "matrix(1, 0, 0, 1, 0, 0)"

console.log(matrix.skewX(14).toString());
// "matrix(1, 0, 0.25, 1, 0, 0)"

console.log(matrix.toString()); // original is unchanged
// "matrix(1, 0, 0, 1, 0, 0)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
- [`DOMMatrix.skewXSelf()`](/de/docs/Web/API/DOMMatrix/skewXSelf)
- CSS-Eigenschaft {{cssxref("transform")}} und die Funktionen {{cssxref("transform-function/skew", "skew()")}}, {{cssxref("transform-function/skewX", "skewX()")}} und {{cssxref("transform-function/matrix", "matrix()")}}
- Modul [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms)
- SVG-Attribut [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform)
- Die Methode [`transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform) der Schnittstelle [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
