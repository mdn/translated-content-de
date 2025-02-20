---
title: "SVGSVGElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGSVGElement/width
l10n:
  sourceCommit: be7ff0e5b105020be70e073d3ca362267ecf0845
---

{{APIRef("SVG")}}

Die **`width`** schreibgeschützte Eigenschaft der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Schnittstelle beschreibt die horizontale Größe des Elements als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt das {{SVGElement("svg")}}-Element-Attribut {{SVGAttr("width")}} wider, das möglicherweise nicht der gerenderten Breite des SVG entspricht.

Die CSS-Eigenschaft {{cssxref("width")}} hat Vorrang vor dem `width`-Attribut des `<svg>`-Elements, sodass der Wert möglicherweise nicht das Erscheinungsbild des Elements widerspiegelt. Wenn sowohl das Attribut {{SVGAttr("viewBox")}} als auch das Attribut `width` weggelassen werden, spiegelt die `width`-Eigenschaft die tatsächliche Breite wider.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const svg = document.querySelector("svg");
const inlineSize = svg.width;
console.dir(inlineSize.baseVal.value); // the `width` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGSVGElement.viewBox`](/de/docs/Web/API/SVGSVGElement/viewBox)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
