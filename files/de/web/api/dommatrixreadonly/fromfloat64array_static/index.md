---
title: "DOMMatrixReadOnly: fromFloat64Array() statische Methode"
short-title: fromFloat64Array()
slug: Web/API/DOMMatrixReadOnly/fromFloat64Array_static
l10n:
  sourceCommit: e8ccddf06c8a9d700661ce2239ecaa4bf88a9529
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`fromFloat64Array()`** statische Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erstellt ein neues [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Objekt aus einem Array mit Gleitkommazahlen mit doppelter Genauigkeit (64-Bit).

Hat das Array 6 Werte, handelt es sich um eine 2D-Matrix; hat das Array 16 Werte, handelt es sich um eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

## Syntax

```js-nolint
DOMMatrixReadOnly.fromFloat64Array(array)
```

### Parameter

- `array`
  - : Ein {{jsxref("Float64Array")}} mit 6 oder 16 Elementen in spaltenmajorer Reihenfolge.

### Rückgabewert

Ein [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Länge des Parameters `array` nicht 6 oder 16 ist.

## Beispiele

### Erstellen einer 2D-Matrix aus einem Float64Array

Dieses Beispiel erstellt eine 2D-Matrix aus einem `Float64Array` mit 6 Elementen.

```js
const float64Array = new Float64Array([1, 0, 0, 1, 10, 20]);
const matrix2D = DOMMatrixReadOnly.fromFloat64Array(float64Array);

console.log(matrix2D.toString());
// Output: matrix(1, 0, 0, 1, 10, 20)

console.log(matrix2D.is2D);
// Output: true

console.log(matrix2D.e, matrix2D.f);
// Output: 10 20
```

### Erstellen einer 3D-Matrix aus einem Float64Array

Dieses Beispiel erstellt eine 3D-Matrix aus einem `Float64Array` mit 16 Elementen.

```js
const float64Array = new Float64Array([
  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10, 20, 30, 1,
]);
const matrix3D = DOMMatrixReadOnly.fromFloat64Array(float64Array);

console.log(matrix3D.is2D);
// Output: false

console.log(matrix3D.m41, matrix3D.m42, matrix3D.m43);
// Output: 10 20 30
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly()`](/de/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly)
- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
- [`DOMMatrixReadOnly.fromFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat32Array_static)
- [`DOMMatrixReadOnly.fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix_static)
