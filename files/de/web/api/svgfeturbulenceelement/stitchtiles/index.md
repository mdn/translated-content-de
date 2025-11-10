---
title: "SVGFETurbulenceElement: stitchTiles-Eigenschaft"
short-title: stitchTiles
slug: Web/API/SVGFETurbulenceElement/stitchTiles
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`stitchTiles`** der Schnittstelle [`SVGFETurbulenceElement`](/de/docs/Web/API/SVGFETurbulenceElement) spiegelt das {{SVGAttr("stitchTiles")}} Attribut des angegebenen {{SVGElement("feTurbulence")}} Elements wider. Sie nimmt einen der `SVG_STITCHTYPE_*` Konstanten an, die in dieser Schnittstelle definiert sind.

## Wert

Ein [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration) Objekt.

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
    fill="lightblue"
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
