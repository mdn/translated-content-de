---
title: "SVGRectElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGRectElement/x
l10n:
  sourceCommit: 6d3af583b9bcc45f68bb65b273c44e8b7fc88e6e
---

{{APIRef("SVG")}}

Die schreibgeschützte **`x`**-Eigenschaft der [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)-Schnittstelle beschreibt die horizontale Koordinate der Position eines SVG-Rechtecks als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Das `<coordinate>` ist eine Länge im Benutzerkoordinatensystem, die die gegebene Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Seine Syntax ist dieselbe wie die für [`<length>`](/de/docs/Web/SVG/Content_type#length).

Sie spiegelt den geometrischen Attributwert {{SVGElement("rect")}} des {{SVGAttr("x")}}-Elements wider. Die CSS-Eigenschaft {{cssxref("x")}} hat Vorrang vor dem SVG-`x`-geometrischen Attribut, daher spiegelt der Wert möglicherweise nicht das Erscheinungsbild des Elements wider. Der Standardwert ist `0`.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const rectangle = document.querySelector("rect");
const leftPosition = rectangle.x;
console.log(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMRect.x`](/de/docs/Web/API/DOMRect/x)
- [`SVGRectElement.y`](/de/docs/Web/API/SVGRectElement/y)
