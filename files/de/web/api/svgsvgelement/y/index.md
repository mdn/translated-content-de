---
title: "SVGSVGElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGSVGElement/y
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die schreibgeschützte **`y`**-Eigenschaft der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Schnittstelle beschreibt die vertikale Koordinate der Position dieses SVGs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Wenn ein {{SVGElement("svg")}} in einem anderen `<svg>` verschachtelt ist, ist die vertikale Koordinate eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der y-Achse darstellt. Seine Syntax ist die gleiche wie die von [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length).

Sie spiegelt das geometrische Attribut {{SVGElement("svg")}}-Element's {{SVGAttr("y")}} wider. Der Standardwert ist `0`. Das `y`-Attribut hat keine Wirkung auf äußerste `<svg>`-Elemente; nur auf verschachtelte. Die CSS-Eigenschaft {{cssxref("y")}} hat Vorrang vor dem `y`-Attribut des `<svg>`-Elements, daher spiegelt der Wert möglicherweise nicht das Erscheinungsbild des Elements wider.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const svg = document.querySelector("svg");
const topPosition = svg.y;
console.dir(leftPosition.baseVal.value); // the `y` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGSVGElement.x`](/de/docs/Web/API/SVGSVGElement/x)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
