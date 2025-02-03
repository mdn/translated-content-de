---
title: "SVGTextPositioningElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/SVGTextPositioningElement/y
l10n:
  sourceCommit: 51343298b735a3767176c24b7f37cd2233e745b3
---

{{APIRef("SVG")}}

Die schreibgeschützte **`y`**-Eigenschaft der [`SVGTextPositioningElement`](/de/docs/Web/API/SVGTextPositioningElement)-Schnittstelle beschreibt die y-Achsen-Koordinate des [`SVGTextElement`](/de/docs/Web/API/SVGTextElement), [`SVGTSpanElement`](/de/docs/Web/API/SVGTSpanElement) oder [`SVGTRefElement`](/de/docs/Web/API/SVGTRefElement) als [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList). Sie spiegelt die vertikale Position des {{SVGAttr("y")}}-Attributs der einzelnen Textglyphen im Koordinatensystem des Benutzers wider.

Der Attributwert ist eine Liste von [`<length>`](/de/docs/Web/SVG/Content_type#length), [`<percentage>`](/de/docs/Web/SVG/Content_type#percentage) oder [`<number>`](/de/docs/Web/SVG/Content_type#number). Die numerischen Werte in der [`SVGAnimatedLengthList.baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal) spiegeln die y-Koordinaten im Koordinatensystem des Benutzers wider.

## Wert

Eine [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList).

## Beispiele

Bei folgendem SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20">Hello</text>
  <text x="50" y="50">World</text>
</svg>
```

können wir die berechneten Werte der `y`-Attribute abrufen:

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
