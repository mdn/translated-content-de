---
title: "DOMMatrix: DOMMatrix() Konstruktor"
short-title: DOMMatrix()
slug: Web/API/DOMMatrix/DOMMatrix
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("Geometry Interfaces")}}

Der **`DOMMatrix`** Konstruktor erstellt ein neues
{{domxref("DOMMatrix")}} Objekt, das 4x4 Matrizen darstellt, geeignet für 2D- und 3D-Operationen.

## Syntax

```js-nolint
new DOMMatrix()
new DOMMatrix(init)
```

### Parameter

- `init` {{optional_inline}}

  - : Ein Array von Zahlen, das die Matrix spezifiziert, die Sie erstellen möchten, oder ein CSS-Transformations-String.

    Falls ein Array von Zahlen übergeben wird, hängt das Verhalten von der Länge des Arrays ab:

    - Bei einem Array mit 6 Elementen in der Form `[a, b, c, d, e, f]` wird eine 2D-Matrix erstellt, die mit den angegebenen Komponenten initialisiert wird.
    - Bei einem Array mit 16 Elementen (im Spalten-Major-Order) in der Form `[m11, m12, m13, …, m42, m43, m44]` wird eine 3D-Matrix erstellt, die mit den angegebenen Komponenten initialisiert wird.

## Beispiele

Dieses Beispiel erstellt eine DOMMatrix, um sie als Argument für den Aufruf von
{{domxref("DOMPointReadOnly.matrixTransform()")}} zu verwenden.

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