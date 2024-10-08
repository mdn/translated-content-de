---
title: "DOMMatrix: DOMMatrix() Konstruktor"
short-title: DOMMatrix()
slug: Web/API/DOMMatrix/DOMMatrix
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Der **`DOMMatrix`** Konstruktor erstellt ein neues
[`DOMMatrix`](/de/docs/Web/API/DOMMatrix) Objekt, das 4x4 Matrizen darstellt, geeignet für 2D- und 3D-Operationen.

## Syntax

```js-nolint
new DOMMatrix()
new DOMMatrix(init)
```

### Parameter

- `init` {{optional_inline}}

  - : Ein Array von Zahlen, das die Matrix angibt, die Sie erstellen möchten, oder ein CSS-Transformations-String.

    Falls ein Array von Zahlen übergeben wird, hängt das Verhalten von der Länge des Arrays ab:

    - Für ein 6-Elemente-Array von Komponenten in der Form `[a, b, c, d, e, f]` wird eine 2D-Matrix erstellt und mit den bereitgestellten Komponenten initialisiert.
    - Für ein 16-Elemente-Array von Komponenten (in Spalten-Major-Ordnung) in der Form `[m11, m12, m13, …, m42, m43, m44]` wird eine 3D-Matrix erstellt und mit den bereitgestellten Komponenten initialisiert.

## Beispiele

Dieses Beispiel erstellt eine DOMMatrix, die als Argument für den Aufruf von
[`DOMPointReadOnly.matrixTransform()`](/de/docs/Web/API/DOMPointReadOnly/matrixTransform) verwendet wird.

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
