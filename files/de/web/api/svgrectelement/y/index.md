---
title: "SVGRectElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGRectElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGRectElement`](/de/docs/Web/API/SVGRectElement)-Schnittstelle beschreibt die vertikale Koordinate der Position eines SVG-Rechtecks als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Das `<coordinate>` ist eine Länge im Benutzerskoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerskoordinatensystems entlang der y-Achse darstellt. Seine Syntax ist dieselbe wie die für [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length).

Sie spiegelt den geometrischen Attributwert {{SVGElement("rect")}} des Elements {{SVGAttr("y")}} wider. Die CSS-Eigenschaft {{cssxref("y")}} hat Vorrang vor dem SVG-Attribut `y`, sodass der Wert möglicherweise nicht das Erscheinungsbild des Elements widerspiegelt. Der Standardwert ist `0`.

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
