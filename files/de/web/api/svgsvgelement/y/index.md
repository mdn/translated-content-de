---
title: "SVGSVGElement: y-Eigenschaft"
short-title: y
slug: Web/API/SVGSVGElement/y
l10n:
  sourceCommit: be7ff0e5b105020be70e073d3ca362267ecf0845
---

{{APIRef("SVG")}}

Die **`y`** schreibgeschützte Eigenschaft der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Schnittstelle beschreibt die vertikale Koordinate der Position des SVG-Elements als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Wenn ein {{SVGElement("svg")}} in einem anderen `<svg>` verschachtelt ist, ist die vertikale Koordinate eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der y-Achse darstellt. Die Syntax ist identisch mit der für [`<length>`](/de/docs/Web/SVG/Content_type#length).

Sie spiegelt das geometrische Attribut {{SVGAttr("y")}} des {{SVGElement("svg")}}-Elements wider. Der Standardwert ist `0`. Das `y`-Attribut hat keine Wirkung auf äußerste `<svg>`-Elemente, sondern nur auf verschachtelte. Die CSS-Eigenschaft {{cssxref("y")}} hat Vorrang vor dem `y`-Attribut des `<svg>`-Elements, sodass der Wert möglicherweise nicht das Erscheinungsbild des Elements widerspiegelt.

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
