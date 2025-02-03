---
title: "DOMMatrix: Methode setMatrixValue()"
short-title: setMatrixValue()
slug: Web/API/DOMMatrix/setMatrixValue
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`setMatrixValue()`**-Methode des [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)-Interfaces ersetzt den Inhalt der Matrix durch die durch die angegebenen Transformation oder Transformationen beschriebene Matrix und gibt sich selbst zurück.

## Syntax

```js-nolint
setMatrixValue(transformList)
```

### Parameter

- `transformList`
  - : Ein String. Sein Wert folgt der gleichen Syntax wie der Wert der CSS-Eigenschaft {{cssxref("transform")}}.

### Rückgabewert

Gibt sich selbst zurück; die [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) mit aktualisierten Werten.

## Beispiele

In diesem Beispiel erstellen wir eine Matrix, wenden eine 3D-Transformation mit der [`DOMMatrix.translateSelf()`](/de/docs/Web/API/DOMMatrix/translateSelf)-Methode an, setzen sie mit der `setMatrixValue()`-Methode zurück in eine 2D-Transformation und anschließend zurück in eine 3D-Transformation mit einem weiteren Aufruf der `setMatrixValue()`-Methode.

```js
const matrix = new DOMMatrix();

console.log(matrix.toString()); // matrix(1, 0, 0, 1, 0, 0)
console.log(matrix.is2D); // true

matrix.translateSelf(30, 40, 50);
console.log(matrix.toString()); // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)
console.log(matrix.is2D); // false

matrix.setMatrixValue("matrix(1, 0, 0, 1, 15, 45)");
console.log(matrix.toString()); // output: matrix(1, 0, 0, 1, 15, 45)
console.log(matrix.is2D); // true

matrix.setMatrixValue(
  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)",
);
console.log(matrix.toString()); // matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 30, 40, 50, 1)
console.log(matrix.is2D); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrix.translateSelf()`](/de/docs/Web/API/DOMMatrix/translateSelf)
- [`DOMMatrixReadOnly.is2D`](/de/docs/Web/API/DOMMatrixReadOnly/is2D)
- CSS {{CSSxRef("transform-function/matrix", "matrix()")}} Funktion
- CSS {{CSSxRef("transform-function/matrix3d", "matrix3d()")}} Funktion
