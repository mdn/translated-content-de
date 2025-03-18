---
title: "DOMMatrixReadOnly: rotateAxisAngle()-Methode"
short-title: rotateAxisAngle()
slug: Web/API/DOMMatrixReadOnly/rotateAxisAngle
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die Methode `rotateAxisAngle()` der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch Drehung der Ausgangsmatrix mittels des angegebenen Vektors und Winkels erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.

Um die Matrix während der Drehung zu verändern, siehe [`DOMMatrix.rotateAxisAngleSelf()`](/de/docs/Web/API/DOMMatrix/rotateAxisAngleSelf).

## Syntax

```js-nolint
rotateAxisAngle()
rotateAxisAngle(rotX)
rotateAxisAngle(rotX, rotY)
rotateAxisAngle(rotX, rotY, rotZ)
rotateAxisAngle(rotX, rotY, rotZ, angle)
```

### Parameter

- `rotX`
  - : Eine Zahl; die x-Koordinate des Vektors, der die Rotationsachse angibt. Wenn ungleich Null, ist [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) falsch.
- `rotY` {{optional_inline}}
  - : Eine Zahl; die y-Koordinate des Vektors, der die Rotationsachse angibt. Wenn nicht definiert, wird der `rotX`-Wert verwendet. Wenn ungleich Null, ist [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) falsch.
- `rotZ` {{optional_inline}}
  - : Eine Zahl; die z-Koordinate des Vektors, der die Rotationsachse angibt. Wenn nicht definiert, wird der `rotX`-Wert verwendet.
- `angle` {{optional_inline}}
  - : Eine Zahl; der Winkel der Drehung um den Achsenvektor in Grad.

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
- CSS {{cssxref("transform")}}-Eigenschaft und {{cssxref("transform-function/rotate3d", "rotate3d()")}}-Funktion
- CSS {{cssxref("rotate")}}-Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)-Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform)-Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Schnittstelle und [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)-Methode
