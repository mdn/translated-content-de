---
title: "DOMMatrixReadOnly: flipY()-Methode"
short-title: flipY()
slug: Web/API/DOMMatrixReadOnly/flipY
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`flipY()`**-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erstellt eine neue Matrix als Ergebnis der ursprünglichen Matrix, die an der y-Achse gespiegelt wird. Dies ist gleichbedeutend mit der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

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

In diesem Beispiel enthält das SVG zwei identische [Pfade](/de/docs/Web/SVG/Reference/Attribute/d) in Form eines Dreiecks; sie sind beide so gezeichnet, dass sie die gleiche Größe und Position haben. Das Ansichtsfenster hat einen negativen y-Wert, der Inhalte von beiden Seiten der y-Achse zeigt. Dies ermöglicht es, dass das gespiegelte Dreieck nach der Transformation innerhalb des Ansichtsbereichs bleibt.

#### HTML

```html
<svg height="200" width="100" viewBox="0 -100 100 200">
  <path fill="red" d="M 0 0 L 100 0 L 50 100 Z" />
  <path fill="blue" d="M 0 0 L 100 0 L 50 100 Z" id="flipped" />
</svg>
```

#### JavaScript

Der JavaScript-Code erstellt eine [Identitätsmatrix](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity), verwendet dann die `flipY()`-Methode, um eine neue Matrix zu erstellen, die anschließend auf das blaue Dreieck angewendet wird und es entlang der y-Achse invertiert. Das rote Dreieck bleibt unverändert.

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
