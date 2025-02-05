---
title: "SVGTextPositioningElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGTextPositioningElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("SVG")}}

Die **`y`**-schreibgeschützte Eigenschaft des [`SVGTextPositioningElement`](/de/docs/Web/API/SVGTextPositioningElement)-Interfaces beschreibt die y-Achsen-Koordinate des [`SVGTextElement`](/de/docs/Web/API/SVGTextElement), [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement) oder [`SVGTRefElement`](/de/docs/Web/API/SVGTRefElement) als eine [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList). Sie spiegelt das {{SVGAttr("y")}}-Attribut wider, welches die vertikale Position der einzelnen Textglyphen im Benutzerkoordinatensystem angibt.

Der Attributwert ist eine Liste aus [`<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number). Die numerischen Werte in der [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal) spiegeln die y-Koordinaten im Benutzerkoordinatensystem wider.

## Wert

Eine [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList).

## Beispiele

Gegeben sei das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20">Hello</text>
  <text x="50" y="50">World</text>
</svg>
```

Wir können auf die berechneten Werte der `y`-Attribute zugreifen:

```js
const texts = document.querySelectorAll("text");

console.log(texts[0].y.baseVal[0].value); // output: 20
console.log(texts[1].y.baseVal[0].value); // output: 50
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTextPositioningElement.x`](/de/docs/Web/API/SVGTextPositioningElement/x)
- [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal)
