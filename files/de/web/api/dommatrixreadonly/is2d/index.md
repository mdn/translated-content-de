---
title: "DOMMatrixReadOnly: is2D-Eigenschaft"
short-title: is2D
slug: Web/API/DOMMatrixReadOnly/is2D
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die schreibgeschützte **`is2D`**-Eigenschaft der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle ist ein Boolean-Flag, das `true` ist, wenn die Matrix 2D ist. Der Wert ist `true`, wenn die Matrix als 2D-Matrix initialisiert wurde und nur 2D-Transformationsoperationen angewendet wurden. Andernfalls ist die Matrix in 3D definiert und `is2D` ist `false`.

## Wert

Ein Boolean-Wert.

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
- CSS {{cssxref("transform-function")}} Funktionen
- CSS {{cssxref("transform")}} Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle
