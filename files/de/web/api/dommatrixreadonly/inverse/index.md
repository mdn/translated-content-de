---
title: "DOMMatrixReadOnly: inverse()-Methode"
short-title: inverse()
slug: Web/API/DOMMatrixReadOnly/inverse
l10n:
  sourceCommit: 473a33d6b219ee671239a5e4a322047bee3c5512
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`inverse()`**-Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces erstellt eine neue Matrix, die das Inverse der Originalmatrix ist. Wenn die Matrix nicht invertiert werden kann, werden die Komponenten der neuen Matrix alle auf `NaN` gesetzt und ihre [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D)-Eigenschaft auf `false` gesetzt. Die Originalmatrix bleibt unverändert.

Um die Matrix während der Invertierung zu verändern, siehe [`DOMMatrix.invertSelf()`](/de/docs/Web/API/DOMMatrix/invertSelf).

## Syntax

```js-nolint
  DOMMatrixReadOnly.inverse()
```

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrixReadOnly().rotate(30);
const invertedMatrix = matrix.inverse();
console.log(matrix.toString());
// output: matrix(0.866, 0.5, -0.5, 0.866, 0, 0)
console.log(invertedMatrix.toString());
// output: matrix(0.866, -0.5, 0.5, 0.866, 0, 0)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix.invertSelf()`](/de/docs/Web/API/DOMMatrix/invertSelf)
- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}}-Funktion
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}}-Funktion
