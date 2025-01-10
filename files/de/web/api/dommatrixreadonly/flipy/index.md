---
title: "DOMMatrixReadOnly: flipY()-Methode"
short-title: flipY()
slug: Web/API/DOMMatrixReadOnly/flipY
l10n:
  sourceCommit: 87b76f2d22cdbb29eda171b549fa501349ada7df
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`flipY()`**-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erstellt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix ist, gespiegelt entlang der y-Achse. Dies ist gleichbedeutend mit der Multiplikation der Matrix durch `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Syntax

```js-nolint
  DOMMatrixReadOnly.flipY()
```

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

### Spiegeln eines Dreiecks

In diesem Beispiel enthält das SVG zwei identische [Pfad](/de/docs/Web/SVG/Attribute/d)-Elemente in der Form eines Dreiecks; sie sind beide so gezeichnet, dass sie die gleiche Größe und Position haben. Der `viewBox` hat einen negativen y-Wert, der uns Inhalte von beiden Seiten der y-Achse zeigt. Dies ermöglicht es, dass das gespiegelte Dreieck nach der Transformation im Ansichtsbereich bleibt.

#### HTML

```html
<svg height="200" width="100" viewBox="0 -100 100 200">
  <path fill="red" d="M 0 0 L 100 0 L 50 100 Z" />
  <path fill="blue" d="M 0 0 L 100 0 L 50 100 Z" id="flipped" />
</svg>
```

#### JavaScript

Das JavaScript erstellt eine [Identitätsmatrix](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity) und verwendet dann die `flipY()`-Methode, um eine neue Matrix zu erstellen, die dann auf das blaue Dreieck angewendet wird, wobei es entlang der y-Achse gespiegelt wird. Das rote Dreieck bleibt unverändert.

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
