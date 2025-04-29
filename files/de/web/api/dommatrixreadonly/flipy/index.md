---
title: "DOMMatrixReadOnly: flipY() Methode"
short-title: flipY()
slug: Web/API/DOMMatrixReadOnly/flipY
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`flipY()`** Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly) Schnittstelle erstellt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix ist, gespiegelt an der y-Achse. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(1, 0, 0, -1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Syntax

```js-nolint
flipY()
```

### Rückgabewert

Eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix).

## Beispiele

### Invertieren eines Dreiecks

In diesem Beispiel enthält das SVG zwei identische [Pfaden](/de/docs/Web/SVG/Reference/Attribute/d) in Form eines Dreiecks; sie sind beide so gezeichnet, dass sie die gleiche Größe und Position haben. Der Viewbox hat einen negativen y-Wert, der uns Inhalt von beiden Seiten der y-Achse zeigt. Dies ermöglicht es, das gespiegelte Dreieck im Ansichtsfenster zu haben, nachdem es transformiert wurde.

#### HTML

```html
<svg height="200" width="100" viewBox="0 -100 100 200">
  <path fill="red" d="M 0 0 L 100 0 L 50 100 Z" />
  <path fill="blue" d="M 0 0 L 100 0 L 50 100 Z" id="flipped" />
</svg>
```

#### JavaScript

Das JavaScript erstellt eine [Identitätsmatrix](/de/docs/Web/API/DOMMatrixReadOnly/isIdentity) und verwendet dann die `flipY()` Methode, um eine neue Matrix zu erzeugen, die dann auf das blaue Dreieck angewendet wird, wodurch es über die y-Achse invertiert wird. Das rote Dreieck bleibt unverändert.

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
