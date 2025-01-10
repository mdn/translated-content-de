---
title: "DOMMatrixReadOnly: multiply()-Methode"
short-title: multiply()
slug: Web/API/DOMMatrixReadOnly/multiply
l10n:
  sourceCommit: 5e7036455cd79e30e9953fb29f22c691cb8326e4
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`multiply()`**-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erstellt und gibt eine neue Matrix zurück, die das Punktprodukt der aktuellen Matrix und des `otherMatrix`-Parameters ist. Wenn `otherMatrix` weggelassen wird, wird die Matrix mit einer Matrix multipliziert, in der jedes Element `0` ist, _außer_ in der unteren rechten Ecke und dem Element direkt darüber und links: `m33` und `m34`. Diese haben den Standardwert `1`. Die ursprüngliche Matrix wird nicht verändert.

Um die Matrix während der Multiplikation zu verändern, siehe [`DOMMatrix.multiplySelf()`](/de/docs/Web/API/DOMMatrix/multiplySelf).

## Syntax

```js-nolint
  DOMMatrixReadOnly.multiply()
  DOMMatrixReadOnly.multiply(otherMatrix)
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
- [`DOMMatrixReadOnly.preMultiply()`](/de/docs/Web/API/DOMMatrixReadOnly/preMultiply)
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} Funktion
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} Funktion
