---
title: "DOMMatrix: Methode skewYSelf()"
short-title: skewYSelf()
slug: Web/API/DOMMatrix/skewYSelf
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `skewYSelf()`-Methode der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle ist eine veränderbare Transformationsmethode, die eine Matrix modifiziert. Sie verzerrt die Quellmatrix, indem sie die angegebene Schertransformation entlang der Y-Achse anwendet und die verzerrte Matrix zurückgibt.

Um eine Matrix entlang der Y-Achse zu verzerren, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.skewY()`](/de/docs/Web/API/DOMMatrixReadOnly/skewY).

## Syntax

```js-nolint
skewYSelf()
skewYSelf(sY)
```

### Parameter

- `sY`
  - : Eine Zahl; der Winkel in Grad, um den die Matrix entlang der Y-Achse verzerrt wird.

### Rückgabewert

Gibt sich selbst zurück; die entlang der Y-Achse um den gegebenen Winkel verzerrte [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

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
  - {{cssxref("transform-function/skewZ", "skewZ()")}}
- Modul [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform)-Attribut
- Methoden der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle
  - [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
