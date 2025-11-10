---
title: "SVGFEDiffuseLightingElement: diffuseConstant-Eigenschaft"
short-title: diffuseConstant
slug: Web/API/SVGFEDiffuseLightingElement/diffuseConstant
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die schreibgeschützte **`diffuseConstant`**-Eigenschaft der [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)-Schnittstelle spiegelt das {{SVGAttr("diffuseConstant")}}-Attribut des angegebenen {{SVGElement("feDiffuseLighting")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `diffuseConstant`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="diffuseLightingFilter">
      <feDiffuseLighting
        in="SourceGraphic"
        diffuseConstant="1.5"
        lighting-color="white">
        <feDistantLight azimuth="45" elevation="55" />
      </feDiffuseLighting>
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="lightblue"
    filter="url(#diffuseLightingFilter)" />
</svg>
```

```js
const diffuseLighting = document.querySelector("feDiffuseLighting");

console.log(diffuseLighting.diffuseConstant.baseVal); // Output: 1.5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
