---
title: "DOMMatrixReadOnly: fromFloat32Array() statische Methode"
short-title: fromFloat32Array()
slug: Web/API/DOMMatrixReadOnly/fromFloat32Array_static
l10n:
  sourceCommit: e8ccddf06c8a9d700661ce2239ecaa4bf88a9529
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`fromFloat32Array()`** statische Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces erstellt ein neues [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Objekt aus einem Array von Einzelpräzisions-Gleitkommawerten (32-Bit).

Wenn das Array 6 Werte hat, ist das Ergebnis eine 2D-Matrix; wenn das Array 16 Werte hat, ist das Ergebnis eine 3D-Matrix. Andernfalls wird eine {{jsxref("TypeError")}}-Ausnahme ausgelöst.

## Syntax

```js-nolint
DOMMatrixReadOnly.fromFloat32Array(array)
```

### Parameter

- `array`
  - : Ein {{jsxref("Float32Array")}} mit 6 oder 16 Elementen in spaltenweiser Anordnung.

### Rückgabewert

Ein [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Objekt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Länge des `array`-Parameters nicht 6 oder 16 beträgt.

## Beispiele

### Erstellen einer 2D-Matrix aus einem Float32Array

Dieses Beispiel erstellt eine 2D-Matrix aus einem 6-Element-`Float32Array`.

```js
const float32Array = new Float32Array([1, 0, 0, 1, 10, 20]);
const matrix2D = DOMMatrixReadOnly.fromFloat32Array(float32Array);

console.log(matrix2D.toString());
// Output: matrix(1, 0, 0, 1, 10, 20)

console.log(matrix2D.is2D);
// Output: true
```

### Erstellen einer 3D-Matrix aus einem Float32Array

Dieses Beispiel erstellt eine 3D-Matrix aus einem 16-Element-`Float32Array`.

```js
const float32Array = new Float32Array([
  1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 10, 20, 30, 1,
]);
const matrix3D = DOMMatrixReadOnly.fromFloat32Array(float32Array);

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
- [`DOMMatrixReadOnly.fromFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/fromFloat64Array_static)
- [`DOMMatrixReadOnly.fromMatrix()`](/de/docs/Web/API/DOMMatrixReadOnly/fromMatrix_static)
