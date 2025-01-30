---
title: "DOMMatrix: rotateFromVectorSelf() Methode"
short-title: rotateFromVectorSelf()
slug: Web/API/DOMMatrix/rotateFromVectorSelf
l10n:
  sourceCommit: e65acfebb0c59023677e0bab3cc56159d2a22ed5
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `rotateFromVectorSelf()` Methode der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Schnittstelle ist eine veränderbare Transformationsmethode, die eine Matrix verändert, indem sie die Matrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` dreht. Der Rotationswinkel wird durch den Winkel zwischen dem Vektor `(1,0)T` und `(x,y)T` im Uhrzeigersinn bestimmt, oder `(+/-)arctan(y/x)`. Wenn `x` und `y` beide `0` sind, wird der Winkel als `0` festgelegt und die Matrix nicht verändert.

Um eine Matrix ohne Veränderung durch einen Vektor zu rotieren, siehe [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector), welche eine neue rotierte Matrix erstellt, während die ursprüngliche unverändert bleibt.

## Syntax

```js-nolint
DOMMatrix.rotateFromVectorSelf()
DOMMatrix.rotateFromVectorSelf(rotX)
DOMMatrix.rotateFromVectorSelf(rotX, rotY)
```

### Parameter

- `rotX` {{optional_inline}}
  - : Eine Zahl; Die x-Koordinate des x,y Vektors, der den Rotationswinkel bestimmt. Wenn nicht definiert, wird `0` verwendet.
- `rotY` {{optional_inline}}
  - : Eine Zahl; Die y-Koordinate des x,y Vektors, der den Rotationswinkel bestimmt. Wenn nicht definiert, wird `0` verwendet.

### Rückgabewert

Gibt sich selbst zurück; die aktualisierte [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrix(); // create a matrix
console.log(matrix.rotateFromVectorSelf().toString());
// output: matrix(1, 0, 0, 1, 0, 0) (no rotation applied)
console.log(matrix.rotateFromVectorSelf(10, 20).toString());
// output: matrix(0.447, 0.894, -0.894, 0.447, 0, 0)
console.log(matrix.toString());
// output: matrix(0.447, 0.894, -0.894, 0.447, 0, 0) (same as above)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector)
- [`DOMMatrixRead.rotateSelf()`](/de/docs/Web/API/DOMMatrixRead/rotateSelf)
- [`DOMMatrixRead.rotateAxisAngleSelf()`](/de/docs/Web/API/DOMMatrixRead/rotateAxisAngleSelf)
- CSS {{cssxref("transform")}} Eigenschaft und {{cssxref("transform-function/rotate3d", "rotate3d()")}} Funktion
- CSS {{cssxref("rotate")}} Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Schnittstelle und [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate) Methode
