---
title: "SVGElement: Eigenschaft viewportElement"
short-title: viewportElement
slug: Web/API/SVGElement/viewportElement
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`viewportElement`** des Interfaces [`SVGElement`](/de/docs/Web/API/SVGElement) gibt das `SVGElement` zurück, das den aktuellen Viewport festgelegt hat. Dies ist häufig das nächstgelegene übergeordnete {{SVGElement("svg")}}-Element. Ist das betreffende Element das äußerste `<svg>`-Element, ist der Wert `null`.

## Wert

Ein [`SVGElement`](/de/docs/Web/API/SVGElement).

## Beispiele

### Das `viewportElement` abrufen

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

- [`SVGElement.ownerSVGElement`](/de/docs/Web/API/SVGElement/ownerSVGElement): Gibt das nächstgelegene übergeordnete `<svg>`-Element für das aktuelle SVG-Element zurück.
