---
title: "SVGFEDiffuseLightingElement: surfaceScale-Eigenschaft"
short-title: surfaceScale
slug: Web/API/SVGFEDiffuseLightingElement/surfaceScale
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die schreibgeschützte **`surfaceScale`**-Eigenschaft der [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)-Schnittstelle spiegelt das {{SVGAttr("surfaceScale")}}-Attribut des angegebenen {{SVGElement("feDiffuseLighting")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `surfaceScale`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="diffuseLightingFilter">
      <feDiffuseLighting
        in="SourceGraphic"
        surfaceScale="2"
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

console.log(diffuseLighting.surfaceScale.baseVal); // Output: 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
