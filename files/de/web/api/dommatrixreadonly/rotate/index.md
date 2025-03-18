---
title: "DOMMatrixReadOnly: `rotate()` Methode"
short-title: rotate()
slug: Web/API/DOMMatrixReadOnly/rotate
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `rotate()`-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle gibt eine neue [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die durch das Drehen der Ursprungsmatrix um jede ihrer Achsen um die angegebene Anzahl von Grad erstellt wurde. Die ursprüngliche Matrix wird nicht verändert.

Um die Matrix beim Drehen zu ändern, siehe [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf).

## Syntax

```js-nolint
rotate()
rotate(rotX)
rotate(rotX, rotY)
rotate(rotX, rotY, rotZ)
```

### Parameter

- `rotX`
  - : Eine Zahl; die x-Koordinate des Vektors, der die Rotationsachse angibt. Ist dieser Wert ungleich null, ist [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) falsch.
- `rotY` {{optional_inline}}
  - : Eine Zahl; die y-Koordinate des Vektors, der die Rotationsachse angibt. Ist dieser Wert ungleich null, ist [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) falsch.
- `rotZ` {{optional_inline}}
  - : Eine Zahl; die z-Koordinate des Vektors, der die Rotationsachse angibt.

Wenn nur `rotX` übergeben wird, wird `rotX` als Wert für die z-Koordinate verwendet, und die x- und y-Koordinaten werden beide auf null gesetzt.

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString());
// output: "matrix(1, 0, 0, 1, 0, 0)"

const rotated = matrix.rotate(30); // rotation and assignment
console.log(matrix.toString()); // original matrix is unchanged
// output: "matrix(1, 0, 0, 1, 0, 0)"
console.log(rotated.toString());
// output: "matrix(0.866, 0.5, -0.5, 0.866, 0, 0)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf)
- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
- CSS {{cssxref("transform")}}-Eigenschaft und {{cssxref("transform-function/rotate3d", "rotate3d()")}}-Funktion
- CSS {{cssxref("rotate")}}-Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle und [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate) Methode
