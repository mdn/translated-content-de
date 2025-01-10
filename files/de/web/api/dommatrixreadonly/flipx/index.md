---
title: "DOMMatrixReadOnly: flipX()-Methode"
short-title: flipX()
slug: Web/API/DOMMatrixReadOnly/flipX
l10n:
  sourceCommit: 87b76f2d22cdbb29eda171b549fa501349ada7df
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`flipX()`**-Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces erstellt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix, gespiegelt an der x-Achse, ist. Dies entspricht der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Syntax

```js-nolint
  DOMMatrixReadOnly.flipX()
```

### Rückgabewert

Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück.

## Beispiele

### Invertierung eines Dreiecks

In diesem Beispiel enthält das SVG zwei Pfade in Form eines Dreiecks, die beide an derselben Position gezeichnet sind. Beachten Sie, dass die x-Koordinate des `viewBox`-Attributs negativ ist, was uns Inhalte von beiden Seiten der x-Achse zeigt.

#### HTML

```html
<svg width="100" height="100" viewBox="-50 0 100 100">
  <path fill="red" d="M 0 50 L 50 0 L 50 100 Z" />
  <path id="flipped" fill="blue" d="M 0 50 L 50 0 L 50 100 Z" />
</svg>
```

#### JavaScript

Das JavaScript erstellt zuerst eine Identitätsmatrix, verwendet dann die `flipX()`-Methode, um eine neue Matrix zu erstellen, die anschließend auf das blaue Dreieck angewendet wird und es über die x-Achse invertiert. Das rote Dreieck bleibt unverändert.

```js
const flipped = document.getElementById("flipped");
const matrix = new DOMMatrixReadOnly();
const flippedMatrix = matrix.flipX();
flipped.setAttribute("transform", flippedMatrix.toString());
```

#### Ergebnis

{{EmbedLiveSample('Inverting a triangle')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMMatrixReadOnly.flipY()`](/de/docs/Web/API/DOMMatrixReadOnly/flipY)
