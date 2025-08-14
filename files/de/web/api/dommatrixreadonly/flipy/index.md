---
title: "DOMMatrixReadOnly: flipY()-Methode"
short-title: flipY()
slug: Web/API/DOMMatrixReadOnly/flipY
l10n:
  sourceCommit: 94ffd165232b5205418f8aa57127ee0854421db2
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`flipY()`**-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erstellt eine neue Matrix, das Ergebnis der ursprünglichen Matrix, die um die y-Achse gespiegelt wird. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Syntax

```js-nolint
flipY()
```

### Parameter

Keine.

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

### Invertieren eines Dreiecks

In diesem Beispiel enthält das SVG zwei identische [Pfade](/de/docs/Web/SVG/Reference/Attribute/d) in Form eines Dreiecks; beide sind so gezeichnet, dass sie die gleiche Größe und Position haben. Der Ansichtsbereich hat einen negativen y-Wert, der uns Inhalt von beiden Seiten der y-Achse zeigt. Dies ermöglicht es, dass das gespiegelte Dreieck nach der Transformation innerhalb des Ansichtsbereichs bleibt.

#### HTML

```html
<svg height="200" width="100" viewBox="0 -100 100 200">
  <path fill="red" d="M 0 0 L 100 0 L 50 100 Z" />
  <path fill="blue" d="M 0 0 L 100 0 L 50 100 Z" id="flipped" />
</svg>
```

#### JavaScript

Das JavaScript erstellt eine [Identitätsmatrix](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity) und verwendet dann die `flipY()`-Methode, um eine neue Matrix zu erstellen, die dann auf das blaue Dreieck angewendet wird und es entlang der y-Achse invertiert. Das rote Dreieck bleibt unverändert.

```js
const flipped = document.getElementById("flipped");
const matrix = new DOMMatrix();
const flippedMatrix = matrix.flipY();
flipped.setAttribute("transform", flippedMatrix.toString());
```

#### Ergebnis

{{EmbedLiveSample('Inverting a triangle', '', '240')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.flipX()`](/de/docs/Web/API/DOMMatrixReadOnly/flipX)
