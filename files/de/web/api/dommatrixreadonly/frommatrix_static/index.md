---
title: "DOMMatrixReadOnly: fromMatrix() statische Methode"
short-title: fromMatrix()
slug: Web/API/DOMMatrixReadOnly/fromMatrix_static
l10n:
  sourceCommit: e8ccddf06c8a9d700661ce2239ecaa4bf88a9529
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`fromMatrix()`** statische Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces erstellt ein neues [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Objekt basierend auf einer vorhandenen Matrix oder einem Objekt, das die Werte für seine Eigenschaften liefert.

## Syntax

```js-nolint
DOMMatrixReadOnly.fromMatrix()
DOMMatrixReadOnly.fromMatrix(other)
```

### Parameter

- `other` {{optional_inline}}
  - : Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) oder ein anderes Objekt mit den gleichen Eigenschaften. Alle Eigenschaften sind standardmäßig `0`. Die Eigenschaften sind:
    - `is2D`
      - : Ein boolescher Wert. `true`, wenn die Matrix als 2D-Matrix erstellt werden soll. Standardmäßig `false`, wenn mindestens eines der Elemente `m13`, `m14`, `m23`, `m24`, `m31`, `m32`, `m34` oder `m43` ungleich null ist oder mindestens eines der Elemente `m33` oder `m44` nicht gleich 1 ist; sonst standardmäßig `true`.
    - `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
      - : Zahlen, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte sind, `m21` bis `m24` die zweite Spalte und so weiter. `m11`, `m22`, `m33` und `m44` sind standardmäßig `1`, und alle anderen Komponenten sind standardmäßig `0`.

        Wenn `is2D` explizit auf `true` gesetzt ist, müssen `m13`, `m14`, `m23`, `m24`, `m31`, `m32`, `m34` oder `m43` entweder weggelassen oder auf `0` gesetzt werden, und `m33` und `m44` müssen entweder weggelassen oder auf `1` gesetzt werden.

    - `a`, `b`, `c`, `d`, `e`, `f`
      - : Aliase für `m11`, `m12`, `m21`, `m22`, `m41` und `m42` für Bequemlichkeit beim Initialisieren von 2D-Matrizen. Wenn diese Aliase zusammen mit den `m` Gegenstücken bereitgestellt werden, müssen ihre Werte gleich sein.

### Rückgabewert

Ein [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die bereitgestellten Eigenschaften des Objekts inkonsistent sind (z. B. wenn sowohl `a` als auch `m11` bereitgestellt werden, aber unterschiedliche Werte haben).

## Beispiele

### Erstellen einer Matrix aus einem Objekt

Dieses Beispiel erstellt eine `DOMMatrixReadOnly`, indem Matrixwerte in einem Objekt bereitgestellt werden.

```js
const matrix = DOMMatrixReadOnly.fromMatrix({
  a: 1,
  b: 0,
  c: 0,
  d: 1,
  e: 50,
  f: 50,
  is2D: true,
});

console.log(matrix.toString());
// Output: matrix(1, 0, 0, 1, 50, 50)

console.log(matrix.is2D);
// Output: true
```

### Erstellen einer Matrix aus einer bestehenden Matrix

Dieses Beispiel erstellt eine neue `DOMMatrixReadOnly` aus einer bestehenden `DOMMatrixReadOnly`.

```js
const matrix1 = new DOMMatrixReadOnly([1, 0, 0, 1, 100, 100]);
const matrix2 = DOMMatrixReadOnly.fromMatrix(matrix1);

console.log(matrix2.toString());
// Output: matrix(1, 0, 0, 1, 100, 100)
```

### Erstellen einer standardmäßigen Identitätsmatrix

Dieses Beispiel zeigt, wie `fromMatrix()` ohne Argumente eine Identitätsmatrix erstellt.

```js
const identityMatrix = DOMMatrixReadOnly.fromMatrix();

console.log(identityMatrix.toString());
// Output: matrix(1, 0, 0, 1, 0, 0)

console.log(identityMatrix.isIdentity);
// Output: true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)-Konstruktor
- [`DOMMatrixReadOnly.fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array_static)
- [`DOMMatrixReadOnly.fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array_static)
