---
title: "DOMMatrix: rotateFromVectorSelf()-Methode"
short-title: rotateFromVectorSelf()
slug: Web/API/DOMMatrix/rotateFromVectorSelf
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `rotateFromVectorSelf()`-Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interfaces ist eine veränderliche Transformationsmethode, die eine Matrix durch Drehung der Matrix um den Winkel zwischen dem angegebenen Vektor und `(1, 0)` modifiziert. Der Drehwinkel wird durch den Winkel zwischen dem Vektor `(1,0)T` und `(x,y)T` im Uhrzeigersinn bestimmt oder `(+/-)arctan(y/x)`. Wenn `x` und `y` beide `0` sind, wird der Winkel als `0` angegeben und die Matrix wird nicht verändert.

Um eine Matrix von einem Vektor zu drehen, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.rotateFromVector()`](/de/docs/Web/API/DOMMatrixReadOnly/rotateFromVector), die eine neue gedrehte Matrix erstellt und die ursprüngliche unverändert lässt.

## Syntax

```js-nolint
rotateFromVectorSelf()
rotateFromVectorSelf(rotX)
rotateFromVectorSelf(rotX, rotY)
```

### Parameter

- `rotX` {{optional_inline}}
  - : Eine Zahl; Die x-Koordinate des x,y Vektors, der den Drehwinkel bestimmt. Wenn nicht definiert, wird `0` verwendet.
- `rotY` {{optional_inline}}
  - : Eine Zahl; Die y-Koordinate des x,y Vektors, der den Drehwinkel bestimmt. Wenn nicht definiert, wird `0` verwendet.

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
- [`DOMMatrix.rotateSelf()`](/de/docs/Web/API/DOMMatrix/rotateSelf)
- [`DOMMatrix.rotateAxisAngleSelf()`](/de/docs/Web/API/DOMMatrix/rotateAxisAngleSelf)
- CSS {{cssxref("transform")}} Eigenschaft und {{cssxref("transform-function/rotate3d", "rotate3d()")}} Funktion
- CSS {{cssxref("rotate")}} Eigenschaft
- [CSS-Transformationen](/de/docs/Web/CSS/CSS_transforms) Modul
- SVG [`transform`](/de/docs/Web/SVG/Reference/Attribute/transform) Attribut
- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Interface und [`rotate()`](/de/docs/Web/API/CanvasRenderingContext2D/rotate) Methode
