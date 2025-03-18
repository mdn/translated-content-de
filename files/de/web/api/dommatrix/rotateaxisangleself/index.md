---
title: "DOMMatrix: Methode rotateAxisAngleSelf()"
short-title: rotateAxisAngleSelf()
slug: Web/API/DOMMatrix/rotateAxisAngleSelf
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `rotateAxisAngleSelf()`-Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interfaces ist eine Transformationsmethode, die die Ursprungsmatrix um den gegebenen Vektor und Winkel dreht und die veränderte Matrix zurückgibt.

Um eine Matrix zu drehen, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.rotateAxisAngle()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateAxisAngle), die eine neue gedrehte Matrix erstellt, während das Original unverändert bleibt.

## Syntax

```js-nolint
rotateAxisAngleSelf()
rotateAxisAngleSelf(rotX)
rotateAxisAngleSelf(rotX, rotY)
rotateAxisAngleSelf(rotX, rotY, rotZ)
rotateAxisAngleSelf(rotX, rotY, rotZ, angle)
```

### Parameter

- `rotX`
  - : Eine Zahl; die x-Koordinate des Vektors, der die Rotationsachse angibt. Wenn ungleich null, ist [`is2D`](/de/docs/Web/API/DOMMatrixReadonly/is2D) false.
- `rotY` {{optional_inline}}
  - : Eine Zahl; die y-Koordinate des Vektors, der die Rotationsachse angibt. Wenn nicht definiert, wird der Wert von `rotX` verwendet. Wenn ungleich null, ist [`is2D`](/de/docs/Web/API/DOMMatrixReadonly/is2D) false.
- `rotZ` {{optional_inline}}
  - : Eine Zahl; die z-Koordinate des Vektors, der die Rotationsachse angibt. Wenn nicht definiert, wird der Wert von `rotX` verwendet.
- `angle` {{optional_inline}}
  - : Eine Zahl; der Winkel der Rotation um den Achsenvektor, in Grad.

Wenn `rotY` und `rotZ` beide fehlen, wird `rotZ` auf den Wert von `rotX` gesetzt und sowohl `rotX` als auch `rotY` sind `0`.

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
- CSS {{cssxref("transform")}}-Eigenschaft und {{cssxref("transform-function/rotate3d", "rotate3d()")}}-Funktion
- CSS {{cssxref("rotate")}}-Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms)-Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform)-Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Interface und [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate)-Methode
