---
title: "DOMMatrixReadOnly: rotateFromVector()-Methode"
short-title: rotateFromVector()
slug: Web/API/DOMMatrixReadOnly/rotateFromVector
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `rotateFromVector()`-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Rotieren der Quellmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` erstellt wurde. Der Drehwinkel wird durch den Winkel zwischen dem Vektor `(1,0)T` und `(x,y)T` im Uhrzeigersinn, oder `(+/-)arctan(y/x)`, bestimmt. Wenn `x` und `y` beide `0` sind, wird der Winkel als `0` angegeben. Die ursprüngliche Matrix wird nicht verändert.

Um die Matrix zu manipulieren, während Sie sie um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` drehen, siehe [`DOMMatrix.rotateFromVectorSelf()`](/de/docs/Web/API/DOMMatrix/rotateFromVectorSelf).

## Syntax

```js-nolint
rotateFromVector()
rotateFromVector(rotX)
rotateFromVector(rotX, rotY)
```

### Parameter

- `rotX` {{optional_inline}}
  - : Eine Zahl; Die x-Koordinate des x,y-Vektors, der den Drehwinkel bestimmt. Wenn nicht definiert, wird `0` verwendet.
- `rotY` {{optional_inline}}
  - : Eine Zahl; Die y-Koordinate des x,y-Vektors, der den Drehwinkel bestimmt. Wenn nicht definiert, wird `0` verwendet.

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // original value
// output: "matrix(1, 0, 0, 1, 0, 0)"

console.log(matrix.rotateFromVector().toString()); // defaults to `0`
// output: matrix(1, 0, 0, 1, 0, 0)

console.log(matrix.rotateFromVector(10, 20).toString());
// matrix(0.447, 0.894, -0.894, 0.447, 0, 0)

console.log(matrix.rotateFromVector(-5, 5).toString());
// matrix(-0.707, 0.707, -0.707, -0.707, 0, 0)

console.log(matrix.toString()); // matrix remains unchanged
// output: "matrix(1, 0, 0, 1, 0, 0)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix.rotateFromVectorSelf()`](/de/docs/Web/API/DOMMatrix/rotateFromVectorSelf)
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
- CSS {{cssxref("transform")}}-Eigenschaft und {{cssxref("transform-function/rotate3d", "rotate3d()")}}-Funktion
- CSS {{cssxref("rotate")}}-Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)-Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform)-Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle und [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)-Methode
