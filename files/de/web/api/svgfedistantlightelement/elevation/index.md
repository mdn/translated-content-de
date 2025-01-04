---
title: "SVGFEDistantLightElement: elevation-Eigenschaft"
short-title: elevation
slug: Web/API/SVGFEDistantLightElement/elevation
l10n:
  sourceCommit: 44ae1cfec900ae9d18a5e305c26b06b7912bab20
---

{{APIRef("SVG")}}

Die **`elevation`**-Eigenschaft der [`SVGFEDistantLightElement`](/de/docs/Web/API/SVGFEDistantLightElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("elevation")}}-Attribut des gegebenen {{SVGElement("feDistantLight")}}-Elements wiedergibt.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf die `elevation`-Eigenschaft

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
    style="fill:yellow;"
    filter="url(#lightingFilter)" />
</svg>
```

```js
const distantLight = document.querySelector("feDistantLight");

console.log(distantLight.elevation.baseVal); // Output: 30
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
