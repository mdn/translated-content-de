---
title: "DOMMatrixReadOnly: scale3d() Methode"
short-title: scale3d()
slug: Web/API/DOMMatrixReadOnly/scale3d
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`scale3d()`** Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Interfaces erstellt eine neue Matrix, die das Ergebnis einer 3D-Skalierungstransformation ist, die auf die Matrix angewendet wird. Sie gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalierung der Quell-3D-Matrix mit dem angegebenen Skalierungsfaktor erzeugt wird. Die Skalierung erfolgt zentriert um den Ursprungspunkt, der durch die Ursprungsparameter angegeben wird, wobei der Standardursprung `(0, 0, 0)` ist. Die ursprüngliche Matrix wird nicht verändert.

Um die Matrix während der 3D-Skalierung zu ändern, siehe [`DOMMatrix.scale3dSelf()`](/de/docs/Web/API/DOMMatrix/scale3dSelf).

## Syntax

```js-nolint
scale3d()
scale3d(scale)
scale3d(scale, originX)
scale3d(scale, originX, originY)
scale3d(scale, originX, originY, originZ)
```

### Parameter

- `scale`
  - : Ein Multiplikator; der Skalierungswert. Wenn keine Skalierung angegeben ist, beträgt der Standardwert `1`.
- `originX` {{optional_inline}}
  - : Eine x-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben ist, beträgt der Standardwert `0`.
- `originY` {{optional_inline}}
  - : Eine y-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben ist, beträgt der Standardwert `0`.
- `originZ` {{optional_inline}}
  - : Eine z-Koordinate für den Ursprung der Transformation. Wenn dieser Wert `0` ist, was der Standardwert bei Weglassen ist, könnte die resultierende Matrix nicht 3D sein.

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrix();
console.log(matrix.toString()); // no transforms applied
// matrix(1, 0, 0, 1, 0, 0)

console.log(matrix.scale3d(2).toString());
/* matrix3d(
    2, 0, 0, 0, 
    0, 2, 0, 0, 
    0, 0, 2, 0, 
    0, 0, 0, 1) */
console.log(matrix.scale3d(0.5, 25, 25, 1.25).toString());
/* matrix3d(
    0.5, 0, 0, 0, 
    0, 0.5, 0, 0, 
    0, 0, 0.5, 0, 1
    2.5, 12.5, 0.625, 1) */
console.log(matrix.toString()); // original matrix is unchanged
// matrix(1, 0, 0, 1, 0, 0)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix.scale3dSelf()`](/de/docs/Web/API/DOMMatrix/scale3dSelf)
- [`DOMMatrixReadOnly.scale()`](/de/docs/Web/API/DOMMatrixReadOnly/scale)
- Die CSS {{cssxref("transform")}} Eigenschaft und die {{cssxref("transform-function/scale3d", "scale3d()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} Funktionen
- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform) Attribut
- Die [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle und die [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform) Methode
