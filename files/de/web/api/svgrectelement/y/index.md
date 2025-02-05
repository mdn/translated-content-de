---
title: "SVGRectElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGRectElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`**-Eigenschaft (nur lesbar) des [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)-Interfaces beschreibt die vertikale Koordinate der Position eines SVG-Rechtecks als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die angegebene Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der y-Achse darstellt. Die Syntax entspricht der für [`<length>`](/de/docs/Web/SVG/Content_type#length).

Sie spiegelt den geometrischen Attributwert {{SVGElement("rect")}}-Elements {{SVGAttr("y")}} wider. Die CSS-Eigenschaft {{cssxref("y")}} hat Vorrang vor dem SVG-`y`-Attribut. Daher spiegelt der Wert möglicherweise nicht das Erscheinungsbild des Elements wider. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const rectangle = document.querySelector("rect");
const topPosition = rectangle.y;
console.log(topPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMRect.y`](/de/docs/Web/API/DOMRect/y)
- [`SVGRectElement.x`](/de/docs/Web/API/SVGRectElement/x)
