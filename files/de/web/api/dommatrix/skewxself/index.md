---
title: "DOMMatrix: skewXSelf()-Methode"
short-title: skewXSelf()
slug: Web/API/DOMMatrix/skewXSelf
l10n:
  sourceCommit: 5a4bb8ee0052bc6b0bc768e9d8b33ad9d4d9b359
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `skewXSelf()`-Methode der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle ist eine veränderliche Transformationsmethode, die eine Matrix modifiziert. Sie schert die Ursprungsmatrix, indem sie die angegebene Schertransformation entlang der X-Achse anwendet und gibt die gescherte Matrix zurück.

Um eine Matrix entlang der X-Achse zu scheren, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX).

## Syntax

```js-nolint
DOMMatrix.skewXSelf()
DOMMatrix.skewXSelf(sX)
```

### Parameter

- `sX`
  - : Eine Zahl; der Winkel in Grad, um den die Matrix entlang der X-Achse geschert wird.

### Rückgabewert

Gibt sich selbst zurück; die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), die entlang der X-Achse um den angegebenen Winkel geschert ist.

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
- Die CSS {{cssxref("transform")}}-Eigenschaft
- CSS {{cssxref("transform-function")}}-Funktionen
  - {{cssxref("transform-function/skew", "skew()")}}
  - {{cssxref("transform-function/skewX", "skewX()")}}
  - {{cssxref("transform-function/skewY", "skewY()")}}
  - {{cssxref("transform-function/skewZ", "skewZ()")}}
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform)-Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstellenmethoden
  - [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
