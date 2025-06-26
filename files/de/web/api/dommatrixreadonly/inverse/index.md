---
title: "DOMMatrixReadOnly: inverse()-Methode"
short-title: inverse()
slug: Web/API/DOMMatrixReadOnly/inverse
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`inverse()`**-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erstellt eine neue Matrix, die das Inverse der ursprünglichen Matrix ist. Wenn die Matrix nicht invertiert werden kann, werden alle Komponenten der neuen Matrix auf `NaN` gesetzt und ihre [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D)-Eigenschaft wird auf `false` gesetzt. Die ursprüngliche Matrix wird nicht verändert.

Um die Matrix bei der Invertierung zu modifizieren, siehe [`DOMMatrix.invertSelf()`](/de/docs/Web/API/DOMMatrix/invertSelf).

## Syntax

```js-nolint
inverse()
```

### Parameter

Keine.

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
