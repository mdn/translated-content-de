---
title: "DOMMatrixReadOnly: flipX() Methode"
short-title: flipX()
slug: Web/API/DOMMatrixReadOnly/flipX
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

Die **`flipX()`**-Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces erstellt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix ist, gespiegelt über die x-Achse. Dies ist gleichbedeutend mit der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Syntax

```js-nolint
flipX()
```

### Rückgabewert

Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück.

## Beispiele

### Ein Dreieck invertieren

In diesem Beispiel enthält das SVG zwei Pfade in Form eines Dreiecks, die beide an derselben Position gezeichnet sind. Beachten Sie, dass die x-Koordinate des viewBox-Attributs negativ ist und uns Inhalte von beiden Seiten der x-Achse zeigt.

#### HTML

```html
<svg width="100" height="100" viewBox="-50 0 100 100">
  <path fill="red" d="M 0 50 L 50 0 L 50 100 Z" />
  <path id="flipped" fill="blue" d="M 0 50 L 50 0 L 50 100 Z" />
</svg>
```

#### JavaScript

Der JavaScript-Code erstellt zunächst eine Identitätsmatrix und verwendet dann die `flipX()`-Methode, um eine neue Matrix zu erstellen, die dann auf das blaue Dreieck angewendet wird, um es über die x-Achse zu spiegeln. Das rote Dreieck bleibt an seinem Platz.

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
