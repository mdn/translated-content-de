---
title: "DOMMatrixReadOnly: toString() Methode"
short-title: toString()
slug: Web/API/DOMMatrixReadOnly/toString
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("DOM")}}

Der **`toString()`**-{{Glossary("stringifier", "String-Erzeuger")}} des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Interfaces gibt den Wert der Matrix als Zeichenkette in Form einer `matrix()` oder `matrix3d()` CSS-[Transformationsfunktion](/de/docs/Web/CSS/transform-function) zurück; kommagetrennte Listen von 6 oder 16 Koordinatenwerten, die jeweils mit `"matrix(` oder `"matrix3d(` beginnen und mit `)"` enden.

Bei einer 2D-Matrix werden die Elemente [`a` bis `f`](/de/docs/Web/API/DOMMatrix#a) aufgelistet, insgesamt sechs Werte in der Form `matrix(a, b, c, d, e, f)`. Details zu dieser Syntax finden Sie in der {{cssxref("transform-function/matrix", "matrix()")}} CSS-Funktion.

Für eine 3D-Matrix enthält die zurückgegebene Zeichenkette alle [16 Elemente](/de/docs/Web/API/DOMMatrix#m11) und hat die Form `matrix3d(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)`. Einzelheiten zur Syntax dieser 3D-Notation finden Sie in der {{cssxref("transform-function/matrix3d", "matrix3d()")}} CSS-Funktion.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Eine Zeichenkette; die Werte der Liste durch Kommas getrennt, in der Syntax der `matrix()` oder `matrix3d()` Funktion.

## Beispiele

```js
const matrix = new DOMMatrixReadOnly();
console.log(matrix.translate(20, 30).toString()); // matrix(1, 0, 0, 1, 20, 30)
console.log(matrix.translate(30, 40, 50).toString()); // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)
console.log(matrix.skewY(15).skewX(5).rotate(3).translate(20, 50).toString());
// matrix(1.003, 0.321, 0.035, 1.01, 21.816, 56.824)
console.log(
  matrix.skewY(15).skewX(5).rotate(3).translate(20, 50, 60).toString(),
);
// matrix3d(1.003, 0.321, 0, 0, 0.0350, 1.008, 0, 0, 0, 0, 1, 0, 21.816, 56.824, 60, 1)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.toJSON()`](/de/docs/Web/API/DOMMatrixReadOnly/toJSON)
- [`DOMMatrix.setMatrixValue()`](/de/docs/Web/API/DOMMatrix/setMatrixValue)
