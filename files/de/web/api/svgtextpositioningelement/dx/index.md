---
title: "SVGTextPositioningElement: dx-Eigenschaft"
short-title: dx
slug: Web/API/SVGTextPositioningElement/dx
l10n:
  sourceCommit: 51343298b735a3767176c24b7f37cd2233e745b3
---

{{APIRef("SVG")}}

Die **`dx`**-Eigenschaft der [`SVGTextPositioningElement`](/de/docs/Web/API/SVGTextPositioningElement)-Schnittstelle, die nur lesbar ist, beschreibt die x-Achsen-Koordinate des [`SVGTextElement`](/de/docs/Web/API/SVGTextElement), [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement) oder [`SVGTRefElement`](/de/docs/Web/API/SVGTRefElement) als [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList). Sie spiegelt die horizontale Verschiebung der einzelnen Textzeichen im Benutzerkoordinatensystem des {{SVGAttr("dx")}}-Attributs wider.

Der Attributwert ist eine Liste von [`<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number). Die numerischen Werte in [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal) spiegeln die horizontalen Verschiebungen im Benutzerkoordinatensystem wider.

## Wert

Eine [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList).

## Beispiele

Für das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20" dx="5">Hello</text>
  <text x="50" y="50" dx="10">World</text>
</svg>
```

Können wir auf die berechneten Werte der `dx`-Attribute zugreifen:

```js
const texts = document.querySelectorAll("text");

console.log(texts[0].dx.baseVal[0].value); // output: 5
console.log(texts[1].dx.baseVal[0].value); // output: 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTextPositioningElement.dy`](/de/docs/Web/API/SVGTextPositioningElement/dy)
- [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal)
