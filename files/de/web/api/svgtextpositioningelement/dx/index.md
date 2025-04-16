---
title: "SVGTextPositioningElement: dx-Eigenschaft"
short-title: dx
slug: Web/API/SVGTextPositioningElement/dx
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

{{APIRef("SVG")}}

Die **`dx`**-Eigenschaft der Oberfläche [`SVGTextPositioningElement`](/de/docs/Web/API/SVGTextPositioningElement) beschreibt die x-Achsen-Koordinate des [`SVGTextElement`](/de/docs/Web/API/SVGTextElement) oder [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement) als eine [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList). Sie spiegelt die horizontale Verschiebung der einzelnen Textglyphen im Benutzerkoordinatensystem wieder, die durch das {{SVGAttr("dx")}}-Attribut festgelegt wird.

Der Attributwert ist eine Liste von [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length)-, [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage)- oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number)-Werten. Die numerischen Werte in der [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal) spiegeln die horizontalen Verschiebungen im Benutzerkoordinatensystem wider.

## Wert

Eine [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList).

## Beispiele

Gegeben das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20" dx="5">Hello</text>
  <text x="50" y="50" dx="10">World</text>
</svg>
```

Wir können auf die berechneten Werte der `dx`-Attribute zugreifen:

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
