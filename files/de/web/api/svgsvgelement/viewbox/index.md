---
title: "SVGSVGElement: viewBox-Eigenschaft"
short-title: viewBox
slug: Web/API/SVGSVGElement/viewBox
l10n:
  sourceCommit: be7ff0e5b105020be70e073d3ca362267ecf0845
---

{{APIRef("SVG")}}

Die **`viewBox`**-Eigenschaft der [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGElement("svg")}}-Element-Attribut {{SVGAttr("viewBox")}} als [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect) widerspiegelt.

Diese Eigenschaft beschreibt das `<svg>`-Element-Attribut `<viewBox>`, das verwendet wird, um die x-Koordinate, y-Koordinate, Breite und Höhe eines `<svg>`-Elements zu definieren. Die Eigenschaften [`SVGAnimatedRect.baseVal`](/de/docs/Web/API/SVGAnimatedRect/baseVal) und [`SVGAnimatedRect.animVal`](/de/docs/Web/API/SVGAnimatedRect/animVal) sind beide [`SVGRect`](/de/docs/Web/API/SVGRect)-Objekte oder `null`, wenn `viewBox` nicht definiert ist. Die Komponenten dieser Objekte können von den Eigenschaften [`SVGSVGElement.x`](/de/docs/Web/API/SVGSVGElement/x), [`SVGSVGElement.y`](/de/docs/Web/API/SVGSVGElement/y), [`SVGSVGElement.width`](/de/docs/Web/API/SVGSVGElement/width) und [`SVGSVGElement.height`](/de/docs/Web/API/SVGSVGElement/height) abweichen, da die Attribute {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}} und {{SVGAttr("height")}} Vorrang vor dem `viewBox`-Attribut haben.

Für nicht-verschachtelte SVG-Elemente haben die Werte der CSS-Eigenschaften {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}} und {{cssxref("height")}} Vorrang vor irgendwelchen Element-Attributen. Daher spiegelt sich der durch das `viewBox` definierte Wert möglicherweise nicht im Erscheinungsbild des Elements wider.

## Wert

Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect).

## Beispiel

Angenommen, wir haben den folgenden `SVG`-Öffnungstag:

```html
<svg viewbox="-12 -18 200 300" x="5" y="5" height="400" width="600"></svg>
```

Wir können die `viewBox`-Werte abrufen, jedoch unterscheiden sie sich von den Eigenschaften [`x`](/de/docs/Web/API/SVGSVGElement/x), [`y`](/de/docs/Web/API/SVGSVGElement/y), [`width`](/de/docs/Web/API/SVGSVGElement/width) und [`height`](/de/docs/Web/API/SVGSVGElement/height):

```js
const svg = document.querySelector("svg");
const vBox = svg.viewBox;

// The SVGSVGElement viewBox property
console.dir(vBox); // SVGAnimatedRect { baseVal: SVGRect, animVal: SVGRect }
​console.log(vBox.baseVal.x); // -12
​console.log(vBox.baseVal.y); // -18
​console.log(vBox.baseVal.width); // 200
​console.log(vBox.baseVal.height); // 300

// Other SVGSVGElement properties
​console.log(svg.x); // 5
​console.log(svg.y); // 5
​console.log(svg.width); // 400
​console.log(svg.height); // 600
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedRect.baseVal`](/de/docs/Web/API/SVGAnimatedRect/baseVal)
- [`SVGAnimatedRect.animVal`](/de/docs/Web/API/SVGAnimatedRect/animVal)
- {{SVGAttr("preserveAspectRatio")}}
