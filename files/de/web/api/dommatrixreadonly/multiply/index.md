---
title: "DOMMatrixReadOnly: multiply() Methode"
short-title: multiply()
slug: Web/API/DOMMatrixReadOnly/multiply
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`multiply()`**-Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces erstellt und gibt eine neue Matrix zurück, die das Punktprodukt der Matrix und des `otherMatrix`-Parameters ist. Wenn `otherMatrix` weggelassen wird, wird die Matrix mit einer Matrix multipliziert, bei der jedes Element `0` ist, _außer_ der unteren rechten Ecke und dem Element direkt darüber und links davon: `m33` und `m34`. Diese haben den Standardwert `1`. Die ursprüngliche Matrix wird nicht verändert.

Um die Matrix zu mutieren, während Sie sie multiplizieren, siehe [`DOMMatrix.multiplySelf()`](/de/docs/Web/API/DOMMatrix/multiplySelf).

## Syntax

```js-nolint
multiply()
multiply(otherMatrix)
```

### Parameter

- `otherMatrix` {{optional_inline}}
  - : Der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Multiplikator.

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

```js
const matrix = new DOMMatrixReadOnly().translate(13, 21);
const multipliedMatrix = matrix.multiply(matrix);
console.log(matrix.toString()); // output: matrix(1, 0, 0, 1, 13, 21)
console.log(multipliedMatrix.toString()); // output: matrix(1, 0, 0, 1, 26, 42)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix.multiplySelf()`](/de/docs/Web/API/DOMMatrix/multiplySelf)
- [`DOMMatrix.preMultiplySelf()`](/de/docs/Web/API/DOMMatrix/preMultiplySelf)
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} Funktion
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} Funktion
