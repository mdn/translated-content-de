---
title: "SVGTextPositioningElement: dy-Eigenschaft"
short-title: dy
slug: Web/API/SVGTextPositioningElement/dy
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

{{APIRef("SVG")}}

Die **`dy`** schreibgeschützte Eigenschaft der [`SVGTextPositioningElement`](/de/docs/Web/API/SVGTextPositioningElement)-Schnittstelle beschreibt die y-Achsen-Koordinate des [`SVGTextElement`](/de/docs/Web/API/SVGTextElement) oder [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement) als [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList). Sie spiegelt die vertikale Verschiebung der einzelnen Text-Glyphen im Benutzerkoordinatensystem durch das {{SVGAttr("dy")}}-Attribut wider.

Der Attributwert ist eine Liste von [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Die numerischen Werte in der [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal) spiegeln die vertikalen Verschiebungen im Benutzerkoordinatensystem wider.

## Wert

Eine [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList).

## Beispiele

Angenommen, folgendes SVG ist gegeben:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20" dy="5">Hello</text>
  <text x="50" y="50" dy="10">World</text>
</svg>
```

Wir können die berechneten Werte der `dy`-Attribute abrufen:

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
