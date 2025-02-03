---
title: "DOMMatrixReadOnly: flipY()-Methode"
short-title: flipY()
slug: Web/API/DOMMatrixReadOnly/flipY
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`flipY()`**-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erstellt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix ist, die um die y-Achse gespiegelt wird. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Syntax

```js-nolint
flipY()
```

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

### Spiegeln eines Dreiecks

In diesem Beispiel enthält das SVG zwei identische [Pfade](/de/docs/Web/SVG/Attribute/d) in Form eines Dreiecks; sie sind beide so gezeichnet, dass sie die gleiche Größe und Position haben. Die Viewbox hat einen negativen y-Wert, der uns Inhalt von beiden Seiten der y-Achse zeigt. Dies ermöglicht es, dass das gespiegelte Dreieck nach der Transformation im Ansichtsfenster bleibt.

#### HTML

```html
<svg height="200" width="100" viewBox="0 -100 100 200">
  <path fill="red" d="M 0 0 L 100 0 L 50 100 Z" />
  <path fill="blue" d="M 0 0 L 100 0 L 50 100 Z" id="flipped" />
</svg>
```

#### JavaScript

Das JavaScript erstellt eine [Identitätsmatrix](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity), verwendet dann die `flipY()`-Methode, um eine neue Matrix zu erzeugen, die dann auf das blaue Dreieck angewendet wird, um es über die y-Achse zu spiegeln. Das rote Dreieck bleibt unverändert.

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
