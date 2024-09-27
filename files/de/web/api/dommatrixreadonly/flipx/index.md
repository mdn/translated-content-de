---
title: "DOMMatrixReadOnly: flipX()-Methode"
short-title: flipX()
slug: Web/API/DOMMatrixReadOnly/flipX
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("Geometry Interfaces")}}

Die `flipX()`-Methode des [`DOMMatrixReadOnly`](/de/docs/Web/API/DOMMatrixReadOnly)-Interfaces erstellt eine neue Matrix, die das Ergebnis der ursprünglichen Matrix ist, gespiegelt an der x-Achse.

## Syntax

```js-nolint
  DOMMatrixReadOnly.flipX()
```

### Rückgabewert

Gibt eine [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) zurück, die eine neue Matrix enthält, welche das Ergebnis der ursprünglichen Matrix ist, gespiegelt an der x-Achse. Dies ist gleichbedeutend mit der Multiplikation der Matrix mit `DOMMatrix(-1, 0, 0, 1, 0, 0)`. Die ursprüngliche Matrix wird nicht verändert.

## Beispiele

### Invertierung eines Dreiecks

In diesem Beispiel enthält das SVG zwei Pfade in Form eines Dreiecks, beide an derselben Position gezeichnet. Beachten Sie, dass die x-Koordinate des viewBox-Attributs negativ ist, sodass wir Inhalte von beiden Seiten der x-Achse sehen.

Der JavaScript-Code erstellt zuerst eine Identitätsmatrix und verwendet dann die `flipX()`-Methode, um eine neue Matrix zu erstellen, die dann auf das blaue Dreieck angewendet wird, um es entlang der x-Achse zu invertieren. Das rote Dreieck bleibt an Ort und Stelle.

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
