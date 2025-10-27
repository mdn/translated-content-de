---
title: "DOMMatrixReadOnly: DOMMatrixReadOnly() Konstruktor"
short-title: DOMMatrixReadOnly()
slug: Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly
l10n:
  sourceCommit: 359abb1dcdc87d46d7271fc28c53a998a5523bf1
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Der **`DOMMatrixReadOnly()`** Konstruktor erstellt ein neues [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Objekt, das eine 4x4-Matrix repräsentiert und für 2D- und 3D-Operationen geeignet ist.

## Syntax

```js-nolint
new DOMMatrixReadOnly()
new DOMMatrixReadOnly(initString)
new DOMMatrixReadOnly(initArray)
```

### Parameter

- `initString` {{optional_inline}}
  - : Ein String, der eine 2D- oder 3D-Matrix im CSS {{cssxref("transform-function/matrix", "matrix()")}} oder {{cssxref("transform-function/matrix3d", "matrix3d()")}} Format darstellt.
- `initArray` {{optional_inline}}
  - : Ein Array, das entweder 6 oder 16 Zahlen in spaltenorientierter Reihenfolge enthält. Andere Array-Längen werfen einen {{jsxref("TypeError")}}.
    - Ein Array mit 6 Elementen wird als die Matrixkomponenten `[m11, m12, m21, m22, m41, m42]` interpretiert und erstellt eine 2D-Matrix.
    - Ein Array mit 16 Elementen wird als die Matrixkomponenten `[m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44]` interpretiert und erstellt eine 3D-Matrix.

    Wenn dieses Argument weggelassen wird, wird eine Einheitsmatrix erstellt, also äquivalent zu `[1, 0, 0, 1, 0, 0]`.

    Wenn dieses Argument als {{jsxref("Float32Array")}} oder {{jsxref("Float64Array")}} bereitgestellt wird, sollten Sie stattdessen die performanteren statischen Methoden [`DOMMatrixReadOnly.fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array_static) oder [`DOMMatrixReadOnly.fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array_static) verwenden.

### Rückgabewert

Ein neues [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird geworfen, wenn das Argument weder ein String noch ein Array mit einer Länge ungleich 6 oder 16 ist.
- {{jsxref("SyntaxError")}}
  - : Wird geworfen, wenn das String-Argument nicht im gültigen CSS {{cssxref("transform-function/matrix", "matrix()")}} oder {{cssxref("transform-function/matrix3d", "matrix3d()")}} Format vorliegt.

## Beispiele

### Erstellen einer DOMMatrixReadOnly aus einem String

```js
const matrixFromString = new DOMMatrixReadOnly("matrix(1, 0, 0, 1, 10, 20)");
console.log(matrixFromString.toJSON());
// Output: {a: 1, b: 0, c: 0, d: 1, e: 10, f: 20}
```

### Erstellen einer DOMMatrixReadOnly aus einem Array

```js
const matrixFromArray = new DOMMatrixReadOnly([1, 0, 0, 1, 10, 20]);
console.log(matrixFromArray.toJSON());
// Output: {a: 1, b: 0, c: 0, d: 1, e: 10, f: 20}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array_static)
- [`DOMMatrixReadOnly.fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array_static)
- [`DOMMatrixReadOnly.fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix_static)
