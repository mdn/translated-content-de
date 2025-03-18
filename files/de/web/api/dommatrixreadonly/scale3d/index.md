---
title: "DOMMatrixReadOnly: scale3d() Methode"
short-title: scale3d()
slug: Web/API/DOMMatrixReadOnly/scale3d
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`scale3d()`** Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Schnittstelle erzeugt eine neue Matrix, die das Ergebnis einer 3D-Skalentransformation darstellt, die auf die Matrix angewendet wird. Sie gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Skalieren der Quell-3D-Matrix mit dem angegebenen Skalierungsfaktor erzeugt wurde. Dieser ist zentriert auf den Ursprungskoordinaten, die durch die Ursprungsparameter angegeben werden, mit einem Standardursprung `(0, 0, 0)`. Die Originalmatrix wird nicht verändert.

Um die Matrix zu verändern, während Sie sie 3D-skalieren, siehe [`DOMMatrix.scale3dSelf()`](/de/docs/Web/API/DOMMatrix/scale3dSelf).

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
  - : Ein Multiplikator; der Skalenwert. Wenn keine Skala angegeben wird, ist der Standardwert `1`.
- `originX` {{optional_inline}}
  - : Eine x-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben wird, ist der Standardwert `0`.
- `originY` {{optional_inline}}
  - : Eine y-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben wird, ist der Standardwert `0`.
- `originZ` {{optional_inline}}
  - : Eine z-Koordinate für den Ursprung der Transformation. Wenn dieser Wert `0` ist, was der Standardwert ist, wenn nichts angegeben ist, kann die resultierende Matrix möglicherweise nicht 3D sein.

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
- CSS {{cssxref("transform")}} Eigenschaft und {{cssxref("transform-function/scale3d", "scale3d()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} Funktionen
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform) Attribut
- Methode [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform) der [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle
