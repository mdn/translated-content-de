---
title: "SVGSVGElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGSVGElement/x
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die horizontale Koordinate der Position dieses SVGs als [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength) beschreibt. Wenn ein {{SVGElement("svg")}} innerhalb eines anderen `<svg>` genestet ist, ist die horizontale Koordinate eine Länge im Benutzerkoordinatensystem, die den angegebenen Abstand vom Ursprung des Benutzerkoordinatensystems entlang der x-Achse darstellt. Ihre Syntax entspricht der von [`<length>`](/de/docs/Web/SVG/Guides/Content_type#length).

Sie spiegelt das geometrische Attribut {{SVGElement("svg")}} des Elements {{SVGAttr("x")}} wider. Der Standardwert ist `0`. Das `x`-Attribut hat keine Wirkung auf äußerste `<svg>`-Elemente; nur auf genestete. Die CSS-Eigenschaft {{cssxref("x")}} hat Vorrang vor dem `x`-Attribut des `<svg>`-Elements, sodass der Wert das Erscheinungsbild des Elements möglicherweise nicht widerspiegelt.

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
