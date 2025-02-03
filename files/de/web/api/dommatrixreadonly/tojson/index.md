---
title: "DOMMatrixReadOnly: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/DOMMatrixReadOnly/toJSON
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}

Die **`toJSON()`**-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erstellt und gibt ein {{jsxref("JSON")}}-Objekt zurück. Das JSON-Objekt enthält die 2D-Matrixelemente `a` bis `f`, die 16 Elemente der 4X4 3D-Matrix, `m[1-4][1-4]`, die boolesche Eigenschaft [`is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D) und die boolesche Eigenschaft [`isIdentity`](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity).

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt; eine JSON-Darstellung des `DOMMatrixReadOnly`-Objekts.

## Beispiele

```js
const matrix = new DOMMatrixReadOnly();
console.log(matrix.translate(20, 30).toJSON());
/*
{
    "a": 1,
    "b": 0,
    "c": 0,
    "d": 1,
    "e": 20,
    "f": 30,
    "m11": 1,
    "m12": 0,
    "m13": 0,
    "m14": 0,
    "m21": 0,
    "m22": 1,
    "m23": 0,
    "m24": 0,
    "m31": 0,
    "m32": 0,
    "m33": 1,
    "m34": 0,
    "m41": 20,
    "m42": 30,
    "m43": 0,
    "m44": 1,
    "is2D": true,
    "isIdentity": false
}
*/
console.log(matrix.translate(22, 55, 66).toJSON());
/*
{
    "a": 1,
    "b": 0,
    "c": 0,
    "d": 1,
    "e": 22,
    "f": 55,
    "m11": 1,
    "m12": 0,
    "m13": 0,
    "m14": 0,
    "m21": 0,
    "m22": 1,
    "m23": 0,
    "m24": 0,
    "m31": 0,
    "m32": 0,
    "m33": 1,
    "m34": 0,
    "m41": 22,
    "m42": 55,
    "m43": 66,
    "m44": 1,
    "is2D": false,
    "isIdentity": false
}
*/
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.toString()`](/de/docs/Web/API/DOMMatrixReadOnly/toString)
- [`DOMMatrix.setMatrixValue()`](/de/docs/Web/API/DOMMatrix/setMatrixValue)
