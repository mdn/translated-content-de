---
title: "SVGFEDiffuseLightingElement: surfaceScale-Eigenschaft"
short-title: surfaceScale
slug: Web/API/SVGFEDiffuseLightingElement/surfaceScale
l10n:
  sourceCommit: e9ef767e76e5e04884293f12e393deb9455c87af
---

{{APIRef("SVG")}}

Die **`surfaceScale`** schreibgeschützte Eigenschaft der [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement) Schnittstelle spiegelt das {{SVGAttr("surfaceScale")}} Attribut des gegebenen {{SVGElement("feDiffuseLighting")}} Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekt.

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
    style="fill:lightblue;"
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
