---
title: "DOMMatrixReadOnly: toString()-Methode"
short-title: toString()
slug: Web/API/DOMMatrixReadOnly/toString
l10n:
  sourceCommit: aef2b0dde53e2b5afa6dedd3e3693a85d2782b3e
---

{{APIRef("DOM")}}

Der **`toString()`** {{Glossary("stringifier", "Stringifier")}} des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces gibt den Wert der Matrix als Zeichenkette in der Form einer `matrix()`- oder `matrix3d()`-CSS-[Transform-Funktion](/de/docs/Web/CSS/transform-function) zurück; durch Kommas getrennte Listen von 6 oder 16 Koordinatenwerten, vorangestellt mit `"matrix(` oder `"matrix3d(` und abgeschlossen mit `)"`.

Für eine 2D-Matrix werden die Elemente [`a` bis `f`](/de/docs/Web/API/DOMMatrix#a) aufgelistet, insgesamt sechs Werte und die Form `matrix(a, b, c, d, e, f)`. Siehe die {{cssxref("transform-function/matrix", "matrix()")}} CSS-Funktion für Details zur Syntax.

Für eine 3D-Matrix enthält die zurückgegebene Zeichenkette alle [16 Elemente](/de/docs/Web/API/DOMMatrix#m11) und nimmt die Form `matrix3d(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)` an. Siehe die CSS-{{cssxref("transform-function/matrix3d", "matrix3d()")}}-Funktion für Details zur Syntax der 3D-Notation.

## Syntax

```js-nolint
DOMMatrixReadOnly.toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String; die Werte der Liste, durch Kommas getrennt, innerhalb der `matrix()`- oder `matrix3d()`-Funktionssyntax.

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
