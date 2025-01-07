---
title: "SVGFEDiffuseLightingElement: diffuseConstant-Eigenschaft"
short-title: diffuseConstant
slug: Web/API/SVGFEDiffuseLightingElement/diffuseConstant
l10n:
  sourceCommit: e9ef767e76e5e04884293f12e393deb9455c87af
---

{{APIRef("SVG")}}

Die **`diffuseConstant`**-Eigenschaft, die nur gelesen werden kann, des [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)-Interfaces spiegelt das {{SVGAttr("diffuseConstant")}}-Attribut des angegebenen {{SVGElement("feDiffuseLighting")}}-Elements wider.

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
    style="fill:lightblue;"
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
