---
title: "SVGElement: ownerSVGElement-Eigenschaft"
short-title: ownerSVGElement
slug: Web/API/SVGElement/ownerSVGElement
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`ownerSVGElement`** der Schnittstelle [`SVGElement`](/de/docs/Web/API/SVGElement) verweist auf das nächstgelegene übergeordnete {{SVGElement("svg")}}-Element. Wenn das betreffende Element das äußerste `<svg>`-Element ist, hat die Eigenschaft den Wert `null`.

## Wert

Ein [`SVGSVGElement`](/de/docs/Web/API/SVGSVGElement).

## Beispiele

### Das zugehörige `<svg>`-Element prüfen

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
