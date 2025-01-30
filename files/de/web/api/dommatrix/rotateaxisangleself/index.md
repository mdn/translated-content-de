---
title: "DOMMatrix: rotateAxisAngleSelf() Methode"
short-title: rotateAxisAngleSelf()
slug: Web/API/DOMMatrix/rotateAxisAngleSelf
l10n:
  sourceCommit: e65acfebb0c59023677e0bab3cc56159d2a22ed5
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `rotateAxisAngleSelf()`-Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interfaces ist eine Transformationsmethode, die die Quellmatrix um den gegebenen Vektor und Winkel dreht und die veränderte Matrix zurückgibt.

Um eine Matrix zu drehen, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle), welche eine neue gedrehte Matrix erzeugt und die ursprüngliche unverändert lässt.

## Syntax

```js-nolint
DOMMatrix.rotateAxisAngleSelf()
DOMMatrix.rotateAxisAngleSelf(rotX)
DOMMatrix.rotateAxisAngleSelf(rotX, rotY)
DOMMatrix.rotateAxisAngleSelf(rotX, rotY, rotZ)
DOMMatrix.rotateAxisAngleSelf(rotX, rotY, rotZ, angle)
```

### Parameter

- `rotX`
  - : Eine Zahl; die x-Koordinate des Vektors, der die Rotationsachse bezeichnet. Wenn ungleich null, ist [`is2D`](/de/docs/Web/API/DOMMatrix/is2d) false.
- `rotY` {{optional_inline}}
  - : Eine Zahl; die y-Koordinate des Vektors, der die Rotationsachse bezeichnet. Wenn nicht definiert, wird der `rotX`-Wert verwendet. Wenn ungleich null, ist [`is2D`](/de/docs/Web/API/DOMMatrix/is2d) false.
- `rotZ` {{optional_inline}}
  - : Eine Zahl; die z-Koordinate des Vektors, der die Rotationsachse bezeichnet. Wenn nicht definiert, wird der `rotX`-Wert verwendet.
- `angle` {{optional_inline}}
  - : Eine Zahl; der Drehwinkel um den Achsenvektor, in Grad.

Falls `rotY` und `rotZ` beide fehlen, wird `rotZ` auf den Wert von `rotX` gesetzt und sowohl `rotX` als auch `rotY` sind `0`.

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.rotateAxisAngleSelf(10, 20, 30, 45).toString());
/* "matrix3d(
    0.728, 0.609, -0.315, 0, 
    -0.525, 0.791, 0.315, 0, 
    0.441, -0.063, 0.895, 
    0, 0, 0, 0, 1)" */
console.log(matrix.toString());
/* "matrix3d(
    0.728, 0.609, -0.315, 0, 
    -0.525, 0.791, 0.315, 0, 
    0.441, -0.063, 0.895, 0, 
    0, 0, 0, 1)" */
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle)
- [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf)
- [`DOMMatrix.rotateFromVectorSelf()`](/de/docs/Web/API/DOMMatrix/rotateFromVectorSelf)
- CSS {{cssxref("transform")}} Eigenschaft und {{cssxref("transform-function/rotate3d", "rotate3d()")}} Funktion
- CSS {{cssxref("rotate")}} Eigenschaft
- [CSS Transforms](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Interface und die [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate) Methode
