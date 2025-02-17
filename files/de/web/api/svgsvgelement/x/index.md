---
title: "SVGSVGElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGSVGElement/x
l10n:
  sourceCommit: be7ff0e5b105020be70e073d3ca362267ecf0845
---

{{APIRef("SVG")}}

Die **`x`**-schreibgeschützte Eigenschaft der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Schnittstelle beschreibt die horizontale Koordinate der Position dieses SVG als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Wenn ein {{SVGElement("svg")}} in ein anderes `<svg>` verschachtelt ist, ist die horizontale Koordinate eine Länge im Benutzerkoordinatensystem, die die angegebene Entfernung vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Die Syntax entspricht dabei der für [`<length>`](/de/docs/Web/SVG/Content_type#length).

Sie entspricht dem geometrischen Attribut {{SVGAttr("x")}} des {{SVGElement("svg")}}-Elements. Der Standardwert ist `0`. Das `x`-Attribut hat keine Auswirkung auf äußere `<svg>`-Elemente, nur auf verschachtelte. Die CSS-Eigenschaft {{cssxref("x")}} hat Vorrang vor dem `x`-Attribut des `<svg>`-Elements, daher könnte der Wert das Erscheinungsbild des Elements nicht widerspiegeln.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const svg = document.querySelector("svg");
const leftPosition = svg.x;
console.dir(leftPosition.baseVal.value); // the `x` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGSVGElement.y`](/de/docs/Web/API/SVGSVGElement/y)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
