---
title: "DOMMatrix: DOMMatrix() Konstruktor"
short-title: DOMMatrix()
slug: Web/API/DOMMatrix/DOMMatrix
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("Geometry Interfaces")}}

Der **`DOMMatrix`** Konstruktor erstellt ein neues
[`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Objekt, das 4x4 Matrizen darstellt, geeignet für 2D- und 3D-Operationen.

## Syntax

```js-nolint
new DOMMatrix()
new DOMMatrix(init)
```

### Parameter

- `init` {{optional_inline}}

  - : Ein Array von Zahlen, das die Matrix spezifiziert, die Sie erstellen möchten, oder ein CSS-Transform-String.

    Falls ein Zahlen-Array übergeben wird, hängt das Verhalten von der Länge des Arrays ab:

    - für ein 6-Elemente-Array mit Komponenten in der Form `[a, b, c, d, e, f]` wird eine 2D-Matrix erstellt, initialisiert mit den bereitgestellten Komponenten.
    - für ein 16-Elemente-Array mit Komponenten (in Spalten-Major-Order) in der Form `[m11, m12, m13, …, m42, m43, m44]` wird eine 3D-Matrix erstellt, initialisiert mit den bereitgestellten Komponenten.

## Beispiele

Dieses Beispiel erstellt eine DOMMatrix, die als Argument für den Aufruf von
[`DOMPointReadOnly.matrixTransform()`](/de/docs/Web/API/DOMPointReadOnly/matrixTransform) verwendet werden soll.

```js
const point = new DOMPoint(5, 4);
const scaleX = 2;
const scaleY = 3;
const translateX = 12;
const translateY = 8;
const angle = Math.PI / 2;
const matrix = new DOMMatrix([
  Math.cos(angle) * scaleX,
  Math.sin(angle) * scaleX,
  -Math.sin(angle) * scaleY,
  Math.cos(angle) * scaleY,
  translateX,
  translateY,
]);
const transformedPoint = point.matrixTransform(matrix);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
