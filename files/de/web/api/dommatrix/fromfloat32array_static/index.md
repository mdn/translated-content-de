---
title: "DOMMatrix: fromFloat32Array() statische Methode"
short-title: fromFloat32Array()
slug: Web/API/DOMMatrix/fromFloat32Array_static
l10n:
  sourceCommit: 359abb1dcdc87d46d7271fc28c53a998a5523bf1
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`fromFloat32Array()`** statische Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interfaces erstellt ein neues [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt, basierend auf einem Array von Gleitkommawerten mit einfacher Genauigkeit (32-Bit).

Wenn das Array 6 Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

## Syntax

```js-nolint
DOMMatrix.fromFloat32Array(array)
```

### Parameter

- `array`
  - : Ein {{jsxref("Float32Array")}} mit 6 oder 16 Elementen in spaltenmajorer Reihenfolge.

### Rückgabewert

Ein [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Länge des `array`-Parameters nicht 6 oder 16 ist.

## Beispiele

### Erstellen einer 2D-Matrix aus einem Float32Array

Dieses Beispiel erstellt eine 2D-Matrix aus einem `Float32Array` mit 6 Elementen.

```js
const float32Array = new Float32Array([1, 0, 0, 1, 10, 20]);
const matrix2D = DOMMatrix.fromFloat32Array(float32Array);

console.log(matrix2D.toString());
// Output: matrix(1, 0, 0, 1, 10, 20)

console.log(matrix2D.is2D);
// Output: true
```

### Erstellen einer 3D-Matrix aus einem Float32Array

Dieses Beispiel erstellt eine 3D-Matrix aus einem `Float32Array` mit 16 Elementen.

```js
const float32Array = new Float32Array([
  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10, 20, 30, 1,
]);
const matrix3D = DOMMatrix.fromFloat32Array(float32Array);

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

- [`DOMMatrix()`](/de/docs/Web/API/DOMMatrix/DOMMatrix)
- [`DOMMatrix.toFloat32Array()`](/de/docs/Web/API/DOMMatrix/toFloat32Array)
- [`DOMMatrix.toFloat64Array()`](/de/docs/Web/API/DOMMatrix/toFloat64Array)
- [`DOMMatrix.fromFloat64Array()`](/de/docs/Web/API/DOMMatrix/fromFloat64Array_static)
- [`DOMMatrix.fromMatrix()`](/de/docs/Web/API/DOMMatrix/fromMatrix_static)
