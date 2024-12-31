---
title: "SVGElement: viewportElement-Eigenschaft"
short-title: viewportElement
slug: Web/API/SVGElement/viewportElement
l10n:
  sourceCommit: 97dc5e941cca2f67ece5ff91d0c96674f210fef9
---

{{APIRef("SVG")}}

Die **`viewportElement`**-Eigenschaft des [`SVGElement`](/de/docs/Web/API/SVGElement)-Interfaces repräsentiert das `SVGElement`, welches den aktuellen Ansichtsbereich (Viewport) festgelegt hat. Oft ist dies das nächstgelegene Vorfahren-{{SVGElement("svg")}}-Element. `null`, wenn das gegebene Element das äußerste `<svg>`-Element ist.

## Wert

Ein [`SVGElement`](/de/docs/Web/API/SVGElement).

## Beispiele

### Abrufen des `viewportElement`

```html
<svg id="outerSvg" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <svg id="innerSvg" x="10" y="10" width="100" height="100">
    <circle id="circle" cx="50" cy="50" r="40" fill="blue"></circle>
  </svg>
</svg>
```

```js
const circle = document.getElementById("circle");
const innerSvg = document.getElementById("innerSvg");
const outerSvg = document.getElementById("outerSvg");

console.log(circle.viewportElement); // Output: <svg id="innerSvg">...</svg>
console.log(innerSvg.viewportElement); // Output: <svg id="outerSvg">...</svg>
console.log(outerSvg.viewportElement); // Output: null
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGElement.ownerSVGElement`](/de/docs/Web/API/SVGElement/ownerSVGElement): Ruft das nächstgelegene Vorfahren-`<svg>`-Element für das aktuelle SVG-Element ab.
