---
title: SVGPoint
slug: Web/API/SVGPoint
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}{{Deprecated_Header}}

> **Warning:** `SVGPoint` ist veraltet.
> Verwenden Sie stattdessen {{domxref("DOMPoint")}} oder {{domxref("DOMPointReadOnly")}}.

Ein `SVGPoint` repräsentiert einen 2D- oder 3D-Punkt im SVG-Koordinatensystem.

## Syntax

```js-nolint
createSVGPoint()
```

### Wert

Der zurückgegebene Wert ist ein `SVGPoint`-Objekt.

## Beispiel

```js
// Erstellen Sie einen SVGPoint im Benutzerkoordinatensystem
let s = document.getElementById("SVG-ElementID").createSVGPoint();

// Setzen Sie dann die x- und y-Werte des zurückgegebenen SVGPoint-Objekts
// (welches die Variable `s` ist)
s.y = 10;
s.x = 10;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
