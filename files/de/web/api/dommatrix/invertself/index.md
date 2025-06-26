---
title: "DOMMatrix: invertSelf() Methode"
short-title: invertSelf()
slug: Web/API/DOMMatrix/invertSelf
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`invertSelf()`** Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Interfaces invertiert die ursprüngliche Matrix. Wenn die Matrix nicht invertiert werden kann, werden die neuen Komponenten der Matrix alle auf `NaN` gesetzt und ihre [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) Eigenschaft wird auf `false` gesetzt.

Um eine Matrix zu invertieren, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)

## Syntax

```js-nolint
invertSelf()
```

### Parameter

Keine.

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

In diesem Beispiel erstellen wir eine Matrix mit einer Rotation von 30 Grad. Dann invertieren wir sie, was zu einer Rotation von -30 Grad führt.

```js
const matrix = new DOMMatrix().rotate(30);
console.log(matrix.toString());
// output: matrix(0.866, 0.5, -0.5, 0.866, 0, 0)
matrix.invertSelf();
console.log(matrix.toString());
// output: matrix(0.866, -0.5, 0.5, 0.866, 0, 0)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.inverse()`](/de/docs/Web/API/DOMMatrixReadOnly/inverse)
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} Funktion
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} Funktion
