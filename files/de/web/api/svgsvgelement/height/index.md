---
title: "SVGSVGElement: height-Eigenschaft"
short-title: height
slug: Web/API/SVGSVGElement/height
l10n:
  sourceCommit: be7ff0e5b105020be70e073d3ca362267ecf0845
---

{{APIRef("SVG")}}

Die **`height`** schreibgeschützte Eigenschaft der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Schnittstelle beschreibt die vertikale Größe des Elements als ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength). Sie spiegelt das {{SVGElement("svg")}}-Element-Attribut {{SVGAttr("height")}} wider, welches möglicherweise nicht der gerenderten Höhe des SVG entspricht.

Die CSS-Eigenschaft {{cssxref("height")}} hat Vorrang vor dem `height`-Attribut des `<svg>`-Elements, sodass der Wert möglicherweise nicht dem Erscheinungsbild des Elements entspricht. Wenn sowohl die Attribute {{SVGAttr("viewBox")}} als auch `height` weggelassen werden, spiegelt die Eigenschaft `height` die tatsächliche Höhe wider.

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength).

## Beispiel

```js
const svg = document.querySelector("svg");
const verticalSize = svg.height;
console.dir(verticalSize.baseVal.value); // the `height` value
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGSVGElement.viewBox`](/de/docs/Web/API/SVGSVGElement/viewBox)
- [`SVGSVGElement.width`](/de/docs/Web/API/SVGSVGElement/width)
- [`SVGAnimatedLength.baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal)
