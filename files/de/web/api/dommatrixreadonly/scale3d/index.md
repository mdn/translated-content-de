---
title: "DOMMatrixReadOnly: scale3d()-Methode"
short-title: scale3d()
slug: Web/API/DOMMatrixReadOnly/scale3d
l10n:
  sourceCommit: e65acfebb0c59023677e0bab3cc56159d2a22ed5
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`scale3d()`**-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erstellt eine neue Matrix, die das Ergebnis einer 3D-Skalierungstransformation ist, die auf die Matrix angewendet wird. Sie gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die erstellt wird, indem die Quell-3D-Matrix anhand des angegebenen Skalierungsfaktors skaliert wird, zentriert auf den Ursprungspunkt, der durch die Ursprungsparameter angegeben wird, wobei der Standardursprung `(0, 0, 0)` ist. Die Originalmatrix wird nicht verändert.

Um die Matrix zu ändern, während Sie sie 3D-skalieren, siehe [`DOMMatrix.scale3dSelf()`](/de/docs/Web/API/DOMMatrix/scale3dSelf).

## Syntax

```js
DOMMatrixReadOnly.scale3d();
DOMMatrixReadOnly.scale3d(scale);
DOMMatrixReadOnly.scale3d(scale, originX);
DOMMatrixReadOnly.scale3d(scale, originX, originY);
DOMMatrixReadOnly.scale3d(scale, originX, originY, originZ);
```

### Parameter

- `scale`
  - : Ein Multiplikator; der Skalierungswert. Wenn keine Skala angegeben wird, ist der Standardwert `1`.
- `originX` {{optional_inline}}
  - : Eine x-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben wird, ist der Standardwert `0`.
- `originY` {{optional_inline}}
  - : Eine y-Koordinate für den Ursprung der Transformation. Wenn kein Ursprung angegeben wird, ist der Standardwert `0`.
- `originZ` {{optional_inline}}
  - : Eine z-Koordinate für den Ursprung der Transformation. Wenn dieser Wert `0` ist, was der Standardwert ist, wenn nichts angegeben wird, könnte die resultierende Matrix nicht 3D sein.

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
- CSS {{cssxref("transform")}}-Eigenschaft und {{cssxref("transform-function/scale3d", "scale3d()")}}- und {{cssxref("transform-function/matrix3d", "matrix3d()")}}-Funktionen
- [CSS transforms](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle mit der Methode [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
