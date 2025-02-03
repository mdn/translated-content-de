---
title: "DOMMatrix: rotateSelf() Methode"
short-title: rotateSelf()
slug: Web/API/DOMMatrix/rotateSelf
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `rotateSelf()`-Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interfaces ist eine veränderliche Transformationsmethode, die eine Matrix modifiziert. Sie rotiert die Ausgangsmatrix um jede ihrer Achsen um die angegebene Anzahl von Grad und gibt die gedrehte Matrix zurück.

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
  - : Eine Zahl; die x-Koordinate des Vektors, der die Rotationsachse angibt.
- `rotY` {{optional_inline}}
  - : Eine Zahl; die y-Koordinate des Vektors, der die Rotationsachse angibt.
- `rotZ` {{optional_inline}}
  - : Eine Zahl; die z-Koordinate des Vektors, der die Rotationsachse angibt.

Wenn nur ein Parameter übergeben wird, ist `rotZ` der Wert von `rotX`, und sowohl `rotX` als auch `rotY` sind `0`, und die Rotation ist eine 2D-Rotation. Wenn `rotX` und `rotY` ungleich null sind, ist der [`is2D`](/de/docs/Web/API/DOMMatrixReadonly/is2D) `false`.

### Rückgabewert

Gibt sich selbst zurück; die durch die angegebenen Vektoren gedrehte [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

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
- CSS {{cssxref("transform")}} Eigenschaft
- CSS {{cssxref("rotate")}} Eigenschaft
- CSS {{cssxref("transform-function")}} Funktionen
  - {{cssxref("transform-function/rotate", "rotate()")}}
  - {{cssxref("transform-function/rotate3d", "rotate3d()")}}
  - {{cssxref("transform-function/rotateX", "rotateX()")}}
  - {{cssxref("transform-function/rotateY", "rotateY()")}}
  - {{cssxref("transform-function/rotateZ", "rotateZ()")}}
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Interface-Methoden
  - [`CanvasRenderingContext2D.rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)
  - [`CanvasRenderingContext2D.transform()`](/de/docs/Web/API/CanvasRenderingContext2D/transform)
  - [`CanvasRenderingContext2D.setTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/setTransform)
  - [`CanvasRenderingContext2D.resetTransform()`](/de/docs/Web/API/CanvasRenderingContext2D/resetTransform)
