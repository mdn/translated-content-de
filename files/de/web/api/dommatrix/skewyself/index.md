---
title: "DOMMatrix: skewYSelf() Methode"
short-title: skewYSelf()
slug: Web/API/DOMMatrix/skewYSelf
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `skewYSelf()`-Methode der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle ist eine veränderbare Transformationsmethode, die eine Matrix modifiziert. Sie verzerrt die Quellmatrix, indem sie die angegebene Schrägungs-Transformation entlang der Y-Achse anwendet und die verzerrte Matrix zurückgibt.

Um eine Matrix entlang der Y-Achse zu schrägen, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY).

## Syntax

```js-nolint
skewYSelf()
skewYSelf(sY)
```

### Parameter

- `sY`
  - : Eine Zahl; der Winkel in Grad, um den die Matrix entlang der Y-Achse geschrägt werden soll.

### Rückgabewert

Gibt sich selbst zurück; die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), die entlang der Y-Achse um den angegebenen Winkel geschrägt ist.

## Beispiele

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)"
matrix.skewYSelf(-14); // mutate it
console.log(matrix); // output: "matrix(1, -0.25, 0, 1, 0, 0)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY)
- CSS-Eigenschaft {{cssxref("transform")}}
- CSS-Funktionen {{cssxref("transform-function")}}
  - {{cssxref("transform-function/skew", "skew()")}}
  - {{cssxref("transform-function/skewX", "skewX()")}}
  - {{cssxref("transform-function/skewY", "skewY()")}}
  - {{cssxref("transform-function/skewZ", "skewZ()")}}
- [CSS-Transforms](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG-Attribut [`transform`](/de/docs/Web/SVG/Attribute/transform)
- Methoden der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle
  - [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
