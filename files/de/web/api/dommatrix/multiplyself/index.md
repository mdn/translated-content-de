---
title: "DOMMatrix: multiplySelf()-Methode"
short-title: multiplySelf()
slug: Web/API/DOMMatrix/multiplySelf
l10n:
  sourceCommit: 5e7036455cd79e30e9953fb29f22c691cb8326e4
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`multiplySelf()`**-Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interfaces multipliziert eine Matrix mit dem `otherMatrix`-Parameter und berechnet das Punktprodukt der ursprünglichen Matrix und der angegebenen Matrix: `A⋅B`. Wenn keine Matrix als Multiplikator angegeben ist, wird die Matrix mit einer Matrix multipliziert, in der jedes Element `0` ist, _außer_ der unteren rechten Ecke und dem Element direkt darüber und links davon: `m33` und `m34`. Diese haben den Standardwert `1`.

Um eine Matrix zu multiplizieren, ohne sie zu verändern, siehe [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply).

## Syntax

```js-nolint
  DOMMatrix.multiplySelf()
  DOMMatrix.multiplySelf(otherMatrix)
```

### Parameter

- `otherMatrix` {{optional_inline}}
  - : Der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Multiplikator.

### Rückgabewert

Gibt sich selbst zurück; die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), aktualisiert mit den Ergebnissen der angewendeten Multiplikationen.

## Beispiele

```js
const matrix = new DOMMatrix().rotate(30);

console.log(matrix.toString());
// output: matrix(0.866, 0.5, -0.5, 0.866, 0, 0)

matrix.multiplySelf(matrix);

console.log(matrix.toString());
// output: matrix(0.5, 0.866, -0.866, 0.5, 0, 0) (a 60deg rotation)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
- [`DOMMatrix.preMultiplySelf()`](/de/docs/Web/API/DOMMatrix/preMultiplySelf)
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} Funktion
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} Funktion
