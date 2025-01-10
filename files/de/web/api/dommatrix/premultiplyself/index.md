---
title: "DOMMatrix: preMultiplySelf() Methode"
short-title: preMultiplySelf()
slug: Web/API/DOMMatrix/preMultiplySelf
l10n:
  sourceCommit: 5e7036455cd79e30e9953fb29f22c691cb8326e4
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`preMultiplySelf()`** Methode der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Schnittstelle modifiziert die Matrix, indem sie vor-multipliziert wird mit der angegebenen `DOMMatrix`. Dies entspricht dem Punktprodukt `B⋅A`, wobei die Matrix `A` die Quellmatrix ist und `B` die als Eingabe für die Methode angegebene Matrix ist. Wenn keine Matrix als Multiplikator angegeben wird, wird die Matrix mit einer Matrix multipliziert, bei der jedes Element `0` ist, _außer_ der unteren rechten Ecke und dem Element direkt darüber und links daneben: `m33` und `m34`. Diese haben den Standardwert `1`.

## Syntax

```js-nolint
  DOMMatrix.preMultiplySelf()
  DOMMatrix.preMultiplySelf(otherMatrix)
```

### Parameter

- `otherMatrix` {{optional_inline}}
  - : Der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Multiplikator.

### Rückgabewert

Gibt sich selbst zurück; eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), die auf die Ergebnisse der angewandten Multiplikationen aktualisiert wurde.

## Beispiele

```js
const matrix = new DOMMatrix().translate(3, 22);
const otherMatrix = new DOMMatrix().translateSelf(15, 45);

console.log(matrix.toString()); // output: matrix(1, 0, 0, 1, 3, 22)
console.log(otherMatrix.toString()); // output: matrix(1, 0, 0, 1, 15, 45)

matrix.preMultiplySelf(otherMatrix);

console.log(matrix.toString()); // output: matrix(1, 0, 0, 1, 18, 67)
console.log(otherMatrix.toString()); // output: matrix(1, 0, 0, 1, 15, 45)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix.multiplySelf()`](/de/docs/Web/API/DOMMatrix/multiplySelf)
- [`DOMMatrixReadOnly.multiply()`](/de/docs/Web/API/DOMMatrixReadOnly/multiply)
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} Funktion
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} Funktion
