---
title: "SVGFEDistantLightElement: azimuth-Eigenschaft"
short-title: azimuth
slug: Web/API/SVGFEDistantLightElement/azimuth
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`azimuth`**-Eigenschaft der [`SVGFEDistantLightElement`](/de/docs/Web/API/SVGFEDistantLightElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("azimuth")}}-Attribut des gegebenen {{SVGElement("feDistantLight")}}-Elements widerspiegelt.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `azimuth`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="lightingFilter">
      <feDistantLight azimuth="45" elevation="30" />
      <feDiffuseLighting result="light" lighting-color="white" surfaceScale="2">
        <feDistantLight azimuth="45" elevation="30" />
      </feDiffuseLighting>
    </filter>
  </defs>
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    fill="yellow"
    filter="url(#lightingFilter)" />
</svg>
```

```js
const distantLight = document.querySelector("feDistantLight");

console.log(distantLight.azimuth.baseVal); // Output: 45
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
