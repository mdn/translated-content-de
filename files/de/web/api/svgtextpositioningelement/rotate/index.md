---
title: "SVGTextPositioningElement: rotate Eigenschaft"
short-title: rotate
slug: Web/API/SVGTextPositioningElement/rotate
l10n:
  sourceCommit: 46b0ecd3b5280fbff659d138e3a7eaaf0fd12a24
---

{{APIRef("SVG")}}

Die **`rotate`** schreibgeschützte Eigenschaft der [`SVGTextPositioningElement`](/de/docs/Web/API/SVGTextPositioningElement)-Schnittstelle spiegelt die Rotation einzelner Textglyphen wider, wie sie durch das {{SVGAttr("rotate")}}-Attribut des angegebenen Elements festgelegt wird.

## Wert

Ein [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList)-Objekt.

## Beispiele

Für das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20" rotate="45">Hello</text>
  <text x="50" y="50" rotate="90">World</text>
</svg>
```

Können wir auf das `rotate`-Attribut zugreifen:

```js
const texts = document.querySelectorAll("text");

console.log(texts[0].rotate.baseVal); // output: 45
console.log(texts[1].rotate.baseVal); // output: 90
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList)
