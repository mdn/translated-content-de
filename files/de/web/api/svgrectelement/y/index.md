---
title: "SVGRectElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGRectElement/y
l10n:
  sourceCommit: 6d3af583b9bcc45f68bb65b273c44e8b7fc88e6e
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)-Schnittstelle beschreibt die vertikale Koordinate der Position eines SVG-Rechtecks als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Das `<coordinate>` ist eine Länge im Benutzerskoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerskoordinatensystems entlang der y-Achse darstellt. Seine Syntax entspricht derjenigen für [`<length>`](/de/docs/Web/SVG/Content_type#length).

Es spiegelt den im {{SVGElement("rect")}}-Element angegebenen geometrischen Attributwert {{SVGAttr("y")}} wider. Die CSS-Eigenschaft {{cssxref("y")}} hat Vorrang vor dem SVG-`y`-Attribut, sodass der Wert möglicherweise nicht das Erscheinungsbild des Elements widerspiegelt. Der Standardwert ist `0`.

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
