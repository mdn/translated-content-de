---
title: "DOMMatrixReadOnly: toFloat32Array()-Methode"
short-title: toFloat32Array()
slug: Web/API/DOMMatrixReadOnly/toFloat32Array
l10n:
  sourceCommit: 6ccc59de7fafb81a9cd90078c3380f931ae0af9a
---

{{APIRef("DOM")}}

Die **`toFloat32Array()`**-Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces gibt ein neues {{jsxref("Float32Array")}} zurück, das alle 16 Elemente (`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`) enthält, die die Matrix ausmachen. Die Elemente werden als Gleitkommazahlen mit einfacher Genauigkeit in Spalten-Major-Reihenfolge (colexographical access, oder "colex") im Array gespeichert. (Das heißt, von oben nach unten durch die erste Spalte, dann die zweite Spalte usw.)

Für Gleitkommazahlen mit doppelter Genauigkeit siehe [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array).

## Syntax

```js-nolint
DOMMatrixReadOnly.toFloat32Array()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Float32Array")}}; ein Array der 16 Elementwerte der Matrix.

## Beispiele

### Grundlegende Verwendung

```js
const matrix = new DOMMatrixReadOnly();
const float32 = matrix.translate(20, 30, 50).toFloat32Array();
console.log(float32); // Float64Array(16) [ 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 20, 30, 0, 1 ] ]
console.log(`m41: ${float32[12]}, m42: ${float32[13]}, m43: ${float32[14]}`); // m41: 20, m42: 30, M44: 40
```

### Einzelpräzision

Es gibt mehrere Möglichkeiten, auf die Werte einer Matrix zuzugreifen. Dieses Beispiel dreht eine Matrix um 30 Grad und speichert den gedrehten Zustand als JSON-Objekt mithilfe der [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)-Methode und als Array mit einfacher Genauigkeit mithilfe der `toFloat32Array()`-Methode.

```js
const matrix = new DOMMatrixReadOnly();
const json = matrix.rotate(30).toJSON();
const float32 = matrix.rotate(30).toFloat32Array();

console.log(`a: ${json["a"]}, b: ${json["b"]}`); // a: 0.8660254037844387, b: 0.49999999999999994
console.log(`a: ${float32[0]}, b: ${float32[1]}`); // a: 0.8660253882408142, b: 0.5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.toFloat64Array()`](/de/docs/Web/API/DOMMatrixReadOnly/toFloat64Array)
- [`DOMMatrix.setMatrixValue()`](/de/docs/Web/API/DOMMatrix/setMatrixValue)
