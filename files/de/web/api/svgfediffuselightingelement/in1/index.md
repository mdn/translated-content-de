---
title: "SVGFEDiffuseLightingElement: in1-Eigenschaft"
short-title: in1
slug: Web/API/SVGFEDiffuseLightingElement/in1
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`in1`** schreibgeschützte Eigenschaft des [`SVGFEDiffuseLightingElement`](/de/docs/Web/API/SVGFEDiffuseLightingElement)-Interfaces spiegelt das {{SVGAttr("in")}}-Attribut des angegebenen {{SVGElement("feDiffuseLighting")}}-Elements wider.

## Wert

Ein [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)-Objekt.

## Beispiele

### Zugriff auf die `in`-Eigenschaft des `feDiffuseLighting`-Elements

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="diffuseLightingFilter">
      <feDiffuseLighting
        in="SourceGraphic"
        result="diffuseLightingResult"
        lighting-color="white"
        surfaceScale="1">
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

Wir können auf das `in`-Attribut des `feDiffuseLighting`-Elements zugreifen.

```js
const diffuseLighting = document.querySelector("feDiffuseLighting");

console.log(diffuseLighting.in1.baseVal); // Output: "SourceGraphic"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedString`](/de/docs/Web/API/SVGAnimatedString)
