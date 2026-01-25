---
title: "DOMMatrixReadOnly: rotateFromVector() Methode"
short-title: rotateFromVector()
slug: Web/API/DOMMatrixReadOnly/rotateFromVector
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `rotateFromVector()`-Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehung der Ursprungsmatrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` erstellt wird. Der Drehwinkel wird durch den Winkel zwischen dem Vektor `(1,0)T` und `(x,y)T` im Uhrzeigersinn bestimmt, oder `(+/-)arctan(y/x)`. Wenn `x` und `y` beide `0` sind, wird der Winkel als `0` angegeben. Die Originalmatrix wird nicht verändert.

Um die Matrix zu verändern, während Sie sie um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` drehen, siehe [`DOMMatrix.rotateFromVectorSelf()`](/de/docs/Web/API/DOMMatrix/rotateFromVectorSelf).

## Syntax

```js-nolint
rotateFromVector()
rotateFromVector(rotX)
rotateFromVector(rotX, rotY)
```

### Parameter

- `rotX` {{optional_inline}}
  - : Eine Zahl; die x-Koordinate des x,y-Vektors, der den Drehwinkel bestimmt. Wenn nicht definiert, wird `0` verwendet.
- `rotY` {{optional_inline}}
  - : Eine Zahl; die y-Koordinate des x,y-Vektors, der den Drehwinkel bestimmt. Wenn nicht definiert, wird `0` verwendet.

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
- [CSS-Transformationen](/de/docs/Web/CSS/Guides/Transforms)-Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform)-Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle und [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)-Methode
