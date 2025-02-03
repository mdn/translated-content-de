---
title: "SVGTextPositioningElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGTextPositioningElement/x
l10n:
  sourceCommit: 51343298b735a3767176c24b7f37cd2233e745b3
---

{{APIRef("SVG")}}

Die **`x`**-Eigenschaft des [`SVGTextPositioningElement`](/de/docs/Web/API/SVGTextPositioningElement)-Interfaces ist schreibgeschützt und beschreibt die x-Achsen-Koordinate des [`SVGTextElement`](/de/docs/Web/API/SVGTextElement), [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement) oder [`SVGTRefElement`](/de/docs/Web/API/SVGTRefElement) als eine [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList). Sie spiegelt den horizontalen Wert des Attributes {{SVGAttr("x")}} wider, das die horizontale Position der einzelnen Textglyphen im Benutzerskoordinatensystem darstellt.

Der Attributwert ist eine Liste von [`\<length>`](/de/docs/Web/SVG/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Content_type#number). Die numerischen Werte in der [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal) spiegeln die x-Koordinaten im Benutzerskoordinatensystem wider.

## Wert

Ein [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList).

## Beispiele

Angenommen, das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20">Hello</text>
  <text x="50" y="50">World</text>
</svg>
```

Wir können auf die berechneten Werte der `x`-Attribute zugreifen:

```js
const texts = document.querySelectorAll("text");

console.log(texts[0].x.baseVal[0].value); // output: 10
console.log(texts[1].x.baseVal[0].value); // output: 50
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGTextPositioningElement.y`](/de/docs/Web/API/SVGTextPositioningElement/y)
- [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal)
