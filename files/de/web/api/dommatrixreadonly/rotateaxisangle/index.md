---
title: "DOMMatrixReadOnly: rotateAxisAngle() Methode"
short-title: rotateAxisAngle()
slug: Web/API/DOMMatrixReadOnly/rotateAxisAngle
l10n:
  sourceCommit: e65acfebb0c59023677e0bab3cc56159d2a22ed5
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `rotateAxisAngle()` Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Interfaces gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Rotation der Ursprungsmatrix um den gegebenen Vektor und Winkel erstellt wird. Die Originalmatrix wird nicht verändert.

Um die Matrix während der Rotation zu ändern, siehe [`DOMMatrix.rotateAxisAngleSelf()`](/de/docs/Web/API/DOMMatrix/rotateAxisAngleSelf).

## Syntax

```js-nolint
DOMMatrixReadOnly.rotateAxisAngle()
DOMMatrixReadOnly.rotateAxisAngle(rotX)
DOMMatrixReadOnly.rotateAxisAngle(rotX, rotY)
DOMMatrixReadOnly.rotateAxisAngle(rotX, rotY, rotZ)
DOMMatrixReadOnly.rotateAxisAngle(rotX, rotY, rotZ, angle)
```

### Parameter

- `rotX`
  - : Eine Zahl; die x-Koordinate des Vektors, der die Rotationsachse angibt. Wenn ungleich null, ist [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) falsch.
- `rotY` {{optional_inline}}
  - : Eine Zahl; die y-Koordinate des Vektors, der die Rotationsachse angibt. Wenn undefiniert, wird der `rotX` Wert verwendet. Wenn ungleich null, ist [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) falsch.
- `rotZ` {{optional_inline}}
  - : Eine Zahl; die z-Koordinate des Vektors, der die Rotationsachse angibt. Wenn undefiniert, wird der `rotX` Wert verwendet.
- `angle` {{optional_inline}}
  - : Eine Zahl; der Winkel der Rotation um den Achsenvektor, in Grad.

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.rotateAxisAngle().toString()); // matrix(1, 0, 0, 1, 0, 0)
console.log(matrix.rotateAxisAngle(10, 20, 30).toString()); // matrix(1, 0, 0, 1, 0, 0)
console.log(matrix.rotateAxisAngle(10, 20, 30, 45).toString());
/* matrix3d(
    0.728, 0.609, -0.315, 0, 
    -0.525, 0.791, 0.315, 0, 
    0.441, -0.063, 0.895, 
    0, 0, 0, 0, 1) */
console.log(matrix.rotateAxisAngle(5, 5, 5, -45).toString());
/* matrix3d(
    0.805, -0.311, 0.506, 0, 
    0.506, 0.805, -0.311, 0, 
    -0.311, 0.506, 0.805, 0, 
    0, 0, 0, 1) */
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)" (unchanged)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix.rotateAxisAngleSelf()`](/de/docs/Web/API/DOMMatrix/rotateAxisAngleSelf)
- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
- CSS {{cssxref("transform")}} Eigenschaft und {{cssxref("transform-function/rotate3d", "rotate3d()")}} Funktion
- CSS {{cssxref("rotate")}} Eigenschaft
- [CSS Transforms](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle und [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate) Methode
