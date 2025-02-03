---
title: "SVGFETurbulenceElement: stitchTiles-Eigenschaft"
short-title: stitchTiles
slug: Web/API/SVGFETurbulenceElement/stitchTiles
l10n:
  sourceCommit: 483599780f3f906327c6082860e8c26836258990
---

{{APIRef("SVG")}}

Die schreibgeschützte **`stitchTiles`**-Eigenschaft der [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement)-Schnittstelle spiegelt das {{SVGAttr("stitchTiles")}}-Attribut des gegebenen {{SVGElement("feTurbulence")}}-Elements wider. Sie nimmt einen der auf dieser Schnittstelle definierten `SVG_STITCHTYPE_*`-Konstanten an.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Objekt.

## Beispiele

### Zugriff auf die `stitchTiles`-Eigenschaft

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="turbulenceFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.05"
        numOctaves="3"
        stitchTiles="stitch" />
    </filter>
  </defs>

  <rect
    x="20"
    y="20"
    width="160"
    height="160"
    style="fill:lightblue;"
    filter="url(#turbulenceFilter)" />
</svg>
```

```js
// Select the feTurbulence element
const turbulenceElement = document.querySelector("feTurbulence");

// Access the stitchTiles property
console.log(turbulenceElement.stitchTiles.baseVal); // Output: 1 (SVG_STITCHTYPE_STITCH)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
