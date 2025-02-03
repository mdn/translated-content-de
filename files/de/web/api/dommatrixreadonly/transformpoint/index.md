---
title: "DOMMatrixReadOnly: transformPoint() Methode"
short-title: transformPoint()
slug: Web/API/DOMMatrixReadOnly/transformPoint
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`transformPoint`** Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Schnittstelle erstellt ein neues [`DOMPoint`](/de/docs/Web/API/DOMPoint) Objekt, indem sie einen angegebenen Punkt durch die Matrix transformiert. Weder die Matrix noch der ursprüngliche Punkt werden verändert.

Sie können auch einen neuen `DOMPoint` erstellen, indem Sie eine Matrix auf einen Punkt mit der [`DOMPointReadOnly.matrixTransform()`](/de/docs/Web/API/DOMPointReadOnly/matrixTransform) Methode anwenden.

## Syntax

```js-nolint
transformPoint()
transformPoint(point)
```

### Parameter

- `point`

  - : Eine Instanz von [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly), oder ein Objekt, das bis zu vier der folgenden Eigenschaften enthält:

    - `x`
      - : Die `x`-Koordinate des Punktes im Raum als Zahl. Der Standardwert ist `0`.
    - `y`
      - : Die `y`-Koordinate des Punktes im Raum als Zahl. Der Standardwert ist `0`.
    - `z`
      - : Die `z`-Koordinate oder Tiefenkoordinate des Punktes im Raum als Zahl. Der Standardwert ist `0`. Positive Werte sind näher beim Benutzer und negative Werte entfernen sich zurück in den Bildschirm.
    - `w`
      - : Der `w` Perspektivwert des Punktes, als Zahl. Der Standard ist `1`.

### Rückgabewert

Ein [`DOMPoint`](/de/docs/Web/API/DOMPoint).

## Beispiele

### 2D-Transformation

```js
const matrix = new DOMMatrixReadOnly();
const point = new DOMPointReadOnly(10, 20); // DOMPointReadOnly {x: 10, y: 20, z: 0, w: 1}
let newPoint = matrix.transformPoint(point); // DOMPoint {x: 10, y: 20, z: 0, w: 1}
```

### 3D-Transformation

In diesem Beispiel wenden wir einen 3D-Punkt auf eine 3D-Matrix an:

```js
// Matrix with translate(22, 37, 10) applied
const matrix3D = new DOMMatrixReadOnly([
  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 22, 37, 10, 1,
]);
const point3D = new DOMPointReadOnly(5, 10, 3); // DOMPointReadOnly {x: 5, y: 10, z: 3, w: 1}
const transformedPoint3D = point3D.matrixTransform(matrix3D); // DOMPoint {x: 27, y: 47, z: 13, w: 1}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPointReadOnly.matrixTransform()`](/de/docs/Web/API/DOMPointReadOnly/matrixTransform)
- CSS {{cssxref("transform-function/matrix", "matrix()")}} und {{cssxref("transform-function/matrix3d", "matrix3d()")}} Funktionen
