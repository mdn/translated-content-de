---
title: "SVGTextPositioningElement: rotate-Eigenschaft"
short-title: rotate
slug: Web/API/SVGTextPositioningElement/rotate
l10n:
  sourceCommit: 094fd56f02f2e1e8d4a3357af8b768ad8d3268b7
---

{{APIRef("SVG")}}

Die **`rotate`**-Eigenschaft der [`SVGTextPositioningElement`](/de/docs/Web/API/SVGTextPositioningElement)-Schnittstelle gibt die Rotation einzelner Textglyphen wieder, wie sie durch das {{SVGAttr("rotate")}}-Attribut des gegebenen Elements spezifiziert ist.

## Wert

Ein [`SVGAnimatedNumberList`](/de/docs/Web/API/SVGAnimatedNumberList)-Objekt.

## Beispiele

Angenommen, das folgende SVG:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <text x="10" y="20" rotate="45">Hello</text>
  <text x="50" y="50" rotate="90">World</text>
</svg>
```

Wir können auf das `rotate`-Attribut zugreifen:

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
