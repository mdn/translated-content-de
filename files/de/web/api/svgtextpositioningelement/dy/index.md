---
title: "SVGTextPositioningElement: dy-Eigenschaft"
short-title: dy
slug: Web/API/SVGTextPositioningElement/dy
l10n:
  sourceCommit: 51343298b735a3767176c24b7f37cd2233e745b3
---

{{APIRef("SVG")}}

Die **`dy`**-Eigenschaft des [`SVGTextPositioningElement`](/de/docs/Web/API/SVGTextPositioningElement)-Interfaces, die nur gelesen werden kann, beschreibt die y-Achsen-Koordinate des [`SVGTextElement`](/de/docs/Web/API/SVGTextElement), [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement) oder [`SVGTRefElement`](/de/docs/Web/API/SVGTRefElement) als ein [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList). Es spiegelt die vertikale Verschiebung einzelner Textglyphen im Benutzerräumlichen Koordinatensystem wider, wie sie durch das {{SVGAttr("dy")}}-Attribut angegeben wird.

Der Attributwert ist eine Liste von [`\<length>`](/de/docs/Web/SVG/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Content_type#number). Die numerischen Werte in der [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal) spiegeln die vertikale Verschiebung im Benutzerräumlichen Koordinatensystem wider.

## Wert

Eine [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList).

## Beispiele

Angenommen, wir haben folgendes SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20" dy="5">Hello</text>
  <text x="50" y="50" dy="10">World</text>
</svg>
```

Wir können auf die berechneten Werte der `dy`-Attribute zugreifen:

```js
const texts = document.querySelectorAll("text");

console.log(texts[0].dy.baseVal[0].value); // output: 5
console.log(texts[1].dy.baseVal[0].value); // output: 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTextPositioningElement.dx`](/de/docs/Web/API/SVGTextPositioningElement/dx)
- [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal)
