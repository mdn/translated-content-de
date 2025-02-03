---
title: "DOMMatrixReadOnly: is2D-Eigenschaft"
short-title: is2D
slug: Web/API/DOMMatrixReadOnly/is2D
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die schreibgeschützte **`is2D`**-Eigenschaft des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces ist ein boolesches Flag, das `true` ist, wenn die Matrix 2D ist. Der Wert ist `true`, wenn die Matrix als 2D-Matrix initialisiert wurde und nur 2D-Transformationen angewendet wurden. Andernfalls ist die Matrix in 3D definiert und `is2D` ist `false`.

## Wert

Ein boolescher Wert.

## Beispiele

```js
// Initialize a 2D matrix
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.is2D); // output: true

// Transform in a 2D space
console.log(matrix.rotate(30).is2D); // output: true

// Apply a 3D transform
console.log(matrix.rotate(10, 20, 1).is2D); // output: false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSTransformValue.is2D`](/de/docs/Web/API/CSSTransformValue/is2D)
- [`CSSTransformComponent.is2D`](/de/docs/Web/API/CSSTransformComponent/is2D)
- CSS {{cssxref("transform-function")}}-Funktionen
- CSS {{cssxref("transform")}}-Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)-Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform)-Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interface
