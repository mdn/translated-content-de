---
title: "SVGTextPositioningElement: x Eigenschaft"
short-title: x
slug: Web/API/SVGTextPositioningElement/x
l10n:
  sourceCommit: 3c83d88f02f33f4066224e9f624a17dd2a0b0d19
---

{{APIRef("SVG")}}

Die schreibgeschützte **`x`**-Eigenschaft der [`SVGTextPositioningElement`](/de/docs/Web/API/SVGTextPositioningElement)-Schnittstelle beschreibt die x-Achsen-Koordinate des [`SVGTextElement`](/de/docs/Web/API/SVGTextElement) oder [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement) als eine [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList). Sie spiegelt die horizontale Position des {{SVGAttr("x")}}-Attributs der einzelnen Textglyphen im Benutz Koordinatensystem wider.

Der Attributwert ist eine Liste von [`\<length>`](/de/docs/Web/SVG/Guides/Content_type#length), [`\<percentage>`](/de/docs/Web/SVG/Guides/Content_type#percentage) oder [`\<number>`](/de/docs/Web/SVG/Guides/Content_type#number). Die numerischen Werte in der [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal) spiegeln die x-Koordinaten im Benutz Koordinatensystem wider.

## Wert

Ein [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList).

## Beispiele

Beim folgenden SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20">Hello</text>
  <text x="50" y="50">World</text>
</svg>
```

können wir auf die berechneten Werte der `x`-Attribute zugreifen:

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
