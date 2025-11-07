---
title: "DOMMatrix: Methode skewXSelf()"
short-title: skewXSelf()
slug: Web/API/DOMMatrix/skewXSelf
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `skewXSelf()`-Methode der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle ist eine veränderbare Transformationsmethode, die eine Matrix modifiziert. Sie schert die Quellmatrix, indem die angegebene Schertransformation entlang der X-Achse angewendet wird, und gibt die verzerrte Matrix zurück.

Um eine Matrix entlang der X-Achse zu scheren, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX).

## Syntax

```js-nolint
skewXSelf()
skewXSelf(sX)
```

### Parameter

- `sX`
  - : Eine Zahl; der Winkel in Grad, um den die Matrix entlang der X-Achse geschert werden soll.

### Rückgabewert

Gibt sich selbst zurück; die entlang der X-Achse um den angegebenen Winkel verzerrte [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)"
matrix.skewXSelf(14); // mutate it
console.log(matrix); // output: "matrix(1, 0, 0.25, 1, 0, 0)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX)
- CSS {{cssxref("transform")}}-Eigenschaft
- CSS {{cssxref("transform-function")}}-Funktionen
  - {{cssxref("transform-function/skew", "skew()")}}
  - {{cssxref("transform-function/skewX", "skewX()")}}
  - {{cssxref("transform-function/skewY", "skewY()")}}
- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms)-Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform)-Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstellenmethoden
  - [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
