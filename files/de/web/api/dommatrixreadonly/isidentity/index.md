---
title: "DOMMatrixReadOnly: isIdentity-Eigenschaft"
short-title: isIdentity
slug: Web/API/DOMMatrixReadOnly/isIdentity
l10n:
  sourceCommit: c783eb168e90b80e22f223d5126178ecf95b6135
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die unveränderliche **`isIdentity`**-Eigenschaft des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces ist ein Boolean, dessen Wert `true` ist, wenn die Matrix die [Einheitsmatrix](https://de.wikipedia.org/wiki/Einheitsmatrix) ist.

Die Einheitsmatrix ist eine Matrix, in der jeder Wert `0` ist, _außer_ denen auf der Hauptdiagonale von der oberen linken zur unteren rechten Ecke (mit anderen Worten, wo die Versätze in jeder Richtung gleich sind).

## Wert

Ein Boolean-Wert.

## Beispiele

```js
// Initialize a 2D matrix
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.isIdentity); // output: true

// Apply a transform that has no effect
console.log(matrix.translate(0).isIdentity); // output: true

// Apply a transform with effect: this rotates the matrix by 30deg
console.log(matrix.rotate(30).isIdentity); // output: false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interface
- [`CSSMatrixComponent`](/de/docs/Web/API/CSSMatrixComponent)-Interface
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interface
- CSS {{cssxref("transform-function/matrix()")}}-Funktion
- CSS {{cssxref("transform")}}-Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)-Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform)-Attribut
