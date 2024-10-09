---
title: "DOMMatrixReadOnly: flipX()-Methode"
short-title: flipX()
slug: Web/API/DOMMatrixReadOnly/flipX
l10n:
  sourceCommit: 3652cfa9c036cf3ceebb1384bdc7edfd549251f3
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die `flipX()`-Methode der [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Schnittstelle erstellt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix ist, gespiegelt an der x-Achse.

## Syntax

```js-nolint
  DOMMatrixReadOnly.flipX()
```

### Rückgabewert

Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine neue Matrix enthält, die das Ergebnis der ursprünglichen Matrix ist, gespiegelt an der x-Achse, was dem Multiplizieren der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)` entspricht. Die ursprüngliche Matrix wird nicht verändert.

## Beispiele

### Invertieren eines Dreiecks

In diesem Beispiel enthält das SVG zwei Pfade in Form eines Dreiecks, die beide an die gleiche Position gezeichnet werden. Beachten Sie, dass die x-Koordinate des `viewBox`-Attributs negativ ist, was uns den Inhalt von beiden Seiten der x-Achse zeigt.

JavaScript erstellt zuerst eine Identitätsmatrix und verwendet dann die `flipX()`-Methode, um eine neue Matrix zu erstellen, die dann auf das blaue Dreieck angewendet wird, wodurch es entlang der x-Achse invertiert wird. Das rote Dreieck bleibt an Ort und Stelle.

#### HTML

```html
<svg width="100" height="100" viewBox="-50 0 100 100">
  <path fill="red" d="M 0 50 L 50 0 L 50 100 Z" />
  <path id="flipped" fill="blue" d="M 0 50 L 50 0 L 50 100 Z" />
</svg>
```

#### JavaScript

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
