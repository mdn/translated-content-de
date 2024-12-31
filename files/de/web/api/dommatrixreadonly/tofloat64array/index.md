---
title: "DOMMatrixReadOnly: Methode toFloat64Array()"
short-title: toFloat64Array()
slug: Web/API/DOMMatrixReadOnly/toFloat64Array
l10n:
  sourceCommit: 6ccc59de7fafb81a9cd90078c3380f931ae0af9a
---

{{APIRef("DOM")}}

Die **`toFloat64Array()`**-Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces gibt ein neues {{jsxref("Float64Array")}} zurück, das alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) enthält, die die Matrix bilden. Die Elemente werden als Gleitkommazahlen mit doppelter Genauigkeit in spaltenweiser (colexographical access, oder "colex") Reihenfolge in das Array gespeichert. (Mit anderen Worten, von oben nach unten in der ersten Spalte, dann die zweite Spalte und so weiter.)

## Syntax

```js-nolint
DOMMatrixReadOnly.toFloat64Array()
```

### Parameter

Keine.

### Rückgabe

Ein {{jsxref("Float64Array")}}; ein Array mit den 16 Elementwerten der Matrix.

## Beispiele

```js
const matrix = new DOMMatrixReadOnly();
let float64 = matrix.translate(20, 30, 50).toFloat64Array();
console.log(float64); // Float64Array(16) [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 30, 0, 1 ] ]
console.log(`m41: ${float64[12]}, m42: ${float64[13]}, m43: ${float64[14]}`); // m41: 20, m42: 30, M44: 40

float64 = matrix.rotate(30).toFloat64Array();
console.log(float64);
console.log(`m11: ${float64[0]}, m12: ${float64[1]}`); // m11: 0.8660254037844387, m12: 0.49999999999999994
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.toFloat32Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat32Array)
- [`DOMMatrix.setMatrixValue()`](/de/docs/Web/API/DOMMatrix/setMatrixValue)
