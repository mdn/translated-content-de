---
title: "DOMMatrix: skewXSelf() Methode"
short-title: skewXSelf()
slug: Web/API/DOMMatrix/skewXSelf
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die Methode `skewXSelf()` des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interfaces ist eine veränderbare Transformationsmethode, die eine Matrix modifiziert. Sie verzerrt die Ausgangsmatrix, indem die angegebene Verzerrungstransformation entlang der X-Achse angewendet wird, und gibt die verzerrte Matrix zurück.

Um eine Matrix entlang der X-Achse zu verzerren, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.skewX()`](/de/docs/Web/API/DOMMatrixReadOnly/skewX).

## Syntax

```js-nolint
skewXSelf()
skewXSelf(sX)
```

### Parameter

- `sX`
  - : Eine Zahl; der Winkel in Grad, um den die Matrix entlang der X-Achse verzerrt werden soll.

### Rückgabewert

Gibt sich selbst zurück; die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), die entlang der X-Achse um den gegebenen Winkel verzerrt wurde.

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
- CSS {{cssxref("transform-function")}} Funktionen
  - {{cssxref("transform-function/skew", "skew()")}}
  - {{cssxref("transform-function/skewX", "skewX()")}}
  - {{cssxref("transform-function/skewY", "skewY()")}}
  - {{cssxref("transform-function/skewZ", "skewZ()")}}
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)-Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform)-Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Interface-Methoden
  - [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
