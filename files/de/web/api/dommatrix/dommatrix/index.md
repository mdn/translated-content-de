---
title: "DOMMatrix: DOMMatrix()-Konstruktor"
short-title: DOMMatrix()
slug: Web/API/DOMMatrix/DOMMatrix
l10n:
  sourceCommit: 359abb1dcdc87d46d7271fc28c53a998a5523bf1
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Der **`DOMMatrix()`**-Konstruktor erstellt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt, das eine 4x4-Matrix darstellt und für 2D- und 3D-Operationen geeignet ist.

## Syntax

```js-nolint
new DOMMatrix()
new DOMMatrix(initString)
new DOMMatrix(initArray)
```

### Parameter

- `initString` {{optional_inline}}
  - : Ein String, der eine 2D- oder 3D-Matrix im CSS-Format {{cssxref("transform-function/matrix", "matrix()")}} oder {{cssxref("transform-function/matrix3d", "matrix3d()")}} darstellt.
- `initArray` {{optional_inline}}
  - : Ein Array, das entweder 6 oder 16 Zahlen im spalten-major Orden enthält. Andere Array-Längen werfen einen {{jsxref("TypeError")}}.
    - Ein Array mit 6 Elementen wird als die Matrixkomponenten `[m11, m12, m21, m22, m41, m42]` interpretiert und erstellt eine 2D-Matrix.
    - Ein Array mit 16 Elementen wird als die Matrixkomponenten `[m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44]` interpretiert und erstellt eine 3D-Matrix.

    Wenn dieses Argument weggelassen wird, wird eine Einheitsmatrix erstellt, d.h. äquivalent zu `[1, 0, 0, 1, 0, 0]`.

    Wenn dieses Argument als {{jsxref("Float32Array")}} oder {{jsxref("Float64Array")}} angegeben wird, sollten Sie die leistungsfähigeren statischen Methoden [`DOMMatrix.fromFloat32Array()`](/de/docs/Web/API/DOMMatrix/fromFloat32Array_static) oder [`DOMMatrix.fromFloat64Array()`](/de/docs/Web/API/DOMMatrix/fromFloat64Array_static) stattdessen in Betracht ziehen.

### Rückgabewert

Ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn das Argument kein String oder ein Array mit einer anderen Länge als 6 oder 16 ist.
- {{jsxref("SyntaxError")}}
  - : Wird geworfen, wenn das String-Argument nicht im gültigen CSS-Format {{cssxref("transform-function/matrix", "matrix()")}} oder {{cssxref("transform-function/matrix3d", "matrix3d()")}} ist.

## Beispiele

Dieses Beispiel erstellt eine DOMMatrix, um sie als Argument für den Aufruf von [`DOMPointReadOnly.matrixTransform()`](/de/docs/Web/API/DOMPointReadOnly/matrixTransform) zu verwenden.

```js
const point = new DOMPoint(5, 4);
const scaleX = 2;
const scaleY = 3;
const translateX = 12;
const translateY = 8;
const angle = Math.PI / 2;
const matrix = new DOMMatrix([
  Math.cos(angle) * scaleX,
  Math.sin(angle) * scaleX,
  -Math.sin(angle) * scaleY,
  Math.cos(angle) * scaleY,
  translateX,
  translateY,
]);
const transformedPoint = point.matrixTransform(matrix);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix.fromFloat32Array()`](/de/docs/Web/API/DOMMatrix/fromFloat32Array_static)
- [`DOMMatrix.fromFloat64Array()`](/de/docs/Web/API/DOMMatrix/fromFloat64Array_static)
- [`DOMMatrix.fromMatrix()`](/de/docs/Web/API/DOMMatrix/fromMatrix_static)
