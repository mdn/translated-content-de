---
title: "DOMPointReadOnly: matrixTransform()"
short-title: matrixTransform()
slug: Web/API/DOMPointReadOnly/matrixTransform
l10n:
  sourceCommit: 76ca8e9c56e6b86a288c1be3d66aff2435237cf0
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die statische **`matrixTransform()`** Methode des [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly) Interfaces wendet eine als Objekt angegebene Matrixtransformation auf das DOMPointReadOnly-Objekt an, erstellt und gibt ein neues `DOMPointReadOnly`-Objekt zurück. Weder die Matrix noch der Punkt werden verändert.

Wenn die als Parameter übergebene Matrix 2D ist (das [`DOMMatrix.is_2d`](/de/docs/Web/API/DOMMatrix/is_2d) ist `true`), dann ist dies eine 2D-Transformation, und die `z`-Koordinate des Punktes wird `0` und die `w`-Perspektive des Punktes wird `1` sein. Andernfalls handelt es sich um eine 3D-Transformation.

Sie können auch einen neuen `DOMPoint` mit einem Punkt und einer Matrix mit der Methode [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint) erstellen.

## Syntax

```js-nolint
DOMPointReadOnly.matrixTransform( )
DOMPointReadOnly.matrixTransform( matrix )
```

### Parameter

- `matrix`

  - : Ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) oder [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Objekt.

### Rückgabewert

Ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt.

## Beispiele

### 2D-Transformation

In diesem Beispiel wenden wir eine 2D-Matrixtransformation auf ein `DOMPointReadOnly` an und erstellen einen neuen `DOMPoint`:

```js
const originalPoint = new DOMPointReadOnly(10, 20); // DOMPointReadOnly {x: 10, y: 20, z: 0, w: 1}
const matrix = new DOMMatrix([1, 0, 0, 1, 15, 30]);

const transformedPoint = originalPoint.matrixTransform(matrix); // DOMPoint {x: 25, y: 50, z: 0, w: 1}

console.log(transformedPoint.toJSON()); // output: {x: 25, y: 50, z: 0, w: 1}
```

### 3D-Transformation

In diesem Beispiel wenden wir eine 3D-Matrixtransformation auf ein `DOMPointReadOnly` an:

```js
const point = new DOMPointReadOnly(5, 10); // DOMPointReadOnly {x: 5, y: 10, z: 0, w: 1}
const matrix3D = new DOMMatrix().translate(0, 0, 10);
const transformedPoint = point.matrixTransform(matrix3D); // DOMPoint {x: 5, y: 10, z: 10, w: 1}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPoint`](/de/docs/Web/API/DOMPoint)
- [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
- [`DOMMatrixReadOnly.transformPoint()`](/de/docs/Web/API/DOMMatrixReadOnly/transformPoint)
- CSS {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} Funktionen
