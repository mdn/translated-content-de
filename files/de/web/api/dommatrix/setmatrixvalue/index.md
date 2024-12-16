---
title: "DOMMatrix: setMatrixValue() Methode"
short-title: setMatrixValue()
slug: Web/API/DOMMatrix/setMatrixValue
l10n:
  sourceCommit: d320f20554ef3ad1c87d774319d86b334355cdf6
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`setMatrixValue()`** Methode der [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Schnittstelle ersetzt den Inhalt der Matrix durch die durch die angegebenen Transformationen beschriebene Matrix und gibt sich selbst zurück.

## Syntax

```js-nolint
  DOMMatrix.setMatrixValue( transformList )
```

### Parameter

- `transformList`
  - : Die Liste von kommagetrennten Transformationswerten als `DOMString` Matrix.

### Rückgabewert

Gibt sich selbst zurück; die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) mit aktualisierten Werten.

## Beispiele

In diesem Beispiel erstellen wir eine Matrix, wenden eine 3D-Transformation mit der [`DOMMatrix.translateSelf()`](/de/docs/Web/API/DOMMatrix/translateSelf) Methode an, setzen sie mit der `setMatrixValue()` Methode auf eine 2D-Transformation zurück und stellen sie anschließend mit einem weiteren `setMatrixValue()` Methodenaufruf wieder auf eine 3D-Transformation zurück.

```js
const matrix = new DOMMatrix();

console.log(matrix.toString()); // matrix(1, 0, 0, 1, 0, 0)
console.log(matrix.is2D); // true

matrix.translateSelf(30, 40, 50);
console.log(matrix.toString()); // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)
console.log(matrix.is2D); // false

matrix.setMatrixValue("matrix(1, 0, 0, 1, 15, 45)");
console.log(matrix.toString()); // output: matrix(1, 0, 0, 1, 15, 45)
console.log(matrix.is2D); // true

matrix.setMatrixValue(
  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)",
);
console.log(matrix.toString()); // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)
console.log(matrix.is2D); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix.translateSelf()`](/de/docs/Web/API/DOMMatrix/translateSelf)
- [`DOMMatrixReadOnly.is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D)
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} Funktion
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} Funktion
