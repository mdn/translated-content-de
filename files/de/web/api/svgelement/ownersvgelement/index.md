---
title: "SVGElement: ownerSVGElement-Eigenschaft"
short-title: ownerSVGElement
slug: Web/API/SVGElement/ownerSVGElement
l10n:
  sourceCommit: 97dc5e941cca2f67ece5ff91d0c96674f210fef9
---

{{APIRef("SVG")}}

Die **`ownerSVGElement`**-Eigenschaft der [`SVGElement`](/de/docs/Web/API/SVGElement)-Schnittstelle spiegelt das nächstgelegene übergeordnete {{SVGElement("svg")}}-Element wider. `null`, wenn das gegebene Element das äußerste `<svg>`-Element ist.

## Wert

Ein [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement).

## Beispiele

### Überprüfung des übergeordneten `<svg>`-Elements

```html
<svg id="outerSvg" xmlns="http://www.w3.org/2000/svg">
  <g id="group1">
    <circle id="circle1" cx="50" cy="50" r="40" fill="blue" />
  </g>
</svg>
```

```js
const circle = document.getElementById("circle1");
const ownerSVG = circle.ownerSVGElement;

if (ownerSVG) {
  console.log(`The circle's owner <svg> has the ID: ${ownerSVG.id}`);
} else {
  console.log("This element is the outermost <svg>.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
