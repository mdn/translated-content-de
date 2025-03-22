---
title: "DOMMatrix: skewYSelf() Methode"
short-title: skewYSelf()
slug: Web/API/DOMMatrix/skewYSelf
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `skewYSelf()`-Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interfaces ist eine veränderbare Transformationsmethode, die eine Matrix modifiziert. Sie verzerrt die Quellmatrix, indem die angegebene Verzerrungstransformation entlang der Y-Achse angewendet wird, und gibt die verzerrte Matrix zurück.

Um eine Matrix entlang der Y-Achse zu verzerren, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY).

## Syntax

```js-nolint
skewYSelf()
skewYSelf(sY)
```

### Parameter

- `sY`
  - : Eine Zahl; der Winkel in Grad, um den die Matrix entlang der Y-Achse verzerrt werden soll.

### Rückgabewert

Gibt sich selbst zurück; die entlang der Y-Achse um den angegebenen Winkel verzerrte [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

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
- CSS {{cssxref("transform")}}-Eigenschaft
- CSS {{cssxref("transform-function")}}-Funktionen
  - {{cssxref("transform-function/skew", "skew()")}}
  - {{cssxref("transform-function/skewX", "skewX()")}}
  - {{cssxref("transform-function/skewY", "skewY()")}}
- [CSS transforms](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform) Attribut
- Methoden des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Interfaces
  - [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
