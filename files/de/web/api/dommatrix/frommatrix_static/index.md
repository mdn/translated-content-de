---
title: "DOMMatrix: fromMatrix() statische Methode"
short-title: fromMatrix()
slug: Web/API/DOMMatrix/fromMatrix_static
l10n:
  sourceCommit: 359abb1dcdc87d46d7271fc28c53a998a5523bf1
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`fromMatrix()`** statische Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interfaces erstellt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt basierend auf einer vorhandenen Matrix oder einem Objekt, das die Werte für seine Eigenschaften bereitstellt.

## Syntax

```js-nolint
DOMMatrix.fromMatrix()
DOMMatrix.fromMatrix(other)
```

### Parameter

- `other` {{optional_inline}}
  - : Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix), [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) oder ein Objekt mit denselben Eigenschaften. Alle Eigenschaften sind standardmäßig `0`. Die Eigenschaften sind:
    - `is2D`
      - : Ein boolescher Wert. `true`, wenn die Matrix als 2D-Matrix erstellt werden soll. Standardmäßig `false`, wenn mindestens einer der Werte `m13`, `m14`, `m23`, `m24`, `m31`, `m32`, `m34` oder `m43` ungleich null ist oder mindestens einer der Werte `m33` oder `m44` nicht 1 ist; ansonsten standardmäßig `true`.
    - `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
      - : Zahlen, die jede Komponente einer 4×4-Matrix darstellen, wobei `m11` bis `m14` die erste Spalte, `m21` bis `m24` die zweite Spalte usw. sind. `m11`, `m22`, `m33` und `m44` standardmäßig `1`, und alle anderen Komponenten standardmäßig `0`.

        Wenn `is2D` explizit auf `true` gesetzt ist, müssen `m13`, `m14`, `m23`, `m24`, `m31`, `m32`, `m34` oder `m43` entweder weggelassen oder auf `0` gesetzt werden, und `m33` und `m44` müssen entweder weggelassen oder auf `1` gesetzt werden.

    - `a`, `b`, `c`, `d`, `e`, `f`
      - : Aliase für `m11`, `m12`, `m21`, `m22`, `m41` und `m42` zur Vereinfachung bei der Initialisierung von 2D-Matrizen. Wenn diese Aliase zusammen mit den entsprechenden `m`-Gegenstücken angegeben werden, müssen ihre Werte gleich sein.

### Rückgabewert

Ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Eigenschaften des bereitgestellten Objekts inkonsistent sind (zum Beispiel, wenn sowohl `a` als auch `m11` angegeben, aber unterschiedliche Werte haben).

## Beispiele

### Erstellen einer Matrix aus einem Objekt

Dieses Beispiel erstellt eine `DOMMatrix`, indem es Matrixwerte in einem Objekt bereitstellt.

```js
const matrix = DOMMatrix.fromMatrix({
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

Dieses Beispiel erstellt eine neue `DOMMatrix` aus einer bestehenden `DOMMatrix`.

```js
const matrix1 = new DOMMatrix([1, 0, 0, 1, 100, 100]);
const matrix2 = DOMMatrix.fromMatrix(matrix1);

console.log(matrix2.toString());
// Output: matrix(1, 0, 0, 1, 100, 100)

// Now we can mutate it
matrix2.translateSelf(50, 25);

console.log(matrix2.toString());
// Output: matrix(1, 0, 0, 1, 150, 125)

console.log(matrix1.toString());
// Output: matrix(1, 0, 0, 1, 100, 100)
```

### Erstellen einer Standard-Einheitsmatrix

Dieses Beispiel zeigt, wie `fromMatrix()` ohne Argumente aufgerufen wird, um eine Einheitsmatrix zu erstellen.

```js
const identityMatrix = DOMMatrix.fromMatrix();

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

- [`DOMMatrix()`](/de/docs/Web/API/DOMMatrix/DOMMatrix)-Konstruktor
- [`DOMMatrix.fromFloat32Array()`](/de/docs/Web/API/DOMMatrix/fromFloat32Array_static)
- [`DOMMatrix.fromFloat64Array()`](/de/docs/Web/API/DOMMatrix/fromFloat64Array_static)
