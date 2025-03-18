---
title: "DOMMatrix: rotateSelf() Methode"
short-title: rotateSelf()
slug: Web/API/DOMMatrix/rotateSelf
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `rotateSelf()`-Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Interfaces ist eine veränderliche Transformationsmethode, die eine Matrix modifiziert. Sie dreht die Ausgangsmatrix um jede ihrer Achsen um die angegebene Gradzahl und gibt die gedrehte Matrix zurück.

Um eine Matrix zu drehen, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate).

## Syntax

```js-nolint
rotateSelf()
rotateSelf(rotX)
rotateSelf(rotX, rotY)
rotateSelf(rotX, rotY, rotZ)
```

### Parameter

- `rotX`
  - : Eine Zahl; die x-Koordinate des Vektors, der die Drehachse angibt.
- `rotY` {{optional_inline}}
  - : Eine Zahl; die y-Koordinate des Vektors, der die Drehachse angibt.
- `rotZ` {{optional_inline}}
  - : Eine Zahl; die z-Koordinate des Vektors, der die Drehachse angibt.

Wird nur ein Parameter übergeben, ist `rotZ` der Wert von `rotX`, und sowohl `rotX` als auch `rotY` sind `0`, und die Drehung ist eine 2D-Drehung. Wenn `rotX` und `rotY` ungleich null sind, ist [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) `false`.

### Rückgabewert

Gibt sich selbst zurück; die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), die um die angegebenen Vektoren gedreht wurde.

## Beispiele

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.toString()); // output: "matrix(1, 0, 0, 1, 0, 0)"
matrix.rotateSelf(30); // mutate it
console.log(matrix); // output: "matrix(0.866, 0.5, -0.5, 0.866, 0, 0)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.rotate()`](/de/docs/Web/API/DOMMatrixReadOnly/rotate)
- CSS-Eigenschaft {{cssxref("transform")}}
- CSS-Eigenschaft {{cssxref("rotate")}}
- CSS-Funktionen {{cssxref("transform-function")}}
  - {{cssxref("transform-function/rotate", "rotate()")}}
  - {{cssxref("transform-function/rotate3d", "rotate3d()")}}
  - {{cssxref("transform-function/rotateX", "rotateX()")}}
  - {{cssxref("transform-function/rotateY", "rotateY()")}}
  - {{cssxref("transform-function/rotateZ", "rotateZ()")}}
- [CSS-Transforms](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG-Attribut [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform)
- Methoden des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Interface
  - [`CanvasRenderingContext2D.rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
