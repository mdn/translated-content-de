---
title: "DOMMatrixReadOnly: isIdentity Eigenschaft"
short-title: isIdentity
slug: Web/API/DOMMatrixReadOnly/isIdentity
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die unveränderliche Eigenschaft **`isIdentity`** der Schnittstelle [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) ist ein Boolean, dessen Wert `true` ist, wenn die Matrix die [Einheitsmatrix](https://de.wikipedia.org/wiki/Einheitsmatrix) ist.

Die Einheitsmatrix ist eine Matrix, in der jeder Wert `0` ist, _außer_ den Werten auf der Hauptdiagonale von der oberen linken zur unteren rechten Ecke (mit anderen Worten, wo die Offsets in jeder Richtung gleich sind).

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

- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Schnittstelle
- [`CSSMatrixComponent`](/de/docs/Web/API/CSSMatrixComponent) Schnittstelle
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle
- CSS {{cssxref("transform-function/matrix()")}} Funktion
- CSS {{cssxref("transform")}} Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform) Attribut
