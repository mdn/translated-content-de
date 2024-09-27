---
title: SVGPoint
slug: Web/API/SVGPoint
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}{{Deprecated_Header}}

> **Warning:** `SVGPoint` ist veraltet.
> Verwenden Sie stattdessen [`DOMPoint`](/de/docs/Web/API/DOMPoint) oder [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly).

Ein `SVGPoint` repräsentiert einen 2D- oder 3D-Punkt im SVG-Koordinatensystem.

## Syntax

```js-nolint
createSVGPoint()
```

### Wert

Der zurückgegebene Wert ist ein `SVGPoint`-Objekt.

## Beispiel

```js
// Create an SVGPoint in the user coordinate system
let s = document.getElementById("SVG-ElementID").createSVGPoint();

// Then, set the x and y values of the returned SVGPoint object
// (which is the variable `s`)
s.y = 10;
s.x = 10;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
